"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import type { ProjectItem } from "./projectsData";
import Breadcrumbs from "../../ui/Breadcrumbs";
import WorkCta from "./WorkCta";
import "../../sections/Styles.css";

interface ProjectDetailViewProps {
  project: ProjectItem;
  prevProject?: ProjectItem;
  nextProject?: ProjectItem;
}

/**
 * Word component that fills with white over light grey as user scrolls
 */
const ScrollWord = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.22, 1]);

  return (
    <span className="relative inline-block mr-[0.28em] last:mr-0">
      {/* Dimmed Light Grey Base */}
      <span className="text-[#606068] select-none">{word}</span>
      {/* Crisp White Fill Layer */}
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 text-white select-text font-normal"
      >
        {word}
      </motion.span>
    </span>
  );
};

/**
 * Paragraph component that animates words filling with white across full width
 */
const ScrollFillParagraph: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className = "" }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.88", "end 0.32"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = Math.min(1, start + 1.6 / words.length);
        return (
          <ScrollWord
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
          />
        );
      })}
    </p>
  );
};

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  const bgImage = project.bannerImage || project.image || project.gallery[0] || "/porfolio/GULF-CARGO/FEATURED.webp";

  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* =========================================================================
          SECTION 1: FULL 100VH BANNER
          - Left-bottom: Breadcrumbs directly above heading
          - Reduced font size with font-medium
         ========================================================================= */}
      <header className="relative flex h-[100dvh] min-h-[650px] w-full flex-col justify-end overflow-hidden bg-black">
        {/* Full Bleed Background Visual */}
        <div className="absolute inset-0 z-0">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <Image
              src={bgImage}
              alt={project.title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center scale-[1.02]"
            />
          )}

          {/* Deep Dark Overlay Gradients for clean contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Banner Left Bottom Content: Breadcrumbs + Heading + Subtitle */}
        <div className="site-container relative z-20 w-full pb-14 sm:pb-16 lg:pb-20 text-left">
          <div className="max-w-5xl">
            {/* Simple Breadcrumbs directly on top of heading (Home / Works / Slug) */}
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Works", href: "/my-works" },
                { label: project.title },
              ]}
              className="mb-4 sm:mb-6"
            />

            {/* Banner Heading: Reduced size & font-medium */}
            <h1 className="text-left font-medium uppercase tracking-tight text-white leading-[0.96] text-[clamp(2.4rem,5.5vw,4.8rem)]">
              {project.title}
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-zinc-300 font-light max-w-2xl leading-snug">
              {project.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SECTION 2: FULL-WIDTH OVERVIEW SENTENCE (Scroll-Fill Effect)
          - Full container width
          - Multi-sentence rich overview
          - Fills with pure white over light grey as user scrolls
         ========================================================================= */}
      <section className="w-full bg-black py-20 sm:py-28 lg:py-36 border-b border-white/10">
        <div className="site-container">
          <span className="text-xs font-bold uppercase tracking-widest text-primary mb-6 sm:mb-8 block">
            Project Overview
          </span>
          <ScrollFillParagraph
            text={project.overviewSentence}
            className="text-[clamp(1.65rem,3.2vw,2.85rem)] font-normal text-white leading-[1.34] tracking-tight w-full max-w-none"
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: GALLERY (2 ROWS with 20px GAPS, 3:4 ratio, sharp corners, no hover)
          - 1st Row: 2 Columns (aspect-[3/4])
          - 2nd Row: 3 Columns (aspect-[3/4])
         ========================================================================= */}
      <section className="w-full bg-[#050505] py-16 sm:py-24 lg:py-28 border-b border-white/10">
        <div className="site-container">
          {/* 1st Row - 2 Columns with 20px gap, 3:4 ratio, sharp corners, no hover */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {project.gallery.slice(0, 2).map((imgUrl, idx) => (
              <div
                key={`gallery-row1-${idx}`}
                className="relative aspect-[3/4] overflow-hidden bg-[#141414] border border-white/10"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery showcase ${idx + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>

          {/* 2nd Row - 3 Columns with 20px gap, 3:4 ratio, sharp corners, no hover */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[20px]">
            {project.gallery.slice(2, 5).map((imgUrl, idx) => (
              <div
                key={`gallery-row2-${idx}`}
                className="relative aspect-[3/4] overflow-hidden bg-[#141414] border border-white/10"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} gallery showcase ${idx + 3}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: TECHNOLOGIES USED
          - Left side: Heading
          - Right side: Details of technology used
         ========================================================================= */}
      <section className="w-full bg-black py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Side: Heading */}
            <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-28">
              <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                Tools &amp; Frameworks
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                Technologies
                <br />
                Used.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-md">
                Carefully selected technologies and design tools deployed to deliver exceptional performance, fluid interactions, and rock-solid maintainability.
              </p>
            </div>

            {/* Right Side: Details of Technology Used */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
              {project.technologies.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-primary/40 transition-colors duration-300 flex flex-col justify-between gap-5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-white border border-white/20 flex items-center justify-center p-2 shrink-0 group-hover:border-primary transition-colors shadow-sm">
                      {tech.icon ? (
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={32}
                          height={32}
                          className="max-h-7 w-auto object-contain"
                        />
                      ) : (
                        <span className="font-bold text-black font-mono text-base">
                          {tech.name.substring(0, 2).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {tech.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                      {tech.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-zinc-400 leading-relaxed">
                      {tech.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 5: NEXT / PREVIOUS PROJECT NAVIGATION & CALL TO ACTION
         ========================================================================= */}
      <section className="w-full bg-[#050505] py-16 sm:py-20 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
            {/* Previous Project Link */}
            {prevProject ? (
              <Link
                href={`/my-works/${prevProject.id}`}
                className="group flex flex-col items-start gap-1 text-left w-full sm:w-auto"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <FiArrowLeft className="h-3.5 w-3.5" /> Previous Project
                </span>
                <span className="text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-primary transition-colors">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}

            {/* Back to All Works Center Pill */}
            <Link
              href="/my-works"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-sm font-semibold uppercase tracking-wider text-zinc-300 hover:text-white transition-all shadow-md"
            >
              All Projects
            </Link>

            {/* Next Project Link */}
            {nextProject ? (
              <Link
                href={`/my-works/${nextProject.id}`}
                className="group flex flex-col items-end gap-1 text-right w-full sm:w-auto"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 group-hover:text-primary transition-colors flex items-center gap-1.5">
                  Next Project <FiArrowRight className="h-3.5 w-3.5" />
                </span>
                <span className="text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-primary transition-colors">
                  {nextProject.title}
                </span>
              </Link>
            ) : (
              <div className="hidden sm:block" />
            )}
          </div>
        </div>
      </section>

      {/* Reusable Contact CTA */}
      <WorkCta />
    </div>
  );
};

export default ProjectDetailView;
