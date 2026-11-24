export interface ExperienceEntry {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
  project?: { title: string; context: string; contribution: string };
}

// Each `slug` is meant to back a future /experience/[slug] detail page.
export const experience: ExperienceEntry[] = [
  {
    slug: "reprime-web-developer",
    role: "Web Developer",
    company: "Reprime ID",
    period: "Jun 2024 - Now",
    location: "Semarang, Indonesia",
    summary:
      "Returned with more experience. Focus on developing the new version of the core product, optimizing performance, and architecting scalable backend systems.",
    tags: ["PHP", "Laravel", "MySQL", "PostgreSQL", "TypeScript", "Vue", "Go", "Fiber", "Astro"],
  },
  {
    slug: "crocodic-web-developer",
    role: "Web Developer",
    company: "Crocodic",
    period: "Oct 2023 - Jun 2024",
    location: "Semarang, Indonesia",
    summary:
      "Built payroll and shift scheduling software for a factory HR system used by thousands of people each day.",
    project: {
      title: "Modernizing attendance and payroll reporting",
      context: "The factory’s HR team relied on a system that was more than 20 years old. Its payroll rules needed updating to reflect changes in government policy.",
      contribution: "I built software that turned employee attendance records into attendance and payroll reports for HR. That work included updating the payroll calculations and managing shift scheduling for a system used by thousands of people each day.",
    },
    tags: ["PHP", "Laravel", "MySQL", "TypeScript"],
  },
  {
    slug: "reprime-web-developer-first",
    role: "Web Developer",
    company: "Reprime ID",
    period: "Sep 2022 - Sep 2023",
    location: "Semarang, Indonesia",
    summary:
      "Full developer role post-internship. Responsible for new feature delivery, infrastructure maintenance, and resolving critical production bugs.",
    tags: ["PHP", "Laravel", "Lumen", "PostgreSQL", "MySQL"],
  },
  {
    slug: "reprime-intern",
    role: "Intern",
    company: "Reprime ID",
    period: "Jun 2022 - Aug 2022",
    location: "Semarang, Indonesia",
    summary:
      "Gained hands-on experience in production environments, contributing to feature updates and learning enterprise development best practices.",
    tags: ["PHP", "Laravel", "MySQL"],
  },
];