"use client";

import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

type PrimaryBtnProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  disabled?: boolean;
  ariaLabel?: string;
};

const baseClasses =
  "group inline-flex items-center justify-between gap-3 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-black hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const PrimaryBtn = ({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  disabled = false,
  ariaLabel,
}: PrimaryBtnProps) => {
  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      <FiArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </>
  );

  if (href) {
    const computedRel =
      target === "_blank" ? rel ?? "noreferrer noopener" : rel;

    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={computedRel}
        aria-label={ariaLabel}
        className={`${baseClasses} ${className}`.trim()}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${className}`.trim()}
    >
      {content}
    </button>
  );
};

export default PrimaryBtn;
