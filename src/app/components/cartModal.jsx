'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, Check, Heart } from 'lucide-react';

interface Product {
    id: string;
    name: string;
    image: string;
    price?: number;
}

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
    productName: string;
    recommendations?: Product[];
}

export default function CartModal({
    isOpen,
    onClose,
    productName,
    recommendations = []
}: CartModalProps) {
    const [favorites, setFavorites] = useState < Set < string >> (new Set());

    if (!isOpen) return null;

    const toggleFavorite = (id: string) => {
        setFavorites(prev => {
            const updated = new Set(prev);
            updated.has(id) ? updated.delete(id) : updated.add(id);
            return updated;
        });
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-2xl w-full max-w-2xl my-8 animate-slideIn"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header Section */}
                <div className="relative p-6 pb-4 border-b">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Success Icon */}
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-scaleIn">
                            <Check className="w-8 h-8 text-white stroke-[3]" />
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center mb-2">
                        Item added to cart
                    </h2>
                    <p className="text-center text-gray-600 text-sm sm:text-base px-4">
                        {productName}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                        onClick={onClose}
                        className="w-full py-3 px-6 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-95"
                    >
                        Continue Shopping
                    </button>
                    <button
                        className="w-full py-3 px-6 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition-all active:scale-95 shadow-lg shadow-pink-600/25"
                    >
                        View Cart
                    </button>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                    <div className="p-6 pt-2 bg-gray-50 rounded-b-xl">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            You May Also Like
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recommendations.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                                >
                                    <div className="relative aspect-square bg-gray-100">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 640px) 100vw, 50vw"
                                        />
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                                            aria-label="Add to favorites"
                                        >
                                            <Heart
                                                className={`w-5 h-5 transition-all ${favorites.has(product.id)
                                                        ? 'fill-pink-600 text-pink-600'
                                                        : 'text-gray-400'
                                                    }`}
                                            />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <h4 className="font-medium text-gray-800 text-sm line-clamp-2">
                                            {product.name}
                                        </h4>
                                        {product.price && (
                                            <p className="text-pink-600 font-semibold mt-1">
                                                {parseFloat(product.price).toFixed(2)}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}