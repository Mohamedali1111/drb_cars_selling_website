// AboutSection shares a concise overview of the dealership story with premium imagery.
"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 rounded-3xl border border-zinc-100 bg-white px-6 py-16 md:grid-cols-2 md:items-center"
    >
      <div className="relative h-72 overflow-hidden rounded-2xl sm:h-96">
        <Image
          src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
          alt="Premium car on scenic road"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
          ABOUT US
        </p>
        <h2 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
          Experience-first craftsmanship
        </h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <button className="mt-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
          Read More
        </button>
      </div>
    </section>
  );
}
