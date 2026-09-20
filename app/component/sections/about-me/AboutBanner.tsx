import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className="w-full bg-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
      <div className="site-container">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            {/* Top Heading Group */}
            <div>
              <p className="text-xs font-normal text-black/60 sm:text-sm ">
                About Nikhil
              </p>
              <h1 className="text-[clamp(2.6rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-tight text-black">
                Designer by <span className="text-primary">mindset.</span>
                <br />
                Developer by practice.
              </h1>
            </div>

            {/* Bottom Paragraph Description */}
            <div className="pt-10 lg:pt-16">
              <p className="max-w-[30rem] text-sm sm:text-base lg:text-[17px] font-light leading-[1.2] text-black/70">
                I&apos;m Nikhil Kumar S., a UI/UX Designer and Frontend Developer
                focused on creating digital experiences that are clear, purposeful
                and built for the real world.
              </p>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative aspect-[3/4] w-full max-w-[440px] overflow-hidden bg-gray-100">
              <Image
                src="/images/profile-image.jpg"
                alt="Nikhil Kumar S."
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;