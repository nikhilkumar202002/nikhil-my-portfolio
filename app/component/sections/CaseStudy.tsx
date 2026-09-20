"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const processSteps = [
  { step: "01", name: "Understand" },
  { step: "02", name: "Structure" },
  { step: "03", name: "Design" },
  { step: "04", name: "Build" },
  { step: "05", name: "Refine" },
];

const CaseStudy = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!video.src || video.src === "") {
            video.src = "/porfolio/adverto/featured-video.mp4";
          }
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Visual Card - Full Container Video */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-none bg-black lg:col-span-6">
            <video
              ref={videoRef}
              src="/porfolio/adverto/featured-video.mp4"
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          </div>

          {/* Right Case Study Info */}
          <div className="flex flex-col justify-center space-y-7 lg:col-span-6 lg:pl-2">
            {/* Title & Subtitle */}
            <div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl">
                ADVERTO
              </h2>
              <p className="mt-1 text-base font-normal text-[#666666] sm:text-lg">
                From concept to production.
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="pt-1">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
                <div>
                  <span className="block text-xs font-semibold text-primary sm:text-sm">
                    Role
                  </span>
                  <span className="mt-1 block text-xs font-normal text-black sm:text-sm">
                    UI/UX · Frontend
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-primary sm:text-sm">
                    Platform
                  </span>
                  <span className="mt-1 block text-xs font-normal text-black sm:text-sm">
                    Web
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-primary sm:text-sm">
                    Tools
                  </span>
                  <span className="mt-1 block text-xs font-normal text-black sm:text-sm">
                    Figma · React · Next.js
                  </span>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-primary sm:text-sm">
                    Focus
                  </span>
                  <span className="mt-1 block text-xs font-normal text-black sm:text-sm">
                    Visual identity · Responsive experience · Conversion
                  </span>
                </div>
              </div>
            </div>

            {/* Case Study Overview Paragraph */}
            <p className="text-sm font-light leading-relaxed text-black/70 sm:text-base">
              Adverto is a modern digital platform designed to elevate brand visibility and audience engagement. Built with a focus on intuitive navigation, high performance, and responsive UI architecture, this project seamlessly connects strategic visual identity with functional frontend implementation.
            </p>

            {/* Process Steps Pipeline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 pt-2 text-xs sm:text-sm">
              {processSteps.map((item, index) => (
                <div key={item.step} className="inline-flex items-center gap-1.5 sm:gap-2">
                  <span className="text-black">
                    <strong className="font-bold">{item.step}</strong>{" "}
                    <span className="font-normal">{item.name}</span>
                  </span>
                  {index < processSteps.length - 1 && (
                    <span className="font-medium text-primary sm:mx-1">→</span>
                  )}
                </div>
              ))}
            </div>

            {/* Read Case Study Button */}
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-none bg-primary px-6 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-orange-600 sm:text-base"
              >
                <span>Read Case Study</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

