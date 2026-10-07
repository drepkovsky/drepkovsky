import type { Metadata } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";
import { facts } from "@/content/about";
import {
  cvEmployment,
  cvFigures,
  cvIntro,
  cvProjects,
  cvSkills,
} from "@/content/cv";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "CV",
  description:
    "One-page CV with experience, projects, stack and education. Printable.",
  alternates: { canonical: "/cv" },
};

const contacts = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: "drepkovsky.com", href: "https://drepkovsky.com" },
  { label: "github.com/drepkovsky", href: site.links.github },
  { label: "linkedin.com/in/drepkovsky", href: site.links.linkedin },
];

export default function CvPage() {
  const projects = cvProjects.flatMap(
    (slug) => work.find((item) => item.slug === slug) ?? [],
  );

  return (
    <main className="cv relative z-10 mx-auto w-full max-w-[980px] px-5 py-12 sm:px-8">
      <div className="cv-band surface flex flex-col gap-7 rounded-surface border border-line bg-soft p-6 sm:p-9 md:flex-row md:items-end md:justify-between">
        <div className="flex max-w-[560px] flex-col gap-4">
          <p className="cv-role font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
            {site.cvRole} · {site.location}
          </p>
          <h1 className="cv-name text-[clamp(34px,5.4vw,56px)] font-semibold leading-[0.95]">
            {site.name}
          </h1>
          <p className="cv-intro text-[15px] leading-[1.55] text-muted">
            {cvIntro}
          </p>
        </div>
        <ul className="cv-contacts flex list-none flex-col gap-1.5 p-0 font-mono text-[11px] leading-relaxed text-muted md:items-end">
          {contacts.map((contact) => (
            <li key={contact.href}>
              <a href={contact.href} className="hover:text-accent">
                {contact.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <PrintButton />

      <dl className="cv-figures mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-b border-line pb-8 sm:grid-cols-3">
        {cvFigures.map((figure) => (
          <div key={figure.value} className="flex flex-col gap-2">
            <dt className="cv-figure text-[34px] font-semibold leading-none tracking-[-0.04em]">
              <span className="cv-figure-mark">{figure.value}</span>
            </dt>
            <dd className="m-0 text-[13px] leading-[1.45] text-muted">
              {figure.label}
            </dd>
          </div>
        ))}
      </dl>

      <div className="cv-grid grid grid-cols-1 gap-x-12 md:grid-cols-[minmax(0,1fr)_minmax(0,270px)]">
        <div className="min-w-0">
          <Section title="Experience">
            {cvEmployment.map((job) => (
              <div key={job.org} className="cv-job flex flex-col gap-2 pb-6 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-[16px] font-semibold">
                    {job.role}
                    <span className="font-normal text-muted"> · {job.org}</span>
                  </h3>
                  <span className="cv-period font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                    {job.period}
                  </span>
                </div>
                <ul className="flex list-none flex-col gap-1.5 p-0 text-[13.5px] leading-[1.55] text-muted">
                  {job.points.map((point) => (
                    <li key={point} className="grid grid-cols-[14px_1fr]">
                      <span className="cv-bullet" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>

          <Section title="Selected projects">
            <ul className="cv-projects flex list-none flex-col gap-3 p-0">
              {projects.map((project) => (
                <li key={project.slug} className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <span className="text-[14px] font-semibold">
                      {project.title}
                      <span className="font-normal text-muted">
                        {" "}
                        · {project.context}
                      </span>
                    </span>
                    <span className="cv-period font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                      {enDash(project.period)}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] leading-[1.5] text-muted">
                    {project.stack.slice(0, 5).join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </div>

        <aside className="cv-rail min-w-0">
          <Section title="Stack">
            <dl className="flex flex-col gap-3.5">
              {cvSkills.map((row) => (
                <div key={row.group} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                    {row.group}
                  </dt>
                  <dd className="m-0 text-[13px] leading-[1.5]">{row.items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section title="Education & facts">
            <dl className="flex flex-col gap-3.5">
              {facts.map((fact) => (
                <div key={fact.key} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] tracking-[0.1em] text-muted uppercase">
                    {enDash(fact.key)}
                  </dt>
                  <dd className="m-0 text-[13px] leading-[1.5]">
                    {fact.value.replace(/\*\*/g, "").replace(/ — /g, ", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        </aside>
      </div>
    </main>
  );
}

/** Shared content writes ranges with a spaced em dash; a CV sets them tight. */
function enDash(range: string) {
  return range.replace(/\s*—\s*/g, "–");
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-8">
      <h2 className="cv-heading eyebrow mb-4 flex items-center gap-2.5 border-b border-line pb-2.5">
        <span className="cv-heading-mark" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </section>
  );
}
