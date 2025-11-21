// CallToAction highlights a simple prompt to book a consultation.
export function CallToAction() {
  return (
    <section className="rounded-3xl border border-zinc-200 bg-white px-6 py-16 text-center dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
        Ready when you are
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-zinc-900 dark:text-white">
        Start your bespoke driving experience
      </h2>
      <p className="mt-3 text-base text-zinc-500 dark:text-zinc-400">
        Schedule a private consultation with our specialists to design the
        perfect build.
      </p>
      <button className="mt-8 rounded-full bg-zinc-900 px-10 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-zinc-900">
        Schedule a visit
      </button>
    </section>
  );
}

