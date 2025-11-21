// ProfessionalServicesBanner displays a premium banner with car background and service messaging.
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
          className="object-cover object-center transition-transform duration-700"
          sizes="100vw"
        />
      </div>

      {/* Dark Overlay - Stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />

      {/* Content Overlay - Text positioned at bottom-left */}
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold uppercase leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="block whitespace-nowrap">WE PROVIDE PROFESSIONAL CAR</span>
              <span className="block text-orange-500">CAR SERVICES</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
