"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Work", href: "#work" },
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
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? "border-b border-black/10 bg-white"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-container">
        <div className="flex h-12 items-center gap-3 text-[14px] leading-none md:h-10 md:gap-4">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap font-medium text-black"
          >
            Nikhil Kumar S <span className="text-primary">Visualist</span>
          </Link>

          <div className="ml-auto hidden items-center gap-6 text-zinc-600 md:flex md:gap-25">
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

            <Link
              href="#hire-me"
              className="shrink-0 whitespace-nowrap font-medium text-primary transition-colors hover:opacity-80"
            >
              Hire Me
            </Link>
          </div>

          <div className="ml-auto flex items-center gap-2 md:hidden">
            <Link
              href="#hire-me"
              className="shrink-0 whitespace-nowrap font-medium text-primary transition-opacity hover:opacity-80"
            >
              Hire Me
            </Link>

            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              className="inline-flex h-9 w-9 items-center justify-center text-black transition-colors hover:text-primary"
            >
              {isMobileMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[60] bg-white transition-opacity duration-200 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
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

          <div className="flex flex-1 flex-col justify-between py-6">
            <div className="flex flex-col gap-2">
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

            <div className="pb-6">
              <Link
                href="#hire-me"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex whitespace-nowrap font-medium text-primary transition-opacity hover:opacity-80"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
