"use client";

import Image from "next/image";
import { useState } from "react";
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
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

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
                onMouseEnter={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setActiveCard(index);
                  setPointer({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                }}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  setActiveCard(index);
                  setPointer({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                  });
                }}
                onMouseLeave={() => setActiveCard(null)}
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="featured-work-img"
                />

                {activeCard === index ? (
                  <div
                    className="featured-work-cursor"
                    style={{
                      left: pointer.x,
                      top: pointer.y,
                    }}
                  >
                    View
                  </div>
                ) : null}
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
