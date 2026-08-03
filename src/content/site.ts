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
  email: "dominik.repkovsky@questpie.com",
  location: "Bratislava, Slovakia",
  established: "2021",
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
  "Docker",
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
    text: "If the job needs five people, I say so instead of pretending.",
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
    title: "Postgres under load",
    body: "Queries that were fine at ten thousand rows and are not fine at ten million. I profile them, fix the indexes, and rewrite the ones that need CTEs or window functions.",
  },
  {
    title: "Rescue and handover",
    body: "A codebase the last developer left behind. I read it, write down how it actually works, and get it to a state where someone new can start on Monday.",
  },
  {
    title: "Deploy and keep it up",
    body: "Docker, CI/CD and a VPS you own, instead of a cloud bill nobody can explain. Zero-downtime deploys, backups I have restored at least once, and a runbook.",
  },
] as const;

export const selectedWork = [
  {
    slug: "nutrimeals",
    index: "01",
    period: "2024 — now",
    org: "QUESTPIE s.r.o.",
    title: "Nutrimeals",
    summary:
      "A Slovak food-tech startup had smart fridges in offices and no app to find them. I came in as technical partner and built the mobile side and the backend it talks to.",
    bullets: [
      "React Native app that maps fridges and shows what is in them right now",
      "Canteen menus and stock kept in sync with the devices",
      "Push notifications and offline support so it works in a basement canteen",
    ],
    stack: ["React Native", "Expo", "Postgres", "Bun"],
    image: "/work/nutrimeals.jpg",
  },
  {
    slug: "prague-convention-bureau",
    index: "02",
    period: "2025",
    org: "QUESTPIE s.r.o.",
    title: "Prague Convention Bureau",
    summary:
      "Event planners needed to find a venue in Prague by capacity, layout and date, across a catalogue too large to filter in the browser. I owned the search and the admin behind it.",
    bullets: [
      "Capacity search that answers across the full catalogue without a full scan",
      "Admin dashboard with live availability and booking management",
    ],
    stack: ["PayloadCMS", "Next.js", "Postgres"],
    image: "/work/pcb.jpg",
  },
  {
    // NEEDS-FACT: the design names CODEUPP but no CV entry, repo or public
    // page describes it. Everything below is a placeholder shape, not a claim.
    slug: "codeupp",
    index: "03",
    period: "2024 — 2025",
    org: "QUESTPIE s.r.o.",
    title: "CODEUPP",
    summary: "NEEDS-FACT — tell me what this was and what you owned.",
    bullets: [],
    stack: ["Next.js", "Strapi"],
    image: "/work/codeupp.jpg",
  },
] as const;

export const workFooter = {
  note: "Thirteen projects since 2021, for clients in Slovakia, Czechia and Italy.",
  cta: { label: "All 13 projects", href: "/work" },
} as const;

export const questpie = {
  title: "QUESTPIE",
  body: "QUESTPIE is the framework I build client backends with. You declare a schema, and it generates the database columns, the REST API, the typed client and an admin panel from that one declaration. It does not host anything and it does not ask for a key — you run it on your own machine.",
  stats: [
    { value: "v4", label: "In production" },
    { value: "MIT", label: "Open source" },
    { value: "2024", label: "Since" },
  ],
  code: [
    { kind: "comment", text: "// schema.ts" },
    { kind: "line", text: "export const meal = entity('meal', {" },
    { kind: "indent", text: "name: text().required()," },
    { kind: "indent", text: "portions: int().min(1)," },
    { kind: "indent", text: "kitchen: relation('kitchen')," },
    { kind: "line", text: "});" },
    { kind: "comment", text: "// generated: server · REST · client · admin" },
  ],
  built: [
    { name: "Nutrimeals", status: "Built on QUESTPIE" },
    { name: "QUESTPIE Studio", status: "Live on QUESTPIE" },
    { name: "petguide", status: "Deploying" },
  ],
  ctas: [
    { label: "Read the docs", href: site.links.questpieDocs, external: true },
    { label: "GitHub", href: site.links.githubOrg, external: true },
  ],
} as const;

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
    "Building QUESTPIE v4 and shipping it as the backend under two client products at the same time. The framework only earns its keep if it survives real deadlines.",
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
  body: "Send the problem, not a spec. A paragraph about what breaks today is enough to tell whether I am the right person, and you get an answer within two working days.",
  email: site.email,
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "QUESTPIE", href: "/#questpie" },
  { label: "About", href: "/about" },
] as const;
