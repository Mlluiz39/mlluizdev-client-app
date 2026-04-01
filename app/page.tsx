import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Outcomes } from "@/components/sections/Outcomes";
import { Difference } from "@/components/sections/Difference";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { LeadCapture } from "@/components/sections/LeadCapture";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Outcomes />
        <Difference />
        <Portfolio />
        <Process />
        <Testimonials />
        <LeadCapture />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
