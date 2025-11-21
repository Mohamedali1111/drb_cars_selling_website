// AboutSection displays dealership information with premium two-column layout.
"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full bg-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          {/* Left Column - Image */}
          <div className="relative h-[380px] overflow-hidden rounded-3xl shadow-2xl sm:h-[480px] md:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
              alt="Premium car on scenic road"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-7">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                About Us
              </h2>
            </div>

            <div className="space-y-5">
              <p className="text-base leading-relaxed text-zinc-800 sm:text-lg sm:leading-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolore
                similique nihil rem doloremque debitis laudantium, ea, velit placeat
                itaque at aliquam explicabo dolorem aut commodi numquam sapiente
                ducimus. Exercitationem.
              </p>

              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus
                quis laboriosam possimus similique perferendis reiciendis, accusantium
                dolore nulla id exercitationem harum neque, sapiente assumenda tempora
                ipsa ea, tenetur quo. Libero illo vero nulla obcaecati cum quo, esse,
                ratione quidem tempora accusantium vel cupiditate itaque ipsa
                blanditiis consequuntur magni odio asperiores earum labore ab. Autem,
                iure, enim, reiciendis aliquam provident.
              </p>
            </div>

            <button className="group relative mt-3 w-fit overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
