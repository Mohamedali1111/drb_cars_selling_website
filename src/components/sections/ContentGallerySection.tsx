// ContentGallerySection displays a premium layout with text and car image gallery.
"use client";

import Image from "next/image";
import { ScrollAnimation } from "@/components/utils/ScrollAnimation";

export function ContentGallerySection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-zinc-50/30 py-16 sm:py-20 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 md:space-y-8">
          {/* Top Row: Text Left, Image Right */}
          <div className="grid gap-6 md:grid-cols-2 md:items-center md:gap-8">
            {/* Left Column - Text Content */}
            <ScrollAnimation delay={0}>
              <div className="flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-orange-500 sm:text-3xl md:text-4xl">
                  Sed ut perspiciatis unde omnis
                </h2>

                <div className="space-y-4">
                  <p className="text-sm leading-relaxed text-zinc-800 sm:text-base md:leading-7">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt.
                  </p>

                  <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:leading-7">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                    fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                    sequi nesciunt.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right Column - Car Image 1 */}
            <ScrollAnimation delay={100}>
              <div className="relative h-[320px] overflow-hidden rounded-xl shadow-lg sm:h-[380px] md:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium luxury sedan"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </ScrollAnimation>
          </div>

          {/* Bottom Row: Two Images Side by Side */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left Image */}
            <ScrollAnimation delay={200}>
              <div className="relative h-[320px] overflow-hidden rounded-xl shadow-lg sm:h-[380px] md:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium sports car"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </ScrollAnimation>

            {/* Right Image */}
            <ScrollAnimation delay={300}>
              <div className="relative h-[320px] overflow-hidden rounded-xl shadow-lg sm:h-[380px] md:h-[420px]">
                <Image
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern hatchback"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
