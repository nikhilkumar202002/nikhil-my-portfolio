"use client";

import { motion } from "framer-motion";

const skills = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "WordPress",
  "Elementor",
  "PHP",
];

// Repeat skills to ensure seamless continuous loop across any screen size
const tapeItems = [
  ...skills,
  ...skills,
  ...skills,
  ...skills,
  ...skills,
  ...skills,
];

const Differentiator = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20 sm:py-28 lg:py-36 border-y border-white/5">
      {/* Centered Heading matching screenshot */}
      <div className="relative z-30 site-container text-center mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-[clamp(2.1rem,4.2vw,3.6rem)] font-normal leading-[1.2] tracking-tight text-white">
          I don&apos;t just design
          <br />
          <span className="text-primary font-medium">interfaces.</span> I build them.
        </h2>
      </div>

      {/* Crossing Marquee Ribbons Container */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] flex items-center justify-center select-none pointer-events-none">
        {/* Ribbon 2: Slanted Upwards (-7.5deg) - Bottom Layer */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220vw] min-w-[2000px] -rotate-[7.5deg] origin-center z-10">
          <div className="w-full bg-primary py-3 sm:py-3.5 shadow-[0_4px_25px_rgba(255,94,0,0.25)] flex overflow-hidden">
            <motion.div
              className="flex items-center whitespace-nowrap will-change-transform"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              <div className="flex shrink-0 items-center">
                {tapeItems.map((skill, index) => (
                  <span key={`ribbon2-a-${index}`} className="inline-flex items-center">
                    <span className="mx-3.5 sm:mx-4.5 text-white/90 text-sm sm:text-base font-bold">•</span>
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {tapeItems.map((skill, index) => (
                  <span key={`ribbon2-b-${index}`} className="inline-flex items-center">
                    <span className="mx-3.5 sm:mx-4.5 text-white/90 text-sm sm:text-base font-bold">•</span>
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ribbon 1: Slanted Downwards (+7.5deg) - Top Layer crossing over */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220vw] min-w-[2000px] rotate-[7.5deg] origin-center z-20">
          <div className="w-full bg-primary py-3 sm:py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex overflow-hidden">
            <motion.div
              className="flex items-center whitespace-nowrap will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 40,
                repeat: Infinity,
              }}
            >
              <div className="flex shrink-0 items-center">
                {tapeItems.map((skill, index) => (
                  <span key={`ribbon1-a-${index}`} className="inline-flex items-center">
                    <span className="mx-3.5 sm:mx-4.5 text-white/90 text-sm sm:text-base font-bold">•</span>
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
              <div className="flex shrink-0 items-center" aria-hidden="true">
                {tapeItems.map((skill, index) => (
                  <span key={`ribbon1-b-${index}`} className="inline-flex items-center">
                    <span className="mx-3.5 sm:mx-4.5 text-white/90 text-sm sm:text-base font-bold">•</span>
                    <span className="text-white font-bold text-base sm:text-lg md:text-xl tracking-wide whitespace-nowrap">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
