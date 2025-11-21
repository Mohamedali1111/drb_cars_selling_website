// LatestCars section showcases a sample grid of featured vehicles.
const cars = [
  {
    name: "Apex GT",
    description: "Twin-motor AWD · 520km range · 0-100 in 3.2s",
  },
  {
    name: "Lumen LX",
    description: "Luxury sedan · Air suspension · Panoramic roof",
  },
  {
    name: "Terra X",
    description: "Performance SUV · Adaptive drive modes · 7 seats",
  },
];

export function LatestCars() {
  return (
    <section
      id="cars"
      className="rounded-3xl bg-white px-6 py-16 shadow-sm dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Latest arrivals
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-900 dark:text-white">
          Crafted for modern journeys
        </h2>
        <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">
          A curated selection of performance vehicles built for urban life and
          weekend escapes.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {cars.map((car) => (
          <article
            key={car.name}
            className="rounded-2xl border border-zinc-100 bg-zinc-50 p-6 text-left transition hover:-translate-y-1 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
          >
            <div className="aspect-video rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700" />
            <h3 className="mt-5 text-xl font-semibold text-zinc-900 dark:text-white">
              {car.name}
            </h3>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {car.description}
            </p>
            <button className="mt-4 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 transition hover:text-black dark:text-white dark:decoration-zinc-700">
              View Details
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

