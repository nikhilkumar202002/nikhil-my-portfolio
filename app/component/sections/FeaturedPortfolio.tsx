"use client";

import Image from "next/image";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
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

const renderAnimatedTitle = (title: string) => {
  const words = title.split(" ");

  return words.map((word, wordIndex) => (
    <span
      key={`${title}-${word}-${wordIndex}`}
      className="featured-work-title-word"
    >
      {Array.from(word).map((char, charIndex) => (
        <span
          key={`${title}-${wordIndex}-${charIndex}-${char}`}
          className="featured-work-title-letter"
          style={{ transitionDelay: `${(wordIndex * 7 + charIndex) * 12}ms` }}
        >
          <span className="featured-work-title-letter-top">{char}</span>
          <span className="featured-work-title-letter-bottom">{char}</span>
        </span>
      ))}

      {wordIndex < words.length - 1 ? (
        <span className="featured-work-title-space" aria-hidden="true">
          &nbsp;
        </span>
      ) : null}
    </span>
  ));
};

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

  const getCardCursor = (card: HTMLElement) =>
    card.querySelector<HTMLElement>(".featured-work-cursor");

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
    const cursor = getCardCursor(event.currentTarget);

    if (!cursor) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const { xTo, yTo } = getCursorMotion(cursor, index);

    xTo(event.clientX - rect.left);
    yTo(event.clientY - rect.top);

    gsap.to(cursor, {
      xPercent: -20,
      yPercent: -20,
      duration: 0.9,
      ease: "power3.out",
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
    const cursorWidth = cursor.offsetWidth + 16;
    const pointerX = event.clientX - rect.left;
    const pointerY = event.clientY - rect.top;
    const xPercent = pointerX > rect.width - cursorWidth ? -100 : -20;
    const yPercent = pointerY > rect.height * 0.9 ? -120 : -20;
    const motion = getCursorMotion(cursor, index);

    gsap.to(cursor, {
      xPercent,
      yPercent,
      duration: 0.9,
      ease: "power3.out",
    });

    motion.xTo(pointerX);
    motion.yTo(pointerY);
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
        <div className="featured-portfolio-header">
          <h2>Featured Works</h2>
          <p>Selected 6 Works</p>
        </div>

        <div className="featured-works-grid">
          {featuredWorks.map((work, index) => (
            <article key={`${work.image}-${index}`} className="featured-work-card">
              <div
                className="featured-work-image"
                data-cursor="Learn more"
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

                <div className="featured-work-cursor" aria-hidden="true">
                  <FiArrowUpRight className="featured-work-cursor-icon" />
                </div>
              </div>

              <div className="featured-work-meta">
                <div className="featured-work-copy">
                  <span className="featured-work-category">{work.category}</span>
                  <h3 className="featured-work-title" aria-label={work.title}>
                    <span className="featured-work-title-text" aria-hidden="true">
                      {renderAnimatedTitle(work.title)}
                    </span>
                  </h3>
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
