import Image from "next/image";
import { Hero } from "@/components/Hero";
import { NavbarDemo } from "@/components/Navbar";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Extras } from "@/components/Extras";
export default function Home() {
  return (
    <main className="snap-y !snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <NavbarDemo/>
      <Hero />
      <About/>
      <Services/>
      <Extras/>
      <Contact/>
    </main>
  );
}
