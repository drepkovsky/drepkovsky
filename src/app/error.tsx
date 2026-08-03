"use client";

import { useEffect } from "react";
import { site } from "@/content/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col gap-6 px-5 py-24 sm:px-8 sm:py-32">
      <div className="eyebrow">Error</div>
      <h1 className="text-[clamp(34px,6vw,64px)] font-semibold leading-[1.03]">
        Something broke on my side.
      </h1>
      <p className="max-w-[52ch] text-base leading-[1.65] text-muted text-pretty">
        Not your doing. Try again, and if it keeps happening I would genuinely
        like to know — a portfolio that throws errors is a bad advert for
        someone who builds backends.
      </p>
      <div className="flex flex-wrap items-center gap-3 pt-2">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-3 rounded-ctl bg-accent px-5 py-4 font-mono text-xs font-medium tracking-[0.06em] text-ink uppercase transition-all duration-300 hover:brightness-110"
        >
          Try again <span>→</span>
        </button>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-3 rounded-ctl border border-line px-5 py-4 font-mono text-xs tracking-[0.06em] text-muted uppercase transition-all duration-300 hover:border-fg hover:text-fg"
        >
          Tell me <span>↗</span>
        </a>
      </div>
      {error.digest && (
        <p className="pt-2 font-mono text-[11px] text-muted">
          Reference: {error.digest}
        </p>
      )}
    </main>
  );
}
