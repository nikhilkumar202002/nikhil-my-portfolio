"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
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

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  prevProject,
  nextProject,
}) => {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const bgImage = project.image || project.gallery[0] || "/porfolio/GULF-CARGO/FEATURED.webp";

  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* =========================================================================
          SECTION 1: FULL WIDTH BANNER (100vh height with left-bottom heading)
         ========================================================================= */}
      <header className="relative flex h-[100dvh] min-h-[650px] w-full flex-col justify-between overflow-hidden bg-black">
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

          {/* Deep Dark Overlay Gradients for crisp readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
        </div>

        {/* Top Breadcrumbs Navigation (Home / Works / Slug) */}
        <div className="site-container relative z-20 pt-20 sm:pt-24 w-full">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Works", href: "/my-works" },
              { label: project.title },
            ]}
          />
        </div>

        {/* Banner Left Bottom Headline Content */}
        <div className="site-container relative z-20 w-full pb-12 sm:pb-16 lg:pb-20 text-left">
          <div className="max-w-5xl">
            <h1 className="text-left font-bold uppercase tracking-tight text-white leading-[0.90] text-[clamp(3.2rem,8.5vw,7.8rem)]">
              {project.title}
            </h1>
            <p className="mt-4 text-lg sm:text-2xl text-zinc-300 font-light max-w-2xl leading-snug">
              {project.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Project Metadata Strip (Immediately below 100vh banner) */}
      <div className="w-full border-b border-white/10 bg-[#0a0a0a] py-6 sm:py-7">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5 items-center">
            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Client
              </span>
              <span className="text-sm sm:text-base font-medium text-white truncate block mt-0.5">
                {project.client}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Role
              </span>
              <span className="text-sm sm:text-base font-medium text-white truncate block mt-0.5">
                {project.role}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Year
              </span>
              <span className="text-sm sm:text-base font-medium text-white truncate block mt-0.5">
                {project.year}
              </span>
            </div>

            <div>
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-zinc-500">
                Timeline
              </span>
              <span className="text-sm sm:text-base font-medium text-white truncate block mt-0.5">
                {project.duration}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1 flex sm:justify-end">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-primary px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(255,94,0,0.35)]"
                >
                  <span>Visit Live</span>
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                  Internal Client Project
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 2: 2 FULL COLUMN SECTION (Overview & Challenge vs Strategy & Deliverables)
         ========================================================================= */}
      <section className="w-full bg-black py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column: Overview & Challenge */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  01 / Context & Challenge
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.12]">
                  Transforming requirements into an intuitive product.
                </h2>
                <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-zinc-300">
                  {project.overview}
                </p>
              </div>

              {/* Challenge Callout Card */}
              <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0c0c] border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2 block">
                  The Core Challenge
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                  Balancing data density with rapid execution.
                </h3>
                <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400">
                  {project.challenge}
                </p>
              </div>
            </div>

            {/* Right Column: Strategy & Deliverables */}
            <div className="flex flex-col justify-between gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
                  02 / Strategy & Architecture
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.12]">
                  Engineered with intent from the first pixel.
                </h2>
                <p className="mt-6 text-base sm:text-lg font-light leading-relaxed text-zinc-300">
                  {project.solution}
                </p>
              </div>

              {/* Deliverables Checklist Card */}
              <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0c0c] border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-4 block">
                  Project Scope & Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-sm sm:text-base text-zinc-200"
                    >
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary text-black">
                        <FiCheck className="h-3 w-3 text-white" />
                      </span>
                      <span className="font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: 3 COLUMNS IMAGES (Visual Showcase Gallery)
         ========================================================================= */}
      <section className="w-full bg-[#050505] py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col gap-3 max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              03 / Visual Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Interfaces &amp; Responsive Views
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              High-resolution captures showcasing layout hierarchy, component state clarity, and responsive adaptations.
            </p>
          </div>

          {/* 3 Column Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {project.gallery.slice(0, 3).map((imgUrl, idx) => {
              const captions = [
                "01 / Primary Experience & Landing Architecture",
                "02 / Interactive Flow & Adaptive Components",
                "03 / Data Readouts & Application Management",
              ];

              return (
                <div key={idx} className="flex flex-col gap-3 group">
                  <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden bg-[#141414] border border-white/10 group-hover:border-primary/60 transition-all duration-500 shadow-2xl">
                    <Image
                      src={imgUrl}
                      alt={`${project.title} mockup view ${idx + 1}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="text-xs font-medium text-zinc-400 group-hover:text-primary transition-colors tracking-wide pl-1">
                    {captions[idx] || `View 0${idx + 1}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: DESCRIPTION & CORE HIGHLIGHTS (Architecture & User Journeys)
         ========================================================================= */}
      <section className="w-full bg-black py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col gap-3 max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              04 / Deep Dive &amp; Implementation
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Detailed Walkthrough &amp; Key Features
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* 3 Detailed Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="p-8 sm:p-9 rounded-2xl bg-[#0c0c0c] border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col justify-between gap-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold font-mono text-primary">
                    0{i + 1}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(255,94,0,0.8)]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-2.5 leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-sm sm:text-base font-light text-zinc-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COLOR PALETTE (Interactive Swatches with Hex & Roles)
         ========================================================================= */}
      <section className="w-full bg-[#050505] py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col gap-3 max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              05 / Visual Identity &amp; System
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Color Palette
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              Carefully calibrated color tokens engineered for WCAG contrast compliance and striking visual hierarchy.
            </p>
          </div>

          {/* 5 Swatches Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {project.colorPalette.map((swatch, idx) => {
              const isCopied = copiedHex === swatch.hex;

              return (
                <div
                  key={idx}
                  onClick={() => handleCopy(swatch.hex)}
                  className="group relative flex flex-col rounded-2xl bg-[#0c0c0c] border border-white/10 p-3 sm:p-4 hover:border-primary/60 transition-all duration-300 cursor-pointer shadow-lg"
                  title="Click to copy hex code"
                >
                  {/* Swatch preview box */}
                  <div
                    className="h-28 sm:h-32 rounded-xl w-full border border-white/10 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/75 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                      {isCopied ? (
                        <>
                          <FiCheck className="text-primary h-3 w-3" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <FiCopy className="h-3 w-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Swatch Details */}
                  <div className="mt-3 flex flex-col gap-0.5">
                    <span className="text-sm sm:text-base font-semibold text-white truncate">
                      {swatch.name}
                    </span>
                    <span className="font-mono text-xs sm:text-sm font-bold text-primary">
                      {swatch.hex}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-normal leading-tight mt-0.5">
                      {swatch.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: FONT FAMILY & TYPOGRAPHY SYSTEM
         ========================================================================= */}
      <section className="w-full bg-black py-20 sm:py-28 lg:py-32 border-b border-white/10">
        <div className="site-container">
          <div className="flex flex-col gap-3 max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              06 / Typographic System
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.1]">
              Font Family &amp; Hierarchy
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              {project.typography.description}
            </p>
          </div>

          {/* Typographic Specimen Showcase Container */}
          <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-[#0a0a0a] border border-white/10 flex flex-col gap-12 sm:gap-16">
            {/* Type Family Header */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-white/10 pb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1 block">
                  Primary Typeface
                </span>
                <h3 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                  {project.typography.fontFamily}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs uppercase font-semibold text-primary px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                  {project.typography.category}
                </span>
                <span className="text-xs font-semibold text-zinc-400 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10">
                  Web &amp; Display
                </span>
              </div>
            </div>

            {/* Specimen Glyphs */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Alphabet Specimen
              </span>
              <p className="text-2xl sm:text-4xl lg:text-5xl font-normal text-zinc-200 tracking-tight leading-tight break-all">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
              <p className="text-lg sm:text-2xl font-mono text-zinc-400 tracking-wider pt-2">
                0123456789 • !@#$%^&amp;*()_+=-[]&lbrace;&rbrace;
              </p>
            </div>

            {/* Weights & Hierarchy Comparison Rows */}
            <div className="flex flex-col gap-6 border-t border-white/10 pt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                Weights in Application
              </span>

              {/* Regular 400 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <span className="text-xs text-primary font-mono shrink-0 uppercase tracking-wider w-28">
                  Regular 400
                </span>
                <p className="text-base sm:text-lg font-normal text-zinc-300 leading-relaxed">
                  Design is not merely what it looks like and feels like. Design is how it works under real-world conditions.
                </p>
              </div>

              {/* Medium 500 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-t border-white/5 pt-6">
                <span className="text-xs text-primary font-mono shrink-0 uppercase tracking-wider w-28">
                  Medium 500
                </span>
                <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
                  Every interaction, micro-animation, and transition reinforces the user&apos;s journey and intent.
                </p>
              </div>

              {/* Bold 700 */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 border-t border-white/5 pt-6">
                <span className="text-xs text-primary font-mono shrink-0 uppercase tracking-wider w-28">
                  Bold 700
                </span>
                <p className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  High-performance digital products engineered to solve real enterprise challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: NEXT / PREVIOUS PROJECT NAVIGATION & CALL TO ACTION
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

