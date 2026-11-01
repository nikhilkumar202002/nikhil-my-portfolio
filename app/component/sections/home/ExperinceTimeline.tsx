"use client";

import { useState, useEffect } from "react";

const focusAreas = [
  "Visual Design · Design Systems",
  "Product Thinking · User Experience",
  "Frontend Architecture · Clean Code",
  "Component Libraries · Responsive Web",
  "Interface Usability · Motion Design",
  "Digital Products · Brand Systems",
  "Interactive Prototypes · Web Apps",
];

const experiences = [
  {
    date: "2024 — Present",
    role: "Visual Designer & Frontend Developer",
    company: "Freelance",
    position: "justify-start",
  },
  {
    date: "2023 — 2024",
    role: "UI/UX & Web Designer",
    company: "Design Studio",
    position: "justify-center",
  },
  {
    date: "2022 — 2023",
    role: "Junior Web Developer",
    company: "Tech Agency",
    position: "justify-end",
  },
];

const ExperinceTimeline = () => {
  const getRandomIndices = () => {
    return focusAreas.map((item) => {
      const words = item.split(" ");
      return Math.floor(Math.random() * words.length);
    });
  };

  const [highlightIndices, setHighlightIndices] = useState<number[]>([]);

  useEffect(() => {
    setHighlightIndices(getRandomIndices());

    const interval = setInterval(() => {
      setHighlightIndices(getRandomIndices());
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="experience" className="w-full bg-black border-t border-white/5 py-16 sm:py-20 lg:py-[150px]">
      <div className="site-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Header & Focus List Column (Left) */}
          <div className="flex flex-col justify-start lg:col-span-4 lg:pr-6">
            <h2 className="text-6xl font-normal leading-[0.78] tracking-tight text-white sm:text-7xl lg:text-[6.5rem]">
              EXP
              <br />
              ERIE
              <br />
              <span className="text-primary font-semibold">NCE</span>
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
                              ? "text-primary font-semibold drop-shadow-[0_0_10px_rgba(255,94,0,0.6)]"
                              : "text-zinc-500"
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
                  className={`flex flex-col ${exp.position} space-y-0.5 p-4 rounded-lg bg-[#0d0d0d] border border-white/5 hover:border-primary/40 transition-colors`}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(255,94,0,0.9)]" />
                    <span className="text-[20px] font-medium leading-tight text-white">
                      {exp.date}
                    </span>
                  </div>
                  <h3 className="text-[18px] font-bold leading-tight text-white pt-1">
                    {exp.role}
                  </h3>
                  <p className="text-[16px] font-normal leading-tight text-zinc-400">
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
