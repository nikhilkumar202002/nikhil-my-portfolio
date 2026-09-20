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
  const [designHighlights, setDesignHighlights] = useState<number[]>([]);
  const [codeHighlights, setCodeHighlights] = useState<number[]>([]);

  useEffect(() => {
    const updateHighlights = () => {
      // Simultaneously calculate random word indices for each line
      setDesignHighlights(
        designSkills.map((item) => {
          const wordCount = item.split(" ").length;
          return Math.floor(Math.random() * wordCount);
        })
      );

      setCodeHighlights(
        codeSkills.map((item) => {
          const wordCount = item.split(" ").length;
          return Math.floor(Math.random() * wordCount);
        })
      );
    };

    updateHighlights();
    const interval = setInterval(updateHighlights, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Heading & Paragraph */}
          <div className="flex flex-col justify-between py-1 lg:col-span-5">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-[48px] font-medium leading-[1.05] tracking-tight text-black">
                Good design
                <br />
                should <span className="text-primary">work</span>
                <br />
                beautifully.
              </h2>
            </div>

            <div className="pt-10 lg:pt-16">
              <p className="max-w-[26rem] text-sm sm:text-base font-light leading-relaxed text-black/60">
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
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[20px] font-normal">
                {designSkills.map((item, lineIndex) => {
                  const words = item.split(" ");
                  const activeWordIndex = designHighlights[lineIndex];

                  return (
                    <li key={lineIndex} className="flex gap-1.5 flex-wrap">
                      {words.map((word, wordIndex) => {
                        const isHighlighted = activeWordIndex === wordIndex;
                        return (
                          <span
                            key={wordIndex}
                            className={`transition-colors duration-500 ${
                              isHighlighted
                                ? "text-primary font-medium"
                                : "text-black/90"
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Box 2: Code & Stack */}
            <div className="flex flex-col justify-center bg-[#F5F5F3] p-8 sm:p-10 lg:p-12 min-h-[380px] sm:min-h-[420px]">
              <ul className="flex flex-col gap-3.5 sm:gap-4 text-base sm:text-lg lg:text-[20px] font-normal">
                {codeSkills.map((item, lineIndex) => {
                  const words = item.split(" ");
                  const activeWordIndex = codeHighlights[lineIndex];

                  return (
                    <li key={lineIndex} className="flex gap-1.5 flex-wrap">
                      {words.map((word, wordIndex) => {
                        const isHighlighted = activeWordIndex === wordIndex;
                        return (
                          <span
                            key={wordIndex}
                            className={`transition-colors duration-500 ${
                              isHighlighted
                                ? "text-primary font-medium"
                                : "text-black/90"
                            }`}
                          >
                            {word}
                          </span>
                        );
                      })}
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