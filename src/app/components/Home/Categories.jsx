"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
export default function ExploreCategories() {
const categories = [
    {
        id: 1,
        name: 'Feeding',
        image: '/assets/milk.png'
    },
    {
        id: 2,
        name: 'Toys',
        image: '/assets/toys-2.png'
    },
    {
        id: 3,
        name: 'Bath',
        image: '/assets/toys-3.png'
    },
    {
        id: 4,
        name: 'Clothes',
        image: '/assets/toys-3.png'
    },
    {
        id: 5,
        name: 'Books',
        image: '/assets/toys-3.png'
    },
    {
        id: 6,
        name: 'Outdoor',
        image: '/assets/toys-3.png'
    }
    , {
        id: 4,
        name: 'Clothes',
        image: '/assets/minion-3.png'
    },
    {
        id: 5,
        name: 'Books',
        image: '/assets/toys-3.png'
    },
    {
        id: 6,
        name: 'Outdoor',
        image: '/assets/toys-3.png'
    }
];
   
    const [currentIndex, setCurrentIndex] = useState(0);

    // const nextSlide = () => {
    //     setCurrentIndex((prev) => (prev + 1) % (categories.length - 2));
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((prev) => (prev - 1 + (categories.length - 2)) % (categories.length - 2));
    // };

    return (
<div className='relative w-full  overflow-hidden'>


            <div className=" hidden md:block container  py-12">
                <div className="rounded-lg p-8">
                    {/* Title */}
                    <div className="text-center mb-8  pb-4">
                        <h2 className="text-4xl font-bold text-[#0784FF]  uppercase tracking-tighter">Popular Categories</h2>
                    </div>

                    {/* Categories Grid */}
                     <div className="relative w-full">
                          <div className='absolute  w-1/6 z-20  top-0 bottom-0 -right-16'>
<div className='relative  h-full w-full'>
<Image src={'/assets/shape1.png'}
alt="shape1.png"
fill
/></div>

                </div>
                      <div className='absolute  w-1/6 z-20  top-0 bottom-0 -left-16'>
<div className='relative  h-full w-full'>
<Image src={'/assets/shape-2.png'}
alt="shape-2.png"
fill
/></div>

                </div>
                   
                    <div className=" flex items-center max-w-4xl  mx-auto px-4">
                        {/* Left Arrow */}
                      

                        {/* Categories Container */}
                        <div className="overflow-hidden w-full mx-12 flex flex-col gap-4 justify-center">
                            <div
                                className="grid grid-cols-3 gap-4  transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
                            >
                                {categories.slice(0,6).map((category, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0  "
                                    >
                                        <div className={`border border-zinc-800 rounded-lg p-6 bg-white cursor-pointer
        transition-transform duration-300 ease-in-out flex flex-col  items-center justify-center
        hover:shadow-xl
        ${index==1 ? "h-[320px]" : "h-[280px] "}
      `}>
                                            <div className="relative h-[75%] aspect-square mb-4 ">
                                                                                           <Link href={`/category/${category.name}`}>

                                                    <Image
                                                        src={category.image}
                                                        alt={category.name}
                                                        fill
                                                        className="  object-cover"
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
                                                                    
                                                                    
                                                                    <div className='flex items-center justify-center w-full'>
                                                                                <button className=' text-xs text-white bg-[#0875AE] hover:bg-[#0875AE]/30 cursor-pointer rounded-xl px-4 py-2'>View more</button></div>

                        </div>
     
                    </div>
                </div>
</div>
           
            </div>
              
            </div>
    );
}