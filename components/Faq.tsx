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
    q: "Is it free?",
    a: "Yes — free forever, with no account and no premium tier.",
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

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-5 pb-20">
      <h2 className="text-center text-3xl font-medium tracking-tight sm:text-4xl">
        Frequently asked questions.
      </h2>
      <div className="mt-10 space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div key={faq.q} className="rounded-3xl bg-white px-6 py-5">
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
              >
                <span className="text-base font-medium">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-ink/50 transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                  strokeWidth={2}
                />
              </button>
              {open && (
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
