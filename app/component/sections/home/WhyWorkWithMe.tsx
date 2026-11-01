import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const cards = [
  {
    number: "01.",
    title: "Design think",
    description:
      "I focus on clarity, hierarchy and usability before visual decoration.",
  },
  {
    number: "02.",
    title: "Development understanding",
    description:
      "I understand how designs translate into real responsive interfaces.",
  },
  {
    number: "03.",
    title: "End-to-end execution",
    description:
      "From initial concept to final implementation, I can contribute across the workflow.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-work-with-me" className="w-full bg-black border-t border-white/5 py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Heading & CTA */}
          <div className="flex flex-col justify-between py-1 lg:col-span-4">
            <div>
              <h2 className="text-[clamp(2.4rem,4.2vw,3.8rem)] font-normal leading-[1.08] tracking-tight text-white">
                One mindset.
                <br />
                <span className="text-primary font-semibold">Two disciplines.</span>
              </h2>
            </div>

            <div className="pt-8 lg:pt-0">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-black shadow-[0_0_24px_rgba(255,94,0,0.3)]"
              >
                <span>Let&apos;s Talk</span>
                <FiArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Column - 3 Card Panels */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-8">
            {cards.map((card) => (
              <div
                key={card.number}
                className="flex min-h-[320px] flex-col justify-between rounded-xl bg-[#0e0e0e] border border-white/5 p-7 sm:min-h-[360px] sm:p-8 hover:border-primary/40 hover:shadow-[0_0_24px_rgba(255,94,0,0.15)] transition-all"
              >
                {/* Number & Title */}
                <div className="flex flex-col">
                  <span className="text-[50px] font-bold text-primary leading-none drop-shadow-[0_0_14px_rgba(255,94,0,0.4)]">
                    {card.number}
                  </span>
                  <h3 className="text-base font-semibold leading-snug text-white sm:text-lg pt-3">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Paragraph Description */}
                <p className="text-xs font-light leading-relaxed text-zinc-400 sm:text-sm">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
