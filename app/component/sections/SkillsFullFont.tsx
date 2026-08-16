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

const SkillsFullFont = () => {
  return (
    <section id="service" className="skills-full-font-section">
      <div className="site-container">
        <p className="skills-full-font-sentence" aria-label="Skills">
          {skills.join(", ")}
        </p>
      </div>
    </section>
  );
};

export default SkillsFullFont;
