import { BadgeCheck, Cloud, UserX } from "lucide-react";

const stats = [
  {
    icon: BadgeCheck,
    title: "Free forever",
    text: "No trials, no premium tier.",
  },
  {
    icon: UserX,
    title: "No account needed",
    text: "Install, scan, control.",
  },
  {
    icon: Cloud,
    title: "Wi-Fi + Cloud",
    text: "Local network or from anywhere.",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20">
      <div className="grid grid-cols-1 gap-6 rounded-3xl bg-white px-8 py-8 sm:grid-cols-3 sm:divide-x sm:divide-black/5">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="flex flex-col items-center gap-2 text-center"
          >
            <stat.icon className="h-6 w-6 text-royal" strokeWidth={2} />
            <p className="text-base font-medium">{stat.title}</p>
            <p className="text-sm text-ink/60">{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
