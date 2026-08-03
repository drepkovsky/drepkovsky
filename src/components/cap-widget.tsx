"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const BASE =
  process.env.NEXT_PUBLIC_CAP_BASE_URL ?? "https://cap.eu-infra.questpie.com";
const SITE_KEY = process.env.NEXT_PUBLIC_CAP_SITE_KEY;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "cap-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & { "data-cap-api-endpoint"?: string };
    }
  }
}

/**
 * Cap: a proof-of-work check rather than a puzzle. The visitor solves nothing
 * and clicks nothing extra; their browser does a few hundred milliseconds of
 * hashing and hands back a token the server can verify.
 *
 * Renders nothing when no site key is configured, and the form still submits —
 * the honeypot and the rate limit carry it on their own.
 */
export function CapWidget({ onToken }: { onToken: (token: string) => void }) {
  const ref = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onSolve = (event: Event) => {
      const token = (event as CustomEvent<{ token?: string }>).detail?.token;
      if (token) onToken(token);
    };
    // A token expires; clear ours when the widget says so, so a stale one is
    // never submitted.
    const onReset = () => onToken("");

    el.addEventListener("solve", onSolve);
    el.addEventListener("expire", onReset);
    el.addEventListener("error", onReset);
    return () => {
      el.removeEventListener("solve", onSolve);
      el.removeEventListener("expire", onReset);
      el.removeEventListener("error", onReset);
    };
  }, [ready, onToken]);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script
        src={`${BASE}/assets/widget.js`}
        strategy="afterInteractive"
        onReady={() => setReady(true)}
      />
      <cap-widget
        ref={ref}
        data-cap-api-endpoint={`${BASE}/${SITE_KEY}/`}
        className="[--cap-background:transparent] [--cap-border-color:var(--color-line)] [--cap-border-radius:2px] [--cap-color:var(--color-muted)] [--cap-font:var(--font-mono)] [--cap-spinner-color:var(--color-accent)] [--cap-widget-height:44px]"
      />
    </>
  );
}
