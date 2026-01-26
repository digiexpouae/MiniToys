"use client"

import React, { useState } from 'react';

const ProductCollection = () => {
    const [activeTab, setActiveTab] = useState('Stuffed Toys');

    const tabs = ['Stuffed Toys', 'Accessories', 'Clothes', 'Footwear'];

    const products = [
        {
            id: 1,
            name: 'Crochet Cuddly Bunny',
            price: 14.00,
            image: '🐰',
            colors: ['#FFB6C1', '#87CEEB', '#90EE90'],
            badge: null
        },
        {
            id: 2,
            name: 'Crochet Bear',
            price: 15.00,
            image: '🐨',
            colors: ['#FF6B6B', '#4ECDC4', '#45B7D1'],
            badge: null
        },
        {
            id: 3,
            name: 'Crochet Hippo',
            price: 10.00,
            originalPrice: 16.00,
            image: '🦛',
            colors: ['#FFE4B5', '#E6E6FA', '#F0E68C'],
            badge: 'Sale 5%'
        },
        {
            id: 4,
            name: 'Crochet Bunny with a Bow',
            price: 12.00,
            originalPrice: 16.00,
            image: '🐇',
            colors: ['#DDA0DD', '#F0E68C', '#98FB98'],
            badge: 'Sale 5%'
        },
        {
            id: 5,
            name: 'Crochet Mouse with a Hat',
            price: 18.00,
            image: '🐭',
            colors: ['#8B4513', '#4682B4', '#32CD32', '#FFD700'],
            badge: null
        },
        {
            id: 6,
            name: 'Crochet Unicorn',
            price: 19.00,
            image: '🦄',
            colors: ['#87CEEB', '#FFB6C1', '#FFFFE0'],
            badge: null
        },
        {
            id: 7,
            name: 'Crochet Little Llama',
            price: 16.00,
            originalPrice: 20.00,
            image: '🦙',
            colors: ['#87CEEB', '#F0E68C', '#90EE90'],
            badge: 'Sale 5%'
        },
        {
            id: 8,
            name: 'Crochet Round Elephant',
            price: 17.00,
            originalPrice: 22.00,
            image: '🐘',
            colors: ['#E6E6FA', '#DDA0DD', '#F0E68C'],
            badge: 'Sale 5%'
        }
    ];

    return (
        <div className="max-w-6xl mx-auto p-6 bg-orange-50 min-h-screen">
            <h1 className="text-center text-2xl font-bold text-orange-600 mb-6">
                Our Favourite Collections
            </h1>

            {/* Tabs */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-700 hover:bg-orange-100'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow relative"
                    >
                        {/* Sale Badge */}
                        {product.badge && (
                            <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                                {product.badge}
                            </span>
                        )}

                        {/* Product Image */}
                        <div className="flex justify-center items-center h-32 mb-4 text-6xl">
                            {product.image}
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
    );
};

export default ProductCollection;