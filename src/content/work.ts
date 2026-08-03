/**
 * The full record. One list, newest first, client work and employment at the
 * same level of detail — only the badge differs.
 *
 * Facts come from the repos under ~/questpie, the quote notes, and the CV.
 * NEEDS-FACT marks an entry whose story is still guesswork.
 *
 * Two corrections against the design mockup:
 *  - CODEUPP is gone. No repo, note or public page mentions it.
 *  - AMCEF and UXtweak follow the CV's dates, not the mockup's.
 */

export type WorkKind = "CLIENT" | "OWN" | "OSS";

export type WorkItem = {
  slug: string;
  kind: WorkKind;
  title: string;
  period: string;
  /** Sort key. Descending, so the newest entry leads. */
  sortYear: number;
  context: string;
  summary: string;
  stack: string[];
  writeup: string | null;
  needsFact?: boolean;
};

export const work: WorkItem[] = [
  {
    slug: "jubli",
    kind: "OWN",
    title: "Jubli",
    period: "2026 — now",
    sortYear: 2026.7,
    context: "Own product · pilot",
    summary:
      "Every event gets a social space guests join by scanning a QR code. An event is a tree of spaces that changes as it moves from pre-event to live to the recap afterwards, so a wedding and a weekly pub quiz run on the same engine with different presets.",
    stack: ["QUESTPIE", "Bun", "React Native", "Postgres"],
    writeup: null,
  },
  {
    slug: "autopilot",
    kind: "OWN",
    title: "QUESTPIE Autopilot",
    period: "2025 — now",
    sortYear: 2026.6,
    context: "Own product · private beta",
    summary:
      "A company as a container and its staff as agents. One Bun process watches the filesystem, runs a task state machine, spawns agents across eight roles, and commits what they produce to git. The point is that the work leaves an audit trail instead of a chat log. Built on QUESTPIE.",
    stack: ["QUESTPIE", "Bun", "TypeScript"],
    writeup: null,
  },
  {
    slug: "jinejsvet",
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
    kind: "CLIENT",
    title: "chatacerenka.eu",
    period: "2022 — now",
    sortYear: 2026.3,
    context: "First client · rewritten 2026",
    summary:
      "Our first client, and the one we have kept the longest. It ran for years on the booking platform we had built around it, and in 2026 we threw that away and rebuilt the site on QUESTPIE as its own thing. A cabin that takes bookings does not need someone else's idea of what a booking is.",
    stack: ["QUESTPIE", "TanStack Start", "Postgres"],
    writeup: null,
  },
  {
    slug: "byvak",
    kind: "OWN",
    title: "býVAK",
    period: "2020 — 2026",
    sortYear: 2025.7,
    context: "Own product · retired",
    summary:
      "A booking platform for accommodation, and the first big thing we built. It taught us the lesson the studio now runs on: one boxed platform for every client means every client gets a compromise. We stopped selling it and went back to building each product on its own.",
    stack: ["TypeScript", "Next.js", "Postgres"],
    writeup: null,
  },
  {
    slug: "nutrimeals",
    kind: "CLIENT",
    title: "Nutrimeals",
    period: "2024 — now",
    sortYear: 2026.2,
    context: "Technical partner · Slovakia",
    summary:
      "A food-tech startup put smart fridges in offices and had no app to find them. I built the React Native app that maps the fridges and shows their stock, and the backend that keeps it in sync with the devices, including the offline path for canteens with no signal.",
    stack: ["React Native", "Expo", "Next.js", "Postgres", "Bun"],
    writeup: null,
  },
  {
    slug: "prague-convention-bureau",
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
    kind: "OSS",
    title: "QUESTPIE",
    period: "2024 — now",
    sortYear: 2025.9,
    context: "Open source · MIT",
    summary:
      "Declare a schema once and it generates the database columns, the REST API, the typed client and an admin panel. It sits on Drizzle, Zod and Better Auth rather than inventing its own runtime. It hosts nothing and needs no key, which is the part most alternatives get wrong.",
    stack: ["Drizzle", "Zod", "Better Auth", "TypeScript"],
    writeup: null,
  },
  {
    slug: "pomocmotoristom",
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
    kind: "OWN",
    title: "housedsl",
    period: "2025",
    sortYear: 2025.6,
    context: "Own project · language spec",
    summary:
      "Terraform for houses. You describe a residential floor plan in a small declarative language and get a model out — 14 room types, 32 materials, a PEG parser and a VS Code extension.",
    stack: ["Bun", "TypeScript", "Peggy", "React Three Fiber"],
    writeup: null,
  },
  {
    slug: "drizzle-migrations",
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
    kind: "CLIENT",
    title: "CODEUPP",
    period: "2024 — 2025",
    sortYear: 2024.8,
    context: "Agency engagement · client under NDA",
    summary:
      "CODEUPP brought QUESTPIE in as extra capacity on a build they could not staff. We started with a full audit of the codebase, then worked through it in stages — fixing the developer experience as we went, and shipping features on top of it rather than after it. The end client is under NDA, so that is as specific as this gets.",
    stack: ["Next.js", "Strapi", "TypeScript"],
    writeup: null,
  },
  {
    slug: "bulkit",
    kind: "OWN",
    title: "bulkit.dev",
    period: "2024 — 2025",
    sortYear: 2024.9,
    context: "Own product",
    summary:
      "Social scheduling you host yourself, for people who would rather not hand their posting queue and their audience to someone else's SaaS.",
    stack: ["Bun", "React", "Tailwind", "LangChain"],
    writeup: null,
  },
  {
    slug: "amcef",
    kind: "CLIENT",
    title: "AMCEF",
    period: "2024 — 2025",
    sortYear: 2024.5,
    context: "Employed · senior full-stack",
    summary:
      "Modulario is a low-code platform for building business systems. I built the Schenker logistics module and the integrations around it, and designed the MongoDB schemas the enterprise data sat in.",
    stack: ["TypeScript", "React", "FeatherJS", "MongoDB", "BullMQ", "Redis"],
    writeup: null,
  },
  {
    slug: "tinydi",
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
    kind: "CLIENT",
    title: "Eliaš IT Solutions",
    period: "2023 — 2024",
    sortYear: 2023.5,
    context: "Freelance · eliadmin.sk",
    summary:
      "A reusable e-commerce template the agency could resell, rather than one shop. I built the template, the frontend and mobile side, and the payment and order flows. Over 200 of their clients run on it, and the team kept building on it long after I left — which is the only handover test that counts.",
    stack: ["Next.js", "TypeScript"],
    writeup: null,
  },
  {
    slug: "asista",
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
    kind: "CLIENT",
    title: "UXtweak",
    period: "2021 — 2023",
    sortYear: 2021.5,
    context: "Employed · team of 5–9",
    summary:
      "A usability testing platform. I built respondent recruitment against the Cint supplier API, the CRM for a client's own respondents, and a NestJS service that drove moderated sessions through the Zoom API.",
    stack: ["TypeScript", "React", "NestJS", "Postgres", "Redis", "Docker"],
    writeup: null,
  },
];

export const workPage = {
  title: "The full record",
  claim: "Everything I have shipped, newest first.",
  intro:
    "Client work and employment sit in the same list, because they were the same kind of work. Education is not here — that belongs in the bio.",
} as const;

export const workFilters: { key: "ALL" | WorkKind; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "CLIENT", label: "Client" },
  { key: "OWN", label: "Own" },
  { key: "OSS", label: "OSS" },
];

export const sortedWork = [...work].sort((a, b) => b.sortYear - a.sortYear);

export function countByKind(kind: "ALL" | WorkKind) {
  return kind === "ALL"
    ? work.length
    : work.filter((item) => item.kind === kind).length;
}
