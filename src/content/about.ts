/**
 * The long version. This page does the work the homepage cannot: it tells a
 * client how an engagement actually runs and what gets turned down.
 *
 * The 30-day support window comes from the jinejsvet.cz quote. The rest of
 * "How I work" is drafted from how the projects actually ran — check it.
 */

export const aboutPage = {
  eyebrow: "About",
  headline:
    "I run a small software studio in Bratislava, and I write the tools it runs on.",
  intro:
    "We are three at QUESTPIE. I take contract work on backends and mobile apps for companies in Slovakia, Czechia and Italy, and I am the one on your backend, but the bus factor is not one.",
} as const;

export const longVersion = [
  "I started at FIIT STU in Bratislava in 2020 and took paid work the same year. By the second year of the bachelor's I was on a team of nine at UXtweak building a usability testing platform, which is where I learned that the hard part is never the feature: it is the twenty things that break around it. I finished the Ing. in 2025 while running the company.",
  "Across every one of those projects the same eighty percent kept coming back: auth, uploads, roles, admin screens, the job queue, the deploy. Every client paid for it again, and every time I rebuilt it slightly differently, so every codebase then aged differently too. QUESTPIE started as the answer: declare the schema, generate the rest. It now sits under most of what I ship.",
  "QUESTPIE runs client products in production today, which is the only test that matters for a framework. The next two years go to Autopilot and Cloud: the layer that operates a company and the place it runs. The contract work is not a bridge to that. It is what keeps the framework honest.",
] as const;

export const howIWork = [
  {
    label: "Engagement",
    title: "A call, then a written scope",
    body: "The first call is thirty minutes and costs nothing, and I will tell you if you do not need me. If we go ahead you get a written scope with a price per milestone, not an hourly guess.",
  },
  {
    label: "Rhythm",
    title: "You see it every week",
    body: "Work goes to a staging environment you can open yourself, and every Friday you get a short note on what moved and what did not. If something is going to slip, you hear it that week rather than at the deadline.",
  },
  {
    label: "Handover",
    title: "You own all of it",
    body: "The repo, the servers and the domains sit in your accounts from the first day, not mine. At the end you get a runbook, a walkthrough recording, and thirty days where you can still ask me anything.",
  },
] as const;

export const decline = {
  intro:
    "Saying no early is cheaper for both of us than finding the mismatch in month three.",
  items: [
    "Work that needs a bigger team than mine. If the honest estimate is ten people, we are the wrong shape, and you will hear that on the first call.",
    "Projects where I cannot touch production. If someone else owns the deploy and I only hand over a branch, I cannot promise you the thing works.",
    "Rescues where nothing may change. I can write down how a codebase behaves, but if the answer to every finding is leave it, the audit was the whole job.",
  ],
} as const;

export const facts = [
  {
    key: "2023—2025",
    value:
      "**FIIT STU Bratislava** — Ing. (MSc), Intelligent Software Systems.",
  },
  {
    key: "2020—2023",
    value: "**FIIT STU Bratislava** — Bc., Computer Science.",
  },
  {
    // No CEFR level for English on purpose: the reader is already reading a
    // page of it, so a self-assessed grade can only argue with the evidence.
    // Framed by what work can happen in each instead.
    key: "Languages",
    value:
      "**Slovak and Czech** natively. **English** for everything else. Every client outside Slovakia works with me in it.",
  },
  {
    key: "Company",
    value: "QUESTPIE s.r.o. — IČO 54027292, Slovakia.",
  },
] as const;

export const aboutClosing = {
  headline: "Tell me what you want to build.",
} as const;
