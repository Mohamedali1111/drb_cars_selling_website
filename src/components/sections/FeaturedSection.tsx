// FeaturedSection displays a premium two-column layout with car image and text content.
"use client";

import Image from "next/image";

export function FeaturedSection() {
  return (
    <section className="w-full bg-zinc-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
          {/* Left Column - Car Image */}
          <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl sm:h-[480px] md:h-[520px]">
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
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl">
              Sed ut perspiciaris unde omnis
            </h2>

            <div className="space-y-5">
              <p className="text-base leading-relaxed text-zinc-800 sm:text-lg sm:leading-8">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam dolore
                similique nihil rem doloremque debitis.
              </p>

              <p className="text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-8">
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

