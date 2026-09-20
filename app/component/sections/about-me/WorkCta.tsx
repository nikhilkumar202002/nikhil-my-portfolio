import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import "../Styles.css";

const WorkCta = () => {
  return (
    <section className="w-full bg-white pb-16 sm:pb-24 lg:pb-28">
      <div className="site-container flex flex-col gap-16 sm:gap-24 lg:gap-28">
        {/* Top Orange Box Card Banner */}
        <div className="w-full bg-primary p-8 sm:p-14 lg:p-20 text-white rounded-none">
          <div className="relative z-10 flex flex-col items-start max-w-[36rem]">
            {/* Title */}
            <h2 className="text-[clamp(2.4rem,5.2vw,4.8rem)] font-medium leading-[1.05] tracking-tight text-white">
              Open To The
              <br />
              Next Challenge.
            </h2>

            {/* Description Paragraph */}
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm lg:text-[15px] font-light leading-relaxed text-white/95 max-w-[30rem]">
              I&apos;m Open To Opportunities Where I Can Contribute Across UI/UX
              Design, Web Design And Frontend Development While Continuing To Grow
              As A Product-Focused Designer And Developer.
            </p>

            {/* Buttons Row - Clean Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="#resume"
                className="inline-flex items-center gap-2 bg-white px-5 py-3 text-xs sm:text-sm font-medium text-black transition-colors duration-300 hover:bg-black hover:text-white"
              >
                <span>View Resume</span>
                <FiArrowRight className="h-4 w-4 shrink-0" />
              </Link>

              <Link
                href="tel:+917356112021"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white transition-opacity duration-300 hover:opacity-80"
              >
                <span>Let&apos;s Talk</span>
                <FiArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Centered CTA Block */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-tight text-black max-w-[44rem]">
            Let&apos;s <span className="text-primary">Build</span> Something
            <br />
            Worth <span className="text-primary">Experiencing.</span>
          </h2>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-light text-black/75">
            Have A Project, Product Or Opportunity In Mind?
          </p>

          <Link
            href="tel:+917356112021"
            className="mt-6 sm:mt-8 inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-colors duration-300 hover:bg-black"
          >
            <span>Start a conversation</span>
            <FiArrowRight className="h-4 w-4 shrink-0" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkCta;