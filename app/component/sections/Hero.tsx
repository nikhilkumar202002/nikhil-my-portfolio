import Image from "next/image";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100dvh] w-full flex-col justify-between bg-[#F9F9F9] pt-16 pb-[95px] sm:pt-20 lg:pt-20">
      <div className="site-container flex flex-1 flex-col justify-between gap-8 lg:grid lg:grid-cols-[7fr_3fr] lg:gap-10">
        <div className="hidden lg:block" />

        <div className="flex items-end justify-end pb-0 sm:pb-6 lg:pb-10">
          <div className="flex w-full items-end justify-end gap-3 sm:gap-6">
            <p className="w-full max-w-[12rem] self-end pb-1 text-right text-[10px] leading-[1.25] text-black/90 sm:max-w-[22rem] sm:text-[13px] lg:max-w-[22rem] lg:text-[14px]">
              I&apos;m Nikhil Kumar S., a UI/UX Designer &amp; Frontend
              Developer creating thoughtful interfaces, responsive websites and
              digital products that balance visual clarity with real-world
              usability.
            </p>

            <div
              className="relative h-[145px] w-[128px] shrink-0 overflow-hidden sm:h-[190px] sm:w-[180px] lg:h-[210px] lg:w-[190px]"
              data-preloader-hero-image
            >
              <Image
                src="/images/profile-image.jpg"
                alt="Nikhil Kumar S portrait"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 190px, (min-width: 640px) 180px, 128px"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 lg:col-span-2">
          <h1 className="w-full text-[clamp(2.8rem,6.2vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-black">
            I design <span className="text-primary">digital </span>experiences
            <br />
            and build them for the <span className="text-primary">web.</span>
          </h1>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
            <PrimaryBtn
              href="#work"
              className="!bg-primary !text-white px-5 py-3 hover:!bg-black transition-colors"
            >
              View My Work
            </PrimaryBtn>
            <PrimaryBtn
              href="#contact"
              className="px-4 py-3 hover:text-primary transition-colors"
            >
              Let&apos;s Work Together
            </PrimaryBtn>
          </div>

          <p className="text-xs sm:text-sm font-medium tracking-wide text-black/60">
            UI/UX &middot; Web Design &middot; Frontend &middot; WordPress &middot; React
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

