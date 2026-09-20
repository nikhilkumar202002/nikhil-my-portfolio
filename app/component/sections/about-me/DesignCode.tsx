"use client";

import React, { useEffect, useState } from "react";

const designSkills = [
  "User Experience",
  "Visual Design",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "Typography",
];

const codeSkills = [
  "HTML / CSS",
  "JavaScript",
  "React",
  "Next.js",
  "WordPress",
  "PHP",
];

const DesignCode = () => {
  const [designActiveIndices, setDesignActiveIndices] = useState<number[]>([]);
  const [codeActiveIndices, setCodeActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const updateHighlights = () => {
      // Pick 1-2 random keywords for design skills box
      const numDesign = Math.floor(Math.random() * 2) + 1;
      const newDesign: number[] = [];
      while (newDesign.length < numDesign) {
        const rand = Math.floor(Math.random() * designSkills.length);
        if (!newDesign.includes(rand)) newDesign.push(rand);
      }
      setDesignActiveIndices(newDesign);

      // Pick 1-2 random keywords for code skills box
      const numCode = Math.floor(Math.random() * 2) + 1;
      const newCode: number[] = [];
      while (newCode.length < numCode) {
        const rand = Math.floor(Math.random() * codeSkills.length);
        if (!newCode.includes(rand)) newCode.push(rand);
      }
      setCodeActiveIndices(newCode);
    };

    updateHighlights();
    const interval = setInterval(updateHighlights, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pt-0 pb-20 sm:pb-28 lg:pb-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Paragraph */}
          <div className="flex flex-col justify-between py-1 lg:col-span-5">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[75px] font-medium leading-[1.05] tracking-tight text-black">
                Good design
                <br />
                should <span className="text-primary">work</span>
                <br />
                beautifully.
              </h2>
            </div>

            <div className="pt-10 lg:pt-16">
              <p className="max-w-[26rem] text-[17px] sm:text-[22px] font-light leading-[1.25] text-black/60">
                I believe visual quality and usability should work together. A
                beautiful interface should also be understandable, responsive
                and practical to build.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Card Boxes */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
            {/* Box 1: Design Focus */}
            <div className="flex flex-col justify-center bg-[#F5F5F3] p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px]">
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[22px] font-normal">
                {designSkills.map((keyword, index) => {
                  const isHighlighted = designActiveIndices.includes(index);
                  return (
                    <li
                      key={keyword}
                      className={`transition-colors duration-500 ${
                        isHighlighted
                          ? "text-primary font-medium"
                          : "text-black/90"
                      }`}
                    >
                      {keyword}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Box 2: Code & Stack */}
            <div className="flex flex-col justify-center bg-[#F5F5F3] p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px]">
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[22px] font-normal">
                {codeSkills.map((keyword, index) => {
                  const isHighlighted = codeActiveIndices.includes(index);
                  return (
                    <li
                      key={keyword}
                      className={`transition-colors duration-500 ${
                        isHighlighted
                          ? "text-primary font-medium"
                          : "text-black/90"
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