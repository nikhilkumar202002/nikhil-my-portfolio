import React from "react";

const WorksHero = () => {
  return (
    <section className="w-full bg-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="site-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left Title & Subtitle */}
          <div className="flex flex-col items-start">
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[.9] tracking-tight text-black">
              Ideas <span className="text-primary">designed</span>
              <br />
              to work.
            </h1>

            <p className="mt-5 max-w-[30rem] text-sm font-light leading-[1.2] text-black/70 sm:text-base">
              A collection of digital products, websites and interfaces I&apos;ve designed
              and developed across different industries.
            </p>
          </div>

          {/* Right Categories */}
          <div className="md:pb-2 md:text-right">
            <p className="text-xs font-normal tracking-wide text-black/80 sm:text-sm">
              UI/UX · Web Design · Frontend · Product Interfaces
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksHero;
