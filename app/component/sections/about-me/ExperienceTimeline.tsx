import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const experiences = [
  {
    period: "2024 — Present",
    role: "Frontend Developer / Web Designer",
    company: "OrigonXT Solution Pvt Ltd",
    description:
      "Working across responsive websites, WordPress, Elementor, frontend interfaces and digital experiences.",
  },
  {
    period: "2023 — 2024",
    role: "Software Developer Intern",
    company: "Bytebot Techno Solutions",
    description:
      "Worked with frontend and development technologies including React.js, Node.js and UI component frameworks.",
  },
  {
    period: "2023",
    role: "Graphics Designer Intern",
    company: "ISPG Technologies Pvt Ltd",
    description:
      "Worked on pre-sales presentations, client brochures and visual communication while maintaining brand consistency.",
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20">
      <div className="site-container">
        {/* Header with Title & Download Link */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-5 lg:mb-5">
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-white">
            Experience
          </h2>

          <Link
            href="#resume"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold capitalize tracking-[1.2] text-zinc-300 hover:text-primary transition-colors duration-300 shrink-0 md:pb-2"
          >
            <span>DOWNLOAD RESUME</span>
            <FiDownload className="h-4 w-4 text-primary" />
          </Link>
        </div>

        {/* Experience Rows Table */}
        <div className="border-t border-b border-white/10 divide-y divide-white/10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 sm:py-10 items-start"
            >
              {/* Column 1: Period */}
              <div className="md:col-span-3 lg:col-span-3">
                <span className="text-base sm:text-lg font-semibold text-primary">
                  {exp.period}
                </span>
              </div>

              {/* Column 2: Company & Role */}
              <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                <h3 className="text-lg sm:text-xl font-medium text-white leading-tight">
                  {exp.company}
                </h3>
                <p className="text-sm sm:text-base font-normal text-zinc-400 mt-0.5">
                  {exp.role}
                </p>
              </div>

              {/* Column 3: Description */}
              <div className="md:col-span-5 lg:col-span-5">
                <p className="text-sm sm:text-base font-light text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
