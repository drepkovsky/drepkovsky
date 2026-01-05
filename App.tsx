import type React from "react";
import {
	MapPinIcon as MapPin,
	EnvelopeIcon as Mail,
	PhoneIcon as Phone,
	GlobeIcon as Globe,
	GithubLogoIcon as Github,
	LinkedinLogoIcon as Linkedin,
	CalendarBlankIcon as Calendar,
	ArrowSquareOutIcon as ExternalLink,
	TerminalWindowIcon as Terminal,
	CpuIcon as Cpu,
	HardDrivesIcon as Server,
	CodeIcon as Code2,
	PrinterIcon as Printer,
	PackageIcon as Box,
} from "@phosphor-icons/react";
import { RESUME_DATA } from "./constants";
import type { ExperienceItem, ProjectItem } from "./types";

// UI Components
const SectionTitle: React.FC<{
	children: React.ReactNode;
	icon?: React.ElementType;
}> = ({ children, icon: Icon }) => (
	<div className="flex items-center gap-3 mb-6 print:mb-4 break-after-avoid">
		{Icon && (
			<Icon className="w-5 h-5 text-brand-primary print:w-4 print:h-4" />
		)}
		<h2 className="text-sm font-mono font-bold tracking-[0.2em] text-neutral-400 uppercase print:text-xs">
			{children}
		</h2>
		<div className="h-px flex-1 bg-brand-border print:bg-brand-primary/20" />
	</div>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<span className="inline-flex items-center px-2 py-1 text-xs font-mono font-medium text-brand-primary bg-brand-primary/10 border border-brand-primary/20 print:px-1.5 print:py-0.5 print:text-[10px]">
		{children}
	</span>
);

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
	<div className="relative pl-6 pb-8 last:pb-0 border-l border-brand-border print:border-brand-primary/30 print:pb-6 print-break-avoid">
		<div className="absolute -left-[5px] top-0 w-[9px] h-[9px] bg-brand-black border border-brand-primary rounded-none print:bg-brand-primary print:border-brand-primary" />

		<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 print:mb-1">
			<div>
				<h3 className="text-lg font-bold text-white leading-tight print:text-xs">
					{item.role}
				</h3>
				<div className="text-brand-primary font-mono text-sm mt-1 font-semibold print:text-[11px]">
					{item.company}
				</div>
			</div>
			<div className="flex flex-col sm:items-end mt-2 sm:mt-0">
				<span className="text-xs font-mono text-neutral-500 bg-brand-surface border border-brand-border px-2 py-1 print:py-0.5 print:text-[9px]">
					{item.period}
				</span>
			</div>
		</div>

		<p className="text-sm text-neutral-400 mb-3 leading-relaxed print:text-[10px] print:leading-snug print:mb-1">
			{item.description}
		</p>

		{item.achievements.length > 0 && (
			<ul className="list-none space-y-1 mb-3 print:mb-2">
				{item.achievements.map((ach, idx) => (
					<li
						key={idx}
						className="text-xs text-neutral-500 flex items-start gap-2 print:text-[10px] print:leading-tight"
					>
						<span className="text-brand-primary mt-1">›</span>
						{ach}
					</li>
				))}
			</ul>
		)}

		{item.techStack && (
			<div className="flex flex-wrap gap-2 mt-3 print:mt-1">
				{item.techStack.split(", ").map((tech, i) => (
					<span
						key={i}
						className="text-[10px] font-mono text-neutral-500 border border-brand-border px-1.5 py-0.5 print:text-[9px]"
					>
						{tech}
					</span>
				))}
			</div>
		)}
	</div>
);

const ProjectCard: React.FC<{
	project: ProjectItem;
	type: "client" | "product" | "opensource";
}> = ({ project }) => (
	<div className="group h-full border border-brand-border bg-brand-surface/50 p-4 hover:border-brand-primary/50 transition-colors print:border-brand-primary/30 print:p-3 print-break-avoid flex flex-col">
		<div className="flex justify-between items-start mb-2 print:mb-1 gap-2">
			<h4 className="font-bold text-white print:text-xs min-w-0">
				{project.name}
			</h4>
			<div className="flex flex-col items-end gap-1 shrink-0">
				{project.period && (
					<span className="text-[10px] font-mono text-neutral-500 print:text-[9px] whitespace-nowrap">
						{project.period}
					</span>
				)}
				<div className="flex gap-2">
					{project.link && (
						<a
							href={`https://${project.link}`}
							target="_blank"
							rel="noreferrer"
							title="Website"
						>
							<ExternalLink className="w-3 h-3 text-brand-primary hover:text-white transition-colors" />
						</a>
					)}
					{project.github && (
						<a
							href={`https://${project.github}`}
							target="_blank"
							rel="noreferrer"
							title="Source Code"
						>
							<Github className="w-3 h-3 text-brand-primary hover:text-white transition-colors" />
						</a>
					)}
				</div>
			</div>
		</div>
		<p className="text-xs text-neutral-400 mb-3 print:text-[10px] print:leading-tight print:mb-1.5 flex-1">
			{project.description}
		</p>
		<ul className="space-y-1">
			{project.details.map((detail, idx) => (
				<li
					key={idx}
					className="text-[11px] text-neutral-500 flex items-start gap-2 print:text-[9px] print:leading-tight"
				>
					<span className="text-brand-primary/50 mt-[3px]">-</span>
					{detail}
				</li>
			))}
		</ul>
	</div>
);

const SidebarItem: React.FC<{
	label: string;
	value: string | string[];
	icon: any;
	href?: string | string[];
}> = ({ label, value, icon: Icon, href }) => (
	<div className="mb-4 group print:mb-2 print-break-avoid">
		<div className="flex items-center gap-2 text-brand-primary mb-1">
			<Icon className="w-4 h-4 print:w-3 print:h-3" />
			<span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 print:text-[9px]">
				{label}
			</span>
		</div>
		{href ? (
			Array.isArray(href) && Array.isArray(value) ? (
				value.map((v, i) => (
					<a
						key={`${label}-${v}-${i}`}
						href={href[i]}
						target="_blank"
						rel="noreferrer"
						className="text-sm text-neutral-300 hover:text-brand-primary transition-colors block font-medium underline-offset-2 print:underline print:decoration-1 print:decoration-neutral-600 print:text-[10px] print:break-all"
					>
						{v}
					</a>
				))
			) : href ? (
				<a
					href={Array.isArray(href) ? href[0] : href}
					target="_blank"
					rel="noreferrer"
					className="text-sm text-neutral-300 hover:text-brand-primary transition-colors block font-medium underline-offset-2 print:underline print:decoration-1 print:decoration-neutral-600 print:text-[10px] print:break-all"
				>
					{Array.isArray(value) ? value.join(", ") : value}
				</a>
			) : (
				<span className="text-sm text-neutral-300 block font-medium print:text-[10px] print:break-all">
					{Array.isArray(value)
						? value.map((v, i) => (
								<span key={`${label}-${v}-${i}`}>
									{v}
									{i < value.length - 1 ? <br /> : null}
								</span>
							))
						: value}
				</span>
			)
		) : (
			<span className="text-sm text-neutral-300 block font-medium print:text-[10px] print:break-all">
				{Array.isArray(value)
					? value.map((v, i) => (
							<span key={`${label}-${v}-${i}`}>
								{v}
								{i < value.length - 1 ? <br /> : null}
							</span>
						))
					: value}
			</span>
		)}
	</div>
);

export default function App() {
	const {
		name,
		title,
		contact,
		about,
		experience,
		projects,
		education,
		skills,
		languages,
		achievements,
	} = RESUME_DATA;

	const handlePrint = () => {
		window.print();
	};

	return (
		<div className="min-h-screen bg-brand-black text-neutral-300 relative selection:bg-brand-primary/30">
			{/* Background Effects (Hidden on Print) */}
			<div className="fixed inset-0 pointer-events-none z-0">
				<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
				<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
			</div>

			{/* Floating Print Button */}
			<button
				onClick={handlePrint}
				className="fixed bottom-8 right-8 z-50 bg-brand-primary text-white p-3 shadow-[0_0_20px_rgba(183,0,255,0.4)] hover:bg-brand-primary/90 transition-all duration-300 print:hidden group"
				title="Print CV"
			>
				<Printer className="w-6 h-6" />
				<span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-surface border border-brand-border px-2 py-1 text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
					Print / Save PDF
				</span>
			</button>

			{/* Main Container */}
			<main className="relative z-10 max-w-[1000px] mx-auto p-6 sm:p-8 md:p-12 print:p-[15mm] print:box-decoration-clone print:max-w-none">
				{/* Header Section */}
				<header className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12 border-b border-brand-border pb-12 print:border-brand-primary/30 print:mb-6 print:pb-6 print:gap-5">
					<div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 print:w-28 print:h-28">
						<div className="absolute inset-0 border border-brand-border bg-brand-surface print:border-brand-primary">
							<img
								src="https://media.licdn.com/dms/image/v2/D4E03AQEy8cgFT3PqgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1722969486324?e=1769040000&v=beta&t=E0pi9IG1JFbU-w_YYG9sP2H7ZmFprzzz5nhaao9r9Ws"
								alt={name}
								className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500 print:grayscale-0"
							/>
						</div>
						{/* Decorative corners */}
						<div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-brand-primary print:border-brand-primary"></div>
						<div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-brand-primary print:border-brand-primary"></div>
					</div>

					<div className="flex-1 flex flex-col justify-center text-center md:text-left">
						<div className="mb-4 print:mb-2">
							<h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 leading-none print:text-3xl">
								{name}
							</h1>
							<p className="text-lg md:text-xl text-brand-primary font-mono print:text-sm print:font-bold">
								{title}
							</p>
						</div>
						<p className="text-sm text-neutral-400 max-w-2xl leading-relaxed text-justify print:text-[11px] print:leading-snug">
							{about}
						</p>
					</div>
				</header>

				{/* Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 print:grid-cols-[1fr_200px] print:gap-6">
					{/* Left Column (Main Content) */}
					<div className="space-y-12 print:space-y-6">
						{/* Experience Section */}
						<section>
							<SectionTitle icon={Terminal}>
								Professional Experience
							</SectionTitle>
							<div className="space-y-0">
								{experience.map((job, index) => (
									<ExperienceCard key={index} item={job} />
								))}
							</div>
						</section>

						{/* Projects Section - Client */}
						<section className="print-break-avoid">
							<SectionTitle icon={Cpu}>Key Client Projects</SectionTitle>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:gap-3 [&>*:nth-child(odd):last-child]:sm:col-span-2">
								{projects.client.map((project, index) => (
									<ProjectCard key={index} project={project} type="client" />
								))}
							</div>
						</section>

						{/* Projects Section - Products & OSS */}
						<section className="print-break-avoid">
							<SectionTitle icon={Box}>Products & Open Source</SectionTitle>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:gap-3 [&>*:nth-child(odd):last-child]:sm:col-span-2">
								{projects.product
									.concat(projects.openSource)
									.map((project, index) => (
										<ProjectCard
											key={index}
											project={project}
											type="opensource"
										/>
									))}
							</div>
						</section>

						{/* Education Section */}
						<section className="print-break-avoid">
							<SectionTitle icon={Calendar}>Education</SectionTitle>
							<div className="space-y-4 print:space-y-2">
								{education.map((edu, index) => (
									<div
										key={index}
										className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-brand-border/50 pb-2 last:border-0 print:border-brand-primary/20 print:pb-1"
									>
										<div>
											<h4 className="font-bold text-white print:text-xs">
												{edu.degree}
											</h4>
											<div className="text-sm text-neutral-400 print:text-[10px]">
												{edu.institution}
											</div>
											<div className="text-xs text-neutral-500 italic mt-0.5 print:text-[9px]">
												{edu.faculty}
											</div>
										</div>
										<span className="text-xs font-mono text-brand-primary mt-1 sm:mt-0 font-bold whitespace-nowrap print:text-[9px]">
											{edu.period}
										</span>
									</div>
								))}
							</div>
						</section>
					</div>

					{/* Right Column (Sidebar) */}
					<aside className="space-y-10 print:space-y-4">
						{/* Contact */}
						<section className="print-break-avoid">
							<div className="bg-brand-offBlack border border-brand-border p-6 print:!p-3">
								<h3 className="font-mono text-xs uppercase tracking-widest text-white mb-6 border-b border-brand-border pb-2 print:mb-2 print:pb-1 print:text-[10px]">
									Contact
								</h3>
								<SidebarItem
									icon={Mail}
									label="Email"
									value={contact.email}
									href={`mailto:${contact.email}`}
								/>
								<SidebarItem
									icon={Phone}
									label="Phone"
									value={contact.phone}
									href={`tel:${contact.phone}`}
								/>
								<SidebarItem
									icon={MapPin}
									label="Location"
									value={contact.location}
								/>
								{contact.website?.length > 0 && (
									<SidebarItem
										icon={Globe}
										label="Website"
										value={contact.website}
										href={contact.website.map((site) => `https://${site}`)}
									/>
								)}

								{/* GitHub Handles Loop */}
								{contact.github?.length > 0 && (
									<SidebarItem
										icon={Github}
										label="GitHub"
										value={contact.github}
										href={contact.github.map((handle) => `https://${handle}`)}
									/>
								)}
								<SidebarItem
									icon={Linkedin}
									label="LinkedIn"
									value={contact.linkedin}
									href={contact.linkedin}
								/>
							</div>
						</section>

						{/* Skills */}
						<section className="print-break-avoid">
							<SectionTitle icon={Code2}>Technical Skills</SectionTitle>
							<div className="space-y-6 print:space-y-3">
								{skills.map((cat, i) => (
									<div key={i}>
										<h4 className="text-xs font-mono text-neutral-500 mb-2 uppercase print:text-[9px] print:mb-1">
											{cat.category}
										</h4>
										<div className="flex flex-wrap gap-1.5 print:gap-1">
											{cat.items.map((skill, j) => (
												<Badge key={j}>{skill}</Badge>
											))}
										</div>
									</div>
								))}
							</div>
						</section>

						{/* Languages */}
						<section className="print-break-avoid">
							<SectionTitle icon={Globe}>Languages</SectionTitle>
							<div className="space-y-2 print:space-y-1">
								{languages.map((lang, i) => (
									<div
										key={i}
										className="flex justify-between items-center text-sm print:text-xs"
									>
										<span className="text-white">{lang.language}</span>
										<span className="font-mono text-neutral-500 text-xs print:text-[10px]">
											{lang.level}
										</span>
									</div>
								))}
							</div>
						</section>

						{/* Achievements */}
						<section className="print-break-avoid">
							<SectionTitle icon={Server}>Notable</SectionTitle>
							<ul className="space-y-2 print:space-y-1">
								{achievements.map((item, i) => (
									<li
										key={i}
										className="text-xs text-neutral-400 border-l-2 border-brand-primary pl-3 py-0.5 print:text-[10px] print:leading-tight"
									>
										{item}
									</li>
								))}
							</ul>
						</section>
					</aside>
				</div>

				{/* Footer */}
				<footer className="mt-16 pt-8 border-t border-brand-border text-center text-neutral-600 text-xs font-mono print:hidden">
					<p>
						Designed with QUESTPIE Design System • Built with React & Tailwind
					</p>
					<p className="mt-2">Last Updated: January 2026</p>
				</footer>
			</main>
		</div>
	);
}
