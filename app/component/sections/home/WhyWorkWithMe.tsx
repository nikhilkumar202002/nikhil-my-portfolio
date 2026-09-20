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
    <section id="why-work-with-me" className="w-full bg-white py-0">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column - Heading & CTA */}
          <div className="flex flex-col justify-between py-1 lg:col-span-4">
            <div>
              <h2 className="text-[clamp(2.4rem,4.2vw,3.8rem)] font-normal leading-[1.08] tracking-tight text-black">
                One mindset.
                <br />
                <span className="text-primary">Two disciplines.</span>
              </h2>
            </div>

            <div className="pt-8 lg:pt-0">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-black"
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
                className="flex min-h-[320px] flex-col justify-between bg-[#F7F7F7] p-7 sm:min-h-[360px] sm:p-8"
              >
                {/* Number & Title */}
                <div className="flex flex-col">
                  <span className="text-[50px] font-normal text-primary">
                    {card.number}
                  </span>
                  <h3 className="text-base font-normal leading-snug text-black sm:text-lg">
                    {card.title}
                  </h3>
                </div>

                {/* Bottom Paragraph Description */}
                <p className="text-xs font-light leading-snug text-black/75 sm:text-sm">
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
