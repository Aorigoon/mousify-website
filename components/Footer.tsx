import { Github, Mail } from "lucide-react";
import type { ReactNode } from "react";

const LEGAL_URL =
  "https://github.com/Aorigoon/mouse/blob/main/app/lib/views/legal_page.dart";
const REPO_URL = "https://github.com/Aorigoon/mouse";
const RELEASES_URL = "https://github.com/Aorigoon/mouse/releases";

type FooterLink = { label: ReactNode; href: string; title: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: "Mousify",
    links: [
      { label: "Features", href: "/#features", title: "See our features" },
      { label: "Download", href: "/#download", title: "Download Mousify" },
      { label: "FAQ", href: "/#faq", title: "Frequently asked questions" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { label: "For Android", href: RELEASES_URL, title: "Download the Android APK" },
      { label: "For Linux", href: RELEASES_URL, title: "Download the Linux AppImage" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Privacy Policy", href: LEGAL_URL, title: "Read our Privacy Policy" },
      { label: "Contact", href: "mailto:contact@aorigoon.com", title: "Email us" },
      { label: "GitHub", href: REPO_URL, title: "View our GitHub repository" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      {
        label: (
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0" />
            <span>contact@aorigoon.com</span>
          </span>
        ),
        href: "mailto:contact@aorigoon.com",
        title: "Email us",
      },
      {
        label: (
          <span className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </span>
        ),
        href: REPO_URL,
        title: "View our GitHub repository",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative -mt-25 overflow-hidden py-12 pt-37 md:py-25 md:pt-37">
      <div aria-hidden className="blur-footer pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-8 px-6 tracking-tight md:grid-cols-4">
        {columns.map((column) => (
          <div
            key={column.title}
            className={`mb-10 text-center ${
              // The email address needs full width on mobile to fit on one line.
              column.title === "Get in touch" ? "col-span-2 md:col-span-1" : ""
            }`}
          >
            <h3 className="mb-8 text-muted-foreground">{column.title}</h3>
            <ul className="flex flex-col items-center gap-8">
              {column.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    title={link.title}
                    target={link.href.startsWith("https://") ? "_blank" : undefined}
                    rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mx-auto px-6 text-center text-sm text-muted-foreground">
        © 2026 Aorigoon. Mousify is free software.
      </p>
    </footer>
  );
}
