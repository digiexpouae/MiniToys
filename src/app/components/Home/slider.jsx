"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/assets/lego_games.png", alt: "Slide 1" },
  { src: "/assets/gaming.webp", alt: "Slide 2" },
  { src: "/assets/gaming.webp", alt: "Slide 3" },
   { src: "/assets/gaming.webp", alt: "Slide 4" },
];

export default function ImageSlider() {
  const sliderRef = useRef(null);
  const drag = useRef({ active: false, x: 0, start: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const scroll = (dir = "right") => {
    const el = sliderRef.current;
    if (!el) return;

    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const onPointerDown = (e) => {
    const el = sliderRef.current;
    if (!el) return;

    drag.current = {
      active: true,
      x: e.clientX,
      start: el.scrollLeft,
    };
    setIsDragging(true);
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    const el = sliderRef.current;
    if (!el || !drag.current.active) return;

    const dx = e.clientX - drag.current.x;
    el.scrollLeft = drag.current.start - dx;
  };

  const endDrag = () => {
    drag.current.active = false;
    setIsDragging(false);
  };

  return (
    <div className="relative w-full bg-white py-6">
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:scale-105"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div
        ref={sliderRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
        className={`no-scrollbar scrollbar-hide  flex gap-5 overflow-x-auto overflow-y-visible px-12 select-none touch-pan-y ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="group relative h-[190px] min-w-[320px] overflow-hidden rounded-sm bg-gray-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-w-[360px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              draggable={false}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md transition hover:scale-105"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}