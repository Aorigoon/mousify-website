"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which PCs does Mousify work with?",
    a: "Linux PCs. Download the AppImage, run it, and pair your phone by scanning the QR code on your screen.",
  },
  {
    q: "Do I need Wi-Fi?",
    a: "No. Mousify works over your phone's hotspot or USB tethering too — and Cloud mode works from anywhere with an internet connection.",
  },
  {
    q: "Is my data safe?",
    a: "On your local network, traffic stays between your phone and your PC. Every connection is protected by a unique per-PC token, and nothing leaves your network unless you turn on Cloud mode.",
  },
  {
    q: "Does it work on Windows or Mac?",
    a: "Not yet — the PC server is Linux only for now.",
  },
  {
    q: "Do I need an account?",
    a: "No. There is no sign-up, no login, and no personal data collected.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div
      id="faq"
      className="mx-auto grid max-w-6xl scroll-mt-20 gap-6 px-6 py-14 md:grid-cols-2 md:gap-14 md:px-10 md:py-25"
    >
      <div className="flex w-full flex-col items-start gap-6">
        <span className="mb-2 inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground/50 uppercase">
          FAQ
        </span>
        <h2 className="text-3xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          Frequently
          <br />
          Asked <span className="text-muted-foreground">Questions</span>
        </h2>
        <p className="max-w-lg text-xs leading-6 tracking-tight sm:text-base">
          Get answers to commonly asked questions.
        </p>
        <a
          href="#download"
          className="inline-flex h-10 w-fit items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90"
        >
          Get Started
        </a>
      </div>
      <div className="grid w-full content-start gap-4">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={faq.q}
              className={`rounded-lg border px-5 py-2 transition-colors lg:px-7 ${
                open
                  ? "border-border bg-card shadow-sm"
                  : "border-transparent bg-secondary/30"
              }`}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-base lg:text-lg"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open ? "rotate-180 text-foreground" : "text-muted-foreground"
                  }`}
                  strokeWidth={2}
                />
              </button>
              {open && (
                <p className="pb-3 text-muted-foreground lg:text-base">{faq.a}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
