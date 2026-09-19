"use client";

import Image from "next/image";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, type PointerEvent } from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import "./Styles.css";

const featuredWorks = [
  {
    title: "ADVERTO",
    subtitle: "Creative Agency Website",
    category: "UI/UX · Web Design · Frontend",
    description:
      "A modern digital experience for a creative advertising agency, designed around bold visual communication and clear navigation.",
    video: "/porfolio/adverto/featured-video.mp4",
  },
  {
    title: "GULF CARGO",
    subtitle: "Logistics Platform",
    category: "UI/UX · Product Design · Frontend",
    description:
      "A structured digital experience designed to simplify logistics services and improve information accessibility.",
    image: "/porfolio/GULF-CARGO/FEATURED.webp",
  },
  {
    title: "GPS TRADES",
    subtitle: "Solar & Energy Website",
    category: "UI/UX · Web Design · Development",
    description:
      "A clean digital presence communicating renewable energy solutions through a modern and approachable interface.",
    image: "/porfolio/gps/featured.webp",
  },
  {
    title: "AFRIZON",
    subtitle: "Digital Experience",
    category: "UI/UX · Web Design · Development",
    description:
      "A digital experience built for global trade and sustainable growth solutions.",
    image: "/porfolio/afrizon/afrizon-featured.webp",
  },
] as const;

const LazyVideo = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        video.src = src;
        video.load();
        observer.disconnect();
      },
      { rootMargin: "200px 0px" },
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

const FeaturedPortfolio = () => {
  const getCardCursor = (target: HTMLElement) =>
    target.querySelector<HTMLElement>(".featured-work-cursor");

  const getCursorMotion = (cursor: HTMLElement, index: number) => {
    const cachedXTo = (cursor as HTMLElement & { _xTo?: gsap.QuickToFunc })
      ._xTo;
    const cachedYTo = (cursor as HTMLElement & { _yTo?: gsap.QuickToFunc })
      ._yTo;

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
    index: number,
  ) => {
    const cursor = getCardCursor(event.currentTarget);

    if (!cursor) {
      return;
    }

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
    index: number,
  ) => {
    const cursor = getCardCursor(event.currentTarget);

    if (!cursor) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const { xTo, yTo } = getCursorMotion(cursor, index);

    xTo(pointerX);
    yTo(pointerY);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    const cursor = getCardCursor(event.currentTarget);

    if (!cursor) {
      return;
    }

    gsap.to(cursor, {
      autoAlpha: 0,
      scale: 0.7,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <section id="work" className="featured-portfolio-section">
      <div className="site-container">
        <div className="featured-portfolio-header flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-12">
          <div className="flex flex-col items-start">
            <span className="mb-[10px] text-[18px] font-light text-black">
              Selected Works
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-black">
              Selected <span className="text-primary">projects,</span> designed
              <br />
              to solve real problems.
            </h2>
          </div>

          <p className="max-w-[22rem] text-[17px] font-light leading-[1.35] text-black md:text-right">
            A selection of websites, interfaces and digital products I&apos;ve
            designed and developed across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-14">
          {featuredWorks.map((work, index) => (
            <article
              key={`${"video" in work ? work.video : work.image}-${index}`}
              className="group flex flex-col gap-0"
            >
              {/* Large Visual */}
              <div
                className="featured-work-image relative aspect-[16/10] overflow-hidden bg-[#f4f1ec]"
                data-cursor="View Case Study"
                onPointerEnter={(event) => handlePointerEnter(event, index)}
                onPointerMove={(event) => handlePointerMove(event, index)}
                onPointerLeave={handlePointerLeave}
              >
                {"video" in work ? (
                  <LazyVideo src={work.video} />
                ) : (
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="featured-work-img object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                <div className="featured-work-cursor" aria-hidden="true">
                  <FiArrowUpRight className="featured-work-cursor-icon" />
                </div>
              </div>

              {/* Meta details */}
              <div className="flex flex-col gap-0 pt-0">
                {/* Heading Left & Subtitle Right */}
                <div className="flex items-baseline justify-between gap-4 w-full">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                    {work.title}
                  </h3>
                  <p className="text-base font-medium text-black/70 text-right shrink-0">
                    {work.subtitle}
                  </p>
                </div>

                {/* Category under heading with 4px padding */}
                <span className="text-xs font-medium text-primary tracking-wide pt-[4px]">
                  {work.category}
                </span>

                {/* Description: 17px font size & 25px line height */}
                {"description" in work && (
                  <p className="mt-0 text-[17px] leading-[25px] font-light text-black/80">
                    {work.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="featured-portfolio-cta mt-12 sm:mt-16">
          <PrimaryBtn href="#contact">View More Works</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
