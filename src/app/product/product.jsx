"use client"
import React, { useState } from 'react';
import { Heart, Share2, Facebook, Linkedin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Slider from '../components/Slider'
export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "/assets/gift-2.png",
        "/assets/gift.png"
    ];

    const handleQuantityChange = (value) => {
        const newValue = parseInt(value) || 1;
        setQuantity(Math.max(1, newValue));
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="min-h-screen  md:block hidden ">
            <div className="max-w-5xl  h-[150vh] mx-auto relative rounded-3xl  overflow-hidden">

                <div className='absolute  right-0  top-2 w-full h-[95%] left-0 bg-black rounded-2xl   z-[10]'></div>
                <div className='absolute left-2 top-0 right-0 bottom-0  rounded-2xl bg-white z-20  bg-white h-[95%] w-full'>
                    <div className="flex flex-col lg:flex-row gap-8 h-full p-6 md:p-10">
                        <div className="text-sm text-gray-600">

                        </div> {/* Left Column */}
                        <div className="space-y-6 text-black  h-[95%]">
                            <span>Home / Products /</span> <span className="text-[#DA3C24]"> Add a special touch</span>
                            <div className=' bg-[#FEF7E6] p-4 rounded-2xl'>
                                <div className=' '>
                                    <h1 className="text-3xl  font-semibold text-gray-900 mb-2">
                                        Add a special touch
                                    </h1>
                                    <div className="flex flex-col items-baseline gap-3">
                                        <span className="text-3xl font-bold text-gray-900">$10.00</span>
                                        <span className="text-sm text-black">Tax included</span>
                                    </div>
                                    <div className="flex items-center mt-2  py-1 gap-2 text-sm font-medium rounded-full">
                                        <span><Image src={'/assets/cart2.svg'} alt={'cart'} width={16} height={16} /></span><span>9998 in stock</span>
                                    </div>
                                    <div className='h-2 w-full bg-[#3ED660] my-4 rounded'></div>
                                </div>

                                {/* Countdown Timer */}
                                <div className="bg-orange-50 pt-0 rounded-xl p-4 ">
                                    <div className="text-sm font-bold text-[#2D3679] mb-2">
                                        Hurry Up! Sale Ends In
                                    </div>
                                    <div className="flex gap-2">
                                        {[
                                            { value: '00', label: 'DAYS' },
                                            { value: '00', label: 'HOURS' },
                                            { value: '00', label: 'MINUTES' },
                                            { value: '00', label: 'SECOND' }
                                        ].map((item, index) => (
                                            <div key={index} className="flex-1 bg-white rounded-lg p-2 text-center">
                                                <div className="text-2xl font-bold text-[#DA3C24]">{item.value}</div>
                                                <div className="text-xs text-gray-500">{item.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Share */}
                                <div className="flex items-center  gap-3">
                                    <span className="text-sm font-medium text-gray-700">Share:
                                    </span>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                                        <Image src={'/assets/share.svg'} alt={'share'} width={14} height={14} />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                                        <Image src={'/assets/facebook.svg'} alt={'facebook'} width={8} height={8} />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                                        <Image src={'/assets/in.svg'} alt={'in'} width={14} height={14} />
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                                        <Image src={'/assets/x.svg'} alt={'x'} width={14} height={14} />
                                    </button>
                                </div>

                                {/* Gift Options */}
                                <div className="space-y-3">
                                    <div className="flex items-start gap-3 p-4 pt-0  rounded-xl">

                                        <div className='flex flex-col gap-3'>
                                            <h2 className="font-bold text-sm text-[#E61E5B]">Add Gift Wrap Paper?</h2>
                                            <div className='flex gap-3 items-start justify-start'>
                                                <input type="checkbox" className="mt-1 w-4 h-4" />
                                                <div className="text-sm text-gray-600">Yes please <span className="text-[#DA3C24]">(+ $10.00)</span></div>
                                            </div>
                                            <p className="text-sm text-black text-start">This is a demo store. All images have been sourced from
                                                Shutterstock and Adobe stock.</p>
                                        </div>
                                    </div>



                                    <div className="flex items-center gap-2 pt-2 px-4  rounded-xl hover:border-gray-300 transition">
                                        <Image src={'/assets/delivery.svg'} alt={'delivery'} width={16} height={16} />
                                        <span className="font-semibold text-gray-900 text-sm">Delivery time: 3-5 days</span>
                                    </div>

                                    <div className="flex items-center gap-2 pt-2 px-4 rounded-xl hover:border-gray-300 transition">
                                        <Image src={'/assets/return.svg'} alt={'return'} width={16} height={16} />
                                        <span className="font-semibold text-gray-900 text-sm">14 Days Return Policy</span>
                                    </div>

                                    <div className="flex items-center gap-2 pt-2 px-4 rounded-xl hover:border-gray-300 transition">
                                        <Image src={'/assets/shipping.svg'} alt={'shipping'} width={16} height={16} />
                                        <span className="font-semibold text-gray-900 text-sm">
                                            Free Shipping on All Orders Above $50
                                        </span>
                                    </div>
                                </div>

                                {/* Accordion Sections */}
                                <div className="space-y-3">
                                    <details className="group">
                                        <summary className="flex items-center justify-between p-4 rounded-xl cursor-pointer transition">
                                            <span className="font-semibold text-[#DA3C24]">Description</span>
                                            <div className="w-6 h-6 bg-[#DA3C24] text-white rounded-full flex items-center justify-center">
                                                -
                                            </div>
                                        </summary>


                                    </details>
                                    <details className="group border-t border-t-[#DA3C24]">
                                        <summary className="flex items-center justify-between p-4  rounded-xl cursor-pointer  transition">
                                            <span className="font-semibold text-gray-900">Shipping & Returns</span>
                                            <div className="w-6 h-6  bg-[#DA3C24] text-white rounded-full flex items-center justify-center text-sm">
                                                +
                                            </div>
                                        </summary>
                                        <div className="p-4 text-sm text-gray-600">
                                            Shipping and returns information...
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6  rounded-2xl p-6 h-[95%] scrollbar-hide overflow-auto">
                            {/* Main Image with Gallery */}
                            <div className=' border p-4  py-6 pb-22 rounded-2xl border-black'>
                                <div className="relative rounded-2xl overflow-hidden md:w-[350px] bg-gray-100 aspect-16/12">
                                    <Image
                                        src={images[currentImageIndex]}
                                        alt="Product"
                                        fill
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentImageIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Quantity and Cart */}
                                <div className="space-y-4">
                                    <div className="flex md:flex-row flex-col  w-full items-end gap-4">
                                        <div className="w-1/2">
                                            <label className="block text-sm font-medium text-gray-700 mt-2 mb-2">
                                                Quantity
                                            </label>
                                            <div className="flex items-center w-full text-black w-44 h-10 border border-black rounded-full overflow-hidden">
                                                <button
                                                    onClick={() => handleQuantityChange(quantity - 1)}
                                                    className="px-2 w-1/4 py-2 hover:bg-gray-50 transition cursor-pointer hover:bg-zinc-200 "
                                                >
                                                    −
                                                </button>

                                                <input
                                                    type="number"
                                                    value={quantity}
                                                    onChange={(e) => handleQuantityChange(e.target.value)}
                                                    className=" text-center border-x-2 border-r border-black border-l  w-1/2  py-2 focus:outline-none"
                                                />
                                                <button
                                                    onClick={() => handleQuantityChange(quantity + 1)}
                                                    className="px-2 w-1/4 py-2 transition cursor-pointer hover:bg-zinc-200 "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <button className="  text-nowrap px-12 py-2 w-1/2 border rounded-full text-black font-medium  transition shadow-lg hover:bg-zinc-200 cursor-pointer">
                                            Add To Cart
                                        </button>

                                    </div>

                                    <button className="w-full text-center text-sm text-gray-600 hover:text-gray-900 underline">
                                        View sample product
                                    </button>

                                </div>
                            </div>
                            {/* What's Included */}
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">What is this?</h3>
                                <Slider />

                            </div>

                            {/* Bottom Image */}
                            <div className="rounded-2xl overflow-hidden">
                                <Image
                                    src="/assets/gift.png"
                                    width={100}
                                    height={70}
                                    alt="Gift setup"
                                    className="w-full h-64 object-cover"
                                />
                            </div>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                A faux, silk ribbon is finished in a magical, quirky floral and wildlife prints that will
                                make your gifts extra special. To give a personal finish to any box, hamper or gift giving.
                                The perfect addition to any gift box to give a luxurious, sophisticated feel.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}