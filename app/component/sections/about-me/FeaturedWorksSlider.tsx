"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/app/dataset/Portfolio";

const projects = portfolioData.map((p) => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  category: p.categoryTag,
  image: p.image ?? p.gallery[0] ?? "",
  video: p.video,
}));

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
                <Link
                  href={`/my-works/${work.id}`}
                  className="group flex flex-col gap-0 h-full"
                >
                  {/* Increased Height Media Container */}
                  <div className="relative h-[260px] sm:h-[340px] lg:h-[380px] w-full bg-[#141414] border border-white/10 rounded-xl overflow-hidden shadow-lg group-hover:border-primary/50 transition-colors">
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
                      <Image
                        src={work.image}
                        alt={work.title}
                        fill
                        sizes="(min-width: 1024px) 420px, 360px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col pt-3">
                    <div className="flex items-baseline justify-between gap-2 w-full">
                      <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">
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
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksSlider;