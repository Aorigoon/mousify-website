import Image from "next/image";

const RELEASES_URL = "https://github.com/Aorigoon/mouse/releases";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-16 pb-20 text-center sm:pt-24">
      <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm text-ink/70">
        Free · No account · Works anywhere
      </span>
      <h1 className="mx-auto mt-6 max-w-2xl text-4xl leading-[1.1] font-medium tracking-tight sm:text-6xl">
        Your phone is your PC&rsquo;s touchpad.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-base text-ink/60 sm:text-lg">
        Touchpad, keyboard, and media for your Linux PC — over Wi-Fi or cloud.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <a
          href={RELEASES_URL}
          className="w-full rounded-full bg-royal px-7 py-3 text-sm font-medium text-white transition hover:bg-royal/90 sm:w-auto"
        >
          Download for Android
        </a>
        <a
          href={RELEASES_URL}
          className="w-full rounded-full border border-ink/15 bg-white px-7 py-3 text-sm font-medium text-ink transition hover:border-ink/30 sm:w-auto"
        >
          Download for Linux
        </a>
      </div>
      <div className="mx-auto mt-14 w-fit rounded-[2.75rem] border border-black/10 bg-ink p-2.5">
        <Image
          src="/app-home.png"
          alt="Mousify app — touchpad home screen"
          width={300}
          height={649}
          priority
          className="w-[280px] rounded-[2.25rem] sm:w-[300px]"
        />
      </div>
    </section>
  );
}
