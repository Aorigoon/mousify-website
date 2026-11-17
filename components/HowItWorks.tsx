const steps = [
  {
    number: "1",
    title: "Install the AppImage on your Linux PC",
    text: "Download the AppImage, make it executable, and run it.",
  },
  {
    number: "2",
    title: "Scan the QR code with the app",
    text: "Open the app on your phone and scan the code on your PC screen.",
  },
  {
    number: "3",
    title: "Control your PC",
    text: "Your phone is now your touchpad, keyboard, and media remote.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-6xl scroll-mt-20 px-5 pb-20"
    >
      <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Set up in under a minute.
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {steps.map((step) => (
          <div key={step.number} className="rounded-3xl bg-white p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-royal text-base font-medium text-white">
              {step.number}
            </span>
            <h3 className="mt-4 text-lg font-medium">{step.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/60">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
