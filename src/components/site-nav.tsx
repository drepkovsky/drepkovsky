"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { navigation, type NavChild } from "@/content/nav";
import { site } from "@/content/site";
import { Logo } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Escape closes whatever is open, and a click outside closes the dropdown.
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpen(null);
      setMobileOpen(false);
    }
    function onPointer(event: PointerEvent) {
      if (!navRef.current?.contains(event.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[color-mix(in_oklab,var(--color-bg)_88%,transparent)] backdrop-blur-[14px] [animation:rise-in_0.6s_var(--ease-out)_both]">
      <div className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-[11px] font-mono text-xs font-medium leading-none tracking-[0.1em]"
        >
          <Logo />
          <span className="hidden sm:inline">{site.name.toUpperCase()}</span>
        </Link>

        <nav
          ref={navRef}
          className="flex items-center gap-1.5 font-mono text-xs leading-none"
        >
          <div
            className="hidden items-center gap-1.5 md:flex"
            onMouseLeave={() => setOpen(null)}
          >
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
              >
                <Link
                  href={item.href}
                  aria-expanded={open === item.label}
                  aria-haspopup={item.children ? "true" : undefined}
                  onFocus={() => setOpen(item.label)}
                  className={`flex items-center gap-1.5 rounded-ctl px-3 py-2.5 transition-all duration-200 hover:bg-soft hover:text-fg ${
                    open === item.label ? "bg-soft text-fg" : "text-muted"
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <span
                      aria-hidden
                      className={`text-[8px] transition-transform duration-200 ${
                        open === item.label ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  )}
                </Link>

                {item.children && open === item.label && (
                  <div className="absolute left-0 top-full w-[264px] pt-2">
                    <ul className="surface flex list-none flex-col rounded-surface border border-line bg-[color-mix(in_oklab,var(--color-bg)_92%,transparent)] p-1.5 backdrop-blur-[14px]">
                      {item.children.map((child) => (
                        <li key={child.label + child.href}>
                          <DropdownLink
                            child={child}
                            onNavigate={() => setOpen(null)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
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
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex size-8 shrink-0 items-center justify-center rounded-ctl border border-line text-muted transition-colors hover:border-fg hover:text-fg md:hidden"
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {mobileOpen && (
        <div className="max-h-[70vh] overflow-y-auto border-t border-line md:hidden">
          <div className="mx-auto flex w-full max-w-[1240px] flex-col px-5 py-3 sm:px-8">
            {navigation.map((item) => (
              <div key={item.label} className="border-b border-line py-3">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-xs tracking-[0.12em] text-fg uppercase"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 flex list-none flex-col gap-1.5 p-0">
                    {item.children.map((child) => (
                      <li key={child.label + child.href}>
                        <DropdownLink
                          child={child}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownLink({
  child,
  onNavigate,
}: {
  child: NavChild;
  onNavigate: () => void;
}) {
  const props = child.external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Link
      href={child.href}
      onClick={onNavigate}
      className="flex flex-col gap-1 rounded-ctl px-3 py-2.5 transition-colors hover:bg-soft"
      {...props}
    >
      <span className="text-[12px] text-fg">
        {child.label}
        {child.external && <span className="pl-1.5 text-muted">↗</span>}
      </span>
      {child.note && (
        <span className="text-[10px] leading-snug text-muted">{child.note}</span>
      )}
    </Link>
  );
}
