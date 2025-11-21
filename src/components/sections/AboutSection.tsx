// AboutSection shares a concise overview of the dealership story.
export function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-10 rounded-3xl border border-zinc-100 bg-white px-6 py-16 dark:border-zinc-800 dark:bg-zinc-950 md:grid-cols-2 md:items-center"
    >
      <div className="h-72 rounded-2xl bg-[url('https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center shadow-inner" />
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Why DRB
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-zinc-900 dark:text-white">
          Experience-first craftsmanship
        </h2>
        <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400">
          We collaborate with leading manufacturers to deliver personalized
          experiences, transparent ownership, and white-glove maintenance
          programs. Every vehicle passes a 200-point inspection and ships with
          lifetime software updates.
        </p>
        <button className="mt-6 rounded-full border border-zinc-200 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-900 transition hover:bg-zinc-900 hover:text-white dark:border-zinc-700 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900">
          Learn more
        </button>
      </div>
    </section>
  );
}

