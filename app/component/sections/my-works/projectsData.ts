export type CategoryFilter =
  | "ALL"
  | "UI/UX"
  | "WEBSITES"
  | "WEB APPS"
  | "MOBILE";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  categories: CategoryFilter[];
  description: string;
  image?: string;
  video?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "adverto",
    title: "ADVERTO",
    subtitle: "Creative Agency Website",
    categoryTag: "UI/UX · Web Design · Frontend",
    categories: ["ALL", "WEBSITES", "UI/UX"],
    description:
      "A modern digital experience for a creative advertising agency, designed around bold visual communication and clear navigation.",
    video: "/porfolio/adverto/featured-video.mp4",
  },
  {
    id: "gulf-cargo",
    title: "GULF CARGO",
    subtitle: "Logistics Platform",
    categoryTag: "UI/UX · Product Design · Frontend",
    categories: ["ALL", "WEB APPS", "UI/UX"],
    description:
      "A structured digital experience designed to simplify logistics services and improve information accessibility.",
    image: "/porfolio/GULF-CARGO/FEATURED.webp",
  },
  {
    id: "gps-trades",
    title: "GPS TRADES",
    subtitle: "Solar & Energy Website",
    categoryTag: "UI/UX · Web Design · Development",
    categories: ["ALL", "WEBSITES"],
    description:
      "A clean digital presence communicating renewable energy solutions through a modern and approachable interface.",
    image: "/porfolio/gps/featured.webp",
  },
  {
    id: "afrizon",
    title: "AFRIZON",
    subtitle: "Digital Experience",
    categoryTag: "UI/UX · Web Design · Development",
    categories: ["ALL", "WEBSITES", "UI/UX"],
    description:
      "A digital experience built for global trade and sustainable growth solutions.",
    image: "/porfolio/afrizon/afrizon-featured.webp",
  },
  {
    id: "neo-vault",
    title: "NEO VAULT",
    subtitle: "Fintech Mobile App",
    categoryTag: "Mobile App · iOS & Android · Fintech",
    categories: ["ALL", "MOBILE", "UI/UX"],
    description:
      "A sleek mobile banking application giving users total financial clarity, seamless transfers, and smart investment insights.",
    image: "/service/app-development.webp",
  },
  {
    id: "lumina-dashboard",
    title: "LUMINA UI",
    subtitle: "Design System & Dashboard",
    categoryTag: "UI/UX · Design System · Analytics",
    categories: ["ALL", "UI/UX", "WEB APPS"],
    description:
      "An enterprise-grade component library and analytics dashboard interface crafted for high productivity and accessibility.",
    image: "/service/ui-ux.webp",
  },
  {
    id: "pulse-health",
    title: "PULSE HEALTH",
    subtitle: "Fitness & Wellness App",
    categoryTag: "Mobile App · Health · React Native",
    categories: ["ALL", "MOBILE"],
    description:
      "A personal health tracking app delivering real-time metrics, workout plans, and biometric insights.",
    image: "/service/digital-marketing.webp",
  },
  {
    id: "nexus-saas",
    title: "NEXUS PLATFORM",
    subtitle: "Cloud Management SaaS",
    categoryTag: "Web App · Full-Stack · Cloud",
    categories: ["ALL", "WEB APPS"],
    description:
      "A robust SaaS web application offering workflow automation, multi-tenant workspace management, and data reporting.",
    image: "/service/web-development.webp",
  },
  {
    id: "kerala-crafts",
    title: "KERALA CRAFTS",
    subtitle: "E-Commerce Experience",
    categoryTag: "Web Design · WordPress · E-Commerce",
    categories: ["ALL", "WEBSITES"],
    description:
      "An authentic e-commerce portal showcasing artisanal craft items with custom WordPress theme integration.",
    image: "/service/wordpress.webp",
  },
];

