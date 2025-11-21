// Hero section introduces the dealership brand with a bold headline and CTAs.
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-black px-6 py-24 text-white"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-300">
          Premium · Electric · Performance
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Discover Driving Pleasure with DRB Signature Cars
        </h1>
        <p className="mt-6 text-lg text-zinc-300">
          Built for enthusiasts seeking comfort, technology, and timeless
          elegance.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:-translate-y-0.5">
            Explore Fleet
          </button>
          <button className="rounded-full border border-white/40 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white">
            Book Consultation
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
    </section>
  );
}

