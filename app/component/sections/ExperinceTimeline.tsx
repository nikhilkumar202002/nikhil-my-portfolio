"use client";

import React, { useEffect, useState } from "react";

const experiences = [
  {
    date: "2023",
    role: "Graphics Designer Intern",
    company: "ISPG Technologies",
    position: "justify-end", // Bottom position
  },
  {
    date: "April 2024 — Dec 2024",
    role: "Web Developer",
    company: "OrigoNXT Solutions PVT LTD",
    position: "justify-center", // Middle position
  },
  {
    date: "Jan 2025 — Present",
    role: "Full-Stack Developer",
    company: "Domain Dude",
    position: "justify-start", // Top position
  },
];

const focusAreas = [
  "Design thinking",
  "Frontend development",
  "Visual communication",
  "Responsive design",
  "Client understanding",
  "Problem solving",
];

export const ExperinceTimeline = () => {
  // Store the active highlighted word index for each focus area line
  const [highlightIndices, setHighlightIndices] = useState<number[]>([]);

  useEffect(() => {
    // Initial random assignment on client mount
    const getRandomIndices = () =>
      focusAreas.map((item) => {
        const wordCount = item.split(" ").length;
        return Math.floor(Math.random() * wordCount);
      });

    setHighlightIndices(getRandomIndices());

    // Periodically change theme color highlights randomly
    const interval = setInterval(() => {
      setHighlightIndices(getRandomIndices());
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="w-full bg-white py-16 sm:py-20 lg:py-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Header & Focus List Column (Left) */}
          <div className="flex flex-col justify-start lg:col-span-4 lg:pr-6">
            <h2 className="text-6xl font-normal leading-[0.78] tracking-tight text-black sm:text-7xl lg:text-[6.5rem]">
              EXP
              <br />
              ERIE
              <br />
              NCE
            </h2>

            <ul className="mt-8 flex flex-col gap-1 text-sm font-normal leading-tight sm:text-base">
              {focusAreas.map((item, lineIndex) => {
                const words = item.split(" ");
                const primaryIndex = highlightIndices[lineIndex];

                return (
                  <li key={lineIndex} className="flex gap-1.5 flex-wrap">
                    {words.map((word, wordIndex) => {
                      const isHighlighted = primaryIndex === wordIndex;
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

          {/* Staircase Timeline Column (Right) */}
          <div className="flex flex-col justify-end lg:col-span-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 min-h-[380px]">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${exp.position} space-y-0.5`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-[20px] font-normal leading-tight text-black">
                      {exp.date}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold leading-tight text-black">
                    {exp.role}
                  </h3>
                  <p className="text-[16px] font-normal leading-tight text-black/70">
                    {exp.company}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperinceTimeline;