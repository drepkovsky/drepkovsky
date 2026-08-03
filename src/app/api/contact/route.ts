import { NextResponse } from "next/server";
import { site } from "@/content/site";

const CAP_BASE =
  process.env.NEXT_PUBLIC_CAP_BASE_URL ?? "https://cap.eu-infra.questpie.com";

/**
 * Cap proof-of-work check. Only enforced when both halves are configured, so
 * a missing key degrades to honeypot plus rate limit rather than locking
 * everyone out of the form.
 */
async function capPassed(token: unknown) {
  const secret = process.env.CAP_SECRET;
  const siteKey = process.env.NEXT_PUBLIC_CAP_SITE_KEY;
  if (!secret || !siteKey) return true;
  if (typeof token !== "string" || !token) return false;

  try {
    const response = await fetch(`${CAP_BASE}/${siteKey}/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret, response: token }),
    });
    if (!response.ok) return false;
    const body = (await response.json()) as { success?: boolean };
    return body.success === true;
  } catch (error) {
    console.error("contact: cap unreachable", error);
    return false;
  }
}

const PLUNK_BASE =
  process.env.PLUNK_API_BASE_URL ?? "https://api.plunk.eu-infra.questpie.com";

/** Enough to stop a bored script; a real flood is the CDN's problem, not this route's. */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);

  // The map would otherwise grow for the life of the process.
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const LIMITS = { name: 120, email: 200, message: 5000 };

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

/** Deliberately loose. Rejecting odd but valid addresses costs more than it saves. */
function looksLikeEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a real person never sees this field, so anything in it is a bot.
  // Answer 200 so the bot has no signal to tune against.
  if (clean(payload.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const message = clean(payload.message, LIMITS.message);

  if (!name || !looksLikeEmail(email) || message.length < 10) {
    return NextResponse.json({ error: "invalid" }, { status: 422 });
  }

  if (!(await capPassed(payload.capToken))) {
    return NextResponse.json({ error: "captcha_failed" }, { status: 403 });
  }

  // Counted only once a request is real, so someone who mistypes their address
  // twice does not burn the budget and get locked out of the form.
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  // Checked after validation so a misconfigured key cannot mask a bad request,
  // and so the honeypot answers 200 whether or not mail is wired up.
  const key = process.env.PLUNK_API_KEY;
  if (!key) {
    console.error("contact: PLUNK_API_KEY is not set");
    return NextResponse.json({ error: "not_configured" }, { status: 500 });
  }

  const body = [
    `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>`,
    `<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
  ].join("");

  try {
    const response = await fetch(`${PLUNK_BASE}/v1/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: site.email,
        subject: `drepkovsky.com — ${name}`,
        body,
        subscribed: false,
        from: "web@questpie.com",
        name: "drepkovsky.com",
        // So replying in the mail client goes straight back to them.
        reply_to: email,
      }),
    });

    if (!response.ok) {
      console.error("contact: plunk returned", response.status);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }
  } catch (error) {
    console.error("contact: plunk unreachable", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
