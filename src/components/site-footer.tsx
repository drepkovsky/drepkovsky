import Link from "next/link";
import { footerColumns } from "@/content/nav";
import { site } from "@/content/site";
import { Logo } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="no-print mt-16 border-t border-line sm:mt-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_repeat(3,minmax(0,1fr))] lg:gap-14">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 self-start">
              <Logo size={30} />
              <span className="font-mono text-xs tracking-[0.1em]">
                {site.name.toUpperCase()}
              </span>
            </Link>
            <p className="max-w-[34ch] text-sm leading-[1.6] text-muted text-pretty">
              Contract backends in TypeScript, from Bratislava. Currently taking
              one new project at a time.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2.5 self-start border-b border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] pb-1.5 font-mono text-[11px] tracking-[0.1em] text-accent uppercase transition-all hover:gap-4"
            >
              Start a project <span>→</span>
            </Link>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} className="flex flex-col gap-3.5">
              <h2 className="eyebrow">{column.title}</h2>
              <ul className="flex list-none flex-col gap-2.5 p-0">
                {column.links.map((link) => (
                  <li key={link.label + link.href}>
                    <Link
                      href={link.href}
                      className="text-[13px] leading-snug text-muted transition-colors hover:text-fg"
                      {...(link.external
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                    >
                      {link.label}
                      {link.external && (
                        <span className="pl-1.5 text-[10px]">↗</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 font-mono text-[11px] text-muted">
          <span>
            {site.company} · IČO {site.ico} · Slovakia
          </span>
          <span>Built on Next.js. Deployed to a server I can SSH into.</span>
        </div>
      </div>
    </footer>
  );
}
