// FeaturedSection displays a premium two-column layout with car image and text content.
"use client";

import Image from "next/image";

export function FeaturedSection() {
  return (
    <section className="w-full bg-zinc-100 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-10">
          {/* Left Column - Car Image */}
          <div className="relative h-[380px] overflow-hidden rounded-xl shadow-lg sm:h-[420px] md:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
              alt="Premium luxury sports car"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-orange-500 sm:text-3xl md:text-4xl">
              Sed ut perspiciaris unde omnis
            </h2>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-zinc-800 sm:text-base md:leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolore
                similique nihil rem doloremque debitis.
              </p>

              <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:leading-7">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. exercitationem
                harum neque, sapiente assumenda tempora ipsa ea, tenetur quo. Libero illo
                vero nulla obcaecati cum quo, esse, ratione quidem tempora accusantium vel
                cupiditate itaque ipsa blanditiis consequuntur magni odio asperiores earum
                labore ab. Autem, iure, enim, reiciendis aliquam provident.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
