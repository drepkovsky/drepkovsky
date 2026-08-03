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
      className="flex size-8 shrink-0 items-center justify-center rounded-ctl border border-line text-[13px] leading-none text-muted transition-all duration-300 hover:rotate-180 hover:border-accent hover:text-accent"
    >
      ◐
    </button>
  );
}
