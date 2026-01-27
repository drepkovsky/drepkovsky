import type { ResumeData } from "./types";

export type Language = 'sk' | 'cz' | 'en';

export const RESUME_DATA_SK: ResumeData = {
	name: "Ing. Dominik Repkovský",
	title: "Full-Stack TypeScript Developer & Tvorca Frameworkov",
	contact: {
		email: "dominik.repkovsky@questpie.com",
		phone: "+421 917 204 633",
		location: "Bratislava, Slovenská republika",
		born: "19. december 2000",
		website: ["drepkovsky.com", "questpie.com"],
		github: ["github.com/questpie", "github.com/drepkovsky"],
		linkedin: "linkedin.com/in/drepkovsky",
	},
	about:
		"Full-stack TypeScript developer s magisterským titulom v odbore Inteligentné softvérové systémy. Profesionálne programujem už viac ako 6 rokov, pracoval som na všetkom od enterprise platforiem po startupy. Založil som QUESTPIE s.r.o., kde vyvíjam webové aplikácie pre klientov a pracujem na open-source projektoch. Nedávno som vytvoril QUESTPIE CMS - type-safe headless CMS postavený na Drizzle ORM a Hono. Bavím sa moderným TypeScript toolingom, optimalizáciou PostgreSQL a multi-tenant architektúrami.",
	experience: [
		{
			role: "Zakladateľ & Lead Developer",
			company: "QUESTPIE s.r.o.",
			location: "Bratislava, Slovenská republika",
			period: "November 2020 - Súčasnosť",
			description:
				"Vývoj webových aplikácií a SaaS produktov pre klientov a práca na open-source projektoch.",
			achievements: [
				"Práca na rôznorodých projektoch - od malých lokálnych firiem po medzinárodných klientov.",
				"Nastavenie multi-tenant infraštruktúry pomocou Docker a Kubernetes na Hetzner Cloud.",
				"Veľa času stráveného optimalizáciou PostgreSQL dotazov a dizajnom databázových schém.",
				"Vývoj real-time funkcionalít pomocou Redis Pub/Sub a WebSocket pripojení.",
			],
		},
		{
			role: "Senior Full-Stack Developer",
			company: "AMCEF a.s.",
			location: "Bratislava, Slovenská republika",
			period: "December 2024 - Máj 2025",
			description:
				"Práca na Modulario - no-code/low-code platforme pre tvorbu business systémov.",
			achievements: [
				"Vývoj integrácie so zasielateľskými spoločnosťami",
				"Práca na multi-tenant systéme distribúcie modulov s verzovaním a synchronizačnou logikou.",
				"Tímovo orientovaná práca, git-based workflow s code review a CI/CD pipeline.",
			],
			techStack: "TypeScript, React, FeatherJS, PostgreSQL, Redis",
			link: "modulario.com",
		},
		{
			role: "Senior Full-Stack Developer",
			company: "UXtweak j.s.a.",
			location: "Bratislava, Slovenská republika",
			period: "September 2021 - September 2023",
			description:
				"Práca na platforme pre usability testing v tíme 5-9 vývojárov.",
			achievements: [
				"Vývoj funkcie nákupu respondentov integrovanej s Cint Supplier API.",
				"Vytvorenie CRM-like systému pre správu a import respondentov.",
				"Implementácia video meeting služby pomocou NestJS a Zoom.us API.",
			],
			techStack: "TypeScript, React, NestJS, PostgreSQL, Redis, Docker",
		},
	],
	projects: {
		client: [
			{
				name: "Venue Finder",
				description: "Systém správy priestorov pre Prague Convention Bureau.",
				details: [
					"Optimalizácia PostgreSQL dotazov pre filtrovanie a agregácie.",
					"Admin dashboard so synchronizáciou dát z externých zdrojov.",
				],
				period: "December 2025",
			},
			{
				name: "Nutrimeals",
				description:
					"Mobilná aplikácia pre správu inteligentnej chladničky (EIT Food Member startup).",
				details: [
					"React Native + Expo aplikácia pre iOS, Android a Web.",
					"Vyhľadávanie chladničiek, real-time dostupnosť, offline režim, push notifikácie.",
				],
				period: "2025 - Súčasnosť",
			},
			{
				name: "eliadmin.sk",
				description: "E-commerce platforma nextjs šablóna pre slovenského klienta.",
				details: [
					"Webový frontend a mobilné aplikácie.",
					"Platobné brány, správa objednávok, priebežná údržba.",
					"Implementované moduly ako blog, FAQ, recenzie a ďalšie.",
				],
				period: "2023 - Súčasnosť",
			},
			{
				name: "Pomoc Motoristom",
				description: "Prepracovanie platformy s vlastným CMS a obsahovými workflow.",
				details: [
					"CMS s redakčným schvaľovacím procesom.",
					"Multi-jazyková podpora a SEO.",
					"Momentálne vo fáze testovania.",
				],
				period: "2025 (Testovanie)",
			},
			{
				name: "Rosmami",
				description:
					"Aplikácia pre správu špajze a plánovanie jedál pre talianskeho klienta.",
				details: [
					"React Native Expo aplikácia (Web, iOS, Android).",
					"Inteligentné návrhy ingrediencií na zníženie plytvania jedlom.",
				],
				period: "2024 - 2025",
			},
		],
		product: [
			{
				name: "QUESTPIE Studio",
				description:
					"Multi-tenant SaaS platforma pre správu QUESTPIE CMS deploymentov.",
				details: [
					"Vlastný multi-tenant deployment systém na Hetzner Cloud pomocou Docker + Kubernetes.",
					"AI builder pre flexibilné úpravy stránok a projektov, založený na QUESTPIE CMS.",
					"Správa používateľov, fakturácia, automatické zálohy a monitoring.",
				],
				period: "Vo vývoji",
			},
			{
				name: "Byvak.com",
				description:
					"Rezervačná platforma pre rekreačné prenájmy a ubytovania.",
				details: [
					"Postavené na React (Vite) a NestJS backende.",
					"Správa rezervácií, platieb, izieb a zľavových systémov.",
					"Správa storno poplatkov a automatizované rezervačné workflow.",
				],
				period: "2020 - Súčasnosť",
				link: "byvak.com",
			},
		],
		openSource: [
			{
				name: "QUESTPIE CMS",
				description: "Type-safe headless CMS postavený na Drizzle ORM a Hono.",
				details: [
					"Zahŕňa auth, storage, fronty a type-safe API generovanie priamo z krabice.",
					"Spustil som to, pretože som chcel lepší DX ako ponúka PayloadCMS.",
				],
				link: "https://questpie.com/",
				period: "Dec 2025 - Súčasnosť",
			},
			{
				name: "drizzle-migrations",
				description: "Proof-of-concept pre up/down migrácie v Drizzle ORM.",
				details: [
					"Vytvoril som to predtým, ako Drizzle mal oficiálnu podporu pre reverzibilné migrácie.",
					"Adaptovaná migračná logika z PayloadCMS aby fungovala standalone.",
				],
				link: "npmjs.com/package/@drepkovsky/drizzle-migrations",
				period: "2024",
			},
			{
				name: "tinydi",
				description: "Type-safe dependency injection kontajner.",
				details: [
					"Zvláda sync/async resolvovanie, cirkulárne závislosti a lazy evaluáciu.",
					"Žiadne dekorátory, nulové závislosti, len TypeScript typy a funkcie.",
				],
				link: "npmjs.com/package/@drepkovsky/tinydi",
				period: "2025",
			},
			{
				name: "bulkit.dev",
				description: "Open-source social media scheduler, ktorý môžete self-hostovať.",
				details: [
					"Postavený na TypeScript, zameraný na súkromie a vlastníctvo dát.",
					"Plánovanie príspevkov, správa obsahu naprieč viacerými platformami.",
				],
				link: "bulkit.dev",
				github: "bulkit.dev",
				period: "Vo vývoji",
			},
		],
	},
	education: [
		{
			degree: "Magisterský titul — Inteligentné softvérové systémy",
			institution: "STU v Bratislave (FIIT)",
			faculty: "Fakulta informatiky a informačných technológií",
			period: "2023 - 2025",
		},
		{
			degree: "Bakalársky titul — Informatika",
			institution: "STU v Bratislave (FIIT)",
			faculty: "Fakulta informatiky a informačných technológií",
			period: "2020 - 2023",
		},
		{
			degree: "Gymnázium",
			institution: "Gymnázium Varšavská cesta 1",
			faculty: "Žilina, Slovenská republika",
			period: "2012 - 2020",
		},
	],
	skills: [
		"TypeScript",
		"React",
		"Next.js",
		"React Native",
		"Hono",
		"NestJS",
		"PostgreSQL",
		"Drizzle ORM",
		"Redis",
		"Docker",
		"Kubernetes",
	],
	languages: [
		{ language: "Angličtina", level: "Vyššie stredný (B2)" },
		{ language: "Čeština", level: "Pokročilý (C1)" },
		{ language: "Slovenčina", level: "Rodný (C2)" },
	],
	achievements: [
		"Riadenie QUESTPIE s.r.o. viac ako 3 roky s viacerými klientskymi projektami.",
		"Vybudovanie a nasadenie multi-tenant SaaS infraštruktúry na Kubernetes.",
		"Vytvorenie QUESTPIE CMS - open-source type-safe headless CMS.",
	],
	interests: [
		"Zlepšovanie vývojárskej skúsenosti",
		"Budovanie kvalitných produktov",
		"Type-safe kód",
		"Open-source práca",
	],
};

export const RESUME_DATA_CZ: ResumeData = {
	name: "Ing. Dominik Repkovský",
	title: "Full-Stack TypeScript Developer & Tvůrce Frameworků",
	contact: {
		email: "dominik.repkovsky@questpie.com",
		phone: "+421 917 204 633",
		location: "Bratislava, Slovenská republika",
		born: "19. prosince 2000",
		website: ["drepkovsky.com", "questpie.com"],
		github: ["github.com/questpie", "github.com/drepkovsky"],
		linkedin: "linkedin.com/in/drepkovsky",
	},
	about:
		"Full-stack TypeScript developer s magisterským titulem v oboru Inteligentní softwarové systémy. Profesionálně programuji již více než 6 let, pracoval jsem na všem od enterprise platforem po startupy. Založil jsem QUESTPIE s.r.o., kde vyvíjím webové aplikace pro klienty a pracuji na open-source projektech. Nedávno jsem vytvořil QUESTPIE CMS - type-safe headless CMS postavený na Drizzle ORM a Hono. Baví mě moderní TypeScript tooling, optimalizace PostgreSQL a multi-tenant architektury.",
	experience: [
		{
			role: "Zakladatel & Lead Developer",
			company: "QUESTPIE s.r.o.",
			location: "Bratislava, Slovenská republika",
			period: "Listopad 2020 - Současnost",
			description:
				"Vývoj webových aplikací a SaaS produktů pro klienty a práce na open-source projektech.",
			achievements: [
				"Práce na různorodých projektech - od malých lokálních firem po mezinárodní klienty.",
				"Nastavení multi-tenant infrastruktury pomocí Docker a Kubernetes na Hetzner Cloud.",
				"Hodně času stráveného optimalizací PostgreSQL dotazů a designem databázových schémat.",
				"Vývoj real-time funkcionalit pomocí Redis Pub/Sub a WebSocket připojení.",
			],
		},
		{
			role: "Senior Full-Stack Developer",
			company: "AMCEF a.s.",
			location: "Bratislava, Slovenská republika",
			period: "Prosinec 2024 - Květen 2025",
			description:
				"Práce na Modulario - no-code/low-code platformě pro tvorbu business systémů.",
			achievements: [
				"Vývoj integrace s doručovatelskými společnostmi",
				"Práce na multi-tenant systému distribuce modulů s verzováním a synchronizační logikou.",
				"Týmově orientovaná práce, git-based workflow s code review a CI/CD pipeline.",
			],
			techStack: "TypeScript, React, FeatherJS, PostgreSQL, Redis",
			link: "modulario.com",
		},
		{
			role: "Senior Full-Stack Developer",
			company: "UXtweak j.s.a.",
			location: "Bratislava, Slovenská republika",
			period: "Září 2021 - Září 2023",
			description:
				"Práce na platformě pro usability testing v týmu 5-9 vývojářů.",
			achievements: [
				"Vývoj funkce nákupu respondentů integrované s Cint Supplier API.",
				"Vytvoření CRM-like systému pro správu a import respondentů.",
				"Implementace video meeting služby pomocí NestJS a Zoom.us API.",
			],
			techStack: "TypeScript, React, NestJS, PostgreSQL, Redis, Docker",
		},
	],
	projects: {
		client: [
			{
				name: "Venue Finder",
				description: "Systém správy prostor pro Prague Convention Bureau.",
				details: [
					"Optimalizace PostgreSQL dotazů pro filtrování a agregace.",
					"Admin dashboard se synchronizací dat z externích zdrojů.",
				],
				period: "Prosinec 2025",
			},
			{
				name: "Nutrimeals",
				description:
					"Mobilní aplikace pro správu inteligentní lednice (EIT Food Member startup).",
				details: [
					"React Native + Expo aplikace pro iOS, Android a Web.",
					"Vyhledávání lednic, real-time dostupnost, offline režim, push notifikace.",
				],
				period: "2025 - Současnost",
			},
			{
				name: "eliadmin.sk",
				description: "E-commerce platforma nextjs šablona pro slovenského klienta.",
				details: [
					"Webový frontend a mobilní aplikace.",
					"Platební brány, správa objednávek, průběžná údržba.",
					"Implementované moduly jako blog, FAQ, recenze a další.",
				],
				period: "2023 - Současnost",
			},
			{
				name: "Pomoc Motoristom",
				description: "Přepracování platformy s vlastním CMS a obsahovými workflow.",
				details: [
					"CMS s redakčním schvalovacím procesem.",
					"Multi-jazyková podpora a SEO.",
					"Momentálně ve fázi testování.",
				],
				period: "2025 (Testování)",
			},
			{
				name: "Rosmami",
				description:
					"Aplikace pro správu spíže a plánování jídel pro italského klienta.",
				details: [
					"React Native Expo aplikace (Web, iOS, Android).",
					"Inteligentní návrhy ingrediencí na snížení plýtvání jídlem.",
				],
				period: "2024 - 2025",
			},
		],
		product: [
			{
				name: "QUESTPIE Studio",
				description:
					"Multi-tenant SaaS platforma pro správu QUESTPIE CMS deploymentů.",
				details: [
					"Vlastní multi-tenant deployment systém na Hetzner Cloud pomocí Docker + Kubernetes.",
					"AI builder pro flexibilní úpravy stránek a projektů, založený na QUESTPIE CMS.",
					"Správa uživatelů, fakturace, automatické zálohy a monitoring.",
				],
				period: "Ve vývoji",
			},
			{
				name: "Byvak.com",
				description:
					"Rezervační platforma pro rekreační pronájmy a ubytování.",
				details: [
					"Postavené na React (Vite) a NestJS backendu.",
					"Správa rezervací, plateb, pokojů a slevových systémů.",
					"Správa storno poplatků a automatizované rezervační workflow.",
				],
				period: "2020 - Současnost",
				link: "byvak.com",
			},
		],
		openSource: [
			{
				name: "QUESTPIE CMS",
				description: "Type-safe headless CMS postavený na Drizzle ORM a Hono.",
				details: [
					"Zahrnuje auth, storage, fronty a type-safe API generování přímo z krabice.",
					"Spustil jsem to, protože jsem chtěl lepší DX než nabízí PayloadCMS.",
				],
				link: "https://questpie.com/",
				period: "Pro 2025 - Současnost",
			},
			{
				name: "drizzle-migrations",
				description: "Proof-of-concept pro up/down migrace v Drizzle ORM.",
				details: [
					"Vytvořil jsem to předtím, než Drizzle měl oficiální podporu pro reverzibilní migrace.",
					"Adaptovaná migrační logika z PayloadCMS aby fungovala standalone.",
				],
				link: "npmjs.com/package/@drepkovsky/drizzle-migrations",
				period: "2024",
			},
			{
				name: "tinydi",
				description: "Type-safe dependency injection kontejner.",
				details: [
					"Zvládá sync/async resolvování, cirkulární závislosti a lazy evaluaci.",
					"Žádné dekorátory, nulové závislosti, jen TypeScript typy a funkce.",
				],
				link: "npmjs.com/package/@drepkovsky/tinydi",
				period: "2025",
			},
			{
				name: "bulkit.dev",
				description: "Open-source social media scheduler, který můžete self-hostovat.",
				details: [
					"Postavený na TypeScript, zaměřený na soukromí a vlastnictví dat.",
					"Plánování příspěvků, správa obsahu napříč více platformami.",
				],
				link: "bulkit.dev",
				github: "bulkit.dev",
				period: "Ve vývoji",
			},
		],
	},
	education: [
		{
			degree: "Magisterský titul — Inteligentní softwarové systémy",
			institution: "STU v Bratislavě (FIIT)",
			faculty: "Fakulta informatiky a informačních technologií",
			period: "2023 - 2025",
		},
		{
			degree: "Bakalářský titul — Informatika",
			institution: "STU v Bratislavě (FIIT)",
			faculty: "Fakulta informatiky a informačních technologií",
			period: "2020 - 2023",
		},
		{
			degree: "Gymnázium",
			institution: "Gymnázium Varšavská cesta 1",
			faculty: "Žilina, Slovenská republika",
			period: "2012 - 2020",
		},
	],
	skills: [
		"TypeScript",
		"React",
		"Next.js",
		"React Native",
		"Hono",
		"NestJS",
		"PostgreSQL",
		"Drizzle ORM",
		"Redis",
		"Docker",
		"Kubernetes",
	],
	languages: [
		{ language: "Angličtina", level: "Vyšší střední (B2)" },
		{ language: "Čeština", level: "Pokročilý (C1)" },
		{ language: "Slovenština", level: "Rodný (C2)" },
	],
	achievements: [
		"Řízení QUESTPIE s.r.o. více než 3 roky s více klientskými projekty.",
		"Vybudování a nasazení multi-tenant SaaS infrastruktury na Kubernetes.",
		"Vytvoření QUESTPIE CMS - open-source type-safe headless CMS.",
	],
	interests: [
		"Zlepšování vývojářské zkušenosti",
		"Budování kvalitních produktů",
		"Type-safe kód",
		"Open-source práce",
	],
};

export const RESUME_DATA_EN: ResumeData = {
	name: "Ing. Dominik Repkovský",
	title: "Full-Stack TypeScript Developer & Framework Creator",
	contact: {
		email: "dominik.repkovsky@questpie.com",
		phone: "+421 917 204 633",
		location: "Bratislava, Slovak Republic",
		born: "December 19, 2000",
		website: ["drepkovsky.com", "questpie.com"],
		github: ["github.com/questpie", "github.com/drepkovsky"],
		linkedin: "linkedin.com/in/drepkovsky",
	},
	about:
		"Full-stack TypeScript developer with Master's degree in Intelligent Software Systems. I've been coding professionally for 6+ years, working on everything from enterprise platforms to startups. Founded QUESTPIE s.r.o. where I build web applications for clients and work on open-source projects. Recently created QUESTPIE CMS - a type-safe headless CMS built on Drizzle ORM and Hono. I enjoy working with modern TypeScript tools, PostgreSQL optimization, and multi-tenant architectures.",
	experience: [
		{
			role: "Founder & Lead Developer",
			company: "QUESTPIE s.r.o.",
			location: "Bratislava, Slovak Republic",
			period: "November 2020 - Present",
			description:
				"Building web applications and SaaS products for clients while working on open-source projects.",
			achievements: [
				"Working on diverse projects - from small local businesses to international clients.",
				"Set up multi-tenant infrastructure using Docker and Kubernetes on Hetzner Cloud.",
				"Spent a lot of time optimizing PostgreSQL queries and database schema design.",
				"Built real-time features using Redis Pub/Sub and WebSocket connections.",
			],
		},
		{
			role: "Senior Full-Stack Developer",
			company: "AMCEF a.s.",
			location: "Bratislava, Slovak Republic",
			period: "December 2024 - May 2025",
			description:
				"Working on Modulario - a no-code/low-code platform for building business systems.",
			achievements: [
				"Built 3rd integrations with shipping companies",
				"Worked on multi-tenant module distribution system with versioning and synchronization logic.",
				"Team oriented, git-based workflow with code reviews and CI/CD pipelines.",
			],
			techStack: "TypeScript, React, FeatherJS, PostgreSQL, Redis",
			link: "modulario.com",
		},
		{
			role: "Senior Full-Stack Developer",
			company: "UXtweak j.s.a.",
			location: "Bratislava, Slovak Republic",
			period: "September 2021 - September 2023",
			description:
				"Working on usability testing platform in a team of 5-9 developers.",
			achievements: [
				"Built respondent purchasing feature integrated with Cint Supplier API.",
				"Created CRM-like system for managing and importing respondents.",
				"Implemented video meeting service using NestJS and Zoom.us API.",
			],
			techStack: "TypeScript, React, NestJS, PostgreSQL, Redis, Docker",
		},
	],
	projects: {
		client: [
			{
				name: "Venue Finder",
				description: "Venue management system for Prague Convention Bureau.",
				details: [
					"Optimized PostgreSQL queries for filtering and aggregations.",
					"Admin dashboard with data syncing from external sources.",
				],
				period: "December 2025",
			},
			{
				name: "Nutrimeals",
				description:
					"Mobile app for smart refrigerator management (EIT Food Member startup).",
				details: [
					"React Native + Expo app for iOS, Android and Web.",
					"Refrigerator discovery, real-time availability, offline mode, push notifications.",
				],
				period: "2025 - Present",
			},
			{
				name: "eliadmin.sk",
				description: "E-commerce platform nextjs template for Slovak client.",
				details: [
					"Web frontend and mobile apps.",
					"Payment gateways, order management, ongoing maintenance.",
					"Implemented modules like blog, FAQ, reviews, and more.",
				],
				period: "2023 - Present",
			},
			{
				name: "Pomoc Motoristom",
				description: "Platform rework with custom CMS and content workflows.",
				details: [
					"CMS with editorial approval process.",
					"Multi-language support and SEO.",
					"Currently in testing phase.",
				],
				period: "2025 (Testing)",
			},
			{
				name: "Rosmami",
				description:
					"Pantry management and meal planning app for Italian client.",
				details: [
					"React Native Expo app (Web, iOS, Android).",
					"Smart ingredient suggestions to reduce food waste.",
				],
				period: "2024 - 2025",
			},
		],
		product: [
			{
				name: "QUESTPIE Studio",
				description:
					"Multi-tenant SaaS platform for managing QUESTPIE CMS deployments.",
				details: [
					"Custom multi-tenant deployment system on Hetzner Cloud using Docker + Kubernetes.",
					"AI builder for flexible site and project refinements, based upon QUESTPIE CMS.",
					"User management, billing, automated backups and monitoring.",
				],
				period: "Under Development",
			},
			{
				name: "Byvak.com",
				description:
					"Reservation platform for vacation rentals and accommodations.",
				details: [
					"Built with React (Vite) and NestJS backend.",
					"Handles reservations, payments, room management, and discount systems.",
					"Cancellation fee management and automated booking workflows.",
					// "In production for 4+ years, serving clients like chatacerenka.sk.",
				],
				period: "2020 - Present",
				link: "byvak.com",
			},
		],
		openSource: [
			{
				name: "QUESTPIE CMS",
				description: "Type-safe headless CMS built on Drizzle ORM and Hono.",
				details: [
					"Includes auth, storage, queues, and type-safe API generation out of the box.",
					"Started it because I wanted better DX than what PayloadCMS offers.",
				],
				link: "https://questpie.com/",
				period: "Dec 2025 - Present",
			},
			{
				name: "drizzle-migrations",
				description: "Proof-of-concept for up/down migrations in Drizzle ORM.",
				details: [
					"Made this before Drizzle had official support for reversible migrations.",
					"Adapted migration logic from PayloadCMS to work standalone.",
				],
				link: "npmjs.com/package/@drepkovsky/drizzle-migrations",
				period: "2024",
			},
			{
				name: "tinydi",
				description: "Type-safe dependency injection container.",
				details: [
					"Handles sync/async resolution, circular dependencies, and lazy evaluation.",
					"No decorators, zero dependencies, just TypeScript types and functions.",
				],
				link: "npmjs.com/package/@drepkovsky/tinydi",
				period: "2025",
			},
			{
				name: "bulkit.dev",
				description: "Open-source social media scheduler you can self-host.",
				details: [
					"Built with TypeScript, focused on privacy and owning your data.",
					"Schedule posts, manage content across multiple platforms.",
				],
				link: "bulkit.dev",
				github: "bulkit.dev",
				period: "Under Development",
			},
		],
	},
	education: [
		{
			degree: "Master's Degree — Intelligent Software Systems",
			institution: "STU in Bratislava (FIIT)",
			faculty: "Faculty of Informatics and Information Technologies",
			period: "2023 - 2025",
		},
		{
			degree: "Bachelor's Degree — Computer Science",
			institution: "STU in Bratislava (FIIT)",
			faculty: "Faculty of Informatics and Information Technologies",
			period: "2020 - 2023",
		},
		{
			degree: "Grammar School",
			institution: "Gymnázium Varšavská cesta 1",
			faculty: "Žilina, Slovak Republic",
			period: "2012 - 2020",
		},
	],
	skills: [
		"TypeScript",
		"React",
		"Next.js",
		"React Native",
		"Hono",
		"NestJS",
		"PostgreSQL",
		"Drizzle ORM",
		"Redis",
		"Docker",
		"Kubernetes",
	],
	languages: [
		{ language: "English", level: "Upper Intermediate (B2)" },
		{ language: "Czech", level: "Advanced (C1)" },
		{ language: "Slovak", level: "Native (C2)" },
	],
	achievements: [
		"Running QUESTPIE s.r.o. for 3+ years with multiple client projects.",
		"Built and deployed multi-tenant SaaS infrastructure on Kubernetes.",
		"Created QUESTPIE CMS - an open-source type-safe headless CMS.",
	],
	interests: [
		"Improving developer experience",
		"Building quality products",
		"Type-safe code",
		"Open-source work",
	],
};

export const RESUME_DATA: ResumeData = RESUME_DATA_EN;

export const getResumeData = (language: Language): ResumeData => {
	switch (language) {
		case 'sk':
			return RESUME_DATA_SK;
		case 'cz':
			return RESUME_DATA_CZ;
		case 'en':
			return RESUME_DATA_EN;
		default:
			return RESUME_DATA_EN;
	}
};

export const UI_TRANSLATIONS = {
	sk: {
		whereWorked: "Kde som pracoval",
		clientWork: "Práca pre klientov",
		sideProjects: "Vedľajšie projekty & open source",
		whatStudied: "Čo som študoval",
		getInTouch: "Kontakt",
		mySkills: "Moje zručnosti",
		myInterests: "Moje záujmy",
		languagesSpeak: "Jazyky, ktorými hovorím",
		notableThings: "Niektoré významné veci",
		switchToLight: "Svetlý režim",
		switchToDark: "Tmavý režim",
		printCV: "Tlačiť CV",
		printSavePDF: "Tlačiť / Uložiť PDF",
		footerDesign: "Dizajnované s QUESTPIE Design System • Postavené na React & Tailwind",
		lastUpdated: "Posledná aktualizácia: Január 2026",
		email: "Email",
		phone: "Telefón",
		location: "Lokalita",
		website: "Web",
		github: "GitHub",
		linkedin: "LinkedIn",
	},
	cz: {
		whereWorked: "Kde jsem pracoval",
		clientWork: "Práce pro klienty",
		sideProjects: "Vedlejší projekty & open source",
		whatStudied: "Co jsem studoval",
		getInTouch: "Kontakt",
		mySkills: "Moje dovednosti",
		myInterests: "Moje zájmy",
		languagesSpeak: "Jazyky, kterými mluvím",
		notableThings: "Některé významné věci",
		switchToLight: "Světlý režim",
		switchToDark: "Tmavý režim",
		printCV: "Tisknout CV",
		printSavePDF: "Tisknout / Uložit PDF",
		footerDesign: "Navrženo s QUESTPIE Design System • Postaveno na React & Tailwind",
		lastUpdated: "Poslední aktualizace: Leden 2026",
		email: "Email",
		phone: "Telefon",
		location: "Lokalita",
		website: "Web",
		github: "GitHub",
		linkedin: "LinkedIn",
	},
	en: {
		whereWorked: "Where I've worked",
		clientWork: "Client work",
		sideProjects: "Side projects & open source",
		whatStudied: "What I studied",
		getInTouch: "Get in touch",
		mySkills: "My skills",
		myInterests: "My interests",
		languagesSpeak: "Languages I Speak",
		notableThings: "Some notable things",
		switchToLight: "Switch to Light Mode",
		switchToDark: "Switch to Dark Mode",
		printCV: "Print CV",
		printSavePDF: "Print / Save PDF",
		footerDesign: "Designed with QUESTPIE Design System • Built with React & Tailwind",
		lastUpdated: "Last Updated: January 2026",
		email: "Email",
		phone: "Phone",
		location: "Location",
		website: "Website",
		github: "GitHub",
		linkedin: "LinkedIn",
	},
} as const;
