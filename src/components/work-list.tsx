"use client";

import Link from "next/link";
import { useState } from "react";
import {
  byRelevance,
  byYear,
  countByKind,
  workFilters,
  type WorkKind,
} from "@/content/work";
import { contact } from "@/content/site";
import { Tag } from "@/components/ui";

export function WorkList() {
  const [filter, setFilter] = useState<"ALL" | WorkKind>("ALL");
  const [order, setOrder] = useState<"relevance" | "year">("relevance");

  const items = (order === "relevance" ? byRelevance : byYear).filter(
    (item) => filter === "ALL" || item.kind === filter,
  );

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 py-7">
        <span className="eyebrow mr-2">Order</span>
        {(
          [
            ["relevance", "What it proves"],
            ["year", "By year"],
          ] as const
        ).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setOrder(key)}
            aria-pressed={order === key}
            className={`rounded-ctl border px-3 py-2 font-mono text-[11px] leading-none tracking-[0.1em] uppercase transition-colors duration-200 ${
              order === key
                ? "border-fg text-fg"
                : "border-line text-muted hover:border-fg hover:text-fg"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2.5 border-t border-line py-7">
        <span className="eyebrow mr-2">Filter</span>
        {workFilters.map((option) => {
          const active = filter === option.key;
          return (
            <button
              key={option.key}
              type="button"
              onClick={() => setFilter(option.key)}
              aria-pressed={active}
              className={`rounded-ctl border px-3 py-2 font-mono text-[11px] leading-none tracking-[0.1em] uppercase transition-colors duration-200 ${
                active
                  ? "border-accent bg-accent text-ink"
                  : "border-line text-muted hover:border-fg hover:text-fg"
              }`}
            >
              {option.label} {countByKind(option.key)}
            </button>
          );
        })}
      </div>

      <ol className="list-none p-0">
        {items.map((item, i) => (
          <li
            key={item.slug}
            className="grid grid-cols-[36px_minmax(0,1fr)] gap-x-4 gap-y-3 border-t border-line py-7 transition-colors duration-250 hover:bg-soft sm:grid-cols-[44px_minmax(0,1fr)] sm:gap-x-6"
          >
            <span className="pt-1 font-mono text-[11px] leading-snug text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                <span
                  className={`rounded-ctl border px-2 py-1.5 font-mono text-[10px] leading-none tracking-[0.12em] ${
                    item.kind === "OSS"
                      ? "border-[color-mix(in_oklab,var(--color-accent)_45%,transparent)] text-accent"
                      : "border-line text-muted"
                  }`}
                >
                  {item.kind}
                </span>
                <h2 className="text-[clamp(20px,2.2vw,26px)] font-semibold leading-tight tracking-[-0.025em]">
                  <Link
                    href={`/work/${item.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {item.title}
                  </Link>
                </h2>
                <span className="font-mono text-[11px] leading-none tracking-[0.1em] text-muted uppercase">
                  {item.period}
                </span>
              </div>

              <div className="font-mono text-[11px] leading-none tracking-[0.08em] text-muted">
                {item.context}
              </div>

              {/* The reason this sits where it sits in the default order. */}
              <p className="grid max-w-[68ch] grid-cols-[16px_1fr] gap-2.5 text-[14px] leading-[1.5] text-fg">
                <span className="text-accent">↳</span>
                <span className="text-pretty">{item.proves}</span>
              </p>

              <p
                className={`max-w-[68ch] text-[15px] leading-[1.65] text-pretty ${
                  item.needsFact ? "text-accent" : "text-muted"
                }`}
              >
                {item.summary}
              </p>

              <div className="flex flex-wrap items-center gap-1.5">
                {item.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
                <Link
                  href={`/work/${item.slug}`}
                  className="ml-2 font-mono text-[10px] leading-none tracking-[0.1em] text-muted uppercase transition-colors hover:text-accent"
                >
                  Details →
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section className="mt-12 flex flex-col gap-5 border-t border-line py-12">
        <h2 className="max-w-[24ch] text-[clamp(26px,3.6vw,42px)] font-semibold leading-[1.06]">
          Something here look like your problem?
        </h2>
        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center gap-4 self-start border-b border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] pb-2 text-[clamp(17px,2.2vw,26px)] font-semibold tracking-[-0.02em] text-accent transition-all duration-250 hover:gap-6"
        >
          {contact.email}
          <span className="text-[0.7em]">↗</span>
        </a>
      </section>
    </>
  );
}
