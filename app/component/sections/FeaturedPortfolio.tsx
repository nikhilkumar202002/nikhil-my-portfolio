"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, type PointerEvent } from "react";
import PrimaryBtn from "../ui/PrimaryBtn";
import "./Styles.css";

const featuredWorks = [
  {
    image: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
  {
    image: "/images/249d1779c161e64afc73693bd4efffc4.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
  {
    image: "/images/90ff774dded2c8e8e90c82237929704e.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
  {
    image: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
  {
    image: "/images/249d1779c161e64afc73693bd4efffc4.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
  {
    image: "/images/90ff774dded2c8e8e90c82237929704e.webp",
    category: "UI/UX",
    title: "Hertzure Naturals Reimagining Ayurveda",
    year: "2024",
  },
] as const;

const FeaturedPortfolio = () => {
  const cursorMotionRef = useRef(
    new Map<
      number,
      {
        xTo: (value: number) => void;
        yTo: (value: number) => void;
      }
    >(),
  );

  const getCursorMotion = (cursor: HTMLElement, index: number) => {
    const existing = cursorMotionRef.current.get(index);

    if (existing) {
      return existing;
    }

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      scale: 0.7,
      autoAlpha: 0,
    });

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.35,
      ease: "power3.out",
    });

    const motion = { xTo, yTo };
    cursorMotionRef.current.set(index, motion);

    return motion;
  };

  const handlePointerEnter = (
    event: PointerEvent<HTMLElement>,
    index: number,
  ) => {
    const cursor = event.currentTarget.querySelector<HTMLElement>(
      ".featured-work-cursor",
    );

    if (!cursor) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const { xTo, yTo } = getCursorMotion(cursor, index);

    xTo(event.clientX - rect.left);
    yTo(event.clientY - rect.top);

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
    const cursor = event.currentTarget.querySelector<HTMLElement>(
      ".featured-work-cursor",
    );

    if (!cursor) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const motion = getCursorMotion(cursor, index);

    motion.xTo(event.clientX - rect.left);
    motion.yTo(event.clientY - rect.top);
  };

  const handlePointerLeave = (event: PointerEvent<HTMLElement>) => {
    const cursor = event.currentTarget.querySelector<HTMLElement>(
      ".featured-work-cursor",
    );

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
        <div className="featured-portfolio-header">
          <h2>Featured Works</h2>
          <p>Selected 6 Works</p>
        </div>

        <div className="featured-works-grid">
          {featuredWorks.map((work, index) => (
            <article key={`${work.image}-${index}`} className="featured-work-card">
              <div
                className="featured-work-image"
                onPointerEnter={(event) => handlePointerEnter(event, index)}
                onPointerMove={(event) => handlePointerMove(event, index)}
                onPointerLeave={handlePointerLeave}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="featured-work-img"
                />

                <div className="featured-work-cursor">View</div>
              </div>

              <div className="featured-work-meta">
                <div className="featured-work-copy">
                  <span className="featured-work-category">{work.category}</span>
                  <h3 className="featured-work-title">{work.title}</h3>
                </div>
                <span className="featured-work-year">{work.year}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="featured-portfolio-cta">
          <PrimaryBtn>View More Works</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPortfolio;
