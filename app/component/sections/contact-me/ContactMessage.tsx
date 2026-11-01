import React from "react";

const ContactMessage = () => {
  return (
    <section className="w-full bg-black border-t border-white/5 pb-20 sm:pb-28 lg:pb-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-5 lg:gap-14 pt-8">
          {/* Left Column - 60% (3/5) */}
          <div className="flex flex-col justify-between lg:col-span-3 py-2">
            <div>
              {/* Title with Sharp Neon Orange Up Right Arrow */}
              <h2 className="flex flex-wrap items-center gap-3 text-[clamp(3.6rem,8.5vw,8rem)] font-medium leading-none tracking-tight text-white">
                <span>Let&apos;s Talk</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="h-[0.85em] w-[0.85em] text-primary shrink-0 drop-shadow-[0_0_12px_rgba(255,94,0,0.6)]"
                  aria-hidden="true"
                >
                  <path d="M6 18L18 6M18 6H8.5M18 6V15.5" />
                </svg>
              </h2>

              {/* Description Paragraph */}
              <p className="mt-8 max-w-[34rem] text-sm font-light leading-relaxed text-zinc-400 sm:text-base lg:text-[17px]">
                Whether you&apos;re looking to design a new product, build a website,
                improve an existing experience, or discuss a potential opportunity,
                feel free to reach out.
              </p>
            </div>

            {/* Note / Quote */}
            <p className="mt-10 sm:mt-14 text-sm font-semibold text-primary sm:text-base lg:text-[17px]">
              &ldquo;I usually respond within 1&ndash;2 business days.&rdquo;
            </p>
          </div>

          {/* Right Column - Neon Orange Card 40% (2/5) */}
          <div className="bg-primary p-8 sm:p-12 lg:p-14 text-white rounded-2xl lg:col-span-2 flex flex-col justify-center gap-8 sm:gap-10 shadow-[0_0_40px_rgba(255,94,0,0.3)]">
            {/* Email */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                Email
              </span>
              <a
                href="mailto:nikhilkumars12343@gmail.com"
                className="text-lg font-bold text-white hover:underline sm:text-xl lg:text-2xl break-all"
              >
                nikhilkumars12343@gmail.com
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                LinkedIn
              </span>
              <a
                href="https://linkedin.com/in/nikhilkumars2002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:underline sm:text-xl lg:text-2xl"
              >
                nikhilkumars2002
              </a>
            </div>

            {/* Github */}
            <div className="flex flex-col items-start gap-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                Github
              </span>
              <a
                href="https://github.com/nikhilkumar202002"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-white hover:underline sm:text-xl lg:text-2xl"
              >
                nikhilkumar202002
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMessage;
