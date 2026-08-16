import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-white text-black">
      <section className="site-container flex min-h-screen items-center py-10 sm:py-12 lg:py-16">
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-4">
              <p className="text-[14px] leading-none text-black/55">
                Nikhil Kumar S Visualist
              </p>

              <h1 className="max-w-[12ch] text-[clamp(3.2rem,8vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.05em]">
                Coming <span className="text-primary">Soon.</span>
              </h1>

              <p className="max-w-[34rem] text-[15px] leading-[1.35] text-black/70 sm:text-[16px]">
                We&apos;re crafting a polished experience with the same clean
                structure, bold typography, and warm primary accent used across
                the rest of the site.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[14px] leading-none sm:text-[15px]">
              <span className="text-black/55">What&apos;s next?</span>
              <span className="h-px w-10 bg-black/10" />
              <span className="text-primary">A more complete portfolio reveal.</span>
            </div>
          </div>

          <div className="flex items-end justify-start lg:justify-end">
            <div className="w-full max-w-[28rem] rounded-[1.5rem] border border-black/10 bg-[#f9f9f7] p-6 shadow-[0_18px_50px_rgba(17,17,17,0.06)] sm:p-8">
              <p className="text-[13px] uppercase tracking-[0.2em] text-black/45">
                Preview Mode
              </p>

              <div className="mt-6 flex min-h-[18rem] flex-col justify-between rounded-[1.25rem] bg-white p-5 sm:min-h-[22rem] sm:p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[12px] uppercase tracking-[0.14em] text-black/45">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Under Construction
                  </div>
                  <h2 className="max-w-[12ch] text-[clamp(2rem,4vw,3rem)] font-medium leading-[0.95] tracking-[-0.04em] text-black">
                    Better Work. Better Flow.
                  </h2>
                </div>

                <div className="space-y-3">
                  <div className="h-px w-full bg-black/10" />
                  <p className="max-w-[18rem] text-[14px] leading-[1.45] text-black/65">
                    If you&apos;re looking for the full experience, it&apos;s on
                    the way.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-black transition-colors hover:text-primary"
                >
                  <span>Go Home</span>
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  href="/#work"
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-primary transition-opacity hover:opacity-80"
                >
                  <span>View Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
