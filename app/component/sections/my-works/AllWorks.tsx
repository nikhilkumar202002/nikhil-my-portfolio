"use client";

import Image from "next/image";
import { useState, useRef, useEffect, type PointerEvent } from "react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles.css";

type CategoryFilter = "ALL" | "UI/UX" | "WEBSITES" | "WEB APPS" | "MOBILE";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  categoryTag: string;
  categories: CategoryFilter[];
  description: string;
  image?: string;
  video?: string;
}

const projectsData: ProjectItem[] = [
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

const filterCategories: CategoryFilter[] = [
  "ALL",
  "UI/UX",
  "WEBSITES",
  "WEB APPS",
  "MOBILE",
];

const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        video.src = src;
        video.load();
        observer.disconnect();
      },
      { rootMargin: "200px 0px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      className="featured-work-img featured-work-video"
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
};

const AllWorks = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("ALL");

  const filteredProjects = projectsData.filter((project) =>
    project.categories.includes(activeFilter)
  );

  const getCardCursor = (target: HTMLElement) =>
    target.querySelector<HTMLElement>(".featured-work-cursor");

  const getCursorMotion = (cursor: HTMLElement, index: number) => {
    const cachedXTo = (cursor as HTMLElement & { _xTo?: gsap.QuickToFunc })._xTo;
    const cachedYTo = (cursor as HTMLElement & { _yTo?: gsap.QuickToFunc })._yTo;

    if (cachedXTo && cachedYTo) {
      return { xTo: cachedXTo, yTo: cachedYTo };
    }

    const xTo = gsap.quickTo(cursor, "x", {
      duration: index % 2 === 0 ? 0.35 : 0.45,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: index % 2 === 0 ? 0.35 : 0.45,
      ease: "power3.out",
    });

    (cursor as HTMLElement & { _xTo?: gsap.QuickToFunc })._xTo = xTo;
    (cursor as HTMLElement & { _yTo?: gsap.QuickToFunc })._yTo = yTo;

    return { xTo, yTo };
  };

  const handlePointerEnter = (
    event: PointerEvent<HTMLElement>,
    index: number
  ) => {
    const cursor = getCardCursor(event.currentTarget);
    if (!cursor) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;

    gsap.set(cursor, {
      x: pointerX,
      y: pointerY,
      xPercent: -50,
      yPercent: -50,
    });

    gsap.to(cursor, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLElement>,
    index: number
  ) => {
    const cursor = getCardCursor(event.currentTarget);
    if (!cursor) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const { xTo, yTo } = getCursorMotion(cursor, index);

    xTo(pointerX);
    yTo(pointerY);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    const cursor = getCardCursor(event.currentTarget);
    if (!cursor) return;

    gsap.to(cursor, {
      autoAlpha: 0,
      scale: 0.7,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section className="w-full bg-white pb-20 sm:pb-24 lg:pb-[150px]">
      <div className="site-container">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-10 sm:mb-12">
          {filterCategories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium uppercase tracking-[0px] transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-black/70 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {filteredProjects.map((work, index) => (
            <article
              key={work.id}
              className="group flex flex-col gap-0 transition-opacity duration-300"
            >
              {/* Visual Container */}
              <div
                className="featured-work-image relative aspect-[16/10] overflow-hidden bg-[#f4f1ec]"
                data-cursor="View Case Study"
                onPointerEnter={(event) => handlePointerEnter(event, index)}
                onPointerMove={(event) => handlePointerMove(event, index)}
                onPointerLeave={handlePointerLeave}
              >
                {work.video ? (
                  <LazyVideo src={work.video} />
                ) : (
                  <Image
                    src={work.image || "/service/web-development.webp"}
                    alt={work.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="featured-work-img object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="featured-work-cursor" aria-hidden="true">
                  <FiArrowUpRight className="featured-work-cursor-icon" />
                </div>
              </div>

              {/* Meta details */}
              <div className="flex flex-col gap-0 pt-[10px]">
                {/* Heading Left & Subtitle Right */}
                <div className="flex items-baseline justify-between gap-3 w-full">
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-black">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-black/70 text-right shrink-0">
                    {work.subtitle}
                  </p>
                </div>

                {/* Category under heading with 4px padding */}
                <span className="text-xs font-medium text-primary tracking-wide pt-[4px]">
                  {work.categoryTag}
                </span>

                {/* Description: 17px font size & 25px line height */}
                <p className="mt-1 text-[15px] sm:text-[16px] leading-[23px] sm:leading-[25px] font-light text-black/80">
                  {work.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllWorks;