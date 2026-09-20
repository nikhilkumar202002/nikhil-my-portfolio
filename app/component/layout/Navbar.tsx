"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Work", href: "/my-works" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-200 ${isScrolled
        ? "border-b border-black/10 bg-white/90 backdrop-blur-md"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="site-container">
        <div className="flex h-14 items-center justify-between gap-4 text-[14px] leading-none md:h-14">
          {/* Logo Left */}
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap font-medium text-black"
          >
            Nikhil Kumar S <span className="text-primary">Visualist</span>
          </Link>

          {/* Menu List Center */}
          <div className="hidden items-center gap-8 text-zinc-600 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="whitespace-nowrap transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Button & Status Indicator Right */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="flex items-center gap-2 text-xs font-medium text-black">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for opportunities
            </div>

            <Link
              href="#contact"
              className="shrink-0 whitespace-nowrap font-medium text-primary transition-colors hover:opacity-80"
            >
              Let&apos;s Talk
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="#contact"
              className="shrink-0 whitespace-nowrap font-medium text-primary transition-opacity hover:opacity-80 text-xs sm:text-sm"
            >
              Let&apos;s Talk
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center text-black transition-colors hover:text-primary"
            >
              {isMobileMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-200 md:hidden ${isMobileMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
          }`}
      >
        <div className="site-container flex h-full flex-col pt-12">
          <div className="flex items-center justify-between border-b border-black/10 pb-4">
            <p className="text-[14px] font-medium text-black">Menu</p>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center text-black transition-colors hover:text-primary"
            >
              <FiX className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col items-end justify-between py-6">
            <div className="flex flex-col items-end gap-6 text-right">
              <div className="flex items-center gap-2 text-xs font-medium text-black">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                Available for opportunities
              </div>

              <div className="flex flex-col items-end gap-3">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[2rem] font-medium leading-none tracking-[-0.04em] text-black transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pb-6">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex whitespace-nowrap font-medium text-primary transition-opacity hover:opacity-80"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
