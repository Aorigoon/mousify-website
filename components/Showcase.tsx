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
      className={`w-[19px] opacity-60 md:w-[43px] ${flip ? "rotate-y-180" : ""}`}
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
    <div className="grid w-min grid-cols-[1fr_60px_1fr] md:grid-cols-[1fr_150px_1fr]">
      <Branch />
      <div className="-mx-2.5 mt-1 flex flex-col items-center md:-mt-2.5">
        {children}
      </div>
      <Branch flip />
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="relative mx-auto mt-12 mb-8 grid w-fit grid-cols-3 gap-8 md:my-24 md:gap-20">
      <Wreath>
        <p className="mb-0.5 text-[0.625rem] md:text-base">Price</p>
        <p className="text-center text-xl font-bold md:mt-1.5 md:text-3xl">
          Free
          <br />
          Forever
        </p>
      </Wreath>
      <Wreath>
        <p className="text-[0.625rem] md:text-base">Sign-up</p>
        <p className="mt-1.5 text-center text-xs font-bold text-balance md:text-2xl">
          No account
          <br />
          Needed
        </p>
      </Wreath>
      <Wreath>
        <p className="text-[0.625rem] md:text-base">Connection</p>
        <p className="mt-1.5 text-center text-xs font-bold text-balance md:text-xl">
          Wi-Fi + Cloud
          <br />
          Anywhere
        </p>
      </Wreath>
    </div>
  );
}
