import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export type LegalSection = {
  /** Optional — the in-app privacy text has no headings. */
  heading?: string;
  body: string[];
  bullets?: string[];
};

type LegalDocProps = {
  title: string;
  effectiveDate?: string;
  /** Optional — the in-app FAQ has no intro line. */
  intro?: string;
  sections: LegalSection[];
  current: "privacy" | "terms" | "faq";
};

const crossLinks = [
  { label: "Privacy Policy", href: "/privacy", key: "privacy" },
  { label: "Terms of Service", href: "/terms", key: "terms" },
  { label: "FAQ", href: "/faq", key: "faq" },
] as const;

/** Shared layout for the legal pages — same content as the in-app
 *  LegalPage (app/lib/views/legal_page.dart), same wording. */
export default function LegalDoc({
  title,
  effectiveDate,
  intro,
  sections,
  current,
}: LegalDocProps) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-40">
        <h1 className="text-4xl leading-[1.1] font-medium tracking-tight sm:text-5xl">
          {title}
        </h1>
        {effectiveDate && (
          <p className="mt-4 text-base text-muted-foreground italic">
            {effectiveDate}
          </p>
        )}
        {intro && (
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            {intro}
          </p>
        )}
        {sections.map((section, index) => (
          <section key={section.heading ?? `section-${index}`}>
            {section.heading && (
              <h2 className="mt-10 mb-3 text-xl font-semibold tracking-tight md:text-2xl">
                {section.heading}
              </h2>
            )}
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="mb-4 text-base leading-7 text-muted-foreground"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && (
              <ul className="mb-4 list-disc space-y-2 pl-6 text-base leading-7 text-muted-foreground">
                {section.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
        <p className="mt-10 text-base leading-7 text-muted-foreground">
          Questions? Contact us at{" "}
          <a
            href="mailto:contact@aorigoon.com"
            className="text-foreground underline underline-offset-4"
          >
            contact@aorigoon.com
          </a>
          .
        </p>
        <nav
          aria-label="Legal pages"
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8"
        >
          {crossLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              aria-current={link.key === current ? "page" : undefined}
              className={
                link.key === current
                  ? "text-base font-medium text-foreground"
                  : "text-base text-muted-foreground hover:text-foreground"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
