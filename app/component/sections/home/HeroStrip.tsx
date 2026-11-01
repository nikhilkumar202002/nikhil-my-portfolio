const stats = [
    {
        value: "3+ Years",
        label: "Experience",
    },
    {
        value: "20+",
        label: "Digital Projects",
    },
    {
        value: "UI/UX + Development",
        label: "Cross-functional skillset",
    },
    {
        value: "Available",
        label: "For opportunities",
    },
] as const;

const HeroStrip = () => {
    return (
        <section className="w-full bg-primary text-black py-5 sm:py-6 shadow-[0_0_30px_rgba(255,94,0,0.25)] relative z-20">
            <div className="site-container flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
                {/* Left Statement */}
                <h2 className="text-xl font-bold tracking-tight text-black sm:text-2xl lg:text-3xl whitespace-nowrap">
                    Designing. Building. Shipping.
                </h2>

                {/* Right Stats Items */}
                <div className="grid grid-cols-2 items-start gap-5 sm:grid-cols-4 lg:gap-10">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col">
                            <span className="text-sm font-bold leading-snug text-black sm:text-base lg:text-[17px] whitespace-nowrap">
                                {stat.value}
                            </span>
                            <span className="text-[11px] font-medium leading-snug text-black/80 sm:text-xs whitespace-nowrap">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroStrip;
