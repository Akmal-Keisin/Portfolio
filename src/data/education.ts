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
    slug: "undip-visual-communication-design",
    degree: "B.A. in Visual Communication Design",
    institution: "Diponegoro University",
    period: "2014 — 2018",
    location: "Semarang, Indonesia",
    summary:
      "Focused on typography and interaction design; thesis project on wayfinding systems for public transit.",
  },
  {
    slug: "google-ux-design-certificate",
    degree: "Professional Certificate, UX Design",
    institution: "Google Career Certificates",
    period: "2019",
    location: "Online",
    summary:
      "Structured coursework in research, wireframing, and usability testing to formalize self-taught practice.",
  },
  {
    slug: "frontend-masters-advanced-js",
    degree: "Advanced JavaScript & Web Architecture",
    institution: "Frontend Masters",
    period: "2021",
    location: "Online",
    summary:
      "Deep dive into component architecture, build tooling, and performance, applied directly to client projects.",
  },
];
