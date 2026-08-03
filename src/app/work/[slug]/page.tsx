import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, sortedWork } from "@/content/work";
import { site } from "@/content/site";
import { Button, Tag } from "@/components/ui";

type Params = { params: Promise<{ slug: string }> };

/** Every project gets a URL at build time, so all of them are indexable. */
export function generateStaticParams() {
  return work.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);
  if (!project) return {};

  const title = `${project.title} — ${project.period}`;
  return {
    title,
    description: project.summary.slice(0, 180),
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${site.name}`,
      description: project.summary.slice(0, 180),
      url: `/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = sortedWork.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const project = sortedWork[index];
  const next = sortedWork[(index + 1) % sortedWork.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    dateCreated: project.period,
    keywords: project.stack.join(", "),
    author: {
      "@type": "Person",
      name: site.name,
      url: "https://drepkovsky.com",
    },
    url: `https://drepkovsky.com/work/${project.slug}`,
  };

  return (
    <main className="relative z-10 mx-auto w-full max-w-[860px] px-5 pt-10 sm:px-8 sm:pt-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="eyebrow">
        <Link href="/work" className="transition-colors hover:text-accent">
          ← The full record
        </Link>
      </nav>

      <header className="flex flex-col gap-4 border-b border-line py-8">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] leading-none tracking-[0.1em] text-muted uppercase">
          <span
            className={`surface rounded-ctl border px-2 py-1.5 ${
              project.kind === "OSS"
                ? "border-[color-mix(in_oklab,var(--color-accent)_45%,transparent)] text-accent"
                : "border-line"
            }`}
          >
            {project.kind}
          </span>
          <span>{project.period}</span>
          <span>{project.context}</span>
        </div>

        <h1 className="text-[clamp(32px,5vw,54px)] font-semibold leading-[1.04]">
          {project.title}
        </h1>

        <p className="max-w-[62ch] text-[17px] leading-[1.7] text-muted text-pretty">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </header>

      <section className="grid gap-x-10 gap-y-3 py-8 sm:grid-cols-[minmax(0,140px)_1fr]">
        <h2 className="eyebrow pt-1">At a glance</h2>
        <dl className="grid grid-cols-[minmax(0,110px)_1fr] gap-x-5 gap-y-2.5 text-[15px] leading-[1.55] text-muted">
          <dt className="font-mono text-[10px] tracking-[0.08em] uppercase">
            Years
          </dt>
          <dd className="m-0">{project.period}</dd>
          <dt className="font-mono text-[10px] tracking-[0.08em] uppercase">
            Context
          </dt>
          <dd className="m-0">{project.context}</dd>
          <dt className="font-mono text-[10px] tracking-[0.08em] uppercase">
            Stack
          </dt>
          <dd className="m-0">{project.stack.join(" · ")}</dd>
        </dl>
      </section>

      <section className="flex flex-col gap-5 border-t border-line py-10">
        <h2 className="max-w-[24ch] text-[clamp(22px,3vw,32px)] font-semibold leading-[1.1]">
          Want something like this built?
        </h2>
        <div className="flex flex-wrap gap-3">
          <Button href="/#contact">Start a project</Button>
          <Button href={`/work/${next.slug}`} variant="outline">
            Next: {next.title}
          </Button>
        </div>
      </section>
    </main>
  );
}
