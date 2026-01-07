import type { ResumeData } from "./types";

export const RESUME_DATA: ResumeData = {
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
			period: "September 2021 - Present",
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
			{
				name: "Byvak.com",
				description:
					"Reservation platform for vacation rentals and accommodations.",
				details: [
					"Built with React (Vite) and NestJS backend.",
					"Handles reservations, payments, room management, and discount systems.",
					"Cancellation fee management and automated booking workflows.",
					"In production for 4+ years, serving clients like chatacerenka.sk.",
				],
				period: "2020 - Present",
			},
		],
		product: [
			{
				name: "QUESTPIE Studio",
				description: "Modular Website Builder SaaS.",
				details: [
					"Custom multi-tenant deployment system on Hetzner Cloud using Docker + Kubernetes.",
					"Automated content management and generation features.",
				],
				period: "2025 - Present",
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
