export interface ContactInfo {
	email: string;
	phone: string;
	location: string;
	born: string;
	website: string[];
	github: string[];
	linkedin: string;
}

export interface ExperienceItem {
	role: string;
	company: string;
	location: string;
	period: string;
	description: string;
	achievements: string[];
	techStack?: string;
	link?: string;
}

export interface EducationItem {
	degree: string;
	institution: string;
	faculty: string;
	period: string;
	location?: string;
}

export interface ProjectItem {
	name: string;
	role?: string;
	period?: string;
	description: string;
	details: string[];
	link?: string;
	github?: string;
}

export interface SkillCategory {
	category: string;
	items: string[];
}

export interface ResumeData {
	name: string;
	title: string;
	contact: ContactInfo;
	about: string;
	experience: ExperienceItem[];
	projects: {
		client: ProjectItem[];
		product: ProjectItem[];
		openSource: ProjectItem[];
	};
	education: EducationItem[];
	skills: string[];
	languages: { language: string; level: string }[];
	achievements: string[];
	interests: string[];
}
