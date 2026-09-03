"use client";

import Image from "next/image";
import { useState } from "react";

type Buddy = {
  name: string;
  role: string;
  accent: string;
  bg: string;
  description: string;
};

const buddies: Buddy[] = [
  {
    name: "Bunny",
    role: "Creative Dreamer",
    accent: "#35AEEB",
    bg: "from-[#f8fbff] to-[#e9f4ff]",
    description: "Bright ideas and playful energy",
  },
  {
    name: "Tiggy",
    role: "Brave Explorer",
    accent: "#ff9d2f",
    bg: "from-[#fff8ed] to-[#fff0df]",
    description: "Curious, bold, and always learning",
  },
  {
    name: "Pingu",
    role: "Smart Thinker",
    accent: "#a75dff",
    bg: "from-[#fbf4ff] to-[#f1e6ff]",
    description: "Calm focus and thoughtful practice",
  },
  {
    name: "Brighty",
    role: "Fast Learner",
    accent: "#f06adf",
    bg: "from-[#fff6fc] to-[#ffedf9]",
    description: "Quick progress with cheerful momentum",
  },
  {
    name: "Coco",
    role: "Gentle Helper",
    accent: "#57c96a",
    bg: "from-[#f7fff7] to-[#e8f7ea]",
    description: "Patient guidance and steady support",
  },
];

function Sparkle({
  className,
  small = false,
}: {
  className: string;
  small?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={[
        "absolute rotate-45 rounded-[4px] bg-white shadow-[0_0_16px_rgba(255,255,255,0.45)]",
        small ? "h-2.5 w-2.5" : "h-4 w-4",
        className,
      ].join(" ")}
    />
  );
}

function Cloud() {
  return (
    <div className="relative h-14 w-24">
      <span className="absolute bottom-1 left-2 h-8 w-8 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.22)]" />
      <span className="absolute bottom-4 left-8 h-10 w-10 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.22)]" />
      <span className="absolute bottom-1 left-14 h-8 w-8 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.22)]" />
      <span className="absolute bottom-5 left-[4.5rem] h-7 w-7 rounded-full bg-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.22)]" />
    </div>
  );
}

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeBuddy = buddies[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + buddies.length) % buddies.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % buddies.length);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf8] text-slate-950">
      <section className="relative isolate min-h-screen px-4 py-5 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(255,167,59,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,167,59,0.10),transparent_26%)]" />

        <div className="absolute right-0 top-0 -z-10 h-[46rem] w-[80%] rounded-bl-[9rem] bg-[linear-gradient(135deg,#ffe0bc_0%,#ffc56d_24%,#ffa53a_60%,#ff9926_100%)] shadow-[0_40px_100px_-50px_rgba(255,153,42,0.65)] lg:h-[40rem]" />
        <div className="absolute right-[31%] top-0 -z-10 h-[12rem] w-[22rem] rounded-bl-[7rem] bg-white" />
        <div className="absolute right-[12%] top-[12.5rem] -z-10 h-[11rem] w-[18rem] rounded-bl-[8rem] rounded-tl-[8rem] bg-white/95" />
        <div className="absolute bottom-0 right-0 -z-10 h-[16rem] w-[16rem] rounded-tl-[16rem] bg-[linear-gradient(135deg,#fff2df,#ffd7a5,#ffbd69)] opacity-80" />

        <Sparkle className="left-[4.5rem] top-[14rem] text-[#ffbf3b]" />
        <Sparkle className="right-[7rem] top-[5.5rem] scale-125 text-[#fff0a8]" />
        <Sparkle className="right-[14rem] top-[15rem] scale-90 text-[#fff7e2]" />
        <Sparkle className="left-[20%] bottom-[13%] scale-75 text-[#ffcf62]" small />

        <header className="relative z-10 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-[1.15rem] bg-[#23a8db] text-lg font-black tracking-tight text-white shadow-[0_18px_32px_-18px_rgba(35,168,219,0.9)]">
              E
            </div>
            <div className="leading-none text-[#23a8db]">
              <p className="text-3xl font-black tracking-[-0.06em] sm:text-[2.15rem]">
                ETERN
              </p>
              <p className="text-lg font-black tracking-[-0.06em] sm:text-xl">
                LEARNING
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Cloud />
          </div>
        </header>

        <div className="relative z-10 mx-auto mt-12 max-w-[1600px] lg:mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.02fr] lg:gap-12">
            <div className="max-w-xl">
              <Sparkle className="-left-1 top-6 scale-75 text-[#ffbf3b] sm:-left-2" />
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.34em] text-[#c06f1f]">
                Profile Buddy Studio
              </p>
              <h1 className="max-w-[13ch] text-5xl font-black leading-[0.92] tracking-[-0.07em] text-black sm:text-6xl lg:text-[5.3rem]">
                Create Your <span className="text-[#ff9f31]">Learning Buddy</span>
              </h1>
              <p className="mt-6 max-w-[32rem] text-xl leading-9 text-slate-800/90 sm:text-[1.45rem]">
                Pick a friendly companion who stays with you throughout your learning journey.
              </p>
            </div>

            <div className="relative justify-self-end lg:w-full">
              <div className="absolute -left-8 top-8 hidden text-5xl lg:block">
                {"\u2728"}
              </div>
              <div className="relative overflow-hidden rounded-[2.1rem] bg-gradient-to-b from-[#f7f7f7] to-[#ececec] shadow-[0_40px_90px_-55px_rgba(15,23,42,0.55)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,159,49,0.16),transparent_34%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.6),transparent_42%)]" />
                <div className="flex h-[18rem] items-center justify-center px-6 py-8 sm:h-[22rem] lg:h-[21rem]">
                  <div className="relative h-[15rem] w-[15rem] overflow-hidden rounded-[3rem] bg-[linear-gradient(180deg,#ffffff_0%,#fff6ea_100%)] shadow-[0_20px_50px_-25px_rgba(0,0,0,0.22)] sm:h-[17rem] sm:w-[17rem] lg:h-[18rem] lg:w-[18rem]">
                    <Image
                      src="/images/profile-image.jpg"
                      alt="Character portrait"
                      fill
                      priority
                      sizes="(max-width: 768px) 15rem, (max-width: 1024px) 17rem, 18rem"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 rounded-[1.75rem] bg-[rgba(255,255,255,0.92)] px-5 py-4 shadow-[0_18px_45px_-25px_rgba(15,23,42,0.45)] backdrop-blur">
                  <p className="text-3xl font-black tracking-[-0.06em] text-[#ff9f31]">
                    {activeBuddy.name}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    {activeBuddy.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4 sm:mt-14 lg:mt-16">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous buddy"
              className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-4xl text-slate-900 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#ff9f31] hover:text-[#ff9f31] sm:flex"
            >
              {"\u2039"}
            </button>

            <div className="flex-1 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-5 px-1 py-4 sm:justify-center">
                {buddies.map((buddy, index) => {
                  const selected = index === activeIndex;

                  return (
                    <button
                      key={buddy.name}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={[
                        "relative w-[12.5rem] shrink-0 rounded-[1.9rem] border bg-white p-5 text-left shadow-[0_22px_50px_-30px_rgba(15,23,42,0.35)] transition-all duration-300",
                        selected
                          ? "border-[#ff9f31] ring-4 ring-[#ff9f31]/10 shadow-[0_30px_60px_-30px_rgba(255,159,49,0.55)]"
                          : "border-slate-200/70 hover:-translate-y-1 hover:border-slate-300",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "relative flex h-[12rem] items-center justify-center overflow-hidden rounded-[1.4rem] bg-gradient-to-b",
                          buddy.bg,
                        ].join(" ")}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.8),transparent_40%)]" />
                        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-[1.75rem] bg-white shadow-[0_16px_36px_-24px_rgba(15,23,42,0.35)]">
                          <Image
                            src="/images/profile-image.jpg"
                            alt={`${buddy.name} character`}
                            fill
                            sizes="96px"
                            className="object-cover object-top"
                          />
                        </div>
                        {selected ? (
                          <div className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-[#ff9f31] text-lg font-black text-white shadow-[0_14px_24px_-14px_rgba(255,159,49,0.8)]">
                            {"\u2713"}
                          </div>
                        ) : null}
                      </div>

                      <p
                        className="mt-4 text-center text-2xl font-black tracking-[-0.05em]"
                        style={{ color: buddy.accent }}
                      >
                        {buddy.name}
                      </p>
                      <p className="mt-1 text-center text-sm font-medium text-slate-500">
                        {buddy.role}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next buddy"
              className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border border-slate-300/80 bg-white text-4xl text-slate-900 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] transition-transform duration-300 hover:-translate-y-0.5 hover:border-[#ff9f31] hover:text-[#ff9f31] sm:flex"
            >
              {"\u203A"}
            </button>
          </div>

          <div className="mt-10 flex justify-center sm:mt-12 lg:mt-14">
            <button
              type="button"
              className="flex h-20 w-20 items-center justify-center rounded-full bg-[#26a8dc] text-white shadow-[0_26px_60px_-28px_rgba(38,168,220,0.9)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              aria-label="Continue"
            >
              <span className="text-3xl font-black">{"\u2192"}</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
