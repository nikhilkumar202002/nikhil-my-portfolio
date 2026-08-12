import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="site-container min-h-[calc(100vh-2.5rem)] py-8 sm:py-10 lg:py-12">
        <div className="flex min-h-[calc(100vh-2.5rem)] flex-col justify-between">
          <div className="flex items-start justify-end gap-6 pt-8 sm:pt-12 lg:pt-16">
            <p className="max-w-[22rem] text-right text-[10px] leading-[1.25] text-black/90 sm:text-[13px] lg:text-[14px]">
              Ideas, shaped with purpose. Experiences, designed to connect. I
              blend creativity and technology to turn visions into meaningful
              digital experiences.
            </p>

            <div className="relative h-[155px] w-[145px] shrink-0 overflow-hidden sm:h-[175px] sm:w-[165px] lg:h-[180px] lg:w-[170px]">
              <Image
                src="/images/profile-image.jpg"
                alt="Nikhil Kumar S portrait"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 1024px) 170px, (min-width: 640px) 165px, 145px"
              />
            </div>
          </div>

          <div className="pb-8 sm:pb-10 lg:pb-12">
            <h1 className="max-w-[11.5ch] text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-black">
              Purpose in Every <span className="text-primary">Pixel.</span>
              <br />
              <span className="text-primary">Impact</span> in Every Experience.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
