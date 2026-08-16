"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const headerVariants = {
  hidden: { opacity: 0, y: -18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay: 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const handleReveal = () => {
      setRevealed(true);
    };

    window.addEventListener("preloader:complete", handleReveal, {
      once: true,
    });

    return () => window.removeEventListener("preloader:complete", handleReveal);
  }, []);

  return (
    <section className="h-[600px] bg-[#F9F9F9]">
      <div className="site-container h-full py-10 sm:py-12 lg:py-14">
        <div className="grid h-full grid-cols-1 lg:grid-cols-[7fr_3fr]">
          <div className="hidden lg:block" />

          <div className="flex items-end justify-end pb-8 sm:pb-10 lg:pb-14">
            <div className="flex items-end justify-end gap-6">
              <motion.p
                variants={headerVariants}
                initial="hidden"
                animate={revealed ? "show" : "hidden"}
                className="max-w-[22rem] self-end pb-1 text-right text-[10px] leading-[1.25] text-black/90 sm:text-[13px] lg:text-[14px]"
              >
                Ideas, shaped with purpose. Experiences, designed to connect.
              </motion.p>

              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={revealed ? "show" : "hidden"}
                className="relative h-[170px] w-[160px] shrink-0 overflow-hidden sm:h-[190px] sm:w-[180px] lg:h-[210px] lg:w-[190px]"
                data-preloader-hero-image
              >
                <Image
                  src="/images/profile-image.jpg"
                  alt="Nikhil Kumar S portrait"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 190px, (min-width: 640px) 180px, 160px"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex items-end">
            <div className="flex max-w-[40rem] flex-col items-start gap-4 lg:gap-5">
              <motion.h1
                variants={headingVariants}
                initial="hidden"
                animate={revealed ? "show" : "hidden"}
                className="w-full text-[clamp(2.8rem,6.2vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-black"
              >
                Purpose in Every <span className="text-primary">Pixel.</span>
                <br />
                <span className="text-primary">Impact</span> in Every
                Experience.
              </motion.h1>

              <motion.p
                variants={descriptionVariants}
                initial="hidden"
                animate={revealed ? "show" : "hidden"}
                className="max-w-[28rem] text-[12px] leading-[1.35] text-black/75 sm:text-[13px] lg:text-[14px]"
              >
                I blend creativity and technology to turn visions into
                meaningful digital experiences.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
