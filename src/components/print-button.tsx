"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print mt-5 rounded-ctl border border-line px-3.5 py-2.5 font-mono text-[11px] tracking-[0.1em] text-muted uppercase transition-colors hover:border-fg hover:text-fg"
    >
      Print / save as PDF
    </button>
  );
}
