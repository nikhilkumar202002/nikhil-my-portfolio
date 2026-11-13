import { portfolioData } from "@/app/dataset/Portfolio";

export type CategoryFilter =
  | "ALL"
  | "UI/UX"
  | "WEBSITES"
  | "WEB APPS"
  | "MOBILE";

export interface ColorSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface TypographySpec {
  fontFamily: string;
  category: string;
  weights: string[];
  sampleText: string;
  description: string;
}

export interface ProjectFeature {
  title: string;
  desc: string;
}

export interface TechnologyItem {
  name: string;
  category: string;
  role: string;
  icon?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  categories: CategoryFilter[];
  description: string;
  image?: string;
  bannerImage?: string;
  video?: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  liveUrl?: string;
  overviewSentence: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
  colorPalette?: ColorSwatch[];
  typography?: TypographySpec;
  features: ProjectFeature[];
  technologies: TechnologyItem[];
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
    image: "/images/249d1779c161e64afc73693bd4efffc4.webp",
    client: "Adverto Media Studio",
    year: "2024",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2 Months",
    liveUrl: "https://adverto.example.com",
    overviewSentence:
      "Adverto is a dynamic digital experience engineered for a high-impact creative agency, blending cinematic video transitions with responsive brand storytelling and seamless client acquisition. Crafted to disrupt conventional agency portfolio norms, the platform emphasizes tactile micro-interactions, responsive media delivery, and bold typography that commands attention across all screen sizes. Every section is built with speed and performance at its foundation, allowing rich creative assets to load instantaneously while guiding prospective enterprise partners through an intuitive inquiry funnel.",
    overview:
      "Adverto is a forward-thinking creative agency requiring a high-impact digital presence that commands attention. The project demanded immersive visual transitions, high-contrast typography, and fluid micro-interactions to showcase their brand campaigns and creative capabilities.",
    challenge:
      "Traditional creative agency portfolios often suffer from sluggish media loading, generic cookie-cutter layouts, and confusing project navigation. Adverto needed a bespoke web identity that loaded instantly while delivering cinematic video interactions and unforgettable visual rhythm.",
    solution:
      "We engineered a custom Next.js frontend integrated with smooth GSAP animations and responsive video reels. The modular layout gives priority to large-scale imagery, intuitive case study exploration, and seamless client conversion funnels.",
    deliverables: [
      "Brand Identity & Visual Direction",
      "Interactive High-Fidelity Prototypes",
      "Custom Next.js & Tailwind Architecture",
      "Performance & SEO Optimization",
    ],
    gallery: [
      "/images/249d1779c161e64afc73693bd4efffc4.webp",
      "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
      "/images/90ff774dded2c8e8e90c82237929704e.webp",
      "/service/graphics-designing.webp",
      "/service/ui-ux.webp",
    ],
    colorPalette: [
      { name: "Neon Orange", hex: "#FF5E00", role: "Primary Brand Accent" },
      { name: "Void Black", hex: "#000000", role: "Main Background" },
      { name: "Obsidian Slate", hex: "#141414", role: "Card Surface & Containers" },
      { name: "Pure White", hex: "#FFFFFF", role: "Headlines & High Contrast" },
      { name: "Muted Zinc", hex: "#A1A1AA", role: "Secondary Body Text" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Modern Grotesk Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Ee Ff Gg 1234567890",
      description:
        "Selected for its Swiss precision, punchy editorial headlines, and clean readability across mobile and desktop displays.",
    },
    features: [
      {
        title: "Cinematic Video Showcases",
        desc: "Optimized video streams with lazy loading and instant viewport-triggered playback.",
      },
      {
        title: "Micro-Interaction Engine",
        desc: "Custom cursor magnetic tracking and dynamic title letter animations on interaction.",
      },
      {
        title: "Conversion-Focused Inquiries",
        desc: "Frictionless contact pathways with direct calendaring and inquiry management.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        role: "Server-side rendering, routing and static asset optimization",
        icon: "/skill-logos/next-js-seeklogo.png",
      },
      {
        name: "React",
        category: "Library",
        role: "Modular UI architecture and state-driven components",
        icon: "/skill-logos/react-logo.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Custom design tokens, fluid clamp sizing, and responsive grid",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "GSAP",
        category: "Animation",
        role: "High-performance timeline animations and smooth cursor tracking",
        icon: "/skill-logos/js.png",
      },
      {
        name: "Figma",
        category: "Design",
        role: "Wireframing, design system tokens, and interactive prototypes",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Photoshop",
        category: "Media",
        role: "Color correction, visual asset masking, and mockup composition",
        icon: "/skill-logos/photoshop.png",
      },
    ],
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
    client: "Gulf Cargo Logistics L.L.C",
    year: "2024",
    role: "Lead UI/UX Designer & Frontend Developer",
    duration: "3 Months",
    liveUrl: "https://gulfcargo.example.com",
    overviewSentence:
      "Gulf Cargo is an international shipping and freight logistics platform designed to simplify complex consignment tracking, automated rate estimation, and global cargo operations into a seamless digital experience. By unifying real-time container telemetry with self-service quotation tools, the platform eliminates operational friction for enterprise supply chain managers across the Middle East and Asia. The architecture prioritizes data clarity and high-speed responsiveness, transforming heavy freight logistics data into an accessible, human-centered product that drives self-service booking.",
    overview:
      "Gulf Cargo is an established international shipping and cargo logistics enterprise operating across the Gulf and Asian trade corridors. The project overhauled their customer portal and public platform, converting complex supply chain workflows into an accessible, responsive web application.",
    challenge:
      "Corporate clients and retail shippers struggled with fragmented tracking mechanisms, opaque rate estimations, and convoluted paper-based booking forms. The key challenge was translating intricate freight protocols into a streamlined, unified self-service experience.",
    solution:
      "We architected an end-to-end design system featuring an instant parcel and container tracking dashboard, an automated volumetric pricing calculator, and a unified customer hub with real-time consignment milestone alerts.",
    deliverables: [
      "User Research & Journey Mapping",
      "Full Design System & Component Library",
      "Responsive Web Application & Portal",
      "Admin Dashboard & Consignment Tools",
    ],
    gallery: [
      "/porfolio/GULF-CARGO/FEATURED.webp",
      "/porfolio/GULF-CARGO/main-website.webp",
      "/porfolio/GULF-CARGO/application/featured.jpg",
      "/porfolio/GULF-CARGO/application/2.jpg",
      "/porfolio/GULF-CARGO/application/3.jpg",
    ],
    colorPalette: [
      { name: "Safety Orange", hex: "#FF5E00", role: "Primary Interactive Accent" },
      { name: "Deep Charcoal", hex: "#0A0A0A", role: "Base Canvas" },
      { name: "Cargo Slate", hex: "#18181B", role: "Card Panels & Tables" },
      { name: "Pure White", hex: "#FFFFFF", role: "Primary Headings & Metrics" },
      { name: "Steel Muted", hex: "#71717A", role: "Metadata & Secondary Copy" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Geometric Sans-Serif",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Ee Ff 1234567890 !@#$%",
      description:
        "Chosen for maximum numerical clarity and legibility across dense tracking sheets and consignment status tables.",
    },
    features: [
      {
        title: "Live Container & Waybill Tracker",
        desc: "Instant multi-carrier milestone tracking with status notifications and route progress bar.",
      },
      {
        title: "Smart Volumetric Calculator",
        desc: "Instant dimensional weight pricing calculations supporting air, sea, and land cargo.",
      },
      {
        title: "Enterprise Document Vault",
        desc: "Secure customer repository for customs declarations, invoices, and bill of lading records.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        role: "Production App Router, dynamic metadata, and performance optimization",
        icon: "/skill-logos/next-js-seeklogo.png",
      },
      {
        name: "React",
        category: "Frontend",
        role: "Component hierarchy and reactive shipment status state management",
        icon: "/skill-logos/react-logo.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Rapid UI layout, high-contrast dark palette, and custom utility classes",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "UI/UX Design",
        role: "Complete user journeys, interactive wireframes, and design system tokens",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Node.js",
        category: "Backend API",
        role: "Microservices for real-time airway bill tracking and status lookups",
        icon: "/skill-logos/node-js-seeklogo.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Version control, CI/CD automated deployments, and code reviews",
        icon: "/skill-logos/github.png",
      },
    ],
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
    bannerImage: "/porfolio/gps/cover.jpg",
    client: "GPS Trades Renewable Power",
    year: "2024",
    role: "Web Designer & Frontend Engineer",
    duration: "6 Weeks",
    liveUrl: "https://gpstrades.example.com",
    overviewSentence:
      "GPS Trades is a modern clean-energy web platform engineered to communicate renewable solar power solutions, interactive cost savings estimations, and engineering credibility to commercial and residential clients. The platform bridges the gap between intricate technical solar engineering specifications and accessible consumer decision-making. Through interactive financial payback models and transparent case studies, it empowers property owners to transition confidently to sustainable clean energy.",
    overview:
      "GPS Trades is an engineering and solar power contractor providing turnkey commercial and residential renewable solutions. The project objective was to position them as modern green energy innovators through a crisp, trustworthy online portal.",
    challenge:
      "Solar system specifications involve technical terminology (kWp, inverter capacity, net metering) that frequently intimidates prospective customers. The website had to explain complex energy packages clearly while driving quote requests.",
    solution:
      "We crafted an approachable UI with interactive energy savings calculators, case studies with verified ROI figures, and structured service breakdowns that simplify decision-making for residential and industrial clients alike.",
    deliverables: [
      "Information Architecture & Wireframing",
      "Bespoke Responsive UI Design",
      "Interactive Energy Savings Estimator",
      "Custom WordPress & Headless Setup",
    ],
    gallery: [
      "/porfolio/gps/featured.webp",
      "/porfolio/gps/cover.jpg",
      "/porfolio/gps/1.jpg",
      "/porfolio/gps/2.jpg",
      "/porfolio/gps/featured.webp",
    ],
    colorPalette: [
      { name: "Solar Orange", hex: "#FF5E00", role: "Energy Accent & Highlights" },
      { name: "Night Canvas", hex: "#000000", role: "Deep Background" },
      { name: "Graphite Surface", hex: "#141414", role: "Component Backgrounds" },
      { name: "Clean White", hex: "#FFFFFF", role: "Primary Text" },
      { name: "Atmosphere Slate", hex: "#94A3B8", role: "Supporting Copy" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Clean Tech Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Ee Ff 1234567890 kW/h",
      description:
        "Balanced geometric proportions that convey industrial dependability and forward-looking sustainability.",
    },
    features: [
      {
        title: "Solar ROI Estimator",
        desc: "Interactive slider tool that estimates annual electricity cost savings based on average utility bills.",
      },
      {
        title: "Project Portfolio Showcase",
        desc: "Filterable gallery of commercial rooftop, ground-mount, and residential installations.",
      },
      {
        title: "Automated Consultation Scheduler",
        desc: "Direct calendar booking for on-site feasibility and engineering assessments.",
      },
    ],
    technologies: [
      {
        name: "WordPress",
        category: "CMS",
        role: "Custom theme development and client content editing workflows",
        icon: "/skill-logos/WordPress_logo.png",
      },
      {
        name: "JavaScript",
        category: "Language",
        role: "Custom energy calculation algorithms and dynamic slider events",
        icon: "/skill-logos/js.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Modular CSS utility framework for swift responsive scaling",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "UI Design",
        role: "Component library, high-contrast layouts, and client design reviews",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Illustrator",
        category: "Vector Graphics",
        role: "Custom solar diagram iconography and engineering schematics",
        icon: "/skill-logos/illustrator.png",
      },
      {
        name: "GitHub",
        category: "Version Control",
        role: "Repository management and deployment automation",
        icon: "/skill-logos/github.png",
      },
    ],
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
    client: "Afrizon Trade Ventures",
    year: "2023",
    role: "Product Designer & Frontend Developer",
    duration: "2 Months",
    liveUrl: "https://afrizon.example.com",
    overviewSentence:
      "Afrizon is a digital trade platform built to connect emerging market producers with global trade corridors, providing verified supplier directories and interactive route intelligence. The system establishes institutional trust through transparent compliance verification, real-time shipment milestones, and structured export bid management. Designed with international corporate buyers in mind, the platform delivers high-density commodity intelligence across a clean and responsive digital interface.",
    overview:
      "Afrizon facilitates cross-border commodity trade, agribusiness export, and industrial partnerships between emerging markets and global hubs. Their digital presence needed to reflect international trust and financial strength.",
    challenge:
      "Connecting international buyers with certified producers across multiple supply categories required a comprehensive, multilingual platform with transparent regulatory compliance and trackable trade pipelines.",
    solution:
      "Designed a visually commanding web experience with interactive trade corridor maps, verified supplier directories, and clean lead capture modules tailored for corporate partners and institutional investors.",
    deliverables: [
      "Stakeholder Workshops & Strategy",
      "High-Fidelity Visual Design",
      "Responsive Frontend Development",
      "Interactive Global Trade Map",
    ],
    gallery: [
      "/porfolio/afrizon/afrizon-featured.webp",
      "/service/graphics-designing.webp",
      "/service/ui-ux.webp",
      "/porfolio/GULF-CARGO/main-website.webp",
      "/service/web-development.webp",
    ],
    colorPalette: [
      { name: "Vibrant Orange", hex: "#FF5E00", role: "Action & Interactive Focus" },
      { name: "Deep Onyx", hex: "#080808", role: "Primary Canvas" },
      { name: "Slate Panel", hex: "#18181B", role: "Cards & Elevated Surfaces" },
      { name: "Crisp White", hex: "#FFFFFF", role: "Headlines & Numbers" },
      { name: "Sand Neutral", hex: "#A1A1AA", role: "Supporting Descriptions" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Corporate Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Ee Ff 1234567890 Trade",
      description:
        "High clarity and professional posture suitable for institutional trade documentation and executive reviews.",
    },
    features: [
      {
        title: "Interactive Trade Corridors",
        desc: "Dynamic SVG interactive map showing export paths, delivery transit times, and port hubs.",
      },
      {
        title: "Certified Supplier Directory",
        desc: "Filterable catalog of verified agricultural and raw material producers with lab certifications.",
      },
      {
        title: "Tender & RFP Portal",
        desc: "Structured submission portal for enterprise trade bids and bulk supply inquiries.",
      },
    ],
    technologies: [
      {
        name: "React",
        category: "Framework",
        role: "Modular interface components and interactive corridor mapping",
        icon: "/skill-logos/react-logo.png",
      },
      {
        name: "Next.js",
        category: "Platform",
        role: "High-speed static generation with Edge CDN deployment",
        icon: "/skill-logos/next-js-seeklogo.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Custom typography scales and fluid layout utilities",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "Design",
        role: "Interactive prototypes, design tokens, and user flow blueprints",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Illustrator",
        category: "Vector",
        role: "Custom vector map illustrations and supply chain icons",
        icon: "/skill-logos/illustrator.png",
      },
      {
        name: "Node.js",
        category: "Backend",
        role: "REST endpoints handling tender requests and supplier lead capture",
        icon: "/skill-logos/node-js-seeklogo.png",
      },
    ],
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
    client: "Neo Vault Financial",
    year: "2024",
    role: "Lead Mobile UI/UX Designer",
    duration: "3 Months",
    liveUrl: "https://neovault.example.com",
    overviewSentence:
      "Neo Vault is an intuitive fintech mobile application engineered to bring complete financial transparency, frictionless peer-to-peer transfers, and predictive budget forecasting to modern users. Built dark-mode first, the application strips away conventional banking anxiety by replacing dense financial ledgers with visual asset allocation cards and automated micro-savings algorithms. Every interaction is designed with biometric security and immediate feedback at its core.",
    overview:
      "Neo Vault is a next-generation neo-banking app designed for digitally native individuals and modern business owners. The goal was to eliminate banking friction and replace anxiety with financial clarity.",
    challenge:
      "Modern fintech apps frequently bombard users with excessive notifications, cryptic charts, and micro-fees. Neo Vault wanted an uncluttered, dark-mode first design where balances, transfers, and asset allocations are immediately understandable.",
    solution:
      "Built an intuitive mobile design system with biometric authentication flows, single-swipe peer-to-peer payments, automated budget grouping, and real-time expense analytics with customizable visual cards.",
    deliverables: [
      "End-to-End iOS & Android App Design",
      "Interactive Figma Prototypes",
      "Fintech Design System Tokens",
      "Usability Testing & Micro-Animations",
    ],
    gallery: [
      "/service/app-development.webp",
      "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
      "/service/ui-ux.webp",
      "/porfolio/GULF-CARGO/web-admin-featured.webp",
      "/service/web-development.webp",
    ],
    colorPalette: [
      { name: "Neon Flame", hex: "#FF5E00", role: "Transaction Accent & Highlights" },
      { name: "Pure Black", hex: "#000000", role: "App Background" },
      { name: "Vault Charcoal", hex: "#121214", role: "Card Panels & Bottom Sheets" },
      { name: "High White", hex: "#FFFFFF", role: "Currency Figures & Primary Text" },
      { name: "Subtle Gray", hex: "#71717A", role: "Secondary Labels & Timestamps" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Fintech Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc $142,850.00 +14.2%",
      description:
        "Engineered for rapid numerical cognition, tabular alignment in banking ledgers, and crisp mobile readability.",
    },
    features: [
      {
        title: "One-Swipe Split Payments",
        desc: "Instant peer-to-peer transfers with QR code scanner and contact list integration.",
      },
      {
        title: "Automated Round-Up Vaults",
        desc: "Micro-savings algorithm rounding spare change into diversified high-yield funds.",
      },
      {
        title: "Smart Budget Forecasting",
        desc: "Predictive cashflow timeline forecasting month-end balances based on recurring subscriptions.",
      },
    ],
    technologies: [
      {
        name: "Figma",
        category: "Product Design",
        role: "Comprehensive iOS & Android component design system",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "React Native",
        category: "Mobile",
        role: "Cross-platform mobile application architecture",
        icon: "/skill-logos/react-native.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Design token implementation via NativeWind styling engine",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "JavaScript",
        category: "Language",
        role: "State management, financial calculation math, and biometric hooks",
        icon: "/skill-logos/js.png",
      },
      {
        name: "Photoshop",
        category: "Visuals",
        role: "High-resolution 3D card render assets and app store screenshots",
        icon: "/skill-logos/photoshop.png",
      },
      {
        name: "GitHub",
        category: "Collaboration",
        role: "Mobile build versioning and pull request tracking",
        icon: "/skill-logos/github.png",
      },
    ],
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
    client: "Lumina Analytics Inc",
    year: "2024",
    role: "Senior Product Designer & System Architect",
    duration: "4 Months",
    liveUrl: "https://lumina.example.com",
    overviewSentence:
      "Lumina UI is an enterprise analytics dashboard and design system architected to render complex user metrics, high-density data tables, and customizable charting widgets with zero latency. Created to solve deep design debt across large engineering teams, the component architecture provides over 80 accessible, token-synchronized modules that adapt flawlessly to multi-tenant dark environments. The virtualized rendering engine sustains thousands of live rows while maintaining fluid 60fps interactivity.",
    overview:
      "Lumina Analytics develops data orchestration and user intelligence tools for SaaS enterprises. They needed a unified, scalable design system capable of powering over 40 distinct analytics screens with uniform visual hierarchy.",
    challenge:
      "Enterprise software teams faced significant design debt: inconsistent component behaviors, poor contrast in dark environments, and sluggish performance when rendering tables with thousands of live rows.",
    solution:
      "Created a comprehensive Figma and React token-based design system comprising 80+ accessible components, high-density data tables, modular chart widgets, and strict keyboard navigation compliance.",
    deliverables: [
      "Atomic Design System (80+ Components)",
      "Tokens & Styles for Dark & High Contrast",
      "Interactive Chart & Data Visualizations",
      "Developer Documentation & Storybook",
    ],
    gallery: [
      "/service/ui-ux.webp",
      "/porfolio/GULF-CARGO/web-admin-featured.webp",
      "/service/web-development.webp",
      "/images/90ff774dded2c8e8e90c82237929704e.webp",
      "/service/app-development.webp",
    ],
    colorPalette: [
      { name: "Lumina Orange", hex: "#FF5E00", role: "Active Selection & Alerts" },
      { name: "Dashboard Black", hex: "#09090B", role: "Canvas Base" },
      { name: "Card Surface", hex: "#18181B", role: "Widget Enclosures" },
      { name: "Metric White", hex: "#FFFFFF", role: "Data Readouts & Headlines" },
      { name: "Grid Zinc", hex: "#52525B", role: "Borders, Axis & Dividers" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Data-Dense Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc 8,429 MAU 99.98%",
      description:
        "Optimized for high-density tabular numbers, chart labels, and unambiguous glyph differentiation.",
    },
    features: [
      {
        title: "Modular Grid Canvas",
        desc: "Drag-and-drop dashboard builder allowing managers to customize metric priorities.",
      },
      {
        title: "High-Frequency Data Tables",
        desc: "Virtualized rendering engine sustaining 10,000+ simultaneous data rows without lag.",
      },
      {
        title: "Universal Design Tokens",
        desc: "Shared JSON tokens synchronizing Figma styles with Tailwind and CSS custom properties.",
      },
    ],
    technologies: [
      {
        name: "React",
        category: "UI Architecture",
        role: "Modular component tokens and accessible compound components",
        icon: "/skill-logos/react-logo.png",
      },
      {
        name: "Next.js",
        category: "Framework",
        role: "Documentation platform and Storybook live sandbox hosting",
        icon: "/skill-logos/next-js-seeklogo.png",
      },
      {
        name: "Tailwind CSS",
        category: "Design System",
        role: "Multi-theme variables, dark/light modes, and spacing scales",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "System Design",
        role: "80+ atomic components with variants, auto-layout, and token definitions",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Node.js",
        category: "Tooling",
        role: "Build scripts generating production npm component packages",
        icon: "/skill-logos/node-js-seeklogo.png",
      },
      {
        name: "GitHub",
        category: "Version Control",
        role: "Monorepo management, visual regression tests, and continuous delivery",
        icon: "/skill-logos/github.png",
      },
    ],
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
    client: "Pulse Health Technologies",
    year: "2023",
    role: "Mobile UI/UX & Interaction Designer",
    duration: "2 Months",
    liveUrl: "https://pulsehealth.example.com",
    overviewSentence:
      "Pulse Health is a modern fitness tracking application translating wearable biometrics into proactive daily recovery scores, audio-guided interval workouts, and motivating habit streaks. By transforming complex cardiovascular metrics like HRV and VO2 max into approachable, color-coded visual loops, the platform encourages sustainable health habits. The interface couples high-contrast dark styling with tactile haptic cues, ensuring flawless legibility during high-intensity training.",
    overview:
      "Pulse Health connects wearable fitness monitors with AI-driven training recommendations. The goal was to transform passive biometric tracking into proactive, motivational health journeys.",
    challenge:
      "Health metrics like HRV, sleep cycles, and VO2 max can easily overwhelm regular users if presented as raw medical data. The design needed to translate complex physiology into actionable, encouraging visual loops.",
    solution:
      "Crafted an engaging mobile application interface utilizing circular progress rings, adaptive recovery scores, and audio-guided workout timers wrapped in an energetic dark-mode aesthetic.",
    deliverables: [
      "iOS & Android Mobile UX Design",
      "Wearable Device Companion Screens",
      "Micro-Animations & Audio Feedback",
      "Gamification & Streak Reward Badges",
    ],
    gallery: [
      "/service/digital-marketing.webp",
      "/service/app-development.webp",
      "/images/249d1779c161e64afc73693bd4efffc4.webp",
      "/service/ui-ux.webp",
      "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
    ],
    colorPalette: [
      { name: "Pulse Orange", hex: "#FF5E00", role: "Active Heartbeat & Calories" },
      { name: "Workout Black", hex: "#050505", role: "Primary Background" },
      { name: "Ring Surface", hex: "#18181B", role: "Card Containers" },
      { name: "Vital White", hex: "#FFFFFF", role: "Time & Rep Counters" },
      { name: "Muted Energy", hex: "#71717A", role: "Unit Labels & Inactive Rings" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Athletic Grotesk",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc 148 BPM 420 KCAL",
      description:
        "High-contrast, bold numerals readable at a glance during high-intensity training sessions.",
    },
    features: [
      {
        title: "Dynamic Daily Recovery Score",
        desc: "Color-coded readiness index based on sleep quality, heart rate variability, and previous training load.",
      },
      {
        title: "Audio-Guided Interval Timer",
        desc: "Hands-free workout timer with high-contrast countdown graphics and haptic cues.",
      },
      {
        title: "Biometric Trend Reports",
        desc: "Weekly and monthly habit heatmaps celebrating consistency and personal record breakthroughs.",
      },
    ],
    technologies: [
      {
        name: "React Native",
        category: "Mobile",
        role: "Cross-platform mobile application development",
        icon: "/skill-logos/react-native.png",
      },
      {
        name: "Figma",
        category: "Interaction Design",
        role: "Motion curves, tactile feedback maps, and mobile screen designs",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Dark mode design tokens and responsive mobile layout system",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "JavaScript",
        category: "Logic",
        role: "Biometric mathematical formulas and sensor API integration",
        icon: "/skill-logos/js.png",
      },
      {
        name: "Illustrator",
        category: "Vector",
        role: "Custom exercise illustration vectors and milestone achievement badges",
        icon: "/skill-logos/illustrator.png",
      },
      {
        name: "GitHub",
        category: "Repository",
        role: "Fastlane automated build distribution and team code reviews",
        icon: "/skill-logos/github.png",
      },
    ],
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
    client: "Nexus Cloud Systems",
    year: "2024",
    role: "Full-Stack UI Developer & Product Designer",
    duration: "4 Months",
    liveUrl: "https://nexuscloud.example.com",
    overviewSentence:
      "Nexus Cloud is an infrastructure cockpit empowering DevOps teams to orchestrate multi-cloud clusters, automated CI/CD deployment pipelines, and live telemetry from a unified workspace. Designed to eliminate context switching across fragmented cloud providers, the interface features a drag-and-drop pipeline canvas and real-time WebSocket health feeds. The architecture emphasizes high-density visual clarity, giving engineering leaders complete operational command over critical services.",
    overview:
      "Nexus Cloud empowers DevOps teams to orchestrate multi-cloud infrastructure and automated deployment pipelines from a single intuitive command cockpit.",
    challenge:
      "Managing serverless clusters, Kubernetes pods, and CI/CD pipelines across AWS, GCP, and Azure created immense cognitive load and operational friction for engineering leaders.",
    solution:
      "Engineered an ultra-responsive web dashboard with real-time WebSocket cluster health monitors, drag-and-drop workflow visualizers, and unified permission controls.",
    deliverables: [
      "End-to-End Cloud Cockpit UX",
      "Interactive Node & Pipeline Visualizer",
      "Tailwind UI Component Implementation",
      "WebSocket Real-Time Monitoring UI",
    ],
    gallery: [
      "/service/web-development.webp",
      "/porfolio/GULF-CARGO/main-website.webp",
      "/service/ui-ux.webp",
      "/porfolio/GULF-CARGO/web-admin-featured.webp",
      "/images/249d1779c161e64afc73693bd4efffc4.webp",
    ],
    colorPalette: [
      { name: "Signal Orange", hex: "#FF5E00", role: "Cluster Alerts & Key Actions" },
      { name: "Terminal Black", hex: "#08080A", role: "Dark Cockpit Canvas" },
      { name: "Console Slate", hex: "#16161A", role: "Node Blocks & Panels" },
      { name: "Code White", hex: "#FFFFFF", role: "Terminal Output & Labels" },
      { name: "Muted Steel", hex: "#64748B", role: "Branch Names & Parameters" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Technical Grotesk",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc cluster-east-1 OK 200",
      description:
        "Sharp and technical with crisp terminal code blocks and unmistakable status readability.",
    },
    features: [
      {
        title: "Visual Pipeline Builder",
        desc: "Node-based canvas for connecting microservices, build triggers, and deployment targets.",
      },
      {
        title: "Live Cloud Health Telemetry",
        desc: "Real-time streaming metrics showing CPU, memory, error rates, and active pod health.",
      },
      {
        title: "Granular Team Access Controls",
        desc: "Role-based permissions with audit trails, SSO integration, and API token management.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        role: "High-concurrency full-stack web application architecture",
        icon: "/skill-logos/next-js-seeklogo.png",
      },
      {
        name: "React",
        category: "Frontend",
        role: "Canvas state handling for interactive node graph visualizer",
        icon: "/skill-logos/react-logo.png",
      },
      {
        name: "Node.js",
        category: "Backend Engine",
        role: "WebSocket cluster telemetry streaming service and cloud webhooks",
        icon: "/skill-logos/node-js-seeklogo.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Technical UI system with dark console themes and high-density panels",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "Product Design",
        role: "Complex data architecture layouts, node diagrams, and component specs",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Container image CI/CD pipelines and deployment orchestration",
        icon: "/skill-logos/github.png",
      },
    ],
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
    client: "Kerala Artisans Collective",
    year: "2023",
    role: "WordPress Architect & UI Designer",
    duration: "2 Months",
    liveUrl: "https://keralacrafts.example.com",
    overviewSentence:
      "Kerala Crafts is an authentic e-commerce portal connecting indigenous master artisans with international collectors through narrative brand storytelling and custom WordPress architecture. Each product narrative honors the individual craftsman, documenting sustainable heritage techniques through multimedia essays and transparent provenance records. The platform pairs cultural authenticity with modern global commerce, integrating multi-currency checkout and international courier tracking.",
    overview:
      "Kerala Crafts is an initiative connecting traditional artisans and indigenous craft guilds with conscious global consumers seeking handcrafted home decor and heritage artworks.",
    challenge:
      "Artisan communities struggled to convey the profound cultural history and sustainable production techniques behind each handcrafted object on standard commercial retail templates.",
    solution:
      "Designed a storytelling-driven e-commerce experience celebrating individual artisans, integrating multimedia product origin stories, smooth checkout flows, and international courier tracking.",
    deliverables: [
      "Brand Storytelling & E-Commerce UX",
      "Custom WooCommerce Theme Architecture",
      "Payment Gateway & Currency Switcher",
      "Artisan Profile & Guild Directory",
    ],
    gallery: [
      "/service/wordpress.webp",
      "/service/graphics-designing.webp",
      "/images/90ff774dded2c8e8e90c82237929704e.webp",
      "/service/digital-marketing.webp",
      "/service/ui-ux.webp",
    ],
    colorPalette: [
      { name: "Earthy Orange", hex: "#FF5E00", role: "Warm Terracotta Accent" },
      { name: "Rich Charcoal", hex: "#0E0E0E", role: "Deep Background" },
      { name: "Studio Surface", hex: "#1C1C1E", role: "Product Showcase Cards" },
      { name: "Ivory White", hex: "#FFFFFF", role: "Typography & Accents" },
      { name: "Natural Zinc", hex: "#A1A1AA", role: "Product Descriptions" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Editorial Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Handcrafted in Kerala",
      description:
        "Editorial elegance providing spacious breathing room for luxury craft pieces and cultural essays.",
    },
    features: [
      {
        title: "Artisan Origin Stories",
        desc: "Rich narrative product pages spotlighting the individual master craftsman behind each creation.",
      },
      {
        title: "Multi-Currency Global Checkout",
        desc: "Seamless international payments supporting Stripe, PayPal, and automatic customs duty estimations.",
      },
      {
        title: "Eco-Packaging Guarantee",
        desc: "Transparent sustainability badges documenting zero-plastic packaging and fair-trade verification.",
      },
    ],
    technologies: [
      {
        name: "WordPress",
        category: "CMS Platform",
        role: "Custom theme templating, custom post types, and editorial control",
        icon: "/skill-logos/WordPress_logo.png",
      },
      {
        name: "JavaScript",
        category: "Frontend",
        role: "Dynamic currency conversions, cart interactions, and smooth transitions",
        icon: "/skill-logos/js.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Modern utility styling integrated into WordPress PHP templates",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "UI Design",
        role: "E-commerce wireframing, typography pairing, and checkout flow design",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "Photoshop",
        category: "Image Editing",
        role: "Product photo enhancement, color grading, and texture asset generation",
        icon: "/skill-logos/photoshop.png",
      },
      {
        name: "GitHub",
        category: "Version Control",
        role: "Theme versioning and automated deployment to staging servers",
        icon: "/skill-logos/github.png",
      },
    ],
  },
  ...portfolioData,
];
