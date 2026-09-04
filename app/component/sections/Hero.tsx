import Image from "next/image";

const Hero = () => {
  return (
    <section className="h-[520px] bg-[#F9F9F9] sm:h-[600px]">
      <div className="site-container flex h-full flex-col justify-between py-14 sm:py-12 lg:grid lg:grid-cols-[7fr_3fr] lg:justify-normal lg:py-14">
        <div className="hidden lg:block" />

        <div className="flex items-end justify-end pb-0 sm:pb-10 lg:pb-14">
          <div className="flex w-full items-end justify-end gap-3 sm:gap-6">
            <p className="w-full max-w-[12rem] self-end pb-1 text-right text-[10px] leading-[1.25] text-black/90 sm:max-w-[22rem] sm:text-[13px] lg:max-w-[22rem] lg:text-[14px]">
              Ideas, shaped with purpose. Experiences, designed to connect. I
              blend creativity and technology to turn visions into meaningful
              digital experiences.
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

        <div className="flex items-end">
          <h1 className="w-full text-[clamp(2.8rem,6.2vw,4.5rem)] font-medium leading-[0.95] tracking-[-0.02em] text-black">
            Purpose in Every <span className="text-primary">Pixel.</span>
            <br />
            <span className="text-primary">Impact</span> in Every Experience.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
