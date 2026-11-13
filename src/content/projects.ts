import type { Locale } from "./i18n";

export const projects = {
  autopilot: {
    name: "QUESTPIE Autopilot", href: "https://questpie.com",
    en: "A workspace where people and AI agents share tasks, documents and tools.",
    sk: "Pracovný priestor, v ktorom ľudia a AI agenti zdieľajú úlohy, dokumenty a nástroje.",
  },
  antil: {
    name: "antil", href: "https://antil.dev",
    en: "Each coding agent gets its own running app. Workers share services and reuse test results when their inputs match.",
    sk: "Každý programovací agent má vlastnú bežiacu aplikáciu. Prostredia zdieľajú služby a pri rovnakých vstupoch aj výsledky testov.",
  },
  jubli: {
    name: "Jubli",
    en: "A social space for each event. Guests join by scanning a QR code. In pilot.",
    sk: "Spoločný priestor pre hostí podujatia. Pripoja sa cez QR kód. Projekt je v pilotnej prevádzke.",
  },
  framework: {
    name: "QUESTPIE Framework", href: "https://questpie.com/framework",
    en: "A TypeScript backend framework. One schema generates the database, API, client and admin.",
    sk: "Backendový framework v TypeScripte. Z jednej schémy vytvorí databázu, API, klienta a administráciu.",
  },
  migrations: {
    name: "drizzle-migrations", href: "https://github.com/drepkovsky/drizzle-migrations",
    en: "Hand-written migrations and rollbacks for Drizzle.",
    sk: "Ručne písané migrácie a ich vrátenie späť pre Drizzle.",
  },
  mealproai: {
    name: "MealProAI",
    en: "An AI meal planner with recipes and shopping lists. Retired.",
    sk: "AI plánovač jedál s receptami a nákupnými zoznamami. Vývoj je ukončený.",
  },
  byvak: {
    name: "byvak",
    en: "A booking platform for accommodation. Retired.",
    sk: "Rezervačná platforma pre ubytovania. Vývoj je ukončený.",
  },
  bulkit: {
    name: "Bulkit", href: "https://github.com/questpie/bulkit.dev",
    en: "A self-hosted social media scheduler. Its role moved into Autopilot.",
    sk: "Plánovanie príspevkov na sociálne siete na vlastnom serveri. Túto úlohu prevzal Autopilot.",
  },
  crust: {
    name: "Crust",
    en: "A modular framework built on Payload. It preceded QUESTPIE Framework and is now retired.",
    sk: "Modulárny framework nad Payloadom. Predchádzal QUESTPIE Frameworku a jeho vývoj je ukončený.",
  },
  yielda: {
    name: "Yielda", href: "https://yielda.eu",
    en: "The food-service platform I’m building alongside Nutrimeals.",
    sk: "Gastro platforma, na ktorej pracujem spolu s Nutrimeals.",
  },
  nutrimeals: {
    name: "Nutrimeals", href: "https://nutrimeals.eu",
    en: "An ordering app and backend for smart canteens and connected fridges.",
    sk: "Objednávková aplikácia a backend pre inteligentné jedálne a chladničky.",
  },
} as const;

export type ProjectKey = keyof typeof projects;
export type Project = { name: string; href?: string } & Record<Locale, string>;
