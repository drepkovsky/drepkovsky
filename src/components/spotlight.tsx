"use client";

import { useEffect, useRef } from "react";

/**
 * Faint accent glow that trails the cursor. Pointer-only: touch devices never
 * arm the listener, and reduced-motion readers never see it.
 */
export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || still) return;

    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        el.style.opacity = "1";
        el.style.transform = `translate(${event.clientX - 280}px, ${event.clientY - 280}px)`;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[560px] w-[560px] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 8%, transparent), transparent 68%)",
      }}
    />
  );
}
