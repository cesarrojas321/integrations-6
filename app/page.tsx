import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Benefits from "@/components/Benefits";
import HowItWorks from "@/components/HowItWorks";
import Catalog from "@/components/Catalog";
import Integrations from "@/components/Integrations";
import ConnectTools from "@/components/ConnectTools";
import School from "@/components/School";
import Contact from "@/components/Contact";
import Team from "@/components/Team";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <Benefits />
        <HowItWorks />
        <Catalog />
        <Integrations />
        <ConnectTools />
        <School />
        <Contact />
        <Team />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
