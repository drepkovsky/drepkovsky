"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  // The inline script in layout.tsx already applied the stored theme before
  // paint; this only syncs React's copy of it after hydration.
  useEffect(() => {
    setLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  function toggle() {
    const next = !light;
    setLight(next);
    const root = document.documentElement;
    if (next) root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      // Private mode: the toggle still works for this page view.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      className="group flex size-8 shrink-0 items-center justify-center rounded-ctl border border-line text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
    >
      {/*
        An SVG rather than the ◐ glyph: the glyph's ink sits off the centre of
        its em box, so rotating it made it wobble across the button instead of
        spinning in place. This circle is centred on its own viewBox.
      */}
      <svg
        viewBox="0 0 16 16"
        className="size-3.5 transition-transform duration-500 ease-out group-hover:rotate-180"
        aria-hidden
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M8 1a7 7 0 0 1 0 14z" fill="currentColor" />
      </svg>
    </button>
  );
}
