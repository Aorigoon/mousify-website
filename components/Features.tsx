"use client";

import { useState } from "react";
import {
  Cloud,
  Copy,
  Keyboard,
  MoveVertical,
  Play,
  Touchpad,
  type LucideIcon,
} from "lucide-react";
import PhoneShot from "@/components/PhoneShot";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Touchpad,
    title: "Touchpad",
    description: "A smooth touchpad with a dot grid that follows your finger.",
  },
  {
    icon: Keyboard,
    title: "Keyboard",
    description: "A full keyboard with shortcuts, right on your phone.",
  },
  {
    icon: Play,
    title: "Media controls",
    description: "Play, pause, skip ±10 seconds, and volume — from your couch.",
  },
  {
    icon: Copy,
    title: "Quick tools",
    description: "Copy, paste, select all, and undo with one tap.",
  },
  {
    icon: MoveVertical,
    title: "Scroll slider",
    description: "Hold the slider to keep scrolling; release to snap back to center.",
  },
  {
    icon: Cloud,
    title: "Cloud mode",
    description: "Control your PC from anywhere with the free relay — no port forwarding.",
  },
];

function FeatureDetails({ feature, isActive }: { feature: Feature; isActive: boolean }) {
  const Icon = feature.icon;
  return (
    <>
      <div
        className={`w-fit rounded-sm p-3 transition-colors ${
          isActive ? "bg-foreground text-background" : "bg-secondary text-foreground"
        }`}
      >
        <Icon size={20} />
      </div>
      <div className="text-center">
        <p className="mb-2 text-base font-medium">{feature.title}</p>
        <p className="text-sm text-wrap text-muted-foreground">{feature.description}</p>
      </div>
    </>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);

  return (
    <div
      id="features"
      className="flex w-full scroll-mt-20 flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25"
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

      {/* Mobile: horizontal snap carousel, tap a card to select it. */}
      <div className="no-scrollbar -mx-6 flex w-[calc(100%+3rem)] snap-x snap-mandatory gap-2 overflow-x-auto px-6 md:-mx-10 md:w-[calc(100%+5rem)] md:px-10 lg:hidden">
        {features.map((feature, index) => (
          <button
            key={feature.title}
            type="button"
            onClick={() => setActive(index)}
            className="flex w-[240px] shrink-0 snap-start flex-col items-center gap-5 px-2 py-6"
          >
            <FeatureDetails feature={feature} isActive={active === index} />
            <div className="w-full rounded-lg border bg-card p-8 pb-0">
              <PhoneShot className="w-[176px]" />
            </div>
          </button>
        ))}
      </div>

      {/* Desktop: tabs + screenshot panel. */}
      <div className="hidden w-full max-w-6xl lg:block">
        <div role="tablist" aria-label="Features" className="grid w-full grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              type="button"
              role="tab"
              aria-selected={active === index}
              onClick={() => setActive(index)}
              className="flex cursor-pointer flex-col items-center justify-start gap-5 px-2 py-6"
            >
              <FeatureDetails feature={feature} isActive={active === index} />
            </button>
          ))}
        </div>
        <div className="flex w-full justify-center rounded-lg border bg-card p-8 pb-0">
          <PhoneShot className="w-[260px]" />
        </div>
      </div>
    </div>
  );
}
