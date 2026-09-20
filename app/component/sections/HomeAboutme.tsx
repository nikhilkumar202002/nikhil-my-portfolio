import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";
import "./Styles.css";

const HomeAboutme = () => {
  return (
    <section id="about" className="w-full bg-white py-0">
      <div className="site-container">
        <div className="home-about-grid">
          <div className="home-about-copy">
            <div className="home-about-copy-top">
              <div className="home-about-heading">
                <p className="home-about-label">About Me</p>
                <h2 className="home-about-title">
                  Designer by mindset.{" "}
                  <br></br>
                  <span>Developer by practice.</span>
                </h2>
              </div>

              <p className="home-about-description">
                I'm Nikhil Kumar S., a UI/UX Designer and Frontend Developer based in Kerala, India. I work at the intersection of design and technology, creating interfaces that are clear, engaging and practical to build. My experience spans website design, product interfaces, frontend development, WordPress and digital experiences for businesses across different industries.
              </p>
            </div>

            <div className="home-about-actions-wrap">
              <div className="home-about-actions">
                <PrimaryBtn
                  href="tel:+917356112021"
                  className="home-about-primary-btn !bg-primary !text-white hover:!bg-black hover:!text-white"
                >
                  More About Me
                </PrimaryBtn>

                <Link href="#work" className="home-about-link">
                  Download Resume
                </Link>
              </div>
            </div>
          </div>

          <div className="home-about-image-wrap">
            <div className="home-about-image-grid">
              <div className="home-about-image-panel">
                <Image
                  src="/images/profile-image.jpg"
                  alt="Nikhil Kumar standing outdoors"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="home-about-image-img"
                />
              </div>

              <div className="home-about-secondary-panel" aria-hidden="true">
                <span className="home-about-secondary-label">Visualizer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutme;
