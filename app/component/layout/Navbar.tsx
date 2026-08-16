import Link from "next/link";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Service", href: "#service" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="site-container">
        <div className="flex h-10 items-center gap-4 text-[14px] leading-none">
          <Link
            href="/"
            className="shrink-0 whitespace-nowrap font-medium text-black"
          >
            Nikhil Kumar S <span className="text-primary">Visualist</span>
          </Link>

          <div className="ml-auto flex items-center gap-6 text-zinc-600 md:gap-25">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap transition-colors hover:text-black"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#hire-me"
              className="shrink-0 whitespace-nowrap font-medium text-primary transition-colors hover:opacity-80"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
