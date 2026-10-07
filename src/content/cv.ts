/**
 * The CV is the one page that leaves the site as a file, so its copy is kept
 * apart from the client-facing voice in site.ts. Everything here has to be
 * true on paper without the rest of the site around it.
 */

export const cvIntro =
  "I take products from an empty repo to production in TypeScript and I can carry the whole thing, from the database schema to the servers it runs on. Lately that means a workspace where AI agents work inside a company under real permissions.";

/** Each figure is backed by an entry in work.ts; change them together. */
export const cvFigures = [
  {
    value: "200+",
    label: "client shops running on one e-commerce template I built",
  },
  {
    value: "2,000+",
    label: "registered users on MealProAI, my first AI product",
  },
  {
    value: "8 weeks",
    label: "from an empty repo to production for the current Autopilot",
  },
] as const;

export const cvEmployment = [
  {
    role: "Founder & lead developer",
    org: "QUESTPIE s.r.o.",
    period: "2021–now",
    points: [
      "Building QUESTPIE Autopilot, an AI native workspace that replaces the usual stack of task tracker, team chat, wiki, automations and internal tools. People and AI agents work in it side by side and share one context.",
      "Agents hold their own permissions like any employee. The server checks every tool call again and sends anything an agent may not do to a human for approval. The same commands are open to Claude through an MCP server with OAuth, and companies build their own mini apps inside it.",
      "Took the current version from an empty repo to production in eight weeks with over 2,000 commits and 400 test files. Most of the code is written by coding agents I direct under strict engineering rules, automated checks and independent review.",
      "Wrote QUESTPIE, the open source framework that generates the database, API, MCP and admin from one TypeScript schema. Our products and client work in Slovakia, Czechia and Italy run on it.",
      "Built an e-commerce template for Eliaš IT Solutions that they could resell. More than 200 of their clients run on it, and their team kept building on it after I left.",
    ],
  },
  {
    role: "Senior full-stack developer",
    org: "AMCEF a.s.",
    period: "Dec 2024–Jun 2025",
    points: [
      "Built the Schenker logistics module and third-party integrations for Modulario, a low-code platform.",
      "Designed MongoDB schemas and tuned queries for enterprise-scale data, and ran background processing on BullMQ and Redis.",
    ],
  },
  {
    role: "Full-stack developer",
    org: "UXtweak j.s.a.",
    period: "2021–2023",
    points: [
      "Owned the recruitment workflow that lets researchers order precisely targeted participants inside the platform.",
      "Designed and built the service architecture behind moderated testing, including live-session orchestration and recordings.",
    ],
  },
] as const;

/** Slugs from work.ts, in the order a hiring reader should meet them. */
export const cvProjects = [
  "autopilot",
  "questpie",
  "jubli",
  "mealproai",
  "drizzle-migrations",
] as const;

export const cvSkills = [
  {
    group: "Languages",
    items: "TypeScript · JavaScript · Node · Bun",
  },
  {
    group: "Backend",
    items:
      "QUESTPIE · Hono · Elysia · NestJS · REST / OpenAPI · Better Auth · pg-boss · BullMQ",
  },
  {
    group: "Frontend & mobile",
    items:
      "React · Next.js · TanStack Start / Router / Query · React Native · Expo · Tailwind",
  },
  {
    group: "Data",
    items: "Postgres · Drizzle · Redis · MongoDB · pgvector · query tuning",
  },
  {
    group: "AI systems",
    items: "AI SDK · MCP · coding-agent runtimes · tool execution",
  },
  {
    group: "Infrastructure",
    items:
      "Docker · Kubernetes (K3s) · Terraform · Flux GitOps · Woodpecker CI · Hetzner · S3 / R2",
  },
] as const;
