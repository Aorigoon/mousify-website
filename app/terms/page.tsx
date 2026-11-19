import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Service — Mousify",
  description:
    "The terms of service for Mousify — your phone as a wireless trackpad and keyboard for your PC.",
};

/** Terms of Service — same wording as the in-app terms
 *  (app/lib/views/legal_page.dart, legalTermsText). */
export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Service"
      effectiveDate="Effective 10 November 2026"
      intro="Welcome to Mousify. By using the app, you agree to these terms."
      sections={[
        {
          heading: "1. What Mousify does",
          body: [
            "Mousify turns your phone into a wireless trackpad and keyboard for your own computer over your local Wi-Fi network.",
          ],
        },
        {
          heading: "2. Your responsibility",
          body: [
            "Use Mousify only with computers you own or have permission to control. You are responsible for keeping your device and your Google account safe.",
          ],
        },
        {
          heading: "3. Your account",
          body: [
            "Signing in with Google only shares your name and email with the app on this device so it can show your profile. Your account lives on your device — there is no Mousify server storing it.",
          ],
        },
        {
          heading: "4. Availability",
          body: [
            'Mousify is provided "as is", without warranties of any kind. Features may change or improve over time.',
          ],
        },
        {
          heading: "5. Changes",
          body: [
            "We may update these terms from time to time. Continued use of the app after an update means you accept the new terms.",
          ],
        },
      ]}
      current="terms"
    />
  );
}
