import Image from "next/image";
import "./Styles.css";

const skills = [
  "Web Design",
  "UI/UX",
  "Development",
  "WordPress",
  "Ecommerce",
  "Landing Pages",
  "Branding",
  "Prototyping",
  "Responsive",
  "Redesign",
  "Optimization",
  "SEO",
  "Animation",
  "Maintenance",
  "Support",
] as const;

const sentenceItems = [
  [
    { type: "text", value: skills[0] },
    { type: "text", value: skills[1] },
    {
      type: "image",
      src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
      alt: "",
    },
    { type: "text", value: skills[2] },
  ],
  [
    {
      type: "image",
      src: "/images/249d1779c161e64afc73693bd4efffc4.webp",
      alt: "",
    },
    { type: "text", value: skills[3] },
    { type: "text", value: skills[4] },
    { type: "text", value: skills[5] },
    { type: "text", value: skills[6] },
  ],
  [
    { type: "text", value: skills[7] },
    { type: "text", value: skills[8] },
    { type: "text", value: skills[9] },
    {
      type: "image",
      src: "/images/90ff774dded2c8e8e90c82237929704e.webp",
      alt: "",
    },
    { type: "text", value: skills[10] },
    { type: "text", value: skills[11] },
    { type: "text", value: skills[12] },
    { type: "text", value: skills[13] },
    { type: "text", value: skills[14] },
    {
      type: "image",
      src: "/images/13bc6008a2291aad1c529e9b574dd3ce.webp",
      alt: "",
    },
  ],
] as const;

const SkillsFullFont = () => {
  return (
    <section id="service" className="skills-full-font-section">
      <div className="site-container">
        <div className="skills-full-font-sentence" aria-label="Skills">
          {sentenceItems.map((line, lineIndex) => (
            <div key={lineIndex} className="skills-full-font-line">
              {line.map((item, index) => {
                if (item.type === "text") {
                  return (
                    <span
                      key={`${item.value}-${lineIndex}-${index}`}
                      className="skills-full-font-text"
                    >
                      {item.value}
                      {index < line.length - 1 ? "," : ""}
                    </span>
                  );
                }

                return (
                  <span
                    key={`${item.src}-${lineIndex}-${index}`}
                    className="skills-full-font-media"
                    aria-hidden="true"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1440px) 120px, (min-width: 1024px) 100px, 80px"
                      className="skills-full-font-media-img"
                    />
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsFullFont;
