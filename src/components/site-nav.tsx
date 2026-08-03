"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-blur-[14px] [animation:rise-in_0.6s_var(--ease-out)_both]">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-[11px] font-mono text-xs font-medium leading-none tracking-[0.1em]"
        >
          <Logo />
          <span className="hidden sm:inline">
            {site.name.toUpperCase()}
          </span>
        </Link>

        <nav className="flex items-center gap-1.5 font-mono text-xs leading-none">
          <div className="hidden items-center gap-1.5 md:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-ctl px-3 py-2.5 text-muted transition-all duration-200 hover:bg-soft hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#contact"
            className="ml-1.5 rounded-ctl bg-accent px-3 py-2.5 font-medium tracking-[0.04em] text-ink transition-all duration-250 hover:brightness-110"
          >
            HIRE ME
          </Link>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex size-8 shrink-0 items-center justify-center rounded-ctl border border-line text-muted transition-colors hover:border-fg hover:text-fg md:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {open && (
        <div className="border-t border-line md:hidden">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-2 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3.5 font-mono text-xs tracking-[0.1em] text-muted transition-colors last:border-0 hover:text-fg"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
