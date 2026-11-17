"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "/#features" },
  { label: "Download", href: "/#download" },
  { label: "FAQ", href: "/#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
      <a href="/" className="flex items-center gap-2.5">
        <Image
          src="/mousify-icon.png"
          alt="Mousify logo"
          width={28}
          height={28}
          className="rounded-lg"
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
      {open && (
        <div className="absolute inset-x-0 top-full z-20 mt-2 flex flex-col gap-4 rounded-lg border bg-card p-6 shadow-3xl md:hidden">
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
    </nav>
  );
}
