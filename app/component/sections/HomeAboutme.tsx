import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";
import "./Styles.css";

const HomeAboutme = () => {
  return (
    <section id="about" className="home-about-section">
      <div className="site-container">
        <div className="home-about-grid">
          <div className="home-about-copy">
            <div className="home-about-copy-top">
              <div className="home-about-heading">
                <p className="home-about-label">About Me</p>
                <h2 className="home-about-title">
                  I Create Digital Experiences That Look Great,{" "}
                  <span>Work Seamlessly</span> & Help Businesses Grow
                </h2>
              </div>

              <p className="home-about-description">
                I&apos;m Nikhil Kumar, a Web Designer and Frontend Developer
                who combines thoughtful UI/UX design with modern web
                development to create websites that are visually engaging,
                easy to use, responsive across every device, and built around
                real business goals.
              </p>
            </div>

            <div className="home-about-actions-wrap">
              <div className="home-about-actions">
                <PrimaryBtn
                  href="#contact"
                  className="home-about-primary-btn !bg-primary !text-white hover:!bg-black hover:!text-white"
                >
                  Call Me
                </PrimaryBtn>

                <Link href="#work" className="home-about-link">
                  Know More
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
