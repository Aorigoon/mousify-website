import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy — Mousify",
  description:
    "Mousify does not collect, store, or share your personal data on any server. Read the full privacy policy.",
};

/** Privacy Policy — same wording as the in-app policy
 *  (app/lib/views/legal_page.dart, legalPrivacyText). */
export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      effectiveDate="Effective 10 November 2026"
      intro="Mousify does not collect, store, or share your personal data on any server."
      sections={[
        {
          body: [],
          bullets: [
            "Your account: when you sign in with Google, your name and email are stored only on your device, so the app can show your profile. Nothing is uploaded anywhere.",
            "Your computer: your phone connects directly to your own PC over your local Wi-Fi network. Pointer movements, clicks and keystrokes are sent only to that PC. They are never stored, logged, or transmitted elsewhere.",
            "No analytics, no ads, no third-party trackers.",
          ],
        },
        {
          body: [
            "Deleting your account removes your profile from this device. If you uninstall the app, all locally stored data goes with it.",
          ],
        },
      ]}
      current="privacy"
    />
  );
}
