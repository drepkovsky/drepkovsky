import Link from "next/link";
import { site } from "@/content/site";
import { Logo } from "@/components/ui";

const footerLinks = [
  { label: "GitHub", href: site.links.github, external: true },
  { label: "LinkedIn", href: site.links.linkedin, external: true },
  { label: "CV", href: "/cv", external: false },
  { label: "Email", href: `mailto:${site.email}`, external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-line no-print sm:mt-16">
      <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-5 px-5 py-8 font-mono text-[11px] leading-relaxed text-muted sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <Logo size={22} />
          <span>
            {site.company} · IČO {site.ico} · Slovakia
          </span>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-accent"
              {...(link.external
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
            >
              {link.label} {link.external ? "↗" : "→"}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
