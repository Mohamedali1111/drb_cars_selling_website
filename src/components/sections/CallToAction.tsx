// CallToAction displays a premium two-column car showcase with images and CTAs.
"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";

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
    <section className="w-full bg-gradient-to-b from-white to-orange-50/20 py-16 sm:py-20 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {showcases.map((item, index) => (
            <ScrollAnimation key={index} delay={index * 150}>
              <article className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:shadow-xl">
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
              <div className="px-5 py-5 sm:px-6 sm:py-6">
                <h3 className="text-lg font-bold text-zinc-900 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {item.description}
                </p>
                <button className="mt-5 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 cursor-pointer">
                  Learn More
                </button>
              </div>
              </article>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
