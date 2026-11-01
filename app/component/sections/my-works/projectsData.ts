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

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  categories: CategoryFilter[];
  description: string;
  image?: string;
  video?: string;
  client: string;
  year: string;
  role: string;
  duration: string;
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  gallery: string[];
  colorPalette: ColorSwatch[];
  typography: TypographySpec;
  features: ProjectFeature[];
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
      "/porfolio/GULF-CARGO/web-admin-featured.webp",
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
    client: "GPS Trades Renewable Power",
    year: "2024",
    role: "Web Designer & Frontend Engineer",
    duration: "6 Weeks",
    liveUrl: "https://gpstrades.example.com",
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
      "/service/web-development.webp",
      "/service/ui-ux.webp",
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
  },
];
