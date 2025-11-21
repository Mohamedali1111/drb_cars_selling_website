// Premium hero section with refined typography and elegant spacing, car positioned to avoid text overlap.
"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image - Car positioned to the right */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
          alt="Premium luxury sports car"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay - Stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content Container - Positioned on the left */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              PURCHASE YOUR
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                PERFECT
              </span>{" "}
              CAR
            </h1>
            <p className="text-lg font-medium text-white/90 sm:text-xl md:text-2xl">
              Over 1000+ New Cars Available Here
            </p>
          </div>

          {/* Description */}
          <p className="max-w-xl text-sm leading-relaxed text-gray-200 sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viteae
            pellentesque sed etiam tortor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4 sm:pt-4">
            <a href="#explore-more" className="group">
              <button className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40 sm:w-auto">
                <span className="relative z-10">Explore More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </a>
            <a href="#cars" className="group">
              <button className="w-full rounded-lg border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:w-auto">
                See Cars
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
