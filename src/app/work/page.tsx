import type { Metadata } from "next";
import { workPage } from "@/content/work";
import { focus } from "@/content/site";
import { WorkList } from "@/components/work-list";

export const metadata: Metadata = {
  title: "The full record",
  description:
    "Every project since 2020 — client work, own products and open source, ordered by what each one proves.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="relative z-10 mx-auto w-full max-w-[1240px] px-5 pt-14 sm:px-8 sm:pt-20 lg:px-12">
      <header className="flex flex-col gap-5 pb-10">
        <div className="eyebrow">{workPage.title}</div>
        <h1 className="max-w-[20ch] text-[clamp(34px,5vw,60px)] font-semibold leading-[1.04]">
          {workPage.claim}
        </h1>
        <p className="max-w-[60ch] text-base leading-[1.62] text-muted text-pretty">
          {workPage.intro}
        </p>
      </header>

      <section className="flex flex-wrap items-center gap-x-7 gap-y-2.5 border-y border-line py-5 font-mono text-[11px] leading-none tracking-[0.12em] text-muted">
        <span className="text-fg">FOCUS</span>
        {focus.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <WorkList />
    </main>
  );
}
