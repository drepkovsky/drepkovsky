import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  aboutClosing,
  aboutPage,
  decline,
  facts,
  howIWork,
  longVersion,
} from "@/content/about";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { Button } from "@/components/ui";
import { ImageSlot } from "@/components/image-slot";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.intro,
  alternates: { canonical: "/about" },
};

/** Two-column row: mono section label on the left, content on the right. */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-6 pt-12 sm:pt-16 md:grid-cols-[minmax(0,200px)_minmax(0,1fr)] lg:gap-14">
      <div className="eyebrow pt-1.5">{label}</div>
      {children}
    </section>
  );
}

/** Renders the **bold** spans the facts table uses, and nothing else. */
function Emphasised({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith("**") ? (
          <span key={i} className="font-semibold text-fg">
            {part.slice(2, -2)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

export default function AboutPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
      <section className="grid items-end gap-7 py-12 sm:py-16 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16 lg:py-22">
        <div className="flex flex-col gap-5">
          <div className="eyebrow">{aboutPage.eyebrow}</div>
          <h1 className="max-w-[18ch] text-[clamp(34px,5vw,60px)] font-semibold leading-[1.04]">
            {aboutPage.headline}
          </h1>
          <p className="max-w-[56ch] text-base leading-[1.65] text-muted text-pretty">
            {aboutPage.intro}
          </p>
        </div>
        <ImageSlot
          src="/profile.jpg"
          alt={`${site.name} in ${site.location}`}
          label="portrait"
          ratio="4/5"
          priority
        />
      </section>

      <Row label="01 · The long version">
        <div className="flex max-w-[66ch] flex-col gap-5">
          {longVersion.map((paragraph, i) => (
            <p
              key={i}
              className={`text-[17px] leading-[1.75] text-pretty ${
                i === 0 ? "" : "text-muted"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Row>

      <Row label="02 · How I work">
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {howIWork.map((card) => (
            <div
              key={card.label}
              className="flex flex-col gap-2.5 rounded-surface border border-line p-5"
            >
              <div className="font-mono text-[10px] leading-none tracking-[0.14em] text-accent uppercase">
                {card.label}
              </div>
              <h3 className="text-[17px] font-semibold tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="text-sm leading-[1.6] text-muted text-pretty">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </Row>

      <Row label="03 · What I decline">
        <div className="flex max-w-[60ch] flex-col gap-3.5">
          <p className="text-base leading-[1.7] text-muted text-pretty">
            {decline.intro}
          </p>
          <ul className="flex list-none flex-col gap-3 p-0 text-base leading-[1.6]">
            {decline.items.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[18px_1fr] gap-3 text-muted"
              >
                <span className="text-accent">—</span>
                <span className="text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Row>

      <Row label="04 · Education & facts">
        <div className="flex flex-col gap-5">
          <dl className="grid grid-cols-[minmax(0,110px)_1fr] gap-x-6 gap-y-3.5 border-t border-line pt-3.5 text-[15px] leading-[1.55] text-muted">
            {facts.map((fact) => (
              <div key={fact.key} className="contents">
                <dt className="pt-0.5 font-mono text-[10px] leading-relaxed tracking-[0.08em] uppercase">
                  {fact.key}
                </dt>
                <dd className="m-0 text-pretty">
                  <Emphasised text={fact.value} />
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button href="/cv" variant="outline">
              One-page CV
            </Button>
            <Button href="/work" variant="outline">
              All {work.length} projects
            </Button>
          </div>
        </div>
      </Row>

      <section className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-line py-10 sm:mt-20 sm:py-14">
        <div className="flex flex-col gap-3.5">
          <h2 className="max-w-[20ch] text-[clamp(24px,3vw,36px)] font-semibold leading-[1.08]">
            {aboutClosing.headline}
          </h2>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3.5 self-start border-b border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] pb-2 text-[clamp(16px,2vw,24px)] font-semibold tracking-[-0.02em] text-accent transition-all duration-250 hover:gap-6"
          >
            {site.email}
            <span className="text-[0.7em]">↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
