// LatestCars section showcases a sample grid of featured vehicles with premium car images.
"use client";

import Image from "next/image";

const cars = [
  {
    name: "Audi R8",
    description: "Twin-motor AWD · 520km range · 0-100 in 3.2s",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "BMW M5",
    description: "Luxury sedan · Air suspension · Panoramic roof",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mercedes AMG",
    description: "Performance SUV · Adaptive drive modes · 7 seats",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  },
];

export function LatestCars() {
  return (
    <section
      id="cars"
      className="rounded-3xl bg-white px-6 py-16 shadow-sm"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Latest arrivals
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-900 sm:text-4xl">
          OUR LATEST CARS
        </h2>
        <p className="mt-3 text-base text-zinc-500">
          A curated selection of performance vehicles built for urban life and
          weekend escapes.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cars.map((car) => (
          <article
            key={car.name}
            className="group rounded-2xl border border-zinc-100 bg-zinc-50 p-6 text-left transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src={car.image}
                alt={car.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute right-2 top-2 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                HOT SELLS
              </div>
            </div>
            <h3 className="mt-5 text-xl font-semibold text-zinc-900">
              {car.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-500">{car.description}</p>
            <button className="mt-4 text-sm font-semibold text-orange-500 transition hover:text-orange-600">
              View Details →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
