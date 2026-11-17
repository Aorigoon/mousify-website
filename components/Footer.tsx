import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 text-center">
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/mousify-icon.png"
            alt="Mousify logo"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="text-base font-semibold tracking-tight">
            Mousify
          </span>
        </a>
        <p className="text-sm text-ink/60">
          Your phone is your PC&rsquo;s touchpad.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <a
            href="https://github.com/Aorigoon/mouse"
            className="text-sm text-ink/70 transition hover:text-ink"
          >
            GitHub
          </a>
          {/* Privacy policy lives in the app for now; link to its source until a /privacy page exists. */}
          <a
            href="https://github.com/Aorigoon/mouse/blob/main/app/lib/views/legal_page.dart"
            className="text-sm text-ink/70 transition hover:text-ink"
          >
            Privacy
          </a>
          <a
            href="mailto:contact@aorigoon.com"
            className="text-sm text-ink/70 transition hover:text-ink"
          >
            Contact
          </a>
        </div>
        <p className="text-sm text-ink/40">
          © 2026 Aorigoon. Mousify is free software.
        </p>
      </div>
    </footer>
  );
}
