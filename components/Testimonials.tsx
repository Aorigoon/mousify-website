import {
  Cloud,
  Keyboard,
  MoveVertical,
  QrCode,
  Sofa,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

type Highlight = {
  icon: LucideIcon;
  label: string;
  title: string;
  content: string;
};

// Honest highlights, not testimonials — no fake names, ratings, or quotes.
const highlights: Highlight[] = [
  {
    icon: Sofa,
    label: "Media",
    title: "Control from your couch",
    content: "Play, pause, skip, and turn the volume up — without getting up.",
  },
  {
    icon: QrCode,
    label: "Setup",
    title: "Scan and you're in",
    content: "Point your phone at the QR code on your PC. No account, no sign-up, no password.",
  },
  {
    icon: WifiOff,
    label: "Offline",
    title: "Works without Wi-Fi",
    content: "No router? Your phone hotspot or USB tethering keeps Mousify connected.",
  },
  {
    icon: Cloud,
    label: "Cloud mode",
    title: "From anywhere with Cloud",
    content: "The free relay reaches your PC from anywhere — no port forwarding.",
  },
  {
    icon: Keyboard,
    label: "Typing",
    title: "A keyboard in your pocket",
    content: "Type, copy, paste, and undo with one tap — from across the room.",
  },
  {
    icon: MoveVertical,
    label: "Scrolling",
    title: "Scroll without reaching",
    content: "Hold the slider to keep scrolling; let go and it snaps back to center.",
  },
];

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon;
  return (
    <div className="flex h-auto w-xs shrink-0 flex-col gap-2 rounded-xl bg-card p-7 shadow-md md:w-[24rem] md:p-8">
      <div className="mb-1 text-lg font-semibold">{highlight.title}</div>
      <div className="mb-2 flex items-center gap-2 text-muted-foreground">
        <Icon size={16} />
        <span className="text-xs">{highlight.label}</span>
      </div>
      <div className="text-sm text-wrap md:text-base md:font-medium">{highlight.content}</div>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: Highlight[]; reverse?: boolean }) {
  return (
    <div className="marquee relative w-full overflow-hidden py-2">
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-[90deg,var(--background),transparent_25%,transparent_75%,var(--background)]"
        aria-hidden
      />
      <div className={`marquee-track flex w-max gap-4 ${reverse ? "marquee-reverse" : ""}`}>
        {[...items, ...items].map((highlight, index) => (
          <HighlightCard key={`${highlight.title}-${index}`} highlight={highlight} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-14 md:py-25">
      <span className="mb-2 inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground/50 uppercase">
        Why Mousify
      </span>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Made for real moments,
        <div className="text-muted-foreground">at home and away.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Six things Mousify does for you, every day.
      </p>
      <div className="relative w-[calc(100%+3rem)] overflow-x-hidden lg:w-full">
        <MarqueeRow items={highlights.slice(0, 3)} />
        <MarqueeRow items={highlights.slice(3)} reverse />
      </div>
    </div>
  );
}
