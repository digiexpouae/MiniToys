"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const FavoritesOfSeason = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 5);

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

    const products = [
        {
            id: 1,
            name: 'Bear with a Bow',
            price: 24.00,
            originalPrice: 34.00,
            image: '/assets/teady.png',
            colors: ['#D4A574', '#8B7355', '#C19A6B', '#A0826D'],
            badge: 'Best Sale'
        },
        {
            id: 2,
            name: 'Soft Cuddly Bear',
            price: 24.00,
            originalPrice: 34.00,
            image: '/assets/shortteady.png',
            colors: ['#E8D5C4', '#D4A574', '#C19A6B', '#A0826D'],
            badge: 'Save 15%'
        },
        {
            id: 3,
            name: 'Baby Digital Watch',
            price: 39.00,
            image: '/assets/watch.png',
            colors: ['#87CEEB', '#FFB6C1', '#90EE90'],
            badge: null
        },
        {
            id: 4,
            name: 'Crochet Bear',
            price: 25.00,
            image: '/assets/crochetbear.png',
            colors: ['#A9A9A9', '#696969', '#808080', '#D3D3D3'],
            badge: null
        },
        {
            id: 5,
            name: 'Crochet Cow',
            price: 14.00,
            originalPrice: 20.00,
            image: '/assets/crochetcow.png',
            colors: ['#87CEEB', '#F5F5DC', '#D2B48C'],
            badge: 'Save 5%'
        }
    ];

    const TimeBlock = ({ value, label }) => (
        <div className="flex flex-col items-center bg-white rounded-lg px-3 py-2 min-w-[60px]">
            <span className="text-2xl font-bold text-red-600">{String(value).padStart(2, '0')}</span>
            <span className="text-xs text-gray-600 uppercase">{label}</span>
        </div>
    );

    return (
        <div className="relative w-full min-h-screen bg-[#FEF7E6] py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute top-8 left-18 w-[100px] h-[100px]">
                {/* <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                        d="M10,90 Q10,10 90,10"
                        fill="none"
                        stroke="#4F46E5"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                </svg> */}
                <Image src={'/assets/elem02.png'} alt="elem" width={250} height={250} />

            </div>

            <div className="absolute top-0 right-0 w-[250px] h-[250px]">
                <Image src={'/assets/elem01.png'} alt="elem" width={250} height={250} />
                {/* <svg viewBox="0 0 200 300" className="w-full h-full">
                    <path
                        d="M0,50 Q50,80 100,50 T200,50 Q180,150 200,250"
                        fill="none"
                        stroke="#EC4899"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                </svg> */}
            </div>

            {/* Main Content */}
            <div className="relative py-10 max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3679] mb-2">
                        Favorites of the Season
                    </h2>
                    <p className="text-black text-sm sm:text-base">
                        Explore our most beloved products now
                    </p>
                </div>

                {/* Countdown Banner */}
                <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
                    <div className="relative h-64 sm:h-80 bg-gradient-to-r from-slate-700 to-slate-900 flex items-center justify-center">
                        {/* Background Image Placeholder */}
                        <div className="absolute inset-0 bg-[url('/assets/kidos.png')] bg-cover bg-center ">
                            <div className='absolute inset-0 bg-[#1010101A]'></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 text-center px-4 ">
                            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-6">
                                Don't Miss the Final Sale!
                            </h3>

                            {/* Countdown Timer */}
                            <div className="flex justify-center gap-2 sm:gap-4">
                                <TimeBlock value={timeLeft.days} label="Days" />
                                <TimeBlock value={timeLeft.hours} label="Hours" />
                                <TimeBlock value={timeLeft.minutes} label="Minutes" />
                                <TimeBlock value={timeLeft.seconds} label="Seconds" />
                            </div>
                        </div>

                        {/* Decorative Toy Element */}
                        <div className="absolute bottom-4 right-8 text-6xl sm:text-8xl opacity-80 hidden sm:block">
                        </div>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative  rounded-2xl border border-zinc-700  p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Badge */}
                            {product.badge && (
                                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
                                    {product.badge}
                                </span>
                            )}

                            {/* Product Image */}
                            <div className="flex justify-center items-center h-40  rounded-xl">
                                <Image src={product.image} alt={product.name} width={300} height={300} />
                            </div>

                            {/* Product Name */}
                            <h4 className="text-center text-sm font-semibold text-gray-800 mb-3 h-10 flex items-center justify-center">
                                {product.name}
                            </h4>

                            {/* Color Options */}
                            <div className="flex justify-center gap-1.5 mb-4">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className="w-5 h-5 rounded-full border-2 border-gray-300 hover:scale-110 transition-transform cursor-pointer"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            {/* Price */}
                            <div className="text-center">
                                {product.originalPrice ? (
                                    <div className="space-y-1">
                                        <div className="text-red-600 font-bold text-lg">
                                            From ${product.price.toFixed(2)}
                                        </div>
                                        <div className="text-gray-400 line-through text-sm">
                                            ${product.originalPrice.toFixed(2)}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="text-gray-800 font-bold text-lg">
                                        ${product.price.toFixed(2)}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoritesOfSeason;