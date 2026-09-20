import React from "react";

const educationData = [
  {
    period: "2022 — 2023",
    degree: "UI/UX Designing",
    institution: "Avodha Edutech",
    description:
      "Specialized training in user research, wireframing, interactive prototyping, and modern interface design principles.",
  },
  {
    period: "2020 — 2023",
    degree: "BCA",
    institution: "Mahatma Gandhi University",
    description:
      "Bachelor of Computer Applications focusing on software foundations, web technology, computer science, and data structures.",
  },
  {
    period: "2018 — 2020",
    degree: "Higher Secondary (12th) — Computer Science",
    institution: "SNHSS Ayyappankavu",
    description:
      "Higher Secondary Education completed with specialization in Computer Science, laying foundational logic and programming principles.",
  },
  {
    period: "2018",
    degree: "High School (10th)",
    institution: "St. Albert's HSS",
    description:
      "Secondary School Education completed with a strong foundation in general academics and sciences.",
  },
];

const EducationTimeline = () => {
  return (
    <section className="w-full bg-white pt-16 sm:pt-20 lg:pt-24">
      <div className="site-container">
        {/* Header Title */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-5 lg:mb-5">
          <h2 className="text-[clamp(2.4rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-tight text-black">
            Education
          </h2>
        </div>

        {/* Education Rows Table */}
        <div className="border-t border-b border-black/15 divide-y divide-black/15">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 py-8 sm:py-10 items-start"
            >
              {/* Column 1: Period */}
              <div className="md:col-span-3 lg:col-span-3">
                <span className="text-base sm:text-lg font-normal text-primary">
                  {edu.period}
                </span>
              </div>

              {/* Column 2: Institution & Degree */}
              <div className="md:col-span-4 lg:col-span-4 flex flex-col">
                <h3 className="text-lg sm:text-xl font-medium text-black leading-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm sm:text-base font-normal text-black/60 mt-0.5">
                  {edu.degree}
                </p>
              </div>

              {/* Column 3: Description */}
              <div className="md:col-span-5 lg:col-span-5">
                <p className="text-sm sm:text-base font-light text-black/80 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;