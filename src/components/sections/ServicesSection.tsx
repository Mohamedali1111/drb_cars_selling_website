// ServicesSection outlines core dealership services using simple cards.
const services = [
  {
    title: "Concierge Delivery",
    description: "Doorstep delivery worldwide with personalized handover.",
  },
  {
    title: "Adaptive Financing",
    description: "Flexible plans and subscription ownership models.",
  },
  {
    title: "Aftercare Studio",
    description: "Certified detailing, software updates, and performance tuning.",
  },
  {
    title: "Fleet Advisory",
    description: "Dedicated team for corporate and hospitality partners.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 px-6 py-16 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold">Beyond the purchase</h2>
        <p className="mt-3 text-base text-zinc-300">
          Signature services designed to elevate every stage of ownership.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm">
              ★
            </div>
            <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

