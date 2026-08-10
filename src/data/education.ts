export interface EducationEntry {
  slug: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  summary: string;
}

// Each `slug` is meant to back a future /education/[slug] detail page.
export const education: EducationEntry[] = [
  {
    slug: "smkn-11-multimedia",
    degree: "Multimedia",
    institution: "SMKN 11 Semarang",
    period: "2019 – 2022",
    location: "Semarang, Indonesia",
    summary:
      "Focused on design, photography, and web development — where my journey as a builder began.",
  },
];