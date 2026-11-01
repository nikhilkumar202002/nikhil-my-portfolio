"use client";

import Image from "next/image";
import { useState, useRef, useEffect, type PointerEvent } from "react";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import "../Styles.css";

import {
  type CategoryFilter,
  type ProjectItem,
  projectsData,
} from "./projectsData";

export type { CategoryFilter, ProjectItem };
export { projectsData };

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
    <section className="w-full bg-black border-t border-white/5 pb-20 sm:pb-24 lg:pb-[150px]">
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
                className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold uppercase tracking-[0px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-white shadow-[0_0_20px_rgba(255,94,0,0.4)]"
                    : "bg-[#111111] text-zinc-400 border border-white/5 hover:text-white hover:border-primary/40"
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
                className="featured-work-image relative aspect-[16/10] overflow-hidden bg-[#141414] border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(255,94,0,0.25)] transition-all duration-300"
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
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                    {work.title}
                  </h3>
                  <p className="text-sm sm:text-base font-normal text-zinc-400 text-right shrink-0">
                    {work.subtitle}
                  </p>
                </div>

                {/* Category under heading with 4px padding */}
                <span className="text-xs font-semibold text-primary tracking-wide pt-[4px]">
                  {work.categoryTag}
                </span>

                {/* Description: 17px font size & 25px line height */}
                <p className="mt-1 text-[15px] sm:text-[16px] leading-[23px] sm:leading-[25px] font-light text-zinc-400">
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