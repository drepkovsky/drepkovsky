import Link from "next/link";
import type { ReactNode } from "react";

/** The `dr.` mark. Only the period carries the accent — that is the whole logo. */
export function Logo({ size = 26 }: { size?: number }) {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center rounded-[6px] border border-line bg-soft font-sans font-bold tracking-[-0.05em] text-fg"
      style={{ width: size, height: size, fontSize: size * 0.46 }}
    >
      dr<span className="text-accent">.</span>
    </span>
  );
}

/** Section header: uppercase mono label on the left, running number on the right. */
export function SectionHeader({
  label,
  number,
  className = "",
}: {
  label: string;
  number: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-baseline justify-between gap-5 eyebrow ${className}`}
    >
      <span>{label}</span>
      <span>{number}</span>
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-3 rounded-ctl px-5 py-4 font-mono text-xs leading-none tracking-[0.06em] transition-all duration-300 ease-out";
  const styles =
    variant === "solid"
      ? "bg-accent text-ink font-medium hover:brightness-110"
      : "border border-line text-muted hover:border-fg hover:text-fg";
  const arrow = external ? "↗" : "→";
  const props = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <Link href={href} className={`${base} ${styles} ${className}`} {...props}>
      <span className="uppercase">{children}</span>
      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
        {arrow}
      </span>
    </Link>
  );
}

/** Hairline pill used for stack labels and fact chips. */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-ctl border border-line px-[9px] py-1.5 font-mono text-[11px] leading-none text-muted">
      {children}
    </span>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
