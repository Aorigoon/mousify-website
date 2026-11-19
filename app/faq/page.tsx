import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "FAQ — Mousify",
  description:
    "Frequently asked questions about Mousify — connecting your phone to your PC, voice typing, speed, and data safety.",
};

/** FAQ — same wording as the in-app FAQ
 *  (app/lib/views/legal_page.dart, faqText). */
export default function FaqPage() {
  return (
    <LegalDoc
      title="Frequently Asked Questions"
      sections={[
        {
          heading: "1. How do I connect my phone to my PC?",
          body: [
            "Make sure your phone and PC are on the same Wi-Fi network, then start the Mousify server on your PC. In the app, go to Settings, then Connection, and scan the QR code from the PC screen — or pick your PC from Nearby servers.",
          ],
        },
        {
          heading: "2. My phone and PC are not on the same Wi-Fi. What can I do?",
          body: [
            "Turn on your phone's mobile hotspot and connect your PC to it. Your phone and PC are then on the same network, and Mousify works as usual. USB tethering works the same way.",
          ],
        },
        {
          heading: "3. The cursor moves too fast or too slow. How do I fix it?",
          body: [
            "Tap the three dots on the Mouse page and drag the Mouse Speed slider — or change Pointer sensitivity in Settings. A lower value is slower and more precise.",
          ],
        },
        {
          heading: "4. How does voice typing work?",
          body: [
            "Open the Composer (Typing) page and tap the microphone. Your phone's own speech recognition turns your voice into text, which is typed on your PC live. No account or internet service is needed for this.",
          ],
        },
        {
          heading: "5. Do I need an account to use Mousify?",
          body: [
            "No. The app works fully as a guest. Signing in with Google is optional and only shows your name and profile in the app.",
          ],
        },
        {
          heading: "6. Is my data sent anywhere?",
          body: [
            "No. Your phone talks directly to your own PC over your local network. Nothing is uploaded to any server, and there are no analytics, ads, or trackers.",
          ],
        },
        {
          heading: "7. Which computers does Mousify work with?",
          body: [
            "Any Linux PC with the Mousify server running on it. The server and the app must be on the same network.",
          ],
        },
      ]}
      current="faq"
    />
  );
}
