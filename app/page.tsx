import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { Work } from "@/components/sections/Work";
import { Industries } from "@/components/sections/Industries";
import { BusinessDemo } from "@/components/sections/BusinessDemo";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { Cursor } from "@/components/ui/Cursor";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <TrustStrip />
        <Work />
        <Industries />
        <BusinessDemo />
        <Services />
        <Process />
        <Testimonials />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
      <Cursor />
    </>
  );
}
