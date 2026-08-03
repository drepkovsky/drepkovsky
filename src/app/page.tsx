import Link from "next/link";
import {
  about,
  contact,
  hero,
  now,
  principles,
  principlesIntro,
  questpie,
  selectedWork,
  services,
  site,
  stack,
  workFooter,
  writing,
} from "@/content/site";
import { work } from "@/content/work";
import { Button, SectionHeader, Tag } from "@/components/ui";
import { ImageSlot } from "@/components/image-slot";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <main id="top" className="relative z-10 mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12">
      <Hero />
      <StackBand />
      <Principles />
      <Services />
      <SelectedWork />
      <Questpie />
      <Writing />
      <NowAndAbout />
      <Contact />
    </main>
  );
}

function Hero() {
  return (
    <section className="grid items-end gap-8 py-16 sm:gap-12 md:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-[72px] lg:pb-18 lg:pt-30">
      <div className="flex flex-col gap-7 [animation:rise-in_0.8s_var(--ease-out)_0.05s_both]">
        <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-line px-3 py-2 font-mono text-[11px] leading-none tracking-[0.1em] text-muted uppercase">
          <span className="size-1.5 rounded-full bg-accent" />
          {hero.availability}
        </div>

        <h1 className="text-[clamp(38px,5.6vw,72px)] font-semibold leading-[1.03] tracking-[-0.04em]">
          {hero.headline.before}
          <span className="text-accent">{hero.headline.accent}</span>
          {hero.headline.after}
        </h1>

        <p className="max-w-[56ch] text-[clamp(15px,1.4vw,18px)] leading-[1.62] text-muted text-pretty">
          {hero.support}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="outline">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 [animation:rise-in_0.8s_var(--ease-out)_0.18s_both]">
        <ImageSlot
          src="/portrait.jpg"
          alt={`${site.name}, ${site.location}`}
          label="portrait"
          ratio="4/5"
          priority
        />
        <div className="flex justify-between gap-3 font-mono text-[11px] leading-relaxed tracking-[0.08em] text-muted uppercase">
          <span>{site.location}</span>
          <span>Est. {site.established}</span>
        </div>
      </div>
    </section>
  );
}

function StackBand() {
  return (
    <Reveal
      as="section"
      className="flex flex-wrap items-center gap-x-7 gap-y-2.5 border-y border-line py-5 font-mono text-[11px] leading-none tracking-[0.12em] text-muted"
    >
      <span className="text-fg">STACK</span>
      {stack.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </Reveal>
  );
}

function Principles() {
  return (
    <Reveal as="section" id="principles" className="scroll-mt-20 pt-14 sm:pt-20 lg:pt-24">
      <SectionHeader label="How I build" number="01" className="pb-2.5" />
      <p className="mb-5 max-w-[56ch] text-[15px] leading-[1.62] text-muted text-pretty">
        {principlesIntro}
      </p>

      {principles.map((principle, i) => (
        <div
          key={principle.text}
          className="grid grid-cols-[36px_minmax(0,1fr)] items-baseline gap-x-5 gap-y-3 border-t border-line py-6 transition-colors duration-250 hover:bg-soft sm:grid-cols-[44px_minmax(0,1fr)_auto] sm:gap-x-6"
        >
          <span className="font-mono text-[11px] leading-snug text-accent">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="max-w-[34ch] text-[clamp(19px,2vw,25px)] font-semibold leading-[1.25] tracking-[-0.025em] text-pretty">
            {principle.text}
          </p>
          {principle.essay && (
            <Link
              href={principle.essay}
              className="col-start-2 font-mono text-[10px] leading-snug tracking-[0.1em] whitespace-nowrap text-muted uppercase transition-colors hover:text-accent sm:col-start-3"
            >
              The essay →
            </Link>
          )}
        </div>
      ))}
      <div className="border-t border-line" />
    </Reveal>
  );
}

function Services() {
  return (
    <Reveal as="section" className="pt-14 sm:pt-20 lg:pt-24">
      <SectionHeader label="What I take on" number="02" className="pb-7" />
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="flex flex-col gap-3 rounded-surface border border-line bg-bg p-6 transition-colors duration-250 hover:border-muted hover:bg-soft"
          >
            <div className="font-mono text-[11px] leading-none text-accent">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="text-[19px] font-semibold tracking-[-0.02em]">
              {service.title}
            </h3>
            <p className="text-sm leading-[1.62] text-muted text-pretty">
              {service.body}
            </p>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-20 pt-16 sm:pt-24 lg:pt-28">
      <Reveal>
        <SectionHeader label="Selected work" number="03" className="pb-9" />
      </Reveal>

      {selectedWork.map((project, i) => {
        const imageFirst = i % 2 === 0;
        const image = (
          <ImageSlot
            src={undefined}
            label={`${project.title} — screenshot`}
            ratio="4/3"
          />
        );

        return (
          <Reveal
            key={project.slug}
            as="article"
            className="grid items-center gap-7 pb-12 sm:gap-10 md:grid-cols-2 lg:gap-14 lg:pb-20"
          >
            {imageFirst && image}
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-3.5 font-mono text-[11px] leading-none tracking-[0.1em] text-muted uppercase">
                <span className="text-accent">{project.index}</span>
                <span>{project.period}</span>
                <span>{project.org}</span>
              </div>

              <h3 className="text-[clamp(26px,3vw,36px)] font-semibold leading-[1.08] tracking-[-0.03em]">
                {project.title}
              </h3>

              <p className="max-w-[52ch] text-[15px] leading-[1.65] text-muted text-pretty">
                {project.summary}
              </p>

              {project.bullets.length > 0 && (
                <ul className="mt-1.5 flex list-none flex-col gap-2.5 p-0 text-sm leading-normal">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="grid grid-cols-[16px_1fr] gap-2.5">
                      <span className="text-accent">→</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-1.5 pt-1.5">
                {project.stack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </div>
            {!imageFirst && image}
          </Reveal>
        );
      })}

      <Reveal className="flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
        <p className="max-w-[46ch] text-sm leading-[1.6] text-muted text-pretty">
          {workFooter.note(work.length)}
        </p>
        <Button href={workFooter.cta.href} variant="outline">
          {workFooter.cta.label}
        </Button>
      </Reveal>
    </section>
  );
}

function Questpie() {
  return (
    <Reveal
      as="section"
      id="questpie"
      className="mt-16 scroll-mt-20 rounded-surface border border-line bg-soft p-8 sm:mt-24 sm:p-10 lg:mt-28 lg:p-15"
    >
      <SectionHeader label="The framework" number="04" className="pb-7" />
      <div className="grid items-start gap-7 md:grid-cols-2 lg:gap-14">
        <div className="flex flex-col gap-4.5">
          <h2 className="text-[clamp(30px,3.6vw,44px)] font-semibold leading-[1.05] tracking-[-0.035em]">
            {questpie.title}
          </h2>
          <p className="max-w-[50ch] text-[15px] leading-[1.65] text-muted text-pretty">
            {questpie.body}
          </p>

          <div className="grid grid-cols-3 gap-4 border-y border-line py-5">
            {questpie.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <span className="text-[22px] font-semibold tracking-[-0.03em]">
                  {stat.value}
                </span>
                <span className="font-mono text-[10px] leading-snug tracking-[0.1em] text-muted uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {questpie.ctas.map((cta, i) => (
              <Button
                key={cta.href}
                href={cta.href}
                external={cta.external}
                variant={i === 0 ? "solid" : "outline"}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="overflow-x-auto rounded-surface border border-line bg-bg p-5 font-mono text-xs leading-[1.85]">
            {questpie.code.map((line, i) => (
              <div
                key={i}
                className={`whitespace-nowrap ${
                  line.kind === "comment"
                    ? "text-muted"
                    : line.kind === "indent"
                      ? "pl-4.5"
                      : ""
                }`}
              >
                {line.text}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-px overflow-hidden rounded-surface border border-line bg-line">
            {questpie.built.map((item) => (
              <div
                key={item.name}
                className="flex items-baseline justify-between gap-3.5 bg-bg px-4.5 py-3.5 text-[13px]"
              >
                <span className="font-semibold">{item.name}</span>
                <span className="font-mono text-[10px] leading-snug tracking-[0.05em] text-accent uppercase">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function Writing() {
  return (
    <Reveal as="section" id="writing" className="scroll-mt-20 pt-16 sm:pt-24 lg:pt-28">
      <SectionHeader label="Writing & video" number="05" className="pb-2.5" />
      <p className="mb-6 max-w-[56ch] text-[15px] leading-[1.62] text-muted text-pretty">
        {writing.intro}
      </p>

      {writing.items.length === 0 ? (
        <div className="rounded-surface border border-dashed border-line p-8 text-center font-mono text-xs leading-relaxed text-muted">
          {writing.empty}
        </div>
      ) : (
        <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {writing.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col gap-3 rounded-surface border border-line p-5 transition-all duration-250 hover:-translate-y-0.5 hover:border-muted hover:bg-soft"
            >
              <div className="flex items-center justify-between gap-3 font-mono text-[10px] leading-none tracking-[0.12em]">
                <span
                  className={`rounded-ctl border px-2 py-1.5 ${
                    item.type === "VIDEO"
                      ? "border-[color-mix(in_oklab,var(--color-accent)_45%,transparent)] text-accent"
                      : "border-line text-muted"
                  }`}
                >
                  {item.type}
                </span>
                <span className="text-muted">{item.category}</span>
              </div>
              <h3 className="text-[18px] font-semibold leading-[1.25] tracking-[-0.025em] text-pretty">
                {item.title}
              </h3>
              <div className="mt-auto font-mono text-[10px] leading-snug tracking-[0.1em] text-muted uppercase">
                {item.meta}
              </div>
            </Link>
          ))}
        </div>
      )}
    </Reveal>
  );
}

function NowAndAbout() {
  return (
    <section id="about" className="scroll-mt-20 pt-16 sm:pt-24 lg:pt-28">
      <Reveal>
        <SectionHeader label="Now & who I am" number="06" className="pb-7" />
      </Reveal>

      <div className="grid items-start gap-7 md:grid-cols-2 lg:gap-14">
        <Reveal className="flex flex-col gap-4">
          <div className="flex items-baseline justify-between font-mono text-[10px] leading-none tracking-[0.16em] uppercase">
            <span className="text-accent">Now</span>
            <span className="text-muted">Updated {now.updated}</span>
          </div>
          <p className="text-base leading-[1.65] text-pretty">{now.primary}</p>
          <p className="text-[15px] leading-[1.65] text-muted text-pretty">
            {now.secondary}
          </p>
        </Reveal>

        <Reveal className="flex flex-col gap-4 rounded-surface border border-line bg-soft p-6">
          <div className="flex items-baseline justify-between font-mono text-[10px] leading-none tracking-[0.16em] uppercase">
            <span className="text-accent">About</span>
            <span className="text-muted">Since {site.established}</span>
          </div>
          <p className="text-[15px] leading-[1.65] text-muted text-pretty">
            {about.short}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {about.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3 pt-1">
            <Link
              href="/about"
              className="border-b border-[color-mix(in_oklab,var(--color-accent)_35%,transparent)] pb-1 font-mono text-[11px] leading-none tracking-[0.1em] text-accent uppercase transition-opacity hover:opacity-70"
            >
              Full bio →
            </Link>
            <Link
              href="/cv"
              className="border-b border-line pb-1 font-mono text-[11px] leading-none tracking-[0.1em] text-muted uppercase transition-colors hover:text-fg"
            >
              CV →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <Reveal
      as="section"
      id="contact"
      className="mt-16 flex scroll-mt-20 flex-col gap-6 border-t border-line py-10 sm:mt-24 sm:py-14 lg:mt-28 lg:py-18"
    >
      <SectionHeader label="Contact" number="07" />
      <h2 className="max-w-[22ch] text-[clamp(30px,4.4vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">
        {contact.headline}
      </h2>
      <p className="max-w-[50ch] text-[15px] leading-[1.65] text-muted text-pretty">
        {contact.body}
      </p>
      <a
        href={`mailto:${contact.email}`}
        className="group inline-flex items-center gap-4 self-start border-b border-[color-mix(in_oklab,var(--color-accent)_40%,transparent)] pb-2 text-[clamp(18px,2.4vw,30px)] font-semibold tracking-[-0.02em] text-accent transition-all duration-250 hover:gap-6"
      >
        {contact.email}
        <span className="text-[0.7em]">↗</span>
      </a>
    </Reveal>
  );
}
