import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { Hero } from "@/components/sections/Hero";
import { LatestCars } from "@/components/sections/LatestCars";
import { ProfessionalServicesBanner } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900">
      <Navbar />
      <Hero />
      <main className="flex flex-col">
        <AboutSection />
        <ProfessionalServicesBanner />
        <LatestCars />
        <CallToAction />
        <FeaturedSection />
      </main>
      <Footer />
    </div>
  );
}
