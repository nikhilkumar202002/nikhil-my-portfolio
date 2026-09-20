"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const storyText =
  "My work sits between two disciplines I enjoy equally — design and development. I started with a strong interest in visual design and UI/UX, learning how typography, layout, colour and interaction shape the way people experience a digital product. Over time, I moved deeper into frontend development, learning how to turn those designs into responsive, functional experiences on the web. Today, I work across the entire journey — from understanding an idea and structuring an interface to designing the experience and bringing it to life in code.";

const Character = ({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const color = useTransform(progress, range, ["#a3a3a3", "#000000"]);
  return <motion.span style={{ color }}>{char}</motion.span>;
};

const Word = ({
  word,
  progress,
  startIndex,
  totalChars,
}: {
  word: string;
  progress: MotionValue<number>;
  startIndex: number;
  totalChars: number;
}) => {
  const characters = word.split("");
  return (
    <span className="inline-block whitespace-nowrap mr-[0.26em]">
      {characters.map((char, index) => {
        const charGlobalIndex = startIndex + index;
        const start = charGlobalIndex / totalChars;
        const end = Math.min(1, (charGlobalIndex + 1.5) / totalChars);
        return (
          <Character
            key={index}
            char={char}
            progress={progress}
            range={[start, end]}
          />
        );
      })}
    </span>
  );
};

const YourStory = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.45"],
  });

  const words = storyText.split(" ");
  const totalChars = storyText.length;

  let globalCharCount = 0;
  const wordsWithIndex = words.map((word) => {
    const startIndex = globalCharCount;
    globalCharCount += word.length + 1;
    return { word, startIndex };
  });

  return (
    <section className="w-full bg-white py-20 sm:py-28 lg:py-[150px]">
      <div className="site-container">
        <div className="max-w-[56rem]">
          {/* Main Section Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-bold leading-[1.08] tracking-tight text-black mb-8 sm:mb-12">
            Where <span className="text-primary">design meets</span> development.
          </h2>

          {/* Interactive Scroll-Filling Story Paragraph */}
          <div
            ref={targetRef}
            className="text-xl sm:text-3xl lg:text-[34px] font-normal leading-[1.3] tracking-tight text-[#a3a3a3]"
          >
            {wordsWithIndex.map((item, idx) => (
              <Word
                key={idx}
                word={item.word}
                progress={scrollYProgress}
                startIndex={item.startIndex}
                totalChars={totalChars}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStory;