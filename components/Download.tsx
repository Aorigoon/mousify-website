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
      className="mx-auto flex w-full max-w-6xl scroll-mt-20 flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25"
    >
      <span className="inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground/50 uppercase">
        Download
      </span>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Get Mousify,
        <div className="text-muted-foreground">free, today.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Free forever. No account, no sign-up.
      </p>
      <div className="grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {downloads.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-lg border bg-card p-8 text-center"
            >
              <div className="w-fit rounded-sm bg-secondary p-3 text-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-xl font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
              <p className="mt-4 text-sm text-muted-foreground">
                {item.version} · {item.size}
              </p>
              <a
                href={RELEASES_URL}
                className={
                  item.primary
                    ? "mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90"
                    : "mt-6 inline-flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80"
                }
              >
                {item.button}
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
