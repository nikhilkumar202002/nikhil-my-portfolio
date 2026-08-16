import Link from "next/link";
import "./Styles.css";

const HomeCta = () => {
  return (
    <section id="contact" className="home-cta-section">
      <div className="site-container">
        <div className="home-cta-grid">
          <div className="home-cta-intro">
            <p className="home-cta-label">Let&apos;s Work Together</p>
            <h2 className="home-cta-title">
              <span className="home-cta-title-line">
                Have an <span className="home-cta-accent">Idea?</span> Let&apos;s
                Turn It
              </span>
              <span className="home-cta-title-line">
                Into Something{" "}
                <span className="home-cta-accent">Remarkable.</span>
              </span>
            </h2>
          </div>

          <p className="home-cta-copy">
            Whether you need a new website, a fresh digital experience, or a
            complete redesign, I can help turn your vision into a digital
            solution that looks great, works smoothly, and delivers real value.
          </p>

          <p className="home-cta-note">
            Available for freelance, contract, and collaboration opportunities.
          </p>

          <Link href="#about" className="home-cta-link">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeCta;
