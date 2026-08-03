import { site } from "@/content/site";
import { byRelevance, work } from "@/content/work";

export type NavChild = {
  label: string;
  href: string;
  note?: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

/** The four strongest projects, so the menu is a shortcut and not a directory. */
const topProjects: NavChild[] = byRelevance.slice(0, 4).map((project) => ({
  label: project.title,
  href: `/work/${project.slug}`,
  note: project.period,
}));

export const navigation: NavItem[] = [
  {
    label: "Work",
    href: "/work",
    children: [
      ...topProjects,
      { label: `All ${work.length} projects`, href: "/work" },
    ],
  },
  {
    label: "QUESTPIE",
    href: "/#questpie",
    children: [
      {
        label: "Framework",
        href: `${site.links.questpie}/framework`,
        note: "Schema in, backend out",
        external: true,
      },
      {
        label: "Autopilot",
        href: `${site.links.questpie}/autopilot`,
        note: "Software you can staff",
        external: true,
      },
      { label: "GitHub", href: site.links.githubOrg, external: true },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About", href: "/about", note: "How I work, what I decline" },
      { label: "CV", href: "/cv", note: "One page, printable" },
    ],
  },
];

export const footerColumns = [
  {
    title: "Work",
    links: [
      ...byRelevance.slice(0, 4).map((project) => ({
        label: project.title,
        href: `/work/${project.slug}`,
        external: false,
      })),
      { label: `All ${work.length} projects`, href: "/work", external: false },
    ],
  },
  {
    title: "QUESTPIE",
    links: [
      {
        label: "Framework",
        href: `${site.links.questpie}/framework`,
        external: true,
      },
      {
        label: "Autopilot",
        href: `${site.links.questpie}/autopilot`,
        external: true,
      },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: site.links.github, external: true },
      { label: "LinkedIn", href: site.links.linkedin, external: true },
      { label: `Email`, href: `mailto:${site.email}`, external: true },
    ],
  },
];
