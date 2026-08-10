export interface ExperienceEntry {
  slug: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  tags: string[];
}

// Each `slug` is meant to back a future /experience/[slug] detail page.
export const experience: ExperienceEntry[] = [
  {
    slug: "kirana-studio-lead-product-designer",
    role: "Lead Product Designer",
    company: "Kirana Studio (Independent)",
    period: "2022 — Present",
    location: "Semarang, Indonesia",
    summary:
      "Running an independent design & development practice, partnering with early-stage startups to design and ship their product from 0 to 1.",
    tags: ["Product Strategy", "Design Systems", "Astro"],
  },
  {
    slug: "nusantara-tech-senior-designer",
    role: "Senior Product Designer",
    company: "Nusantara Tech",
    period: "2020 — 2022",
    location: "Jakarta, Indonesia",
    summary:
      "Led the design of the company's core dashboard product, and built the design system used across four product teams.",
    tags: ["Design Systems", "React", "Figma"],
  },
  {
    slug: "ruangkerja-product-designer",
    role: "Product Designer",
    company: "Ruang Kerja",
    period: "2018 — 2020",
    location: "Semarang, Indonesia",
    summary:
      "First design hire at an early-stage coworking marketplace; owned onboarding, booking flows, and the mobile app redesign.",
    tags: ["Mobile", "Onboarding", "Research"],
  },
];
