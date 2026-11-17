import Image from "next/image";
import Nav from "@/components/Nav";
import PhoneShot from "@/components/PhoneShot";

export default function Hero() {
  return (
    <div className="relative z-[1] grid w-full place-items-center overflow-x-clip p-8">
      {/* overflow-x-clip only: the phone's shadow must fall past the hero's
          bottom edge and fade out naturally. overflow-hidden clipped it
          mid-fade, leaving a hard horizontal seam above the Showcase. */}
      <div aria-hidden className="blur-hero pointer-events-none absolute inset-0 -z-10" />
      <Nav />
      <div className="mt-24 flex flex-col items-center gap-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-2.5 py-1 font-normal">
          <Image
            src="/mousify-icon.png"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 rounded-full"
          />
          <span className="px-2 text-xs font-medium text-muted-foreground sm:text-sm">
            No account · Works anywhere
          </span>
        </span>
        <h1 className="text-center text-4xl leading-[1.1] font-medium tracking-tight sm:text-7xl">
          Your phone is your PC&rsquo;s
          <span className="block text-muted-foreground">touchpad.</span>
        </h1>
        <p className="max-w-lg text-center leading-6 tracking-tight sm:text-xl">
          Touchpad, keyboard, and media for your Linux PC — over Wi-Fi or from
          anywhere with Cloud mode.
        </p>
        <a
          href="#download"
          className="mb-10 inline-flex h-10 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90"
        >
          Get Started
        </a>
        <PhoneShot priority />
      </div>
    </div>
  );
}
