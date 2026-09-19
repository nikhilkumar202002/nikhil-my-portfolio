const designSkills = [
  ["Research", "User Flows", "Wireframing"],
  ["UI Design", "Prototyping"],
  ["Design Systems", "Responsive Design"],
];

const devSkills = [
  ["HTML / CSS", "JavaScript", "React"],
  ["Next.js", "Node.js", "WordPress"],
  ["Elementor", "PHP"],
];

const Differentiator = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16 sm:py-20 lg:py-24">
      <div className="site-container flex flex-col gap-14 sm:gap-16 lg:gap-20">
        {/* Top Grid: Main Statement & Description */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-medium leading-[1.05] tracking-[-0.03em] text-black">
            I don&apos;t just
            <br />
            design <span className="text-primary">interfaces.</span>
            <br />
            I build them.
          </h2>

          <p className="max-w-[24rem] text-[17px] font-light leading-[1.45] text-black/70 md:text-right">
            From the first wireframe to the final responsive interface, I work
            across design and development to create digital products that are
            visually refined and technically practical.
          </p>
        </div>

        {/* Bottom Grid: Design & Development Skill Sets */}
        <div className="grid grid-cols-1 gap-10 pt-2 md:grid-cols-2 lg:gap-16">
          {/* Design Column */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xl font-medium text-primary sm:text-2xl">
              Design
            </h3>
            <div className="flex flex-col gap-2 pt-1">
              {designSkills.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap items-center gap-x-5 gap-y-1 text-base font-normal text-black sm:text-lg"
                >
                  {row.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="font-bold text-primary">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Development Column */}
          <div className="flex flex-col gap-3 md:items-end">
            <h3 className="text-xl font-medium text-primary sm:text-2xl md:text-right">
              Development
            </h3>
            <div className="flex flex-col gap-2 pt-1 md:items-end">
              {devSkills.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex flex-wrap items-center justify-start gap-x-5 gap-y-1 text-base font-normal text-black sm:text-lg md:justify-end"
                >
                  {row.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="font-bold text-primary">•</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
