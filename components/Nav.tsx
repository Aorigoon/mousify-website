import Image from "next/image";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#download", label: "Download" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-matte/90 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5"
      >
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/mousify-icon.png"
            alt="Mousify logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold tracking-tight">Mousify</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#download"
          className="rounded-full bg-royal px-5 py-2 text-sm font-medium text-white transition hover:bg-royal/90"
        >
          Download
        </a>
      </nav>
    </header>
  );
}
