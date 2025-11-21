import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { LatestCars } from "@/components/sections/LatestCars";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900">
      <Navbar />
      <Hero />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-12 pt-12 sm:gap-12 sm:px-6 sm:pb-16 sm:pt-16">
        <LatestCars />
        <AboutSection />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
