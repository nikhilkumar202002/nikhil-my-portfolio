"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Styles.css";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#about" },
  { label: "Works", href: "#work" },
  { label: "Services", href: "#service" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;

    if (!footer) {
      return;
    }

    const ctx = gsap.context(() => {
      const layer = footer.querySelector(".footer-parallax-layer");
      const brand = footer.querySelector(".footer-brand");

      const triggerConfig = {
        trigger: footer,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
      } as const;

      if (layer) {
        gsap.fromTo(
          layer,
          { y: 72, opacity: 0.9 },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: triggerConfig,
          },
        );
      }

      if (brand) {
        gsap.fromTo(
          brand,
          { y: 18 },
          {
            y: 0,
            ease: "none",
            scrollTrigger: triggerConfig,
          },
        );
      }
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="footer-section">
      <div className="site-container">
        <div className="footer-parallax-layer">
          <div className="footer-top">
            <div className="footer-grid">
              <nav aria-label="Footer navigation">
                <ul className="footer-nav-list">
                  {navLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-nav-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="footer-right">
                <div className="footer-contact-group">
                  <p className="footer-contact-label">Call Me</p>
                  <div className="footer-contact-links">
                    <Link
                      href="tel:+919037395312"
                      className="footer-contact-link"
                    >
                      +91 9037395312
                    </Link>
                    <Link
                      href="tel:+917356112021"
                      className="footer-contact-link"
                    >
                      +91 7356112021
                    </Link>
                  </div>

                  <p className="footer-contact-label">What&apos;s App Me</p>
                  <div className="footer-contact-links">
                    <Link
                      href="https://wa.me/917356112021"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="footer-contact-link"
                    >
                      +91 7356112021
                    </Link>
                  </div>
                </div>

                <div className="footer-email-group">
                  <p className="footer-contact-label">Mail</p>
                  <Link
                    href="mailto:nikhilkumars12343@gmail.com"
                    className="footer-contact-link footer-email-link"
                  >
                    nikhilkumars12343@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">NIKHIL KUMAR S</div>

            <p className="footer-copy">
              © 2026 Nikhil Kumar. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
