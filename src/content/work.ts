/**
 * The full record. One list, newest first, client work and employment at the
 * same level of detail — only the badge differs.
 *
 * Facts come from the repos under ~/questpie, the quote notes, and the CV.
 * NEEDS-FACT marks an entry whose story is still guesswork.
 *
 * Two corrections against the design mockup and old portfolio drafts:
 *  - CODEUPP is gone. No repo, note or public page mentions it.
 *  - Employment dates are verified independently of the deleted legacy CV.
 */

export type WorkKind = "CLIENT" | "OWN" | "OSS";

export type WorkItem = {
  slug: string;
  kind: WorkKind;
  title: string;
  period: string;
  /** Sort key for the chronological view. Descending, newest first. */
  sortYear: number;
  /**
   * How much this project proves to someone deciding whether to hire, 1-10.
   * Chronology buries the strongest evidence, so relevance is the default
   * order and the year view is the toggle.
   */
  weight: number;
  /**
   * What a client can conclude from this project. Not rendered right now —
   * read as self-congratulation on every entry — but it is what the
   * relevance weight is reasoning about, so it stays as the note behind it.
   */
  proves: string;
  context: string;
  summary: string;
  stack: string[];
  image?: string;
  writeup: string | null;
  needsFact?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "jubli",
    proves:
      "That I can take a product from an empty repo to a running pilot on my own.",
    weight: 9,
    kind: "OWN",
    title: "Jubli",
    period: "2026 — now",
    sortYear: 2026.7,
    context: "Own product · pilot",
    summary:
      "Every event gets a social space guests join by scanning a QR code. An event is a tree of spaces that changes as it moves from pre-event to live to the recap afterwards, so a wedding and a weekly pub quiz run on the same engine with different presets.",
    stack: [
      "QUESTPIE",
      "TanStack Start",
      "React Native",
      "Expo",
      "Hono",
      "Postgres",
      "Redis",
    ],
    writeup: null,
  },
  {
    slug: "autopilot",
    proves:
      "That I can build long-running distributed systems, not only request and response.",
    weight: 9,
    kind: "OWN",
    title: "QUESTPIE Autopilot",
    period: "2025 — now",
    sortYear: 2026.6,
    context: "Own product · open beta",
    summary:
      "A workspace where a company's people and its AI agents work side by side: tasks, channels, a shared library and automations in one multi-tenant product. Every agent is its own actor with its own permissions, checked again on each tool call, and anything beyond its authority becomes an approval request for a human. Agents run on work machines, push their changes to a branch, and leave a reviewable record instead of a chat log. People reach the same commands from their own AI client through an MCP server with OAuth. Built on QUESTPIE.",
    stack: ["QUESTPIE", "Bun", "AI SDK", "MCP", "TanStack Start", "Postgres"],
    writeup: null,
  },
  {
    slug: "questpie-probe",
    weight: 7,
    proves:
      "That I see a gap early, and stop building once something else fills it.",
    kind: "OSS",
    title: "QUESTPIE Probe",
    period: "2026 — now",
    sortYear: 2026.45,
    context: "Open source · MIT · no longer developed",
    summary:
      "A coding agent could write a change but not see whether it worked. Probe closed that: it started the dev servers, collected the logs in one place, drove a browser, and recorded flows so they could be replayed as regression checks. We built it before the coding harnesses shipped evaluators of their own. Once they did, the gap it filled closed, so it is no longer developed. The ecosystem solved the problem, which is a fine outcome.",
    stack: ["TypeScript", "Bun", "CLI"],
    writeup: null,
  },
  {
    slug: "agent-board",
    weight: 8,
    proves:
      "That I build the tooling my own work runs on, and ship it for other people to use.",
    kind: "OSS",
    title: "agent-board",
    period: "2026 — now",
    sortYear: 2026.5,
    context: "Open source · MIT · @questpie/agent-board",
    summary:
      "A local control plane for coding agents. Long-running agent work falls apart when the plan lives only in a chat log, so this keeps goals, tasks, specs and evidence as Markdown on disk, with a CLI contract that Claude Code, Codex and Cursor all drive the same way.",
    stack: ["TypeScript", "Bun", "Markdown"],
    writeup: null,
  },
  {
    slug: "jinejsvet",
    proves:
      "That I build for readers who are not developers, to a stated accessibility standard.",
    weight: 3,
    kind: "CLIENT",
    title: "jinejsvet.cz",
    period: "2026",
    sortYear: 2026.4,
    context: "Klára pomáhá z.s. · Czechia",
    summary:
      "A portal for children and young people who have lost someone. Alongside the counselling and library sections it has a place to light a candle and a timeline that follows grief over time, so the build was as much about tone and WCAG 2.1 AA as about the CMS behind it. Runs on QUESTPIE.",
    stack: ["QUESTPIE", "Next.js", "Tailwind", "Postgres"],
    writeup: null,
  },
  {
    slug: "chata-cerenka",
    proves:
      "That clients stay: six years, then a rewrite rather than a replacement.",
    weight: 5,
    kind: "CLIENT",
    title: "chatacerenka.eu",
    period: "2020 — now",
    sortYear: 2026.3,
    context: "First client · rewritten 2026",
    summary:
      "Our first client, and the one we have kept the longest. It ran for years on the booking platform we had built around it, and in 2026 we threw that away and rebuilt the site on QUESTPIE as its own thing. A cabin that takes bookings does not need someone else's idea of what a booking is.",
    stack: ["QUESTPIE", "TanStack Start", "Postgres"],
    writeup: null,
  },
  {
    slug: "byvak",
    proves:
      "That I notice a wrong architecture and change course instead of defending it.",
    weight: 6,
    kind: "OWN",
    title: "byvak",
    period: "2020 — 2026",
    sortYear: 2025.7,
    context: "Own product · retired",
    summary:
      "A booking platform for accommodation, and the first big thing we built. It taught us the lesson the company now follows: one boxed platform for every client means every client gets a compromise. We stopped selling it and went back to building each product on its own.",
    stack: ["TypeScript", "Next.js", "Postgres"],
    writeup: null,
  },
  {
    slug: "nutrimeals",
    proves:
      "That I can own a mobile product and the multi-tenant backend under it, for years rather than a sprint.",
    weight: 7,
    kind: "CLIENT",
    title: "Nutrimeals",
    period: "2024 — now",
    sortYear: 2026.2,
    context: "Technical partner · Slovakia",
    summary:
      "Nutrimeals is an EIT Food backed startup putting smart canteens and connected fridges into Slovak offices. I joined as technical partner and built the app people order from and the backend behind it. It runs multi-tenant, so Nutrimeals is one tenant of a gastro platform rather than a one-off app. The app maps the fridges, shows their stock, and keeps working when the canteen has no signal.",
    stack: [
      "QUESTPIE",
      "React Native",
      "Expo",
      "TanStack Start",
      "Postgres",
      "Bun",
    ],
    writeup: null,
  },
  {
    slug: "prague-convention-bureau",
    proves:
      "That I deliver a module into someone else's larger product without owning the whole thing.",
    weight: 5,
    kind: "CLIENT",
    title: "Prague Convention Bureau",
    period: "2025 — 2026",
    sortYear: 2026.1,
    context: "QUESTPIE s.r.o. · Czechia",
    summary:
      "The planning module for the bureau's venue platform.",
    stack: ["PayloadCMS", "Next.js", "Postgres"],
    writeup: null,
  },
  {
    slug: "questpie",
    proves:
      "That I can design and maintain a framework other people build on.",
    weight: 10,
    kind: "OSS",
    title: "QUESTPIE",
    period: "2024 — now",
    sortYear: 2025.9,
    context: "Open source · MIT",
    summary:
      "Declare a schema once and it generates the database columns, the REST API, the typed client and an admin panel. It sits on Drizzle, Zod and Better Auth rather than inventing its own runtime. It hosts nothing and needs no key, which is the part most alternatives get wrong.",
    stack: [
      "TypeScript",
      "Drizzle",
      "Hono · Elysia",
      "Zod",
      "Better Auth",
      "pg-boss",
    ],
    writeup: null,
  },
  {
    slug: "pomocmotoristom",
    proves:
      "That I finish and hand over even when the launch is not mine to call.",
    weight: 3,
    kind: "CLIENT",
    title: "pomocmotoristom.sk",
    period: "2025 — 2026",
    sortYear: 2025.8,
    context: "QUESTPIE s.r.o. · built, not launched",
    summary:
      "A full platform redesign with a CMS the editors run themselves: multi-language content with an approval step before anything goes live, and a blog rebuilt so it can be found. Built and handed over; the client has not put it live yet.",
    stack: ["Next.js", "PayloadCMS", "Postgres"],
    writeup: null,
  },
  {
    slug: "housedsl",
    proves:
      "That I can design a small language and write the parser for it.",
    weight: 6,
    kind: "OWN",
    title: "housedsl",
    period: "2025",
    sortYear: 2025.6,
    context: "Own project · language spec",
    summary:
      "Terraform for houses. You describe a residential floor plan in a small declarative language and get a model out: 14 room types, 32 materials, a PEG parser and a VS Code extension.",
    stack: ["Bun", "TypeScript", "Peggy", "React Three Fiber"],
    writeup: null,
  },
  {
    slug: "drizzle-migrations",
    proves:
      "That other developers depend on code I wrote.",
    weight: 8,
    kind: "OSS",
    title: "drizzle-migrations",
    period: "2024 — now",
    sortYear: 2025.5,
    context: "81 stars on GitHub · MIT",
    summary:
      "Drizzle diffs your schema but gives you no way to write a migration by hand or roll one back. This adds both. It is the repo of mine that other people actually depend on.",
    stack: ["TypeScript", "Drizzle"],
    writeup: null,
  },
  {
    slug: "codeupp",
    proves:
      "That I can join a codebase someone else wrote and ship from inside it.",
    weight: 4,
    kind: "CLIENT",
    title: "CODEUPP",
    period: "2024 — 2025",
    sortYear: 2024.8,
    context: "Agency engagement · client under NDA",
    summary:
      "CODEUPP brought QUESTPIE in as extra capacity on a build they could not staff. We started with a full audit of the codebase, then worked through it in stages, fixing the developer experience as we went and shipping features on top of it rather than after it.",
    stack: ["Next.js", "Strapi", "TypeScript"],
    writeup: null,
  },
  {
    slug: "bulkit",
    proves:
      "That I build the self-hosted alternative when I do not want the dependency.",
    weight: 6,
    kind: "OWN",
    title: "bulkit.dev",
    period: "2024 — 2025",
    sortYear: 2024.9,
    context: "Own product · superseded by Autopilot",
    summary:
      "Social scheduling you host yourself, for people who would rather not hand their posting queue and their audience to someone else's SaaS. Superseded by Autopilot, which does the scheduling as one of the things an agent can be told to do rather than as a product of its own.",
    stack: ["Bun", "React", "Tailwind", "LangChain"],
    writeup: null,
  },
  {
    slug: "mealproai",
    proves:
      "That I can ship an AI product to thousands of users and shut it down when the numbers do not work.",
    weight: 7,
    kind: "OWN",
    title: "MealProAI",
    period: "2024",
    sortYear: 2024.7,
    context: "Own product · retired · 2,000+ registered users",
    summary:
      "My first production AI product: a universal meal-planning app built with Expo and Next.js. It turned dietary preferences, goals, budgets and ingredients on hand into personalized plans, recipes and shopping lists. It reached more than 2,000 registered users, but weak retention made the economics unsustainable, so I shut it down.",
    stack: ["Expo", "Next.js", "Hono", "Postgres", "Anthropic"],
    image: "/work/mealproai-today.png",
    writeup: null,
  },
  {
    slug: "crust",
    proves:
      "That I know Payload deeply enough to build a framework over it, and when to retire that abstraction.",
    weight: 7,
    kind: "OWN",
    title: "Crust",
    period: "2025 — 2026",
    sortYear: 2025.6,
    context: "Own framework · retired · archived reference",
    summary:
      "The Payload-based framework we built before QUESTPIE: installable domain modules, scaffolding, migrations and deployment tooling used across client applications. It taught us where extending a CMS helps and where the abstraction starts fighting its host. Retired and being prepared as an archived reference, not a dependency to adopt.",
    stack: ["PayloadCMS", "Next.js", "TypeScript", "Postgres"],
    writeup: null,
  },
  {
    slug: "amcef",
    proves:
      "That I can work inside an enterprise low-code platform and its data layer.",
    weight: 5,
    kind: "CLIENT",
    title: "AMCEF",
    period: "Dec 2024 — Jun 2025",
    sortYear: 2024.5,
    context: "Employed · senior full-stack",
    summary:
      "Modulario is a low-code platform for building business systems. I built the Schenker logistics module and the integrations around it, and designed the MongoDB schemas the enterprise data sat in.",
    stack: ["TypeScript", "React", "FeatherJS", "MongoDB", "BullMQ", "Redis"],
    writeup: null,
  },
  {
    slug: "tinydi",
    proves:
      "That I can keep an abstraction small enough to read in one sitting.",
    weight: 6,
    kind: "OSS",
    title: "tinydi",
    period: "2024",
    sortYear: 2024.2,
    context: "Open source · MIT",
    summary:
      "A dependency injection container small enough to read in one sitting, with sync and async resolution kept apart in the types instead of at runtime.",
    stack: ["TypeScript"],
    writeup: null,
  },
  {
    slug: "rosmami",
    proves:
      "That I build offline-first, and put an LLM only where it earns its place.",
    weight: 4,
    kind: "CLIENT",
    title: "Rosmami",
    period: "2023 — 2024",
    sortYear: 2023.9,
    context: "Contract · Italy",
    summary:
      "An AI meal planner for households, aimed at cutting what they throw away. It suggested what to cook from what was already in the kitchen, and worked offline first because people plan meals standing in front of a fridge.",
    stack: ["Next.js", "Node", "Postgres", "OpenAI"],
    writeup: null,
  },
  {
    slug: "elias-it",
    proves:
      "That what I hand over outlives me: 200+ clients still run on that template.",
    weight: 6,
    kind: "CLIENT",
    title: "Eliaš IT Solutions",
    period: "2023 — 2024",
    sortYear: 2023.5,
    context: "Freelance · eliadmin.sk",
    summary:
      "A reusable e-commerce template the agency could resell, rather than one shop. I built the template, the frontend and mobile side, and the payment and order flows. Over 200 of their clients run on it, and the team kept building on it long after I left. That is the only handover test that counts.",
    stack: ["Next.js", "TypeScript"],
    writeup: null,
  },
  {
    slug: "asista",
    proves:
      "That I ship to both app stores and keep a release train running afterwards.",
    weight: 5,
    kind: "CLIENT",
    title: "ASISTA",
    period: "2025 — now",
    sortYear: 2026.0,
    context: "QUESTPIE s.r.o. · iOS + Android",
    summary:
      "Filling in an accident report at the roadside, on a phone, with the details already there. Private drivers use their own data; a company owns a fleet, drivers join it with a code, and the report pulls the holder details from the company and the driver details from whoever is logged in. Shipped to both stores, now at v1.13.",
    stack: ["React Native", "Expo", "TypeScript"],
    writeup: null,
  },
  {
    slug: "uxtweak",
    proves:
      "That I can own product capabilities and design a new service inside an established platform.",
    weight: 7,
    kind: "CLIENT",
    title: "UXtweak",
    period: "2021 — 2023",
    sortYear: 2021.5,
    context: "Employed · team of 5–9",
    summary:
      "A usability testing platform. I owned development of the recruitment workflow that let researchers order precisely targeted participants directly in the product. I also designed and built the service architecture behind moderated testing, from live-session orchestration to recordings, and contributed to Own Database, its participant-management tool for importing, segmenting and recruiting from a company's own research panel.",
    stack: ["TypeScript", "React", "NestJS", "Postgres", "Redis", "Docker"],
    writeup: null,
  },
];

export const workPage = {
  title: "The full record",
  claim: "Everything I have shipped.",
  intro:
    "Ordered by what each one proves, not by date. Switch to the timeline for chronology. Client work and employment sit in one list because they were the same kind of work. Education belongs in the bio.",
} as const;

export const workFilters: { key: "ALL" | WorkKind; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "CLIENT", label: "Client" },
  { key: "OWN", label: "Own" },
  { key: "OSS", label: "OSS" },
];

export const byYear = [...work].sort((a, b) => b.sortYear - a.sortYear);

export const byRelevance = [...work].sort(
  (a, b) => b.weight - a.weight || b.sortYear - a.sortYear,
);

/** Default order everywhere that does not offer a choice. */
export const sortedWork = byRelevance;

export function countByKind(kind: "ALL" | WorkKind) {
  return kind === "ALL"
    ? work.length
    : work.filter((item) => item.kind === kind).length;
}
