const skills = [
  { en: "Languages", sk: "Jazyky", items: "TypeScript · JavaScript · Node · Bun" },
  { en: "Backend", sk: "Backend", items: "QUESTPIE · Hono · Elysia · NestJS · REST / OpenAPI · Better Auth · pg-boss · BullMQ" },
  { en: "Frontend & mobile", sk: "Frontend a mobilné aplikácie", items: "React · Vue · Next.js · TanStack Start / Router / Query · React Native · Expo · Tailwind" },
  { en: "Data", sk: "Dáta", items: "Postgres · Drizzle · Redis · MongoDB · pgvector" },
  { en: "AI systems", sk: "AI systémy", items: "AI SDK · MCP · coding-agent runtimes · tool execution" },
  { en: "Infrastructure", sk: "Infraštruktúra", items: "Docker · Kubernetes (K3s) · Terraform · Flux GitOps · Woodpecker CI · Hetzner · S3 / R2" },
];

export const cvProjects = ["autopilot", "questpie", "jubli", "mealproai", "drizzle-migrations"];

// Experience and historical outcomes come from the previous CV and project
// inventory. Checkly's title and start month were supplied directly.
export const cvContent = {
  en: {
    intro: "I build TypeScript applications, APIs and the infrastructure they run on.",
    figures: [
      { value: "200+", label: "shops using the e-commerce template I built" },
      { value: "2,000+", label: "registered users on MealProAI" },
      { value: "8 weeks", label: "from an empty repo to Autopilot in production" },
    ],
    employment: [
      { org: "Checkly", role: "Product Engineer", period: "Since October", points: [] },
      {
        org: "QUESTPIE s.r.o.", role: "Founder & lead developer", period: "2021–now",
        points: [
          "Building Autopilot, a workspace where people and AI agents share tasks, documents and tools. The server checks each agent’s permissions before it acts.",
          "I use Autopilot to direct coding agents. I set the scope, review their changes and verify the result with tests.",
          "Building antil, a local-first tool that gives each coding agent its own app environment and shares services between workers.",
          "Created QUESTPIE Framework. One TypeScript schema generates the database, API, client and admin. Client products in Slovakia, Czechia and Italy run on it.",
          "Building Yielda and Nutrimeals, including the ordering app and backend for smart canteens and connected fridges.",
        ],
      },
      {
        org: "AMCEF a.s.", role: "Senior full-stack developer", period: "Dec 2024–Jun 2025",
        points: [
          "Built the Schenker logistics module and integrations for Modulario.",
          "Designed MongoDB schemas, tuned queries and ran background jobs with BullMQ and Redis.",
        ],
      },
      {
        org: "Eliaš IT Solutions", role: "Frontend lead · contract", period: "2023–2024",
        points: [
          "Rebuilt an e-commerce template in Next.js, then led two frontend developers through delivery. More than 200 client shops use it.",
        ],
      },
      {
        org: "UXtweak j.s.a.", role: "Full-stack developer", period: "2021–2023",
        points: [
          "Built the workflow for recruiting research participants inside the platform.",
          "Designed and built services for moderated testing, live sessions and recordings.",
        ],
      },
    ],
    skills: skills.map(({ en, items }) => ({ group: en, items })),
    education: [
      { period: "2023–2025", degree: "Ing. (MSc), Intelligent Software Systems" },
      { period: "2020–2023", degree: "Bc., Computer Science" },
    ],
  },
  sk: {
    intro: "Vyvíjam aplikácie v TypeScripte, ich API aj infraštruktúru.",
    figures: [
      { value: "200+", label: "e-shopov používa šablónu, ktorú som vytvoril" },
      { value: "2 000+", label: "registrovaných používateľov MealProAI" },
      { value: "8 týždňov", label: "od prázdneho repozitára po Autopilot v produkcii" },
    ],
    employment: [
      { org: "Checkly", role: "Product Engineer", period: "Od októbra", points: [] },
      {
        org: "QUESTPIE s.r.o.", role: "Zakladateľ a vedúci vývojár", period: "2021–súčasnosť",
        points: [
          "Vyvíjam Autopilot, priestor, v ktorom ľudia a AI agenti zdieľajú úlohy, dokumenty a nástroje. Server pred každou akciou overí oprávnenia agenta.",
          "Cez Autopilot zadávam prácu programovacím agentom. Určujem zadanie, kontrolujem zmeny a výsledok overujem testami.",
          "Vyvíjam antil. Každý programovací agent má vlastné prostredie aplikácie, pričom služby sa medzi prostrediami zdieľajú.",
          "Vytvoril som QUESTPIE Framework. Z jednej TypeScript schémy generuje databázu, API, klienta a administráciu. Bežia na ňom produkty klientov na Slovensku, v Česku a Taliansku.",
          "Pracujem na Yielda a Nutrimeals vrátane objednávkovej aplikácie a backendu pre inteligentné jedálne a chladničky.",
        ],
      },
      {
        org: "AMCEF a.s.", role: "Senior full-stack vývojár", period: "Dec 2024–jún 2025",
        points: [
          "Vytvoril som logistický modul Schenker a integrácie pre Modulario.",
          "Navrhoval som MongoDB schémy, optimalizoval dotazy a spracúval úlohy cez BullMQ a Redis.",
        ],
      },
      {
        org: "Eliaš IT Solutions", role: "Vedúci frontend vývoja · kontrakt", period: "2023–2024",
        points: [
          "Prepísal som e-commerce šablónu do Next.js a viedol dvoch frontend vývojárov až po nasadenie. Používa ju viac než 200 klientskych e-shopov.",
        ],
      },
      {
        org: "UXtweak j.s.a.", role: "Full-stack vývojár", period: "2021–2023",
        points: [
          "Vytvoril som postup na získavanie účastníkov výskumu priamo v platforme.",
          "Navrhol a vytvoril som služby pre moderované testovanie, živé relácie a nahrávanie.",
        ],
      },
    ],
    skills: skills.map(({ sk, items }) => ({ group: sk, items })),
    education: [
      { period: "2023–2025", degree: "Ing., Inteligentné softvérové systémy" },
      { period: "2020–2023", degree: "Bc., Informatika" },
    ],
  },
};
