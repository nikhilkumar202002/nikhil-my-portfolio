import Image from "next/image";
import PrimaryBtn from "../../ui/PrimaryBtn";

const Hero = () => {
  return (
    <section className="relative flex h-[100dvh] min-h-[580px] w-full flex-col justify-between overflow-hidden bg-[#F9F9F9] pt-16 pb-4 sm:pt-20 sm:pb-6 lg:pt-20 lg:pb-6">
      <div className="site-container flex flex-1 flex-col justify-between gap-4 py-2 sm:py-4">
        {/* Top Content: Main Heading, Subtitle & CTAs */}
        <div className="flex flex-col items-start pt-2 sm:pt-4">
          {/* Giant Display Title */}
          <h1 className="font-bold uppercase tracking-tighter text-black leading-[0.80] text-[clamp(4.2rem,min(14.5vw,15.5vh),13.5rem)]">
            DESIGN
            <br />
            <span className="text-primary">+</span> CODE
          </h1>

          {/* Subtitle */}
          <p className="mt-[2vh] text-[clamp(1.45rem,min(3.6vw,3.8vh),3rem)] font-normal leading-[1.08] tracking-[-0.02em] text-black sm:mt-[2.5vh]">
            I design digital experiences
            <br />
            and build them for the web.
          </p>

          {/* CTAs */}
          <div className="mt-[2.5vh] flex flex-wrap items-center gap-4 sm:mt-[3vh] sm:gap-6">
            <PrimaryBtn
              href="#work"
              className="!bg-primary !text-white px-6 py-3 sm:px-7 sm:py-3.5 hover:!bg-black transition-colors"
            >
              View My Work
            </PrimaryBtn>
            <PrimaryBtn
              href="#contact"
              className="px-2 py-3 sm:py-3.5 hover:text-primary transition-colors"
            >
              Let&apos;s Work Together
            </PrimaryBtn>
          </div>
        </div>

        {/* Bottom Right: Bio Text & Portrait Image */}
        <div className="flex items-end justify-end pb-1 sm:pb-2">
          <div className="flex items-end justify-end gap-4 sm:gap-6">
            <p className="max-w-[13rem] text-right text-[clamp(10px,min(1.4vw,1.5vh),13.5px)] leading-[1.35] text-black/90 sm:max-w-[18rem] lg:max-w-[21rem]">
              I&apos;m Nikhil Kumar S., a UI/UX Designer &amp; Frontend
              Developer creating thoughtful interfaces, responsive websites and
              digital products that balance visual clarity with real-world
              usability.
            </p>

            <div
              className="relative h-[clamp(210px,34vh,360px)] w-[clamp(155px,25vh,270px)] shrink-0 overflow-hidden"
              data-preloader-hero-image
            >
              <Image
                src="/images/profile-image.jpg"
                alt="Nikhil Kumar S portrait"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 270px, (min-width: 640px) 220px, 155px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
