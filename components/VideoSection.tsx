import PhoneShot from "@/components/PhoneShot";

// Speech demo — its own section (Zain, 23:12: not inside a feature box,
// the other three boxes are screenshots and a video among them looked
// inconsistent). Zain's 8-second recording: mic tap → Listening →
// "hello nice to meet you" typed out. Big phone so the text is readable.
export default function VideoSection() {
  return (
    <div className="flex w-full flex-col items-center gap-6 px-6 py-14 md:px-10 md:py-25">
      <span className="inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground/50 uppercase">
        See it in action
      </span>
      <h2 className="text-center text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
        Just speak.
        <div className="text-muted-foreground">It types for you.</div>
      </h2>
      <p className="mb-3 max-w-lg text-center leading-6 tracking-tight sm:text-xl lg:mb-8">
        Tap the mic, say it out loud, and watch your words appear on your
        PC — no typing needed.
      </p>
      <PhoneShot
        src="/feature-keyboard.png"
        alt="Mousify composer — speech-to-text demo"
        video="/speech-demo.mp4"
        className="w-[300px] sm:w-[360px]"
      />
    </div>
  );
}
