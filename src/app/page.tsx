import { Hero } from "@/app/components/Hero";
import { NavbarDemo } from "@/app/components/Navbar";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Contact } from "@/app/components/Contact";
import { Testimonials } from "@/app/components/Testimonials";

export default function Home() {
  return (
    <main className="md:snap-y md:!snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <NavbarDemo/>
      <Hero />
      <About/>
      <Services/>
      <Testimonials/>
      <Contact/>
    </main>
  );
}
