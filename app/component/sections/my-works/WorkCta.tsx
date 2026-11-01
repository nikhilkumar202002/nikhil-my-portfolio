import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import "../Styles.css";

const WorkCta = () => {
  return (
    <section id="contact" className="w-full bg-primary py-20 sm:py-24 lg:py-28 text-black shadow-[0_0_50px_rgba(255,94,0,0.3)] relative z-10">
      <div className="site-container">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          {/* Left Main Title */}
          <div className="flex flex-col">
            <h2 className="text-[clamp(2.6rem,5.2vw,5rem)] font-bold leading-[1.02] tracking-tight text-black">
              Have A Project
              <br />
              Worth Building?
            </h2>
          </div>

          {/* Right Subtitle & CTA Button */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <p className="max-w-[25rem] text-sm sm:text-base lg:text-[18px] font-medium leading-snug text-black/80">
              Let&apos;s Turn The Next Idea Into A Thoughtful
              <br className="hidden sm:inline" /> Digital Experience.
            </p>

            <Link
              href="tel:+917356112021"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2.5 bg-black px-7 py-4 text-sm sm:text-base font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black shadow-xl"
            >
              <span>Let&apos;s Talk</span>
              <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkCta;
