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
		"Full-stack TypeScript developer and Master of Science in Intelligent Software Systems specializing in modern web ecosystems. With 6+ years of experience (since 2020) across enterprise platforms and startups, I founded QUESTPIE s.r.o. to deliver production-ready solutions for international clients while building open-source developer tools. Creator of QUESTPIE CMS - a batteries-included, type-safe headless CMS. Expert in DevOps practices, multi-tenant architecture, and leveraging AI tools to maximize code quality and development velocity.",
	experience: [
		{
			role: "Founder & Lead Developer",
			company: "QUESTPIE s.r.o.",
			location: "Bratislava, Slovak Republic",
			period: "September 2021 - Present",
			description:
				"Full-stack development, DevOps infrastructure management, and product development for international clients while building open-source tools and SaaS platforms.",
			achievements: [
				"Scaled operations from small local projects to delivering complex solutions for international clients.",
				"Implemented real-time systems using Soketi (Pusher protocol) + Redis Pub/Sub.",
				"Designed and implemented custom control plane for multi-tenant deployment automation.",
				"Built Docker + Kubernetes infrastructure serving production applications.",
				"PostgreSQL performance tuning: complex queries with CTEs, window functions, proper indexing.",
			],
		},
		{
			role: "Senior Full-Stack Developer",
			company: "AMCEF a.s.",
			location: "Bratislava, Slovak Republic",
			period: "December 2024 - May 2025",
			description:
				"Developed enterprise modules for Modulario - a no-code/low-code platform enabling rapid creation of tailor-made business systems.",
			achievements: [
				"Developed Schenker module and third-party system integrations.",
				"Architected core logic for multi-tenant system module involving complex entity diffing and synchronization.",
				"Refactored legacy codebases to modern TypeScript standards.",
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
				"I was developing an usability testing platform in team of 5-9 other developers. I was participating in building these features.",
			achievements: [
				"User Panel - Purchase respondents for your studies directly through the platform with a Cint Supplier API",
				"Own Database - A CRM-like feature that allows users to import and manage their own respondents",
				"Moderated Testing - Enable users to find respondents and schedule and host moderated testing sessions directly through the platform. - I was responsible for creating and developing a custom NestJS backend service that provides video meeting capabilities via the Zoom.us API",
			],
			techStack: "TypeScript, React, NestJS, PostgreSQL, Redis, Docker",
		},
	],
	projects: {
		client: [
			{
				name: "Venue Finder",
				description:
					"Advanced venue management system for Prague Convention Bureau.",
				details: [
					"PostgreSQL query optimization for data filtering and aggregations.",
					"Custom admin dashboard with complex external source data syncing.",
				],
				period: "December 2025",
			},
			{
				name: "Nutrimeals",
				description:
					"Technical partner for EIT Food Member startup. Mobile platform for smart refrigerator management.",
				details: [
					"Integration for refrigerator discovery and mapping with real-time availability.",
					"React Native + Expo app with offline support and push notifications.",
				],
				period: "2025 - Present",
			},
			{
				name: "eliadmin.sk",
				description:
					"A reusable template for e-commerce platforms, developed for a Slovak client.",
				details: [
					"Frontend development and mobile applications.",
					"Payment gateway integrations and order management.",
					"Ongoing maintenance and feature development.",
				],
				period: "2023 - Present",
			},
			{
				name: "Pomoc Motoristom",
				description:
					"Complete platform rework with custom content management workflows.",
				details: [
					"Full CMS implementation with editorial approval process.",
					"Multi-language support (i18n) and SEO optimization.",
					"Currently deployed on testing domain for client review.",
				],
				period: "2025 (Testing)",
			},
			{
				name: "Rosmami",
				description:
					"An AI-powered pantry management and meal plan builder designed to reduce food waste in households, under development for an Italian client.",
				details: [
					"React Native Expo Universal App (Web, iOS, Android).",
					"Food waste reduction algorithms with smart ingredient suggestions.",
				],
				period: "2024 - 2025",
			},
		],
		product: [
			{
				name: "QUESTPIE Studio",
				description: "Modular Website Builder SaaS.",
				details: [
					"Custom multi-tenant deployment system on Hetzner Cloud using Docker + Kubernetes.",
					"Development of advanced AI agents for automated content management and copy generation.",
				],
				period: "2025 - Present",
			},
		],
		openSource: [
			{
				name: "QUESTPIE CMS",
				description: "Type-Safe Headless CMS built on Drizzle ORM + Hono.",
				details: [
					"Batteries-included: Auth, Storage, Queues, and type-safe API generation.",
					"Born from the need for a better DX than PayloadCMS.",
				],
				link: "github.com/questpie/questpie-cms",
				period: "Dec 2025 - Present",
			},
			{
				name: "drizzle-migrations",
				description:
					"Original fork that provided the Drizzle community with a proof-of-concept for up/down migrations.",
				details: [
					"Pioneered the implementation of reversible migrations before official support.",
					"Adapted complex migration generation logic from PayloadCMS for standalone use.",
				],
				link: "npmjs.com/package/@drepkovsky/drizzle-migrations",
				period: "2024",
			},
			{
				name: "tinydi",
				description:
					"Advanced type-safe dependency injection container architected to solve complex sync/async resolution challenges.",
				details: [
					"Implemented advanced TypeScript inference for circular dependencies and lazy evaluation.",
					"Achieved zero-dependency architecture without decorators using pure functional patterns.",
				],
				link: "npmjs.com/package/@drepkovsky/tinydi",
				period: "2025",
			},
			{
				name: "bulkit.dev",
				description:
					"Social Media Scheduler. An open-source, self-hosted post scheduling platform aimed at providing a seamless social media management experience for indie hackers and individual content creators, currently under development.",
				details: [
					"Built with modern TypeScript stack focusing on privacy and data ownership.",
					"Creation of advanced AI agents for content management and automated post generation.",
				],
				link: "bulkit.dev",
				github: "github.com/questpie/bulkit.dev",
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
		{
			category: "Core",
			items: [
				"TypeScript",
				"Node.js",
				"React",
				"Next.js 15",
				"Vue.js",
				"Hono",
				"NestJS",
				"Bun",
			],
		},
		{
			category: "Data",
			items: [
				"PostgreSQL",
				"Drizzle ORM",
				"PostGIS",
				"Redis",
				"pgvector",
				"Soketi (Pusher)",
			],
		},
		{
			category: "DevOps",
			items: [
				"Docker",
				"Kubernetes",
				"CI/CD",
				"Hetzner Cloud",
				"Multi-tenant Arch",
				"Zero-downtime",
			],
		},
		{
			category: "AI & Tools",
			items: [
				"Claude Code",
				"Google AI Studio",
				"AI Agent Dev",
				"GitHub Copilot",
				"LLM Integration",
			],
		},
	],
	languages: [
		{ language: "English", level: "Upper Intermediate (B2)" },
		{ language: "Czech", level: "Advanced (C1)" },
		{ language: "Slovak", level: "Native (C2)" },
	],
	achievements: [
		"Scaled QUESTPIE s.r.o. from toy to serving international clients.",
		"Built production-grade multi-tenant SaaS infrastructure.",
		"Created open-source alternative to Payload CMS.",
		// "Optimized PostgreSQL queries for significant performance gains.",
	],
	interests: [
		"Type-safe development",
		"DX optimization",
		"Open-source",
		"AI-assisted workflows",
		"Mobile-first architecture",
	],
};
