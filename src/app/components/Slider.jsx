import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function PairItWithSlider() {
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        [
            {
                id: 1,
                name: 'Baby Bow Headband',
                price: 9.00,
                image: '/assets/BabyBowHeadband.png'
            },
            {
                id: 2,
                name: 'Baby Canvas Shoes',
                price: 66.00,
                originalPrice: 59.00,
                image: '/assets/Baby Canvas Shoes.png'
            }
        ],
        [
            {
                id: 3,
                name: 'Baby Mittens Set',
                price: 12.00,
                image: '/assets/BabyBowHeadband.png'
            },
            {
                id: 4,
                name: 'Baby Socks Bundle',
                price: 15.00,
                originalPrice: 20.00,
                image: '/assets/Baby Canvas Shoes.png'
            }
        ],
        [
            {
                id: 5,
                name: 'Baby Hat',
                price: 18.00,
                image: '/assets/BabyBowHeadband.png'
            },
            {
                id: 6,
                name: 'Baby Booties',
                price: 22.00,
                image: '/assets/BabyBowHeadband.png'
            }
        ]
    ];

    const totalPages = products.length;

    const nextPage = () => {
        setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    };

    return (
        <div className="w-full p-4 md:p-6 rounded-2xl" style={{ backgroundColor: '#FEF7E6' }}>
            <div className="max-w-2xl mx-auto">
                {/* Title */}
                <h2 className="text-xl font-medium  text-gray-900 mb-6">
                    Pair It With:
                </h2>

                {/* Products Grid - Always shows 2 products */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {products[currentPage - 1].map((product) => (
                        <div
                            key={product.id}
                            className="flex gap-4 items-start"
                        >
                            {/* Product Image */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12   rounded-xl overflow-hidden border-2 border-gray-900">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={20}
                                        height={20}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold  text-sm text-gray-900 mb-1 leading-tight">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-2 mb-3">
                                    {product.originalPrice && (
                                        <span className="text-red-500 font-medium line-through text-sm">
                                            ${product.originalPrice.toFixed(2)}
                                        </span>
                                    )}
                                    <span className="text-gray-900 font-semibold text-base md:text-lg">
                                        ${product.price.toFixed(2)}
                                    </span>
                                </div>

                                <button className="text-sm md:text-base font-medium text-gray-900 underline hover:no-underline transition-all">
                                    Choose Options
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className={`p-1 transition-all ${currentPage === 1
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:text-gray-900'
                            }`}
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-1 text-sm md:text-base">
                        <span className="font-medium text-gray-900">{currentPage}</span>
                        <span className="text-gray-600">/</span>
                        <span className="font-medium text-gray-600">{totalPages}</span>
                    </div>

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className={`p-1 transition-all ${currentPage === totalPages
                            ? 'text-gray-300 cursor-not-allowed'
                            : 'text-gray-700 hover:text-gray-900'
                            }`}
                        aria-label="Next page"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}