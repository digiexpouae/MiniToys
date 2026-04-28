"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function ExploreCategories({ categories }) {
    // const categories = [
    //     {
    //         id: 1,
    //         name: 'Feeding',
    //         image: '/assets/milk.png'
    //     },
    //     {
    //         id: 2,
    //         name: 'Toys',
    //         image: '/assets/toys-2.png'
    //     },
    //     {
    //         id: 3,
    //         name: 'Bath',
    //         image: '/assets/toys-3.png'
    //     },
    //     {
    //         id: 4,
    //         name: 'Clothes',
    //         image: '/assets/minion-3.png'
    //     },
    //     {
    //         id: 5,
    //         name: 'Books',
    //         image: '/assets/minion-3.png'
    //     },
    //     {
    //         id: 6,
    //         name: 'Outdoor',
    //         image: '/assets/minion-3.png'
    //     }
    // ];

    // const categories_Two = [
    //     {
    //         id: 1,
    //         name: 'Feeding',
    //         image: '/assets/Croche Bear.png'
    //     },
    //     {
    //         id: 2,
    //         name: 'Toys',
    //         image: '/assets/toys-2.png'
    //     },
    //     {
    //         id: 3,
    //         name: 'Bath',
    //         image: '/assets/toys-3.png'
    //     },
    //     {
    //         id: 4,
    //         name: 'Clothes',
    //         image: '/assets/minion-3.png'
    //     },
    //     {
    //         id: 5,
    //         name: 'Books',
    //         image: '/assets/minion-3.png'
    //     },
    //     {
    //         id: 6,
    //         name: 'Outdoor',
    //         image: '/assets/minion-3.png'
    //     }
    // ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (categories.length - 2));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (categories.length - 2)) % (categories.length - 2));
    };

    return (


        <div className='w-full relative overflow-hidden '>


            <div className="block md:hidden overflow-hidden mb-8 max-w-5xl mx-auto py-4">
                <div className="text-center pt-4 w-full flex items-center justify-center   pb-4">
                    <h2 className="text-3xl font-bold text-[#0784FF] tracking-tighter">Explore Categories</h2>
                </div>

                <div className="overflow-x-auto py-4 scrollbar-hide">

                    {/* Title */}

                    <div className="flex gap-2 snap-x snap-mandatory px-4">
                        {categories.map((category, index) => (
                            <div
                                key={`mobile-${category.id}-${index}`}
                                className="flex-shrink-0 w-44 px-2"
                            >
                                <div className="  hover:shadow-lg transition-shadow relative overflow-hidden">
                                    {/* Discount Badge
                                    {category.discount && (
                                        <span className="absolute top-2 left-2 bg-[#1FCBAA] text-white text-xs px-2 py-1 rounded font-semibold z-10">
                                            Exclusive
                                        </span>
                                    )} */}

                                    {/* Wishlist Heart */}
                                    <button className="absolute top-2 right-2  rounded-full p-1.5 hover:bg-gray-100 z-10 shadow-sm">
                                        {/* <Heart size={16} className="text-gray-600" /> */}
                                    </button>

                                    {/* Product Image */}
                                    <div className="flex flex-col items-center gap-3">
                                        {/* Image Bubble */}
                                        <div className="relative bg-[#FEF7E6]  w-36 h-36 shadow-sm border border-[#EADFC6] "

                                            style={{ borderRadius: "30% 60% 70% 30% / 45% 69% 30% 51%" }}>
                                            <div className="absolute top-4 right-0 left-0 flex items-center animate-float justify-center">
                                                <Link href="/products">

                                                    <Image
                                                        src={category.image}
                                                        alt={category.name}
                                                        width={120}
                                                        height={120}
                                                        className="object-contain scale-110"
                                                    />
                                                </Link>
                                            </div>
                                        </div>

                                        {/* Category Name */}
                                        <h3 className="text-2xl font-medium text-gray-800 text-center leading-tight px-2">
                                            {category.name}
                                        </h3>

                                        {/* Add to Cart Button */}
                                        {/* <button className="w-full bg-[#CF092D] text-white rounded-full py-2 flex items-center justify-center gap-2 hover:bg-[#B00828] transition-colors">
                                            {/* <Plus size={18} /> */}
                                        {/* </button>  */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="hidden md:block container max-w-6xl mx-auto px-4 py-12">
                <div className="rounded-lg p-8 relative">
                    {/* Title */}
                    <div className="text-center mb-8  pb-4">
                        <h2 className="text-7xl font-bold text-[#0784FF] tracking-tighter">Explore Categories</h2>
                    </div>

                    {/* Categories Grid */}
                    <div className="relative flex items-center">
                        {/* Left Arrow */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-0 z-10 border-[3px] border-[#FFD265] bg-[#FEED17] hover:bg-[#FEED17]/40 cursor-pointer text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-colors -ml-4"
                            aria-label="Previous category"
                        >
                            <Image src="/assets/arrow2.svg" alt="Previous category" className='rotate-180' width={24} height={24} />
                        </button>

                        {/* Categories Container */}
                        <div className="overflow-hidden w-full mx-12">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                            >
                                {categories.map((category, index) => (
                                    <div
                                        key={category.id}
                                        className="flex-shrink-0 w-1/3 px-4"
                                    >
                                        <div className={`border border-zinc-800 rounded-lg p-6 bg-white cursor-pointer
        transition-transform duration-300 ease-in-out
        hover:shadow-xl
        ${index % 2 !== 0 ? "h-[350px]" : "h-[330px] "}
      `}>
                                            <div className="aspect-square mb-4 flex items-center justify-center">
                                                <Link href="/products">
                                                    <Image
                                                        src={category.image}
                                                        alt={category.name}
                                                        width={200}
                                                        height={200}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </Link>
                                            </div>
                                            <h3 className="text-center text-xl font-semibold text-gray-800">
                                                {category.name}
                                            </h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={nextSlide}
                            className="absolute right-0 z-10 border-[3px] border-[#FFD265] bg-[#FEED17] hover:bg-[#FEED17]/40 cursor-pointer text-gray-800 rounded-full  w-12 h-12 flex items-center justify-center shadow-lg transition-colors -mr-4"
                            aria-label="Next category"
                        >
                            <Image src="/assets/arrow2.svg" alt="Previous category" width={24} height={24} />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}