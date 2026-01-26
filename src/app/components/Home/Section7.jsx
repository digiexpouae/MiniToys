"use client"
import React, { useState, useEffect } from 'react';
import { Minus, Plus, Share2, Heart, Facebook, X } from 'lucide-react';
import Image from 'next/image';
const ProductDetailPage = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('L');
    const [selectedColor, setSelectedColor] = useState('green');
    const [selectedImage, setSelectedImage] = useState(0);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date();
            targetDate.setHours(targetDate.getHours() + 48);

            const difference = targetDate - new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft();

        return () => clearInterval(timer);
    }, []);

    const sizes = ['S', 'M', 'L', 'XL'];
    const colors = [
        { name: 'green', hex: '#6B8E23' },
        { name: 'pink', hex: '#FFB6C1' },
        { name: 'purple', hex: '#9370DB' }
    ];

    const thumbnails = [
        { id: 0, color: '#8FBC8F', image: '/assets/mini-shoes.png' },
        { id: 1, color: '#98D8C8', image: '/assets/mini-shoes.png' },
        { id: 2, color: '#87CEEB', image: '/assets/mini-shoes-2.png' },
        { id: 3, color: '#87CEEB', image: '/assets/mini-shoes-3.png' }
    ];

    const handleQuantityChange = (type) => {
        if (type === 'increase') {
            setQuantity(prev => prev + 1);
        } else if (type === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#FEF7E6]">
            {/* Top Banner */}
            <div className="bg-[#DA3C24] text-white py-3 px-4 flex items-center justify-center gap-2 overflow-hidden">
                <span className="text-2xl">🎉</span>
                <p className="text-sm sm:text-base font-semibold animate-pulse">
                    Free Shipping on All Orders above $50!
                </p>
                <span className="text-2xl">🎉</span>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="bg-white rounded-3xl shadow-2xl border border-gray-900 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 sm:p-10">

                        {/* Left Side - Product Info */}
                        <div className="space-y-6 bg-[#FEF7E6] p-4 rounded-2xl">
                            {/* Product Title */}
                            <div>
                                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                                    Cute Buckled Shoes
                                </h1>
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                        SALE
                                    </span>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-bold text-red-600">$59.00</span>
                                <span className="text-2xl text-gray-400 line-through">$69.00</span>
                            </div>

                            {/* Stock Info */}
                            <div className="flex items-center gap-2 text-sm">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-gray-700 font-medium">234847 items in stock</span>
                            </div>

                            {/* Size Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Size: <span className="text-gray-900">{selectedSize}</span>
                                </label>
                                <div className="flex gap-2">
                                    {sizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`w-12 h-12 rounded-lg border-2 font-semibold transition-all ${selectedSize === size
                                                ? 'border-purple-600 bg-purple-50 text-purple-600 scale-110'
                                                : 'border-gray-300 bg-white text-gray-700 hover:border-purple-300'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Color Selection */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    Color: <span className="text-gray-900 capitalize">{selectedColor}</span>
                                </label>
                                <div className="flex gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`w-10 h-10 rounded-full border-4 transition-all ${selectedColor === color.name
                                                ? 'border-gray-900 scale-110'
                                                : 'border-gray-300 hover:border-gray-400'
                                                }`}
                                            style={{ backgroundColor: color.hex }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Countdown Timer */}
                            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4">
                                <p className="text-sm font-semibold text-gray-700 mb-3">
                                    Hurry Up! Sale Ends In
                                </p>
                                <div className="flex gap-3">
                                    {[
                                        { value: timeLeft.days, label: 'Days' },
                                        { value: timeLeft.hours, label: 'Hours' },
                                        { value: timeLeft.minutes, label: 'Minutes' },
                                        { value: timeLeft.seconds, label: 'Seconds' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex-1 bg-white rounded-lg p-2 text-center shadow">
                                            <div className="text-xl sm:text-2xl font-bold text-red-600">
                                                {String(item.value).padStart(2, '0')}
                                            </div>
                                            <div className="text-xs text-gray-600 uppercase mt-1">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                                <span className="text-sm font-semibold text-gray-700">Share:</span>
                                <div className="flex gap-2">
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <Heart className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                    <button className="p-2 hover:bg-blue-50 rounded-full transition-colors">
                                        <Facebook className="w-5 h-5 text-blue-600" />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                        <X className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Product Images */}
                        <div className="space-y-4">
                            {/* Main Image */}
                            <div className='flex w-full gap-4 h-[420px]'>
                                <div className="bg-[#FEF7E6] relative h-2/3 w-[350px] to-orange-50 w-1/2 rounded-2xl p-8 flex items-center justify-center aspect-square border-2 border-gray-200">
                                    <Image src={'/assets/shoes.png'} alt="product" width={300} height={300} />
                                </div>

                                {/* Thumbnail Images */}
                                <div className="grid grid-cols-1 gap-2">
                                    {thumbnails.map((thumb) => (
                                        <button
                                            key={thumb.id}
                                            onClick={() => setSelectedImage(thumb.id)}
                                            className={`rounded-xl relaitve p-4 flex bg-[#FEF7E6] items-center justify-center aspect-square border-2 transition-all ${selectedImage === thumb.id
                                                ? 'border-zinc-600  shadow-lg'
                                                : 'border-gray-200 hover:border-zinc-600'
                                                }`}

                                        >
                                            <Image src={thumb.image} alt="product" width={80} height={80} />

                                            {/* <span className="text-3xl">{thumb.emoji}</span> */}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* Quantity and Add to Cart */}
                            <div className="space-y-3 ">
                                <label className="block text-sm font-semibold text-gray-700">
                                    Quantity
                                </label>
                                <div className="flex gap-3">
                                    <div className="flex items-center border border-zinc-800 rounded-full overflow-hidden">
                                        <button
                                            onClick={() => handleQuantityChange('decrease')}
                                            className="p-3 hover:bg-gray-100 transition-colors"
                                        >
                                            <Minus className="w-5 h-5 text-gray-600" />
                                        </button>
                                        <input
                                            type="text"
                                            value={quantity}
                                            readOnly
                                            className="w-16 text-center font-semibold text-gray-900 bg-transparent"
                                        />
                                        <button
                                            onClick={() => handleQuantityChange('increase')}
                                            className="p-3 hover:bg-gray-100 transition-colors"
                                        >
                                            <Plus className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                    <button className="flex-1 border border-zinc-800 bg-transparent hover:bg-gray-100 cursor-pointer text-black font-bold py-3 px-6 rounded-full transition-all transform shadow-lg">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>

                            {/* Additional Info */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-gray-500">
                                    *Free shipping on orders above $50
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;