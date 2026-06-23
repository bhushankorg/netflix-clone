"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryCarouselProps {
  title: string;
  children: React.ReactNode;
}

export default function GalleryCarousel({ title, children }: GalleryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "right" ? 280 : -280, behavior: "smooth" });
  };

  return (
    <section className="py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* Row header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg sm:text-xl font-bold tracking-tight">{title}</h2>
          <div className="flex items-center gap-1">
            <button
              onClick={() => scroll("left")}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable row */}
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
