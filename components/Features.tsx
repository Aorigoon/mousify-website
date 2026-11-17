"use client";

import { useEffect, useRef } from "react";
import PhoneShot from "@/components/PhoneShot";

type Feature = {
  title: string;
  description: string;
  image: string;
  alt: string;
};

// Showcase order: Keyboard first, then Touchpad, Media, Quick tools, Scroll, Cloud.
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
  {
    title: "Scroll slider",
    description: "Hold the slider to keep scrolling; release to snap back to center.",
    image: "/feature-scroll.png",
    alt: "Mousify scroll slider held down",
  },
  {
    title: "Cloud mode",
    description: "Control your PC from anywhere with the free relay — no port forwarding.",
    image: "/app-home.png",
    alt: "Mousify app home screen",
  },
];

// One feature block: text side + phone side. flip puts the phone on the left
// (desktop); centered stacks text above the phone. Mobile always stacks
// text above the phone (DOM order).
function FeatureBlock({
  feature,
  flip,
  centered,
}: {
  feature: Feature;
  flip: boolean;
  centered: boolean;
}) {
  const reveal = centered ? "center" : flip ? "left" : "right";
  return (
    <div
      data-reveal={reveal}
      className={`gap-4 rounded-[2rem] border bg-card p-4 sm:gap-6 sm:p-6 ${
        centered ? "flex flex-col" : "grid md:grid-cols-2"
      }`}
    >
      <div
        className={`flex flex-col justify-center p-4 sm:p-6 lg:p-8 ${
          centered ? "items-center text-center" : flip ? "md:order-2" : ""
        }`}
      >
        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {feature.title}
        </h3>
        <p className="mt-4 max-w-md text-base leading-6 text-muted-foreground sm:text-lg">
          {feature.description}
        </p>
      </div>
      <div
        className={`visual-backdrop flex items-center justify-center rounded-[1.5rem] p-8 ${
          !centered && flip ? "md:order-1" : ""
        }`}
      >
        <PhoneShot src={feature.image} alt={feature.alt} className="w-[220px] sm:w-[240px]" />
      </div>
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
        Touchpad, keyboard, media, and more — free, with no account.
      </p>

      <div className="flex w-full max-w-6xl flex-col gap-6">
        {features.map((feature, index) => {
          const centered = index === features.length - 1;
          const flip = !centered && index % 2 === 1;
          return (
            <FeatureBlock
              key={feature.title}
              feature={feature}
              flip={flip}
              centered={centered}
            />
          );
        })}
      </div>
    </div>
  );
}
