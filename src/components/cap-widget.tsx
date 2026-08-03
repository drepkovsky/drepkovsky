"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

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

export type CapHandle = {
  /** Resolves with a token, or null when Cap is not configured or fails. */
  solve: () => Promise<string | null>;
};

/**
 * Cap, run invisibly.
 *
 * The widget ships a "You're a human" checkbox, but the check is proof of work,
 * not a judgement — nothing about it needs the visitor's attention or consent.
 * So the element is mounted hidden and solved on submit instead: the browser
 * hashes for a moment while the request is already in flight.
 *
 * Returns null rather than throwing when unconfigured, so the form still sends
 * on the honeypot and rate limit alone.
 */
export function useCapWidget() {
  const ref = useRef<HTMLElement>(null);

  const solve = useCallback(async (): Promise<string | null> => {
    const el = ref.current as (HTMLElement & { solve?: () => void }) | null;
    if (!SITE_KEY || !el || typeof el.solve !== "function") return null;

    return new Promise((resolve) => {
      // A challenge that never comes back must not hold the form hostage.
      const timer = setTimeout(() => finish(null), 15000);

      function finish(token: string | null) {
        clearTimeout(timer);
        el?.removeEventListener("solve", onSolve);
        el?.removeEventListener("error", onError);
        resolve(token);
      }
      function onSolve(event: Event) {
        finish((event as CustomEvent<{ token?: string }>).detail?.token ?? null);
      }
      function onError() {
        finish(null);
      }

      el.addEventListener("solve", onSolve, { once: true });
      el.addEventListener("error", onError, { once: true });
      el.solve?.();
    });
  }, []);

  return { ref, solve };
}

export function CapMount({ elementRef }: { elementRef: React.Ref<HTMLElement> }) {
  useEffect(() => {
    // Nothing to do; the element self-registers once widget.js defines it.
  }, []);

  if (!SITE_KEY) return null;

  return (
    <>
      <Script src={`${BASE}/assets/widget.js`} strategy="afterInteractive" />
      {/* Present in the DOM so it can be solved, never shown. */}
      <cap-widget
        ref={elementRef}
        data-cap-api-endpoint={`${BASE}/${SITE_KEY}/`}
        aria-hidden
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
        }}
      />
    </>
  );
}
