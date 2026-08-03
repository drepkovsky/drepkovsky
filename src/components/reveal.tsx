"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

/**
 * Fades a block up as it enters the viewport.
 *
 * The element is only armed (hidden) from JS, after the observer exists. If
 * this component never hydrates, the CSS leaves it visible and the page still
 * reads — the mockup's version could strand content at opacity 0.
 */
export function Reveal({
  children,
  as: Tag = "div",
  className = "",
  id,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Already on screen at mount: show it without the transition, so the
    // above-the-fold content is never animated in late.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
      el.dataset.revealShown = "true";
      return;
    }

    el.dataset.revealArmed = "true";

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset.revealShown = "true";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} id={id} data-reveal className={className}>
      {children}
    </Tag>
  );
}
