import type { ProjectItem } from "@/app/component/sections/my-works/projectsData";

export const portfolioData: ProjectItem[] = [
  {
    id: "gulf-cargo-app",
    title: "GULF CARGO APP",
    subtitle: "Mobile Logistics Application",
    categoryTag: "UI/UX · Mobile Design · Product",
    categories: ["ALL", "MOBILE", "UI/UX"],
    description:
      "A purpose-built mobile application for Gulf Cargo's international logistics clients, enabling real-time shipment tracking and instant booking on the go.",
    image: "/porfolio/GULF-CARGO/application/featured.jpg",
    bannerImage: "/porfolio/GULF-CARGO/application/cover.jpg",
    client: "Gulf Cargo Logistics L.L.C",
    year: "2024",
    role: "Lead Mobile UI/UX Designer",
    duration: "2 Months",
    liveUrl: "https://gulfcargo.example.com/app",
    overviewSentence:
      "Gulf Cargo App is a native-grade mobile logistics experience that puts real-time container tracking, instant quotation tools, and document management into the hands of enterprise freight clients across the Middle East and Asia. Designed from the ground up for speed and clarity, the app eliminates the need for phone calls and paper trails by surfacing live consignment milestones, automated rate estimates, and secure document uploads directly on a smartphone screen. Every interaction is optimised for one-handed use, with accessible typography, high-contrast status indicators, and gesture-driven navigation that makes complex freight data effortless to consume on the move.",
    overview:
      "Gulf Cargo required a companion mobile application to extend their web logistics platform to field agents, enterprise account managers, and retail shippers who operate on the go. The mobile product needed to surface the same real-time cargo intelligence as the desktop portal while offering a touch-first, gesture-driven interface optimised for quick task completion in demanding work environments.",
    challenge:
      "Logistics professionals frequently operate in warehouses, ports, and transit hubs where desktop access is impractical. The key challenge was distilling complex freight data — container statuses, volumetric pricing, customs documentation — into a compact, thumb-friendly mobile experience without sacrificing information density or functional depth.",
    solution:
      "We designed a modular mobile UI system built around a persistent tracking dashboard, a swipe-based shipment timeline, and a one-tap rate calculator. Colour-coded status rings and progressive disclosure panels keep the interface uncluttered while ensuring critical cargo milestones are always a single tap away.",
    deliverables: [
      "Mobile UI/UX Design System",
      "Interactive High-Fidelity Prototype",
      "Shipment Tracking & Notification Flows",
      "Rate Calculator & Booking Screens",
    ],
    gallery: [
      "/porfolio/GULF-CARGO/application/featured.jpg",
      "/porfolio/GULF-CARGO/application/cover.jpg",
      "/porfolio/GULF-CARGO/application/2.jpg",
      "/porfolio/GULF-CARGO/application/3.jpg",
      "/porfolio/GULF-CARGO/application/4.jpg",
    ],
    colorPalette: [
      { name: "Safety Orange", hex: "#FF5E00", role: "Primary CTA & Status Active" },
      { name: "Deep Charcoal", hex: "#0A0A0A", role: "App Background" },
      { name: "Cargo Slate", hex: "#18181B", role: "Card & Bottom Sheet Surface" },
      { name: "Pure White", hex: "#FFFFFF", role: "Primary Headings & Labels" },
      { name: "Steel Muted", hex: "#71717A", role: "Secondary Metadata & Timestamps" },
    ],
    typography: {
      fontFamily: "SF Pro Display",
      category: "System Geometric Sans",
      weights: ["Regular 400", "Medium 500", "Semibold 600"],
      sampleText: "Aa Bb Cc Dd Ee Ff 1234567890",
      description:
        "SF Pro Display ensures pixel-perfect legibility at small mobile sizes while lending the app a native, platform-confident personality.",
    },
    features: [
      {
        title: "Real-Time Shipment Tracker",
        desc: "Live GPS-pinned container milestones with push notifications at every status change.",
      },
      {
        title: "Instant Rate Calculator",
        desc: "One-tap volumetric pricing for air, sea, and land cargo with multi-currency output.",
      },
      {
        title: "Secure Document Vault",
        desc: "In-app upload and retrieval of customs declarations, invoices, and bills of lading.",
      },
    ],
    technologies: [
      {
        name: "Figma",
        category: "UI Design",
        role: "End-to-end mobile UI design, component library, and interactive prototyping",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "React Native",
        category: "Mobile Framework",
        role: "Cross-platform iOS and Android development with native performance",
        icon: "/skill-logos/react.png",
      },
      {
        name: "TypeScript",
        category: "Language",
        role: "Type-safe component architecture and API integration layer",
        icon: "/skill-logos/ts.png",
      },
      {
        name: "Node.js",
        category: "Backend",
        role: "REST API services for tracking data, rate engine, and authentication",
        icon: "/skill-logos/nodejs.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Utility-first styling for the web preview and admin companion portal",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Source control, CI/CD pipelines, and automated mobile build distribution",
        icon: "/skill-logos/github.png",
      },
    ],
  },
  {
    id: "merchem",
    title: "MERCHEM",
    subtitle: "Chemical Distribution Platform",
    categoryTag: "UI/UX · Web Design · Frontend",
    categories: ["ALL", "WEBSITES", "UI/UX"],
    description:
      "A professional B2B digital platform for a chemical distribution company, built to communicate product range, compliance standards, and industry expertise.",
    image: "/porfolio/merchem/featured.jpg",
    bannerImage: "/porfolio/merchem/cover.jpg",
    client: "Merchem International",
    year: "2024",
    role: "UI/UX Designer & Frontend Developer",
    duration: "2 Months",
    overviewSentence:
      "Merchem is a professional B2B web platform engineered for a specialised chemical distribution enterprise, designed to communicate product expertise, regulatory compliance, and global supply chain capabilities with clarity and authority. The platform consolidates an extensive industrial product catalogue with detailed safety data sheets, sector-specific use-case narratives, and streamlined inquiry workflows tailored for procurement managers across the manufacturing, oil & gas, and water treatment industries. Every design decision reinforces Merchem's positioning as a credible, compliance-first partner in a highly regulated sector.",
    overview:
      "Merchem International is a specialised chemical distribution company supplying industrial and specialty chemicals across the GCC and broader MENA region. The project involved designing and building a full B2B web presence that accurately represents their product portfolio, certifications, and sector reach while converting inbound industry leads into qualified inquiries.",
    challenge:
      "Chemical distribution platforms often suffer from outdated, text-heavy layouts that fail to instil confidence in procurement decision-makers. Merchem needed a modern, authoritative digital presence that could clearly surface product specifications, safety compliance information, and sector expertise without overwhelming visitors with jargon.",
    solution:
      "We designed a clean, structured web platform with a prominent product catalogue, sector landing pages, and an intuitive inquiry form system. A strong typographic hierarchy and restrained colour palette communicate technical credibility, while clear CTA flows guide procurement managers towards direct contact.",
    deliverables: [
      "Brand Visual Direction & UI Design",
      "B2B Product Catalogue & Sector Pages",
      "Inquiry & Lead Capture Workflow",
      "Responsive Frontend Development",
    ],
    gallery: [
      "/porfolio/merchem/featured.jpg",
      "/porfolio/merchem/cover.jpg",
      "/porfolio/merchem/1.jpg",
      "/porfolio/merchem/2.jpg",
      "/porfolio/merchem/3.jpg",
    ],
    colorPalette: [
      { name: "Brand Orange", hex: "#FF5E00", role: "Primary CTA & Accent" },
      { name: "Deep Black", hex: "#0A0A0A", role: "Main Background" },
      { name: "Surface Slate", hex: "#18181B", role: "Card & Section Surface" },
      { name: "Pure White", hex: "#FFFFFF", role: "Headings & Primary Text" },
      { name: "Zinc Grey", hex: "#71717A", role: "Body Copy & Metadata" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Modern Grotesk Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Ee Ff Gg 1234567890",
      description:
        "Selected for its clean, authoritative tone — ideal for technical B2B content that must balance professionalism with approachability.",
    },
    features: [
      {
        title: "Structured Product Catalogue",
        desc: "Filterable chemical product listings with technical specs, grades, and downloadable safety data sheets.",
      },
      {
        title: "Sector-Specific Landing Pages",
        desc: "Dedicated pages for oil & gas, water treatment, and manufacturing with tailored product recommendations.",
      },
      {
        title: "Streamlined B2B Inquiry System",
        desc: "Multi-step inquiry forms with product pre-selection, quantity fields, and direct sales team routing.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        role: "Static site generation and optimised page routing for the product catalogue",
        icon: "/skill-logos/next-js.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Utility-first responsive layout system and design token implementation",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "UI Design",
        role: "Full wireframe and high-fidelity UI design with component library",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "TypeScript",
        category: "Language",
        role: "Type-safe component development and API data modelling",
        icon: "/skill-logos/ts.png",
      },
      {
        name: "Framer Motion",
        category: "Animation",
        role: "Smooth entrance animations and scroll-triggered section reveals",
        icon: "/skill-logos/framer.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Version control, branch strategy, and automated deployment pipeline",
        icon: "/skill-logos/github.png",
      },
    ],
  },
  {
    id: "gps-trades",
    title: "GPS TRADES",
    subtitle: "Trading & Commodities Platform",
    categoryTag: "UI/UX · Web Design · Frontend",
    categories: ["ALL", "WEBSITES", "UI/UX"],
    description:
      "A sharp, conversion-focused digital platform for a commodities and general trading company operating across the Gulf region.",
    image: "/porfolio/gps/featured.webp",
    bannerImage: "/porfolio/gps/cover.jpg",
    client: "GPS General Trading L.L.C",
    year: "2024",
    role: "UI/UX Designer & Frontend Developer",
    duration: "6 Weeks",
    overviewSentence:
      "GPS Trades is a conversion-focused digital platform built for a diversified Gulf-region general trading company, designed to present a broad product and commodity portfolio with the authority and clarity demanded by B2B procurement partners. The platform maps the company's multi-sector trading reach — spanning foodstuffs, building materials, industrial supplies, and consumer goods — into a structured, navigable catalogue that surfaces key supplier credentials and simplifies the buyer inquiry journey. Precision layout, strong brand typography, and fast-loading product pages position GPS as a credible and efficient trading partner across GCC and global markets.",
    overview:
      "GPS General Trading is a diversified trading and commodities enterprise operating across the Gulf Cooperation Council markets. The project delivered a comprehensive web platform to present their multi-sector product portfolio, international supplier network, and streamlined procurement inquiry system to business buyers and logistics partners.",
    challenge:
      "General trading companies with broad, multi-sector portfolios often struggle to present their product range coherently online, leading to fragmented buyer journeys and missed procurement leads. GPS needed a platform that could organise a wide commodity catalogue while maintaining a focused, professional brand identity.",
    solution:
      "We architected a clean, sector-organised product platform with dedicated category hubs, an intuitive product enquiry funnel, and a prominently featured supplier credentials section. The design prioritises scannable information hierarchies that help procurement managers quickly identify relevant product categories and initiate contact.",
    deliverables: [
      "Full Website UI/UX Design",
      "Multi-Sector Product Catalogue",
      "Supplier & Credential Showcase",
      "Responsive Frontend Development",
    ],
    gallery: [
      "/porfolio/gps/featured.webp",
      "/porfolio/gps/cover.jpg",
      "/porfolio/gps/1.jpg",
      "/porfolio/gps/2.jpg",
      "/porfolio/gps/featured.webp",
    ],
    colorPalette: [
      { name: "Neon Orange", hex: "#FF5E00", role: "Primary Brand Accent & CTA" },
      { name: "Void Black", hex: "#000000", role: "Main Background" },
      { name: "Dark Surface", hex: "#141414", role: "Card & Section Containers" },
      { name: "Pure White", hex: "#FFFFFF", role: "Headings & Primary Labels" },
      { name: "Muted Zinc", hex: "#A1A1AA", role: "Body Text & Descriptions" },
    ],
    typography: {
      fontFamily: "Helvetica Neue",
      category: "Modern Grotesk Sans",
      weights: ["Regular 400", "Medium 500", "Bold 700"],
      sampleText: "Aa Bb Cc Dd Trading 1234567890",
      description:
        "Clean and neutral grotesk chosen to project professionalism across product listings, procurement forms, and corporate overview sections.",
    },
    features: [
      {
        title: "Multi-Sector Product Catalogue",
        desc: "Organised category hubs covering foodstuffs, building materials, industrial supplies, and consumer goods.",
      },
      {
        title: "Supplier Credentials Showcase",
        desc: "Dedicated section highlighting international supplier partnerships, certifications, and import/export reach.",
      },
      {
        title: "Direct Procurement Inquiry Flow",
        desc: "Streamlined multi-field inquiry form with product category pre-selection and direct sales routing.",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        category: "Framework",
        role: "Static site generation with optimised routing for product category pages",
        icon: "/skill-logos/next-js.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Responsive layout and design system implementation",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "Figma",
        category: "UI Design",
        role: "End-to-end wireframing, UI design, and prototype handoff",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "TypeScript",
        category: "Language",
        role: "Component architecture and type-safe data layer",
        icon: "/skill-logos/ts.png",
      },
      {
        name: "Framer Motion",
        category: "Animation",
        role: "Scroll-triggered animations and page transition effects",
        icon: "/skill-logos/framer.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Source control and CI/CD deployment automation",
        icon: "/skill-logos/github.png",
      },
    ],
  },
];
