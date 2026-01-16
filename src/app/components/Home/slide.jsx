"use client";
import { useState } from "react";
import Image from "next/image";

export default function Slider({ slides }) {
    const [index, setIndex] = useState(0);

    const nextSlide = () =>
        setIndex((prev) => (prev + 1) % slides.length);

    const prevSlide = () =>
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);

    const slide = slides[index];

    return (
        <div className="relative w-full h-full">

            {/* Background */}
            <div className="absolute md:w-1/2  w-[80%] h-24 bg-black rounded-2xl bottom-[19%]  md:bottom-[13%] left-[49%] -translate-x-1/2" />

            {/* Slider Card */}
            <div className="absolute md:w-1/2 w-[80%] h-24 bottom-[20%] md:bottom-[14%] left-1/2 -translate-x-1/2 bg-[#DA3C24] rounded-2xl">
                <div className="flex items-center h-full px-10 justify-between">

                    {/* Counter */}
                    <div className="flex-shrink-0 flex-grow-0 basis-1/6 text-center">
                        {index + 1}/{slides.length}
                    </div>

                    {/* Image */}
                    <div className="flex-shrink-0 flex-grow-0 basis-1/6 flex justify-center">
                        <Image
                            src={slide.image}
                            alt="product"
                            width={80}
                            height={40}
                        />
                    </div>

                    {/* Text */}
                    <div className="flex-shrink-0 flex-grow-0 basis-2/6">
                        <span className="block truncate">{slide.title}</span>
                        <span className="block text-[#FFD265] truncate">
                            {slide.subtitle}
                        </span>
                    </div>

                </div>
            </div>

            {/* Prev */}
            <button
                onClick={prevSlide}
                className="absolute left-0 md:left-[14%] bottom-[20%] md:bottom-[14%] cursor-pointer md:h-20 md:w-20 h-12 w-12 hover:bg-[#FFD265]/70 bg-[#FFD265] rounded-full z-50 flex items-center justify-center"
            >
                <Image src="/assets/arrow.svg" alt="prev" width={30} height={20} />
            </button>

            {/* Next */}
            <button
                onClick={nextSlide}
                className="absolute right-0 md:right-[14%] bottom-[20%] md:bottom-[14%]  md:h-20 md:w-20 h-12 w-12 cursor-pointer hover:bg-[#FFD265]/70  bg-[#FFD265] rounded-full z-50 flex items-center justify-center"
            >
                <Image
                    src="/assets/arrow.svg"
                    alt="next"
                    width={30}
                    height={20}
                    className="rotate-180"
                />
            </button>

        </div>
    );
}
