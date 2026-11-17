import type { ReactNode } from "react";

// Simple laurel branch drawn from scratch: one curved stem, leaves along it.
function Branch({ flip = false }: { flip?: boolean }) {
  const leaves: [number, number, number][] = [
    // [x, y, rotation]
    [31, 67, -50],
    [23, 55, -56],
    [18, 43, -62],
    [16, 31, -68],
    [17, 19, -74],
    [21, 8, -80],
  ];
  return (
    <svg
      viewBox="0 0 43 81"
      fill="none"
      aria-hidden
      // Text block ki poori height tak lambi ho (Zain, 2026-11-18: text
      // pattiyon ke BEECH me hona chahiye) — width se height banti thi
      // (19px → ~36px) jab ke text ~65px tall hai, is liye value neeche
      // latak raha tha. preserveAspectRatio="none" se branch vertically
      // stretch hoti hai (laurel lambi-narrow hoti hi hai).
      preserveAspectRatio="none"
      className={`h-full w-[19px] opacity-60 md:w-[43px] ${flip ? "rotate-y-180" : ""}`}
    >
      <defs>
        <linearGradient id="laurel" x1="21" y1="0" x2="21" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-foreground)" />
          <stop offset="1" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        d="M34 78 C 22 62 12 44 12 20 C 12 12 14 6 17 2"
        stroke="url(#laurel)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {leaves.map(([x, y, r]) => (
        <ellipse key={y} cx={x} cy={y} rx="7" ry="2.6" fill="url(#laurel)" transform={`rotate(${r} ${x} ${y})`} />
      ))}
    </svg>
  );
}

function Wreath({ children }: { children: ReactNode }) {
  return (
    <div className="grid w-min grid-cols-[1fr_64px_1fr] items-stretch md:grid-cols-[1fr_170px_1fr]">
      <Branch />
      <div className="-mx-2.5 flex flex-col items-center justify-center">
        {children}
      </div>
      <Branch flip />
    </div>
  );
}

// One label class + one value class for all three stats — consistent sizing.
const labelClass = "text-xs font-medium md:text-base";
const valueClass =
  "mt-1.5 text-center text-sm font-bold text-balance md:text-2xl";

export default function Showcase() {
  return (
    <div className="relative mx-auto mt-12 mb-8 grid w-fit grid-cols-3 gap-8 md:my-24 md:gap-20">
      <Wreath>
        <p className={labelClass}>Setup</p>
        <p className={valueClass}>
          Scan
          <br />
          &amp; go
        </p>
      </Wreath>
      <Wreath>
        <p className={labelClass}>Sign-up</p>
        <p className={valueClass}>
          No account
          <br />
          Needed
        </p>
      </Wreath>
      <Wreath>
        <p className={labelClass}>Connection</p>
        <p className={valueClass}>
          Wi-Fi + Cloud
          <br />
          Anywhere
        </p>
      </Wreath>
    </div>
  );
}
