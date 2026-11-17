import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CloudBand from "@/components/CloudBand";
import Download from "@/components/Download";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <CloudBand />
        <Download />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
