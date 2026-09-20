import Image from "next/image";
import "./SkillLogoSlider.css";

const skillLogos = [
  { name: "HTML5", src: "/skill-logos/text.png", scale: 1.05 },
  { name: "CSS3", src: "/skill-logos/css-3.png", scale: 1.05 },
  { name: "JavaScript", src: "/skill-logos/js.png", scale: 1.0 },
  { name: "React", src: "/skill-logos/react-logo.png", scale: 1.1 },
  { name: "Next.js", src: "/skill-logos/next-js-seeklogo.png", scale: 1.05 },
  { name: "Node.js", src: "/skill-logos/node-js-seeklogo.png", scale: 1.1 },
  { name: "NestJS", src: "/skill-logos/NestJS-logo-wordmark.svg", scale: 1.25 },
  { name: "Tailwind CSS", src: "/skill-logos/tailwind-css.png", scale: 1.1 },
  { name: "Bootstrap", src: "/skill-logos/bootstrap.png", scale: 1.0 },
  { name: "React Native", src: "/skill-logos/react-native.png", scale: 1.15 },
  { name: "WordPress", src: "/skill-logos/WordPress_logo.png", scale: 1.05 },
  { name: "Wix", src: "/skill-logos/wix-seeklogo.png", scale: 1.15 },
  { name: "Framer", src: "/skill-logos/framer_logo_icon_169150.png", scale: 1.0 },
  { name: "Figma", src: "/skill-logos/figma.png", scale: 1.05 },
] as const;

const SkillLogoSlider = () => {
  return (
    <div className="skill-logo-slider" aria-label="Skills and tools">
      <div className="skill-logo-slider-grid">
        <h2 className="skill-logo-slider-heading">What I Work With</h2>

        <div className="skill-logo-slider-viewport">
          <div className="skill-logo-slider-track">
            {[...skillLogos, ...skillLogos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="skill-logo-slider-item"
                aria-hidden={index >= skillLogos.length}
              >
                <div className="skill-logo-slider-mark">
                  <Image
                    src={logo.src}
                    alt={index < skillLogos.length ? logo.name : ""}
                    width={56}
                    height={56}
                    className="skill-logo-slider-image"
                    style={{ transform: `scale(${logo.scale})` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillLogoSlider;
