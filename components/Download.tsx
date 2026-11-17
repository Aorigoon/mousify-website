import { Monitor, Smartphone } from "lucide-react";

const RELEASES_URL = "https://github.com/Aorigoon/mouse/releases";

const downloads = [
  {
    icon: Smartphone,
    title: "Android",
    detail: "APK for your phone",
    version: "Latest release",
    size: "≈ 70 MB",
    button: "Download for Android",
    primary: true,
  },
  {
    icon: Monitor,
    title: "Linux",
    detail: "AppImage for your PC",
    version: "Latest release",
    size: "≈ 36 MB",
    button: "Download for Linux",
    primary: false,
  },
];

export default function Download() {
  return (
    <section
      id="download"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20"
    >
      <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Download Mousify.
      </h2>
      <p className="mt-3 text-center text-ink/60">
        Free forever. No account, no sign-up.
      </p>
      <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {downloads.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center rounded-3xl bg-white p-8 text-center"
          >
            <item.icon className="h-8 w-8 text-royal" strokeWidth={2} />
            <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-ink/60">{item.detail}</p>
            <p className="mt-4 text-sm text-ink/60">
              {item.version} · {item.size}
            </p>
            <a
              href={RELEASES_URL}
              className={
                item.primary
                  ? "mt-6 rounded-full bg-royal px-7 py-3 text-sm font-medium text-white transition hover:bg-royal/90"
                  : "mt-6 rounded-full border border-ink/15 bg-white px-7 py-3 text-sm font-medium text-ink transition hover:border-ink/30"
              }
            >
              {item.button}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
