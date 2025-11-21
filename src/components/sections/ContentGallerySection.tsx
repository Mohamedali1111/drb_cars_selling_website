// ContentGallerySection displays a premium layout with text and car image gallery.
"use client";

import Image from "next/image";

export function ContentGallerySection() {
  return (
    <section className="w-full bg-zinc-100 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="space-y-8 md:space-y-10">
          {/* Top Row: Text Left, Image Right */}
          <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
            {/* Left Column - Text Content */}
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold text-orange-500 sm:text-4xl md:text-5xl">
                Sed ut perspiciatis unde omnis
              </h2>

              <div className="space-y-5">
                <p className="text-base leading-relaxed text-zinc-800 sm:text-lg sm:leading-8">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>

                <p className="text-base leading-relaxed text-zinc-600 sm:text-lg sm:leading-8">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                  sequi nesciunt.
                </p>
              </div>
            </div>

            {/* Right Column - Car Image 1 */}
            <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] md:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
                alt="Premium luxury sedan"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>

          {/* Bottom Row: Two Images Side by Side */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Image */}
            <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] md:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
                alt="Premium sports car"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Right Image */}
            <div className="relative h-[350px] overflow-hidden rounded-2xl shadow-2xl sm:h-[420px] md:h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
                alt="Modern hatchback"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

