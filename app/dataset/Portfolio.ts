import type { ProjectItem } from "@/app/component/sections/my-works/projectsData";

export const portfolioData: ProjectItem[] = [
  {
    id: "gulf-cargo-app",
    title: "GULF CARGO APP",
    subtitle: "Internal Field Billing Application",
    categoryTag: "UI/UX · Mobile App · Internal Tool",
    categories: ["ALL", "MOBILE", "UI/UX"],
    description:
      "An internal mobile billing application built for Gulf Cargo field staff to take orders, inspect cargo, and generate instant invoices directly from customers' homes.",
    image: "/porfolio/GULF-CARGO/application/featured.jpg",
    bannerImage: "/porfolio/GULF-CARGO/application/cover.jpg",
    client: "Gulf Cargo Logistics L.L.C",
    year: "2024",
    role: "Lead Mobile UI/UX Designer",
    duration: "2 Months",
    liveUrl: "https://gulfcargo.example.com/app",
    overviewSentence:
      "Gulf Cargo App is an internal mobile operations tool engineered for logistics field staff who visit customers' homes to inspect cargo, take booking orders, and generate instant billing invoices on the spot. Designed to replace manual paper receipts and telephone rate confirmations, the application gives staff real-time volumetric pricing, digital manifest capture, and immediate receipt generation on their smartphones. Every workflow is optimized for fast, error-free data entry during doorstep collections, complete with offline mode for areas with poor connectivity.",
    overview:
      "Gulf Cargo required a dedicated internal mobile billing application to empower their field staff who visit customers' homes to collect shipments. Previously, agents relied on physical receipt booklets, manual weight approximations, and delayed billing reconciliations, leading to pricing discrepancies and logistical bottlenecks. The new application equips staff with a touch-first tool to measure packages, calculate exact freight charges, and generate verified digital invoices directly in front of the customer.",
    challenge:
      "Field staff conduct home collections under time constraints in diverse residential environments where fast, dependable interaction is critical. The key challenge was designing an interface that simplifies multi-variable freight tariffs — factoring in volumetric weight, destination customs rules, fragile packaging add-ons, and spot discounts — while ensuring full offline functionality when cellular reception is weak inside residential buildings.",
    solution:
      "We architected an agent-centered doorstep billing flow: Customer Lookup & Address Verification, Package Dimension & Automated Rate Calculation, and Instant Billing & Receipting. The app incorporates offline data persistence, Bluetooth thermal printer integration for physical slips, and direct WhatsApp and SMS invoice delivery to customers.",
    deliverables: [
      "Field Staff Mobile UI/UX Design",
      "Doorstep Order Intake & Billing Flow",
      "Offline Tariff Calculation Architecture",
      "Interactive High-Fidelity Prototype",
    ],
    gallery: [
      "/porfolio/GULF-CARGO/application/featured.jpg",
      "/porfolio/GULF-CARGO/application/cover.jpg",
      "/porfolio/GULF-CARGO/application/2.jpg",
      "/porfolio/GULF-CARGO/application/3.jpg",
      "/porfolio/GULF-CARGO/application/4.jpg",
    ],
    features: [
      {
        title: "Doorstep Rate & Dimension Calculator",
        desc: "Instant volumetric pricing engine with automated dimensional weight vs actual weight tariff comparisons.",
      },
      {
        title: "On-the-Spot Invoice & Receipting",
        desc: "Instant digital invoice delivery via SMS and WhatsApp, alongside Bluetooth thermal receipt printing.",
      },
      {
        title: "Offline Mode & Dispatch Sync",
        desc: "Enables staff to complete orders without cellular connectivity, automatically queuing and syncing once back online.",
      },
    ],
    technologies: [
      {
        name: "Figma",
        category: "UI Design",
        role: "Field staff workflow mapping, component design system, and interactive mobile prototyping",
        icon: "/skill-logos/figma.png",
      },
      {
        name: "React Native",
        category: "Mobile Framework",
        role: "Cross-platform Android and iOS application engineered for fast field deployment",
        icon: "/skill-logos/react.png",
      },
      {
        name: "TypeScript",
        category: "Language",
        role: "Type-safe data models for complex cargo tariffs, multi-currency rates, and billing logic",
        icon: "/skill-logos/ts.png",
      },
      {
        name: "Node.js",
        category: "Backend",
        role: "Secure REST APIs for order synchronization, staff authentication, and dispatch logs",
        icon: "/skill-logos/nodejs.png",
      },
      {
        name: "Tailwind CSS",
        category: "Styling",
        role: "Utility-first interface styling for administrative reporting and companion web portal",
        icon: "/skill-logos/tailwind-css.png",
      },
      {
        name: "GitHub",
        category: "DevOps",
        role: "Source control, continuous integration, and automated internal app distribution",
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
