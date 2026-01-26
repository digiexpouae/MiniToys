"use client"
import Image from "next/image";
import { useState } from "react";
import { Heart, Plus } from "lucide-react";

const Sectionfour = () => {
    const [activeTab, setActiveTab] = useState('Stuffed Toys');

    const tabs = ['Stuffed Toys', 'Accessories', 'Clothes', 'Footwear'];

    const products = [
        {
            id: 1,
            name: 'Crochet Cuddly Bunny',
            price: 14.00,
            image: '/assets/bunny.png',
            colors: ['#FFB6C1', '#87CEEB', '#90EE90'],
            badge: null
        },
        {
            id: 2,
            name: 'Crochet Bear',
            price: 15.00,
            image: '/assets/Croche Bear.png',
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
            badge: null
        },
        {
            id: 3,
            name: 'Crochet Hippo',
            price: 10.00,
            originalPrice: 16.00,
            image: '/assets/Crochet Bunny with a Bow.png',
            colors: ['#FFE4B5', '#E6E6FA', '#F0E68C'],
            badge: 'Sale 5%'
        },
        {
            id: 4,
            name: 'Crochet Bunny with a Bow',
            price: 12.00,
            originalPrice: 16.00,
            image: '/assets/Crochet Hippo.png',
            colors: ['#DDA0DD', '#F0E68C', '#98FB98'],
            badge: 'Sale 5%'
        },
        {
            id: 5,
            name: 'Crochet Mouse with a Hat',
            price: 18.00,
            image: '/assets/Crochet Little Llama.png',
            colors: ['#8B4513', '#4682B4', '#32CD32', '#FFD700'],
            badge: null
        },
        {
            id: 6,
            name: 'Crochet Unicorn',
            price: 19.00,
            image: '/assets/Crochet Mouse with a Hat.png',
            colors: ['#87CEEB', '#FFB6C1', '#FFFFE0'],
            badge: null
        },
        {
            id: 7,
            name: 'Crochet Little Llama',
            price: 16.00,
            originalPrice: 20.00,
            image: '/assets/Crochet Round Elephant.png',
            colors: ['#87CEEB', '#F0E68C', '#90EE90'],
            badge: 'Sale 5%'
        },
        {
            id: 8,
            name: 'Crochet Round Elephant',
            price: 17.00,
            originalPrice: 22.00,
            image: '/assets/Crochet Unicorn.png',
            colors: ['#E6E6FA', '#DDA0DD', '#F0E68C'],
            badge: 'Sale 5%'
        }
    ];

    return (
        <div className=" h-auto md:min-h-screen relative w-full py-8 md:py-16  ">


            <div className=" bg-white   max-w-5xl mx-auto ">
                <h2 className=" px-6 text-center text-4xl md:text-6xl font-bold text-[#0784FF] mb-6">
                    Our Favourite Collections
                </h2>

                {/* Tabs */}
                <div className="hidden md:flex justify-center ">
                    <div className="flex justify-start items-center rounded-full border border-zinc-800  mb-8 overflow-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`px-6 py-2  text-sm text-nowrap md:text-md font-medium transition-colors ${activeTab === tab
                                    ? 'bg-[#CF092D]  border border-[#CF092D]/80 text-white'
                                    : 'bg-transparent text-gray-700 hover:bg-orange-100'
                                    }
                                     ${index === 0 ? 'rounded-full' : ''
                                    } ${index === tabs.length - 1 ? 'rounded-r-full' : ''
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Mobile Slider - Below Tabs */}
                <div className="block md:hidden mb-8 max-w-5xl mx-auto">


                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-4 snap-x snap-mandatory px-4">
                            {[...products, ...products].map((product, index) => (
                                <div
                                    key={`mobile-${product.id}-${index}`}
                                    className="flex-shrink-0 w-56 px-2"
                                >
                                    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow relative overflow-hidden">
                                        {/* Discount Badge */}
                                        {product.discount && (
                                            <span className="absolute top-2 left-2 bg-[#1FCBAA] text-white text-xs px-2 py-1 rounded font-semibold z-10">
                                                Exclusive
                                            </span>
                                        )}

                                        {/* Wishlist Heart */}
                                        <button className="absolute top-2 right-2 bg-white rounded-full p-1.5 hover:bg-gray-100 z-10 shadow-sm">
                                            <Heart size={16} className="text-gray-600" />
                                        </button>

                                        {/* Product Image */}
                                        <div className="flex justify-center items-center bg-gray-50 p-4 h-40">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={120}
                                                height={120}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>

                                        {/* Product Info */}
                                        <div className="p-3">
                                            {/* Price */}
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-lg font-bold text-gray-900">
                                                    $ {product.price.toFixed(2)}
                                                </span>
                                                {product.originalPrice && (
                                                    <>
                                                        <span className="text-sm text-gray-400 line-through">
                                                            $ {product.originalPrice.toFixed(2)}
                                                        </span>
                                                        <span className="text-xs text-[#CF092D] font-semibold ml-auto">
                                                            -{product.discount}%
                                                        </span>
                                                    </>
                                                )}
                                            </div>

                                            {/* Product Name */}
                                            <h3 className="text-sm text-gray-700 mb-3 line-clamp-2 h-10">
                                                {product.name}
                                            </h3>

                                            {/* Add to Cart Button */}
                                            <button className="w-full bg-[#CF092D] text-white rounded-full py-2 flex items-center justify-center gap-2 hover:bg-[#B00828] transition-colors">
                                                <Plus size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#FEF7E6] rounded-lg p-4 border border-zinc-800 hover:shadow-lg transition-shadow relative"
                        >
                            {/* Sale Badge */}
                            {product.badge && (
                                <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                                    {product.badge}
                                </span>
                            )}

                            {/* Product Image */}
                            <div className="flex justify-center items-center h-32 mb-4 text-6xl">
                                <Image src={product.image} alt={product.name} width={120} height={120} />
                            </div>

                            {/* Product Name */}
                            <h3 className="text-center text-sm font-medium text-gray-800 mb-3 h-10">
                                {product.name}
                            </h3>

                            {/* Color Options */}
                            <div className="flex justify-center gap-1 mb-3">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            {/* Price */}
                            <div className="text-center">
                                <span className="text-gray-800 font-semibold">
                                    ${product.price.toFixed(2)}
                                </span>
                                {product.originalPrice && (
                                    <span className="ml-2 text-gray-400 line-through text-sm">
                                        ${product.originalPrice.toFixed(2)}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Sectionfour;