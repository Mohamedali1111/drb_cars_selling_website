import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/sections/AboutSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { Hero } from "@/components/sections/Hero";
import { LatestCars } from "@/components/sections/LatestCars";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100 font-sans text-zinc-900 dark:bg-black dark:text-white">
      <Navbar />
      <main className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-32">
        <Hero />
        <LatestCars />
        <AboutSection />
        <ServicesSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
