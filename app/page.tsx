import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Mechanics } from "@/components/Mechanics";
import { Rules } from "@/components/Rules";
import { WarExperience } from "@/components/WarExperience";
import { Players } from "@/components/Players";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Mechanics />
      <Rules />
      <WarExperience />
      <Players />
      <FinalCTA />
      <Footer />
    </main>
  );
}
