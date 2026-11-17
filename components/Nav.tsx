"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Download", href: "/#download" },
  { label: "FAQ", href: "/#faq" },
];

// v2.5: the floating glass pill shows from page load — no scroll-conditional
// full nav anymore. Entrance animation lives in globals.css (.nav-entrance).
export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-entrance fixed inset-x-0 top-0 z-50 flex flex-col items-center px-4 pt-3">
      <nav className="flex w-fit items-center gap-6 rounded-full border border-border/60 bg-white/70 py-2 pr-2 pl-5 shadow-3xl backdrop-blur-xl">
        <a href="/" className="group flex items-center gap-2.5">
          <Image
            src="/mousify-icon.png"
            alt="Mousify logo"
            width={28}
            height={28}
            className="rounded-lg transition-transform duration-300 group-hover:scale-110"
          />
          <span className="text-base font-semibold tracking-tight">Mousify</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <a
            href="/#download"
            className="hidden h-9 items-center justify-center rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90 md:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="relative -m-2 cursor-pointer p-2 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="mt-2 flex w-full max-w-7xl flex-col gap-4 rounded-lg border bg-card p-6 shadow-3xl md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#download"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
