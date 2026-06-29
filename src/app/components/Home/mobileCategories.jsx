 import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
 const mobileCategories = () => {
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
          return (
         <div className=' block md:hidden w-full relative overflow-hidden '>


            <div className="mb-8 max-w-5xl mx-auto py-4">
                <div className="text-center pt-4 w-full flex items-center justify-center   pb-4">
                    <h2 className="text-3xl font-bold text-[#0784FF] tracking-tighter">Popular Categories</h2>
                </div>

                <div className="overflow-x-auto py-4 scrollbar-hide">

                    {/* Title */}

                    <div className="flex gap-2 snap-x snap-mandatory px-4">
                        {categories.map((category, index) => (
                            <div
                                key={index}
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
                                                <Link href={`/category/${category.name}`}>

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
            </ div>
          )
        }
        
export default mobileCategories;
        
        
        
        
     