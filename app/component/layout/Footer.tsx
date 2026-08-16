"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import "./Styles.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "#about" },
  { label: "Works", href: "#work" },
  { label: "Services", href: "#service" },
  { label: "Contact Us", href: "#contact" },
];

const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);
  const [parallax, setParallax] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const footer = footerRef.current;
      if (!footer) {
        return;
      }

      const rect = footer.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = Math.min(
        Math.max((viewportHeight - rect.top) / viewportHeight, 0),
        1,
      );

      setParallax(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate3d(0, ${(1 - parallax) * 18}px, 0)`,
  };

  return (
    <footer ref={footerRef} className="footer-section">
      <div className="site-container">
        <div className="footer-parallax-layer" style={parallaxStyle}>
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
            <div className="footer-brand">NIKHIL</div>

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
