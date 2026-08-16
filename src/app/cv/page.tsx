import type { Metadata } from "next";
import { site } from "@/content/site";
import { sortedWork } from "@/content/work";
import { facts } from "@/content/about";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "CV",
  description:
    "One-page CV — experience, projects, stack and education. Printable.",
  alternates: { canonical: "/cv" },
};

const employment = [
  {
    role: "Founder & lead developer",
    org: "QUESTPIE s.r.o.",
    period: "2021 — now",
    points: [
      "Contract backends, mobile apps and platform work for clients in Slovakia, Czechia and Italy.",
      "Author of QUESTPIE, the open source framework the client work runs on.",
      "Own the whole path: schema, API, deploy, and the servers it lands on.",
    ],
  },
  {
    role: "Senior full-stack developer",
    org: "AMCEF a.s.",
    period: "2024 — 2025",
    points: [
      "Built the Schenker logistics module and third-party integrations for Modulario, a low-code platform.",
      "Designed MongoDB schemas and tuned queries for enterprise-scale data.",
      "Background processing with BullMQ and Redis.",
    ],
  },
  {
    role: "Full-stack developer",
    org: "UXtweak j.s.a.",
    period: "2021 — 2023",
    points: [
      "Owned the recruitment workflow for ordering precisely targeted participants directly in the platform.",
      "Contributed to Own Database: imports, field mapping, filtering and segmentation for clients' own participant panels.",
      "Designed and built the service architecture behind moderated testing, including live-session orchestration and recordings.",
    ],
  },
];

const skills = [
  {
    group: "Languages & runtimes",
    items: "TypeScript · JavaScript · Node · Bun",
  },
  {
    group: "Backend",
    items: "Hono · Elysia · NestJS · Drizzle · Zod · Better Auth · pg-boss · BullMQ",
  },
  {
    group: "Frontend & mobile",
    items: "React · Next.js · TanStack · React Native · Expo · Tailwind",
  },
  {
    group: "Data",
    items: "Postgres · Redis · pgvector · query tuning, CTEs, window functions",
  },
  {
    group: "Infrastructure",
    items:
      "Docker · Kubernetes · CI/CD · Hetzner · Traefik · zero-downtime deploys · S3 / R2",
  },
];

export default function CvPage() {
  const projects = sortedWork.filter((item) => !item.needsFact).slice(0, 10);

  return (
    <main className="relative z-10 mx-auto w-full max-w-[900px] px-5 py-12 print:max-w-none print:py-0 sm:px-8">
      <header className="flex flex-wrap items-end justify-between gap-5 border-b border-line pb-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-[clamp(28px,4vw,42px)] font-semibold leading-none">
            {site.name}
          </h1>
          <p className="font-mono text-xs tracking-[0.1em] text-muted uppercase">
            {site.role} · {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-1 font-mono text-[11px] leading-relaxed text-muted">
          <a href={`mailto:${site.email}`} className="hover:text-accent">
            {site.email}
          </a>
          <a href={site.links.github} className="hover:text-accent">
            github.com/drepkovsky
          </a>
          <a href={site.links.questpie} className="hover:text-accent">
            questpie.com
          </a>
        </div>
      </header>

      <PrintButton />

      <Section title="Experience">
        {employment.map((job) => (
          <div key={job.org} className="flex flex-col gap-1.5 pb-5 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[15px] font-semibold">
                {job.role} — {job.org}
              </h3>
              <span className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                {job.period}
              </span>
            </div>
            <ul className="flex list-none flex-col gap-1 p-0 text-[13px] leading-[1.55] text-muted">
              {job.points.map((point) => (
                <li key={point} className="grid grid-cols-[12px_1fr] gap-2">
                  <span className="text-accent">·</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Selected projects">
        <ul className="flex list-none flex-col gap-2 p-0 text-[13px] leading-[1.55]">
          {projects.map((project) => (
            <li
              key={project.slug}
              className="grid grid-cols-[1fr] gap-x-4 gap-y-0.5 sm:grid-cols-[minmax(0,170px)_1fr]"
            >
              <span className="font-semibold">
                {project.title}
                <span className="ml-2 font-mono text-[10px] font-normal tracking-[0.08em] text-muted uppercase">
                  {project.kind}
                </span>
              </span>
              <span className="text-muted">
                {project.stack.slice(0, 4).join(" · ")} — {project.period}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Stack">
        <dl className="grid grid-cols-[minmax(0,150px)_1fr] gap-x-5 gap-y-2 text-[13px] leading-[1.5]">
          {skills.map((row) => (
            <div key={row.group} className="contents">
              <dt className="font-mono text-[10px] tracking-[0.08em] text-muted uppercase">
                {row.group}
              </dt>
              <dd className="m-0">{row.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Education & facts">
        <dl className="grid grid-cols-[minmax(0,110px)_1fr] gap-x-5 gap-y-2 text-[13px] leading-[1.5] text-muted">
          {facts.map((fact) => (
            <div key={fact.key} className="contents">
              <dt className="font-mono text-[10px] tracking-[0.08em] uppercase">
                {fact.key}
              </dt>
              <dd className="m-0">{fact.value.replace(/\*\*/g, "")}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="break-inside-avoid pt-7">
      <h2 className="eyebrow mb-3.5 border-b border-line pb-2">{title}</h2>
      {children}
    </section>
  );
}
