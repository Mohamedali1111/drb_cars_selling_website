// CallToAction displays a premium two-column car showcase with images and CTAs.
"use client";

import Image from "next/image";

const showcases = [
  {
    title: "Sed ut perspiciatis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore similique nihil rem doloremque.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    alt: "Premium sports car",
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam dolore similique nihil rem doloremque.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury sedan",
  },
];

export function CallToAction() {
  return (
    <section className="w-full bg-zinc-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {showcases.map((item, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl"
            >
              {/* Car Image */}
              <div className="relative h-[280px] overflow-hidden sm:h-[320px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-600 sm:text-lg">
                  {item.description}
                </p>
                <button className="mt-6 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
