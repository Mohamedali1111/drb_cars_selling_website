// LatestCars section showcases featured vehicles with carousel navigation.
"use client";

import Image from "next/image";
import { useState } from "react";

const cars = [
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxgrious Auto Mobile",
    description: "Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare vestibulum diam.",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80",
  },
];

export function LatestCars() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, cars.length - 3));
  };

  const prevCar = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const visibleCars = cars.slice(currentIndex, currentIndex + 3);

  return (
    <section
      id="cars"
      className="w-full bg-zinc-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl md:text-4xl">
              OUR LATEST CARS
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Ornare
              vestibulum diam sit adipis cing elit adipis cing elit.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={prevCar}
              disabled={currentIndex === 0}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-200 text-zinc-600 transition-all hover:bg-zinc-300 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous car"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextCar}
              disabled={currentIndex >= cars.length - 3}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white transition-all hover:bg-orange-600 hover:scale-105 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next car"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Car Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {visibleCars.map((car, index) => (
            <article
              key={currentIndex + index}
              className="group relative h-[420px] overflow-hidden rounded-xl shadow-md transition-all hover:shadow-lg sm:h-[480px]"
            >
              {/* Car Image */}
              <div className="absolute inset-0">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />

              {/* Text Content Overlay - Top Section */}
              <div className="absolute top-0 left-0 right-0 p-6 text-white">
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {car.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/90 sm:text-base">
                  {car.description}
                </p>
              </div>

              {/* Bottom Section with HOT SELLS badge */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <span className="rounded-md bg-orange-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white">
                    HOT SELLS
                  </span>
                  <div className="h-px flex-1 bg-white/40" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
