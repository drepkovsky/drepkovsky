export const site = {
  name: "Dominik Repkovský",
  email: "dominik@questpie.com",
  links: {
    checkly: "https://www.checklyhq.com",
    questpie: "https://questpie.com",
    antil: "https://antil.dev",
    github: "https://github.com/drepkovsky",
    linkedin: "https://www.linkedin.com/in/drepkovsky/",
  },
} as const;

type Experience = {
  company: string;
  role: string;
  period: string;
  href?: string;
  projects: { name: string; href: string }[];
};

// Checkly's start month was supplied without a year. Other dates and roles
// come from the previous portfolio, including Eliaš's contract engagement.
export const experience: Experience[] = [
  {
    company: "Checkly",
    role: "Product Engineer",
    period: "Since October",
    href: site.links.checkly,
    projects: [],
  },
  {
    company: "QUESTPIE",
    role: "Founder",
    period: "2021 — now",
    href: site.links.questpie,
    projects: [
      { name: "Yielda", href: "https://yielda.eu" },
      { name: "Nutrimeals", href: "https://nutrimeals.eu" },
    ],
  },
  {
    company: "Eliaš IT Solutions",
    role: "Frontend lead · contract",
    period: "2023 — 2024",
    projects: [{ name: "eliadmin.sk", href: "https://eliadmin.sk" }],
  },
  {
    company: "UXtweak",
    role: "Full-stack Developer",
    period: "2021 — 2023",
    href: "https://www.uxtweak.com",
    projects: [],
  },
];

export const experienceSk: Experience[] = [
  { ...experience[0], period: "Od októbra" },
  { ...experience[1], role: "Zakladateľ", period: "2021 — súčasnosť" },
  { ...experience[2], role: "Vedúci frontend vývoja · kontrakt" },
  { ...experience[3], role: "Full-stack vývojár" },
];
