"use client";

import React, { useEffect, useState } from "react";

const designSkills = [
  "UI/UX Design",
  "Product Interfaces",
  "Design Systems",
  "Wireframing & Prototyping",
  "Responsive Layouts",
  "Visual Hierarchy",
  "Design Thinking",
];

const codeSkills = [
  "HTML5 & Modern CSS",
  "JavaScript & TypeScript",
  "React & Next.js",
  "Tailwind CSS",
  "WordPress & Elementor",
  "Node.js Basics",
  "Frontend Architecture",
];

const DesignCode = () => {
  const [designActiveIndices, setDesignActiveIndices] = useState<number[]>([0]);
  const [codeActiveIndices, setCodeActiveIndices] = useState<number[]>([1]);

  useEffect(() => {
    const getRandomIndices = (length: number, count = 2) => {
      const indices: number[] = [];
      while (indices.length < count) {
        const r = Math.floor(Math.random() * length);
        if (!indices.includes(r)) indices.push(r);
      }
      return indices;
    };

    const updateHighlights = () => {
      const newDesign = getRandomIndices(designSkills.length, 2);
      const newCode = getRandomIndices(codeSkills.length, 2);
      setDesignActiveIndices(newDesign);
      setCodeActiveIndices(newCode);
    };

    updateHighlights();
    const interval = setInterval(updateHighlights, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-black border-t border-white/5 pt-0 pb-20 sm:pb-28 lg:pb-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Paragraph */}
          <div className="flex flex-col justify-between py-1 lg:col-span-5">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[75px] font-medium leading-[1.05] tracking-tight text-white">
                Good design
                <br />
                should <span className="text-primary font-semibold">work</span>
                <br />
                beautifully.
              </h2>
            </div>

            <div className="pt-10 lg:pt-16">
              <p className="max-w-[26rem] text-[17px] sm:text-[22px] font-light leading-[1.25] text-zinc-400">
                I believe visual quality and usability should work together. A
                beautiful interface should also be understandable, responsive
                and practical to build.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Card Boxes */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
            {/* Box 1: Design Focus */}
            <div className="flex flex-col justify-center rounded-2xl bg-[#0e0e0e] border border-white/5 p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px] hover:border-primary/40 transition-colors">
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[22px] font-normal">
                {designSkills.map((keyword, index) => {
                  const isHighlighted = designActiveIndices.includes(index);
                  return (
                    <li
                      key={keyword}
                      className={`transition-colors duration-500 ${
                        isHighlighted
                          ? "text-primary font-semibold drop-shadow-[0_0_12px_rgba(255,94,0,0.5)]"
                          : "text-zinc-500"
                      }`}
                    >
                      {keyword}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Box 2: Code & Stack */}
            <div className="flex flex-col justify-center rounded-2xl bg-[#0e0e0e] border border-white/5 p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px] hover:border-primary/40 transition-colors">
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[22px] font-normal">
                {codeSkills.map((keyword, index) => {
                  const isHighlighted = codeActiveIndices.includes(index);
                  return (
                    <li
                      key={keyword}
                      className={`transition-colors duration-500 ${
                        isHighlighted
                          ? "text-primary font-semibold drop-shadow-[0_0_12px_rgba(255,94,0,0.5)]"
                          : "text-zinc-500"
                      }`}
                    >
                      {keyword}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCode;
