import { AppWindow, Laptop, Monitor, Smartphone } from "lucide-react";
import TesterSignup from "@/components/TesterSignup";

const RELEASES_URL = "https://github.com/Aorigoon/mouse/releases";

type DownloadItem = {
  icon: typeof Smartphone;
  title: string;
  detail: string;
  note: string;
  // href set = real download link; tester set = opens the closed-testing
  // signup modal; button set without either = disabled placeholder;
  // neither = "Coming soon" card with no button.
  button?: string;
  href?: string;
  tester?: boolean;
};

const downloads: DownloadItem[] = [
  {
    icon: Smartphone,
    title: "Android",
    detail: "For your phone",
    note: "Closed testing · Link coming soon",
    button: "Get it on Google Play",
    tester: true,
  },
  {
    icon: Monitor,
    title: "Linux",
    detail: "AppImage for your PC",
    note: "Latest release · ≈ 36 MB",
    button: "Download for Linux",
    href: RELEASES_URL,
  },
  {
    icon: AppWindow,
    title: "Windows",
    detail: "For Windows PCs",
    note: "Coming soon",
  },
  {
    icon: Laptop,
    title: "macOS",
    detail: "For Mac",
    note: "Coming soon",
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
        <div className="text-muted-foreground">today.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        No account, no sign-up.
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
              <p className="mt-4 text-sm text-muted-foreground">{item.note}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-secondary px-6 text-sm font-medium text-secondary-foreground transition hover:bg-secondary/80"
                >
                  {item.button}
                </a>
              ) : item.tester ? (
                <TesterSignup label={item.button!} />
              ) : item.button ? (
                <button
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="mt-6 inline-flex h-10 cursor-not-allowed items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground opacity-50 shadow-3xl"
                >
                  {item.button}
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
