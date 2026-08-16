"use client";

import Image from "next/image";
import { useState } from "react";
import "./Styles.css";

const services = [
  {
    label: "UI/UX Design",
    images: [
      {
        src: "/images/249d1779c161e64afc73693bd4efffc4.webp",
        alt: "Website mockup on a laptop",
      },
      {
        src: "/images/90ff774dded2c8e8e90c82237929704e.webp",
        alt: "Mobile interface design preview",
      },
    ],
  },
  {
    label: "Web Development",
    images: [
      {
        src: "/images/90ff774dded2c8e8e90c82237929704e.webp",
        alt: "Mobile interface design preview",
      },
      {
        src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
        alt: "Website mockup on a desk",
      },
    ],
  },
  {
    label: "WordPress",
    images: [
      {
        src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
        alt: "Website mockup on a desk",
      },
      {
        src: "/images/249d1779c161e64afc73693bd4efffc4.webp",
        alt: "Website mockup on a laptop",
      },
    ],
  },
  {
    label: "Digital Experiences",
    images: [
      {
        src: "/images/249d1779c161e64afc73693bd4efffc4.webp",
        alt: "Website mockup on a laptop",
      },
      {
        src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
        alt: "Website mockup on a desk",
      },
    ],
  },
  {
    label: "Graphics Designing",
    images: [
      {
        src: "/images/90ff774dded2c8e8e90c82237929704e.webp",
        alt: "Mobile interface design preview",
      },
      {
        src: "/images/249d1779c161e64afc73693bd4efffc4.webp",
        alt: "Website mockup on a laptop",
      },
    ],
  },
  {
    label: "App Development",
    images: [
      {
        src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
        alt: "Website mockup on a desk",
      },
      {
        src: "/images/90ff774dded2c8e8e90c82237929704e.webp",
        alt: "Mobile interface design preview",
      },
    ],
  },
] as const;

const HomeServiceSection = () => {
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState<number | null>(
    null,
  );
  const activeService = services[hoveredServiceIndex ?? 0];

  return (
    <section id="service" className="home-service-section">
      <div className="site-container">
        <div className="home-service-grid">
          <p className="home-service-label">What I Do?</p>

          <div
            className="home-service-list"
            aria-label="Services"
            onMouseLeave={() => setHoveredServiceIndex(null)}
          >
            {services.map((service, index) => (
              <button
                key={service.label}
                type="button"
                className={`home-service-item ${
                  hoveredServiceIndex === null
                    ? "is-default"
                    : hoveredServiceIndex === index
                      ? "is-primary"
                      : "is-muted"
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
            {activeService.images.map((image, index) => (
              <div
                key={`${activeService.label}-${image.src}`}
                className={`home-service-media-card ${
                  index === 0
                    ? "home-service-media-card--wide"
                    : "home-service-media-card--tall"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="home-service-media-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServiceSection;
