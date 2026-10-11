import React from "react";
import Image from "next/image";

export interface SlugBannerProps {
  headline?: string;
  title?: string;
  backgroundImage?: string;
  image?: string;
  imageAlt?: string;
  verticalAlign?: "bottom" | "center";
  className?: string;
}

const SlugBanner = ({
  headline,
  title,
  backgroundImage,
  image,
  imageAlt,
  verticalAlign = "bottom",
  className = "",
}: SlugBannerProps) => {
  const projectHeadline = headline || title || "Gulf Cargo Logistics Platform";
  const bgImage =
    backgroundImage || image || "/porfolio/GULF-CARGO/FEATURED.webp";
  const altText = imageAlt || projectHeadline;

  const verticalClasses =
    verticalAlign === "center"
      ? "items-center pt-14"
      : "items-end pb-14 sm:pb-20 lg:pb-24";

  return (
    <section
      className={`relative flex h-[100dvh] min-h-[600px] w-full overflow-hidden bg-black ${verticalClasses} ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt={altText}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay gradient for contrast and legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30" />
      </div>

      {/* Project Headline Only (Left Aligned) */}
      <div className="site-container relative z-10 w-full text-left">
        <h1 className="text-left font-bold uppercase tracking-tight text-white leading-[0.95] text-[clamp(2.75rem,7vw,6.5rem)] max-w-5xl">
          {projectHeadline}
        </h1>
      </div>
    </section>
  );
};

export default SlugBanner;