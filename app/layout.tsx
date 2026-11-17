import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mousify-website.aorigoon.workers.dev"),
  title: "Mousify — Your Phone is Your PC's Touchpad",
  description:
    "Turn your Android phone into a touchpad, keyboard, and media remote for your Linux PC. Free, no account — over Wi-Fi or from anywhere with Cloud mode.",
  icons: { icon: "/mousify-icon.png" },
  openGraph: {
    title: "Mousify — Your Phone is Your PC's Touchpad",
    description:
      "Turn your Android phone into a touchpad, keyboard, and media remote for your Linux PC. Free, no account.",
    images: ["/mousify-icon.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
