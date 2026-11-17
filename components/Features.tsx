import {
  Cloud,
  Copy,
  Keyboard,
  MoveVertical,
  Play,
  Touchpad,
} from "lucide-react";

const features = [
  {
    icon: Touchpad,
    title: "Touchpad",
    text: "A smooth touchpad with a dot grid that follows your finger.",
  },
  {
    icon: Keyboard,
    title: "Keyboard",
    text: "A full keyboard with shortcuts, right on your phone.",
  },
  {
    icon: Play,
    title: "Media controls",
    text: "Play, pause, skip ±10 seconds, and volume — from your couch.",
  },
  {
    icon: Copy,
    title: "Quick tools",
    text: "Copy, paste, select all, and undo with one tap.",
  },
  {
    icon: MoveVertical,
    title: "Scroll slider",
    text: "Hold the slider to keep scrolling; release to snap back to center.",
  },
  {
    icon: Cloud,
    title: "Cloud mode",
    text: "Control your PC from anywhere with the free relay — no port forwarding.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20">
      <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Everything your PC needs, in your pocket.
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="rounded-3xl bg-white p-6">
            <feature.icon className="h-6 w-6 text-royal" strokeWidth={2} />
            <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/60">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
