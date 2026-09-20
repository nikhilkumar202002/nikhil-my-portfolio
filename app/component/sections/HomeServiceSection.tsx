"use client";

import Image from "next/image";
import { useState } from "react";
import "./Styles.css";

const services = [
  {
    label: "UI/UX Design",
    image: {
      src: "/service/ui-ux.webp",
      alt: "UI/UX design preview",
    },
  },
  {
    label: "Web Development",
    image: {
      src: "/service/web-development.webp",
      alt: "Web development preview",
    },
  },
  {
    label: "WordPress",
    image: {
      src: "/service/wordpress.webp",
      alt: "WordPress preview",
    },
  },
  {
    label: "Digital Experiences",
    image: {
      src: "/service/digital-marketing.webp",
      alt: "Digital marketing preview",
    },
  },
  {
    label: "Graphics Designing",
    image: {
      src: "/service/graphics-designing.webp",
      alt: "Graphics design preview",
    },
  },
  {
    label: "App Development",
    image: {
      src: "/service/app-development.webp",
      alt: "App development preview",
    },
  },
] as const;

const HomeServiceSection = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(0);
  const activeService = services[hoveredServiceIndex];

  return (
    <section id="service" className="w-full bg-[#f7f7f5] py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="home-service-grid">
          <p className="home-service-label">What I Do?</p>

          <div
            className="home-service-list"
            aria-label="Services"
            onMouseLeave={() => setHoveredServiceIndex(0)}
          >
            {services.map((service, index) => (
              <button
                key={service.label}
                type="button"
                className={`home-service-item ${
                  hoveredServiceIndex === index ? "is-primary" : "is-muted"
                }`}
                onMouseEnter={() => setHoveredServiceIndex(index)}
                onFocus={() => setHoveredServiceIndex(index)}
              >
                {service.label}
              </button>
            ))}
          </div>

          <div
            key={activeService.label}
            className="home-service-media home-service-media--animated"
            aria-label="Service previews"
          >
            <div className="home-service-media-card home-service-media-card--single">
              <Image
                src={activeService.image.src}
                alt={activeService.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="home-service-media-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
