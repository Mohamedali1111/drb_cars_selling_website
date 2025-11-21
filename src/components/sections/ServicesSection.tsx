// ProfessionalServicesBanner displays a compact premium banner with car background and service messaging.
"use client";

import Image from "next/image";

export function ProfessionalServicesBanner() {
  return (
    <section
      id="services"
      className="relative h-[400px] w-full overflow-hidden sm:h-[450px] md:h-[500px]"
    >
      {/* Background Image - Car in motion */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1920&q=80"
          alt="Premium car services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay - Stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/45" />

      {/* Content Overlay - Text positioned prominently on left side */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold uppercase leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">WE PROVIDE PROFESSIONAL</span>
              <span className="block text-orange-500">CAR SERVICES</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
