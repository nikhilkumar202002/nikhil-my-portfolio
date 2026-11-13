import Link from "next/link";
import "../Styles.css";

const HomeCta = () => {
  return (
    <section id="contact" className="w-full bg-black border-t border-white/5 py-16 sm:py-20 lg:py-[150px]">
      <div className="site-container">
        <div className="home-cta-grid">
          <div className="home-cta-intro">
            <p className="home-cta-label text-primary font-medium tracking-wide">Let&apos;s Work Together</p>
            <h2 className="home-cta-title text-white">
              <span className="home-cta-title-line">
                Have an <span className="home-cta-accent text-primary font-semibold">Idea?</span> Let&apos;s
                Turn It
              </span>
              <span className="home-cta-title-line">
                Into Something{" "}
                <span className="home-cta-accent text-primary font-semibold">Remarkable.</span>
              </span>
            </h2>
          </div>

          <p className="home-cta-copy text-zinc-400">
            Whether you need a new website, a fresh digital experience, or a
            complete redesign, I can help turn your vision into a digital
            solution that looks great, works smoothly, and delivers real value.
          </p>

          <p className="home-cta-note text-zinc-300">
            Available for freelance, contract, and collaboration opportunities.
          </p>

          <Link href="/contact-me" className="home-cta-link text-primary font-semibold hover:text-white transition-colors">
            Contact Me &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
