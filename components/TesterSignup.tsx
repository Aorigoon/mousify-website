"use client";

import { useState } from "react";
import { X } from "lucide-react";

// Email modal: trigger button + modal. Posts {email} to /api/tester
// (D1-backed). Android collects closed-testing signups; Linux starts
// the AppImage download on success; Windows starts the ZIP download.
export type SignupVariant = "android" | "linux" | "windows";

// Download routes for the variants that start a download on success.
const DOWNLOAD_PATH: Partial<Record<SignupVariant, string>> = {
  linux: "/download/linux",
  windows: "/download/windows",
};

// Success text naming the file the user is downloading.
const DOWNLOAD_FILE: Partial<Record<SignupVariant, string>> = {
  linux: "The AppImage is downloading",
  windows: "The ZIP file is downloading",
};

const COPY = {
  android: {
    heading: "Join closed testing",
    text: "Enter the same email address that's signed in to your Play Store — we'll send the closed testing link to that email.",
    submit: "Become a tester",
    submitting: "Joining…",
    successHeading: "You're on the list!",
  },
  linux: {
    heading: "Download for Linux",
    text: "Enter your email to download Mousify for Linux",
    submit: "Download",
    submitting: "Downloading…",
    successHeading: "Your download has started!",
  },
  windows: {
    heading: "Download for Windows",
    text: "Enter your email to download Mousify for Windows",
    submit: "Download",
    submitting: "Downloading…",
    successHeading: "Your download has started!",
  },
} as const;

export default function TesterSignup({
  label,
  variant = "android",
}: {
  label: string;
  variant?: SignupVariant;
}) {
  const copy = COPY[variant];
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const close = () => {
    setOpen(false);
    setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/tester", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.ok) {
        setError(data?.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
      const dl = DOWNLOAD_PATH[variant];
      if (dl) {
        // Attachment response: the download starts, the page stays.
        window.location.href = dl;
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90"
      >
        {label}
      </button>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={copy.heading}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            aria-hidden
            onClick={close}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <div className="relative w-full max-w-md rounded-2xl border bg-card p-6 shadow-3xl sm:p-8">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 cursor-pointer rounded-full p-1 text-muted-foreground transition hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </button>
            {done ? (
              <>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {copy.successHeading}
                </h3>
                {DOWNLOAD_PATH[variant] ? (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {DOWNLOAD_FILE[variant]} — check your downloads folder.
                    If it doesn&apos;t start,{" "}
                    <a href={DOWNLOAD_PATH[variant]} className="underline">
                      click here to try again
                    </a>
                    .
                  </p>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Thanks for joining. We&apos;ll send the Play Store link to{" "}
                    {email.trim()} as soon as closed testing opens.
                  </p>
                )}
              </>
            ) : (
              <>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {copy.heading}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy.text}
                </p>
                <form onSubmit={submit} noValidate className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="you@example.com"
                    aria-label="Email address"
                    aria-invalid={!!error}
                    className="h-11 w-full rounded-full border border-input bg-background px-4 text-sm outline-none focus:border-ring"
                  />
                  {error && (
                    <p role="alert" className="text-sm text-red-600">
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-3xl transition hover:bg-primary/90 disabled:opacity-50"
                  >
                    {submitting ? copy.submitting : copy.submit}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
