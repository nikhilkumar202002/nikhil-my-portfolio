"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-colors duration-200 ${
        isScrolled
          ? "border-b border-black/10 bg-white"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="site-container">
        <div className="flex h-10 items-center gap-4 text-[14px] leading-none">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap font-medium text-black"
          >
            Nikhil Kumar S <span className="text-primary">Visualist</span>
          </Link>

          <div className="ml-auto flex items-center gap-6 text-zinc-600 md:gap-25">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
