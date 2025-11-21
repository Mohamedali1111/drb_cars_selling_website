// AboutSection displays dealership information with premium minimal design and edge-to-edge image.
"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-orange-50/30 py-16 sm:py-20"
    >
      <div className="relative grid md:grid-cols-2 md:items-center md:gap-12">
        {/* Left Column - Image (extends to edge) */}
        <div className="relative h-[380px] overflow-hidden md:h-[480px] lg:h-[520px]">
          <Image
            src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
            alt="Premium car on scenic road"
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Right Column - Text Content */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 py-8 md:py-0">
            {/* Heading */}
            <h2 className="text-2xl font-bold uppercase leading-tight text-orange-500 sm:text-3xl md:text-4xl">
              ABOUT US
            </h2>

            {/* First Paragraph */}
            <p className="text-sm leading-relaxed text-zinc-800 sm:text-base md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              vestibulum diam in volutpat.
            </p>

            {/* Second Paragraph */}
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
              ultrices scelerisque urna sed non proin lacinia. Posuere facilisis
              ut nullam ipsum sit enim. Ut imperdiet eu sodales eros. Vitae
              elementum eget, integer dolor urna egestas id donec neque, in elit.
              Diam gravida mi blandit ultrices volutpat. Fringilla, ac tortor vel
              et pharetra scelerisque. Sit amet, consectetur adipiscing elit.
              Ornare vestibulum diam in volutpat.
            </p>

            {/* Button */}
            <button className="group relative mt-1 w-fit overflow-hidden rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 cursor-pointer">
              <span className="relative z-10">Read More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
