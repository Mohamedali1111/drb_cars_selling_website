// Premium hero section matching reference with car showroom background and exact copy.
"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image - Car showroom/garage with white sports car */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1920&q=80"
          alt="Premium car showroom with luxury sports car"
          fill
          priority
          className="object-cover object-center transition-transform duration-700"
          sizes="100vw"
        />
      </div>

      {/* Dark Gradient Overlay - Stronger on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />

      {/* Content Container - Closer to edge */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-4 sm:space-y-5">
          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              PURCHASE YOUR
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                PERFECT
              </span>{" "}
              CAR
            </h1>
            <p className="text-base font-medium text-white/90 sm:text-lg md:text-xl">
              Over 1000+ New Cars Available Here
            </p>
          </div>

          {/* Description */}
          <p className="max-w-lg text-sm leading-relaxed text-gray-300 sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viteae
            pellentesque sed etiam tortor.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-4">
            <a href="#explore-more" className="group">
              <button className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-orange-500/40 sm:w-auto cursor-pointer">
                <span className="relative z-10">Explore More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </a>
            <a href="#cars" className="group">
              <button className="w-full rounded-lg border border-white/30 bg-transparent px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/10 sm:w-auto cursor-pointer">
                See Cars
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
