import Image from "next/image";

const skillLogos = [
  { name: "HTML5", src: "/skill-logos/text.png", scale: 0.9 },
  { name: "CSS3", src: "/skill-logos/css-3.png", scale: 0.9 },
  { name: "JavaScript", src: "/skill-logos/js.png", scale: 0.85 },
  { name: "React", src: "/skill-logos/react-logo.png", scale: 1.2 },
  { name: "Next.js", src: "/skill-logos/next-js-seeklogo.png", scale: 1.2 },
  { name: "Node.js", src: "/skill-logos/node-js-seeklogo.png", scale: 1.2 },
  { name: "NestJS", src: "/skill-logos/NestJS-logo-wordmark.svg", scale: 1.25 },
  { name: "Tailwind CSS", src: "/skill-logos/tailwind-css.png", scale: 1.25 },
  { name: "Bootstrap", src: "/skill-logos/bootstrap.png", scale: 0.85 },
  { name: "React Native", src: "/skill-logos/react-native.png", scale: 1.3 },
  { name: "WordPress", src: "/skill-logos/WordPress_logo.png", scale: 1.25 },
  { name: "Wix", src: "/skill-logos/wix-seeklogo.png", scale: 1.05 },
  { name: "Framer", src: "/skill-logos/framer_logo_icon_169150.png", scale: 1.05 },
  { name: "Figma", src: "/skill-logos/figma.png", scale: 0.9 },
  { name: "Photoshop", src: "/skill-logos/photoshop.png", scale: 0.9 },
  { name: "Illustrator", src: "/skill-logos/illustrator.png", scale: 0.9 },
  { name: "Adobe XD", src: "/skill-logos/xd.png", scale: 0.9 },
  { name: "GitHub", src: "/skill-logos/github.png", scale: 0.9 },
] as const;

export const SkillsGrids = () => {
  return (
    <section className="w-full bg-black border-t border-white/5 py-16 sm:py-20 lg:py-[150px]">
      <div className="site-container flex flex-col gap-8 sm:gap-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary sm:text-sm">
            Tech Stack
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
            Tools and <span className="text-primary font-semibold">Technology</span>
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 items-center justify-items-center gap-4 sm:grid-cols-6 md:grid-cols-9 sm:gap-6">
          {skillLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-16 w-full items-center justify-center rounded-xl bg-[#0f0f0f] border border-white/5 p-2 transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-[0_0_24px_rgba(255,94,0,0.25)]"
            >
              <div className="relative flex h-10 w-full max-w-[90px] items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={90}
                  height={36}
                  className="max-h-9 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  style={{ transform: `scale(${logo.scale})` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrids;
