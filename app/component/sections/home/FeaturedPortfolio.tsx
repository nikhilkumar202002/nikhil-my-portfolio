"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, type PointerEvent } from "react";
import PrimaryBtn from "../../ui/PrimaryBtn";
import "../Styles.css";
import { portfolioData } from "@/app/dataset/Portfolio";

const featuredWorks = portfolioData.map((p) => ({
  slug: p.id,
  title: p.title,
  image: p.image ?? p.gallery[0] ?? "",
  video: p.video,
}));

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

        if (!video.src || video.src === "") {
          video.src = src;
          video.load();
        }
        video.play().catch(() => {});
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
    <section
      id="work"
      className="relative w-full bg-black py-16 sm:py-20 lg:py-[150px] overflow-hidden"
    >
      <div className="site-container relative z-10">
        <div className="featured-portfolio-header flex flex-col justify-between gap-6 md:flex-row md:items-end mb-10 sm:mb-12">
          <div className="flex flex-col items-start">
            <span className="mb-[10px] text-[18px] font-medium text-primary tracking-wide">
              Selected Works
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white">
              Selected <span className="text-primary font-semibold">projects,</span> designed
              <br />
              to solve real problems.
            </h2>
          </div>

          <p className="max-w-[22rem] text-[17px] font-light leading-[1.35] text-zinc-400 md:text-right">
            A selection of websites, interfaces and digital products I&apos;ve
            designed and developed across different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {featuredWorks.map((work, index) => {
            return (
              <article
                key={`${work.slug}-${index}`}
                className="group relative flex flex-col gap-0 focus-visible:outline-none"
                tabIndex={0}
              >
                {/* Large Visual Card */}
                <Link
                  href={`/my-works/${work.slug}`}
                  className="block featured-work-image relative aspect-[16/10] overflow-hidden bg-[#141414] border border-white/10 hover:border-primary/50 transition-colors duration-300"
                  data-cursor="View Case Study"
                  onPointerEnter={handlePointerEnter}
                  onPointerMove={(event) => handlePointerMove(event, index)}
                  onPointerLeave={handlePointerLeave}
                >
                  {work.video ? (
                    <LazyVideo src={work.video} />
                  ) : (
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="featured-work-img object-cover"
                    />
                  )}

                  <div className="featured-work-cursor" aria-hidden="true">
                    <FiArrowUpRight className="featured-work-cursor-icon" />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>

        <div className="featured-portfolio-cta mt-12 sm:mt-16">
          <PrimaryBtn
            href="/my-works"
            className="!bg-primary !text-white px-7 py-3.5 hover:!bg-white hover:!text-black font-semibold transition-colors shadow-[0_0_24px_rgba(255,94,0,0.3)]"
          >
            View More Works
          </PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
