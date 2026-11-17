"use client";

import { useEffect, useRef } from "react";
import PhoneShot from "@/components/PhoneShot";

type Feature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

// v2.3: 4 boxes only — Keyboard, Touchpad, Media, Quick tools. Scroll slider
// and Cloud mode live in the "Why Mousify" cards instead.
const features: Feature[] = [
  {
    title: "Keyboard",
    description: "A full keyboard with shortcuts, right on your phone.",
    image: "/feature-keyboard.png",
    alt: "Mousify composer with the keyboard open",
  },
  {
    title: "Touchpad",
    description: "A smooth touchpad with a dot grid that follows your finger.",
    image: "/feature-touchpad.png",
    alt: "Mousify touchpad with the dot grid",
  },
  {
    title: "Media controls",
    description: "Play, pause, skip ±10 seconds, and volume — from your couch.",
    image: "/feature-media.png",
    alt: "Mousify media controls stick open",
  },
  {
    title: "Quick tools",
    description: "Copy, paste, select all, and undo with one tap.",
    image: "/feature-quick-tools.png",
    alt: "Mousify quick tools stick open",
  },
];

// One box: big phone on top, headline + description below. No card, no
// border, no backdrop — the section background shows through.
function FeatureBox({ feature, reveal }: { feature: Feature; reveal: "left" | "right" }) {
  return (
    <div data-reveal={reveal} className="flex flex-col items-center text-center">
      <PhoneShot
        src={feature.image}
        alt={feature.alt}
        className="w-[280px] sm:w-[320px]"
      />
      <h3 className="mt-8 text-3xl font-semibold tracking-tight sm:text-4xl">{feature.title}</h3>
      <p className="mt-3 max-w-sm text-base leading-6 text-muted-foreground sm:text-lg">
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Reveal on scroll: hidden states only apply once JS marks the section
  // ready, so SSR / no-JS / no-IntersectionObserver still shows content.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll("[data-reveal]");
    section.classList.add("reveal-ready");
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="features"
      ref={sectionRef}
      className="flex w-full scroll-mt-20 flex-col items-center gap-6 overflow-x-clip px-6 py-14 md:px-10 md:py-25"
    >
      <span className="inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground/50 uppercase">
        Features
      </span>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Everything your PC needs,
        <div className="text-muted-foreground">in your pocket.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Touchpad, keyboard, media, and more — with no account.
      </p>

      <div className="grid w-full max-w-6xl gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-16">
        {features.map((feature, index) => (
          <FeatureBox
            key={feature.title}
            feature={feature}
            reveal={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
