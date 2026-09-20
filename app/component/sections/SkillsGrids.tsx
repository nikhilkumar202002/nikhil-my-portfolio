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
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="site-container flex flex-col gap-8 sm:gap-10">
        {/* Section Heading */}
        <div className="flex flex-col gap-2 items-center text-center">
          <p className="text-xs font-normal capitalize tracking-normal text-primary sm:text-sm">
            Tech Stack
          </p>
          <h2 className="text-3xl font-normal tracking-tight text-black sm:text-4xl lg:text-5xl">
            Tools and Technology
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-3 items-center justify-items-center gap-6 sm:grid-cols-6 md:grid-cols-9 sm:gap-8">
          {skillLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-12 w-full items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <div className="relative flex h-9 w-full max-w-[90px] items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={90}
                  height={36}
                  className="max-h-9 w-auto object-contain"
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
