/**
 * Every word on the site lives here. Pages import from this file and never
 * hold copy inline, so rewriting the voice is one file and no JSX.
 *
 * Drafted from cv-dominik-repkovsky.md, questpie.com and the public repos.
 * Lines marked NEEDS-FACT are the ones no source could confirm.
 */

export const site = {
  name: "Dominik Repkovský",
  role: "Backend & TypeScript",
  email: "dominik@questpie.com",
  location: "Bratislava, Slovakia",
  /** When the work started (býVAK), not when the s.r.o. was registered in 2021. */
  established: "2020",
  company: "QUESTPIE s.r.o.",
  ico: "54027292",
  links: {
    github: "https://github.com/drepkovsky",
    githubOrg: "https://github.com/questpie",
    linkedin: "https://www.linkedin.com/in/drepkovsky/",
    questpie: "https://questpie.com",
    questpieDocs: "https://questpie.com/docs",
  },
} as const;

export const meta = {
  title: "Dominik Repkovský — Backend & TypeScript",
  description:
    "I build production backends in TypeScript and run the servers they sit on. Contract work from Bratislava, Slovakia.",
} as const;

export const hero = {
  availability: "Available for contract work",
  /** Split so the accent span lands on the claim, not on decoration. */
  headline: {
    before: "Most of a backend is plumbing. I ",
    accent: "generate that part",
    after: ".",
  },
  support:
    "You pay for the part that is actually your product. I build production backends in TypeScript, run the servers they sit on, and wrote QUESTPIE, the open source framework underneath them.",
  primaryCta: { label: "Start a project", href: "#contact" },
  secondaryCta: { label: "See QUESTPIE", href: "#questpie" },
} as const;

export const stack = [
  "TypeScript",
  "Bun · Node",
  "Next.js",
  "React Native",
  "Postgres",
  "Drizzle",
  "Docker · Kubernetes",
  "CI/CD",
  "Linux · VPS",
] as const;

/**
 * The spine of the site. One sentence each, stated as a rule, opinionated
 * enough that a reader could disagree. `essay` stays null until the post
 * that argues it exists — an empty link is worse than no link.
 */
export const principles: { text: string; essay: string | null }[] = [
  {
    text: "One schema. The API, the types, the admin and the client all come out of it.",
    essay: null,
  },
  {
    text: "Types that stop at the API boundary are decoration.",
    essay: null,
  },
  {
    text: "I deploy to servers you could SSH into yourself.",
    essay: null,
  },
  {
    text: "You get a repo you can run, not a service you rent.",
    essay: null,
  },
  {
    text: "If the job needs a bigger team than mine, I say so instead of pretending.",
    essay: null,
  },
];

export const principlesIntro =
  "Five rules I actually follow. They decide what I build and what I turn down.";

export const services = [
  {
    title: "Backend from scratch",
    body: "You have a product and no server. I design the schema, build the API, and hand over a running system whose types your frontend can import.",
  },
  {
    title: "App and its backend",
    body: "One person building both sides, so the API is shaped by what the app needs instead of negotiated between two teams. React Native for the app, and the server it talks to.",
  },
  {
    title: "Postgres under load",
    body: "Queries that were fine at ten thousand rows and are not fine at ten million. I profile them, fix the indexes, and rewrite the ones that need CTEs or window functions.",
  },
  {
    title: "Deploy and keep it up",
    body: "Docker, CI/CD and a VPS you own, instead of a cloud bill nobody can explain. Zero-downtime deploys, backups I have restored at least once, and a runbook.",
  },
] as const;

export const selectedWork = [
  {
    slug: "questpie",
    index: "01",
    period: "2024 — now",
    org: "Open source · MIT",
    title: "QUESTPIE",
    summary:
      "The ecosystem I build everything else on: a framework that turns one schema declaration into a backend, and Autopilot, which runs the company around it. QUESTPIE runs on QUESTPIE.",
    bullets: [
      "Postgres columns, REST API, typed client and admin, all generated from one collection",
      "Built on Drizzle, Zod and Better Auth rather than its own runtime",
      "Self-hosted by design — no key, no account, no hosted tier to get locked into",
    ],
    stack: ["TypeScript", "Drizzle", "Zod", "Better Auth"],
    image: "/work/questpie.jpg",
  },
  {
    slug: "nutrimeals",
    index: "02",
    period: "2024 — now",
    org: "Technical partner",
    title: "Nutrimeals",
    summary:
      "Nutrimeals is an EIT Food backed startup putting smart canteens and connected fridges into Slovak offices. I joined as technical partner and built the app people order from and the backend behind it. It runs multi-tenant, so Nutrimeals is one tenant of a gastro platform rather than a one-off app.",
    bullets: [
      "React Native app that maps the fridges and shows what is in them right now",
      "Multi-tenant from the start, so a new canteen operator is configuration",
      "Push notifications and offline support, because canteens sit in basements",
    ],
    stack: ["React Native", "Expo", "Postgres", "Bun"],
    image: "/work/nutrimeals.jpg",
  },
  {
    slug: "jubli",
    index: "03",
    period: "2026 — now",
    org: "Own product · pilot",
    title: "Jubli",
    summary:
      "Every event gets a social space guests join by scanning a QR code. An event is a tree of spaces that changes as it moves from pre-event to live to the recap, so a wedding and a weekly pub quiz run on one engine with different presets.",
    bullets: [
      "Web, mobile and API in one monorepo, all of it on QUESTPIE",
      "Space presets instead of code branches, so a new event format is configuration",
    ],
    stack: ["QUESTPIE", "Bun", "React Native", "Postgres"],
    image: "/work/jubli.jpg",
  },
] as const;

export const workFooter = {
  /** `count` is filled from the record itself, so the number cannot drift. */
  note: (count: number) =>
    `${count} projects since 2020, for clients in Slovakia, Czechia and Italy.`,
  cta: { label: "The full record", href: "/work" },
} as const;

export const questpie = {
  title: "QUESTPIE",
  body: "QUESTPIE is my company and the ecosystem it builds: a framework for the people building a product, and Autopilot for the people running the company around it. The framework is the half your project touches — declare a collection once and it generates the Postgres columns, the REST API, the typed client and the admin screens. It hosts nothing and asks for no key. It runs on your machine, and the code is yours.",
  stats: [
    { value: "MIT", label: "Open source" },
    { value: "2024", label: "Since" },
    { value: "Self-host", label: "No key, no account" },
  ],
  /** The two halves, in the ecosystem's own words. */
  products: [
    {
      name: "Framework",
      line: "For the people building it. Schema in, backend out.",
      href: `${site.links.questpie}/framework`,
    },
    {
      name: "Autopilot",
      line: "For the people running the company. Software you can staff.",
      href: `${site.links.questpie}/autopilot`,
    },
  ],
  built: [
    { name: "chatacerenka.eu", status: "Live on QUESTPIE" },
    { name: "jinejsvet.cz", status: "Live on QUESTPIE" },
    { name: "Jubli", status: "Built on QUESTPIE" },
  ],
  ctas: [
    { label: "questpie.com", href: site.links.questpie, external: true },
    { label: "GitHub", href: site.links.githubOrg, external: true },
  ],
} as const;

/** Real framework API, taken from questpie-cms's own README. */
export const questpieCode = `
// collections/rooms.ts
import { collection } from "#questpie/factories";

export const rooms = collection("rooms")
  .fields(({ f }) => ({
    name: f.text(255).required().label("Name"),
    beds: f.number().required().label("Beds"),
    cabin: f.relation("cabins").required(),
  }))
  .title(({ f }) => f.name);

// generated: columns · REST · typed client · admin
`;

export const writing = {
  intro:
    "Notes on the parts of a backend that are hard to get right, and the framework I wrote after hitting them enough times.",
  /** Empty on purpose. The feed ships when three real items exist. */
  items: [] as {
    type: "ESSAY" | "VIDEO" | "SERIES" | "NOTE";
    category: string;
    title: string;
    meta: string;
    href: string;
  }[],
  empty:
    "Nothing published yet. The first series covers building a backend with QUESTPIE end to end.",
} as const;

export const now = {
  updated: "2026-08",
  primary:
    "Building QUESTPIE, and shipping it as the backend under client products at the same time. The framework only earns its keep if it survives real deadlines.",
  secondary:
    "Nutrimeals is in production and still growing. I take one new contract at a time, so the next slot is the one worth asking about.",
} as const;

export const about = {
  short:
    "I started taking paid work while studying at FIIT STU in Bratislava, and never stopped. Four years of that went into enterprise platforms at UXtweak and AMCEF, which is where I learned what breaks at scale. QUESTPIE is the company I run now, and the framework I wrote because I was tired of rebuilding the same eighty percent.",
  tags: ["FIIT STU · Ing. (MSc)", "Bratislava", "QUESTPIE s.r.o."],
} as const;

export const contact = {
  headline: "What are you trying to build?",
  body: "Send the idea, not a spec. A paragraph about what you want to exist is enough to tell whether I am the right person, and you get an answer within two working days.",
  email: site.email,
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "QUESTPIE", href: "/#questpie" },
  { label: "About", href: "/about" },
] as const;
