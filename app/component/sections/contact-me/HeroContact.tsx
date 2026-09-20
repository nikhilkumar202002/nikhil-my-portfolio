import React from "react";

const HeroContact = () => {
  return (
    <section className="w-full bg-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="site-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left Title & Subtitle */}
          <div className="flex flex-col items-start">
            <h1 className="text-[clamp(2.8rem,5.5vw,5rem)] font-medium leading-[.95] tracking-tight text-black">
              Let&apos;s create something
              <br />
              worth <span className="text-primary">experiencing.</span>
            </h1>

            <p className="mt-5 max-w-[32rem] text-sm font-light leading-[1.25] text-black/70 sm:text-base">
              Have a project, product idea or opportunity in mind? I&apos;d love to hear
              what you&apos;re working on and explore how I can contribute.
            </p>
          </div>

          {/* Right Status / Opportunities Tag */}
          <div className="md:pb-2 md:text-right">
            <p className="text-xs font-normal tracking-wide text-black/80 sm:text-sm">
              Available for full-time · freelance · contract opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroContact;