"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "adverto",
    title: "ADVERTO",
    subtitle: "Creative Agency Website",
    category: "UI/UX · Web Design · Frontend",
    video: "/porfolio/adverto/featured-video.mp4",
  },
  {
    id: "gulf-cargo",
    title: "GULF CARGO",
    subtitle: "Logistics Platform",
    category: "UI/UX · Product Design · Frontend",
    image: "/porfolio/GULF-CARGO/FEATURED.webp",
  },
  {
    id: "gps-trades",
    title: "GPS TRADES",
    subtitle: "Solar & Energy Website",
    category: "UI/UX · Web Design · Development",
    image: "/porfolio/gps/featured.webp",
  },
  {
    id: "afrizon",
    title: "AFRIZON",
    subtitle: "Digital Experience",
    category: "UI/UX · Web Design · Development",
    image: "/porfolio/afrizon/afrizon-featured.webp",
  },
];

// Duplicate projects array for seamless continuous infinite loop
const marqueeItems = [...projects, ...projects, ...projects, ...projects];

const FeaturedWorksSlider = () => {
  return (
    <section className="w-full bg-black border-t border-white/5 overflow-hidden py-16 sm:py-20 lg:py-[150px]">
      <div className="site-container">
        {/* Left Aligned Heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[clamp(2.2rem,4.5vw,3.8rem)] font-medium leading-[1.08] tracking-tight text-white">
            Selected <span className="text-primary font-semibold">Works</span>
          </h2>
        </div>

        {/* Marquee Slider */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 35,
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((work, idx) => (
              <div
                key={`${work.id}-${idx}`}
                className="w-[280px] sm:w-[360px] lg:w-[420px] shrink-0 flex flex-col gap-0"
              >
                <article className="flex flex-col gap-0 h-full">
                  {/* Increased Height Media Container */}
                  <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-lg">
                    {work.video ? (
                      <video
                        src={work.video}
                        className="h-full w-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    ) : (
                      <img
                        src={work.image}
                        alt={work.title}
                        className="h-full w-full object-cover"
                      />
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col pt-3">
                    <div className="flex items-baseline justify-between gap-2 w-full">
                      <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                        {work.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-normal text-zinc-400 text-right shrink-0">
                        {work.subtitle}
                      </p>
                    </div>

                    <span className="text-[11px] sm:text-xs font-semibold text-primary tracking-wide pt-1">
                      {work.category}
                    </span>
                  </div>
                </article>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSlider;