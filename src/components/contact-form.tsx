"use client";

import { useState } from "react";

type State = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-ctl border border-line bg-bg px-3.5 py-3 font-sans text-[15px] text-fg outline-none transition-colors placeholder:text-muted focus:border-accent";

export function ContactForm({ email }: { email: string }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const data = Object.fromEntries(new FormData(event.currentTarget));
    setState("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setState("sent");
        return;
      }

      const { error: code } = await response.json().catch(() => ({}));
      setState("error");
      setError(
        code === "rate_limited"
          ? "That is a few in a row. Give it a minute."
          : code === "invalid"
            ? "Check the address, and give me a sentence or two to go on."
            : `Something broke on my side. Mail me at ${email} instead.`,
      );
    } catch {
      setState("error");
      setError(`No connection. Mail me at ${email} instead.`);
    }
  }

  if (state === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col gap-2.5 surface rounded-surface border border-[color-mix(in_oklab,var(--color-accent)_45%,transparent)] bg-soft p-6"
      >
        <div className="font-mono text-[10px] tracking-[0.16em] text-accent uppercase">
          Sent
        </div>
        <p className="text-[15px] leading-[1.6] text-muted text-pretty">
          It is in my inbox. You will hear back within two working days — if you
          do not, mail me directly at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            Name
          </span>
          <input
            name="name"
            required
            maxLength={120}
            placeholder="Jana Nováková"
            className={field}
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="jana@firma.sk"
            className={field}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
          What you want to build
        </span>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="We have a React Native app and nothing behind it. Launch is planned for March and we have no backend developer."
          className={`${field} resize-y`}
        />
      </label>

      {/* Honeypot. Hidden from people and from screen readers; bots fill it in. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex items-center gap-3 rounded-ctl bg-accent px-5 py-3.5 font-mono text-xs font-medium tracking-[0.06em] text-ink uppercase transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending…" : "Send"}
          <span>→</span>
        </button>
        {error && (
          <p role="alert" className="text-[13px] leading-[1.5] text-accent">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
