"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { useCartStore } from '../store/cartstore';
import { fetchCartCount, isLoggedIn } from '../utils/auth';
import api from '../utils/axiosInterceptor';
import { DirhamSymbol } from './Dirhamsymbol';
import { useRouter } from 'next/navigation';
export default function ProductDetails({ product }) {
        const router=useRouter()

    const [quantity, setQuantity] = useState(1);
    const [giftWrap, setGiftWrap] = useState(false);
    const [email, setEmail] = useState('');
    const { refreshCount } = useCartStore()

   const [formValues, setFormValues] = useState({
        slug: product.slug,
        quantity: 1,
    });

    const pairProducts = [
        {
            id: 1,
            name: 'Baby Bow Headband',
            price: 9.00,
            image: '/assets/BabyBowHeadband.png'
        },
        {
            id: 2,
            name: 'Baby Canvas Shoes',
            price: 19.00,
            oldPrice: 66.00,
            image: '/assets/Baby Canvas Shoes.png'
        },
        {
            id: 3,
            name: 'Baby Bow Headband',
            price: 9.00,
            image: '/assets/BabyBowHeadband.png'
        },
        {
            id: 4,
            name: 'Baby Canvas Shoes',
            price: 19.00,
            oldPrice: 66.00,
            image: '/assets/Baby Canvas Shoes.png'
        }
    ];

    const relatedProducts = [
        {
            id: 1,
            name: 'Crochet Cuddly Bunny',
            price: 14.00,
            colors: ['bg-pink-200', 'bg-blue-200', 'bg-yellow-100'],
            image: '/assets/Baby Canvas Shoes.png'
        },
        {
            id: 2,
            name: 'Crochet Bear',
            price: 25.00,
            colors: ['bg-gray-400', 'bg-green-500'],
            image: '/assets/BabyBowHeadband.png'
        },
        {
            id: 3,
            name: 'Crochet Hippo',
            price: 30.00,
            oldPrice: 35.00,
            save: 5,
            colors: ['bg-white', 'bg-purple-500'],
            image: '/assets/Baby Canvas Shoes.png'
        },
        {
            id: 4,
            name: 'Crochet Bunny Bow',
            price: 22.00,
            oldPrice: 33.00,
            save: 12,
            colors: ['bg-white', 'bg-blue-400', 'bg-green-400'],
            image: '/assets/BabyBowHeadband.png'
        }
    ];

   const handleQuantityChange = (value) => {
        const newValue = parseInt(value) || 1;
        setQuantity(Math.max(1, newValue));
    };

    const addToCart = async () => {
        if (!isLoggedIn()) {
            return router.push('/login');
        }
    
        try {
            const response = await api.post({
                url: 'v1/cart/new',
                data: formValues,
            })
            if (response.success) {
                await refreshCount()
            }
            console.log(response)
        } catch (error) {
            console.error('Failed to add item to cart:', error)
        }
    }
    



    return (<>
        <div className="block md:hidden min-h-screen bg-white text-gray-800 dark:text-gray-100 transition-colors  duration-300 ">
            {/* Header */}

            <header className="px-4 py-3 flex items-center justify-center sticky top-0 text-black z-50">
                <button className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>
                <span className="font-bold text-lg">Product Details</span>

            </header>

            <main className="pb-24">
                {/* Product Image */}


                <div className="px-4 mb-6">
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-lg border-white dark:border-gray-800">
                        <Image
                            src={product.image}
                            alt="Child with gifts"
                            width={500}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Product Details Section */}
                <section className="px-4">
                    <div className="bg-white  rounded-3xl p-6 shadow-sm border border-orange-100 dark:border-gray-800">
                        <h2 className="text-2xl font-bold mb-2 text-black">{product.name}</h2>
                        <div className="flex items-baseline gap-2 mb-4">
                            <span className="text-3xl font-bold text-[#EF4444]"><DirhamSymbol size={'24px'} /> {product.price}</span>
                            <span className="text-sm text-gray-400 dark:text-gray-500">Tax included.</span>
                        </div>

                        {/* Stock Info */}
                        <div className="flex items-center gap-2 mb-6 text-sm text-green-600 dark:text-green-400">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                            <span>9998 in stock</span>
                        </div>

                        {/* Sale Timer */}
                        <div className="bg-orange-50  rounded-2xl p-4 mb-6 text-center border border-orange-100 bg-[#FFFFFF]">
                            <p className="text-[#EF4444] font-bold mb-3 uppercase tracking-wider text-xs">Hurry Up! Sale Ends In</p>
                            <div className="flex justify-center text-[#DA3C24] gap-4">
                                <div className="flex flex-col ">
                                    <span className="text-xl font-bold">00</span>
                                    <span className="text-[10px] uppercase text-gray-500">Days</span>
                                </div>
                                <span className="text-xl font-bold">:</span>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">00</span>
                                    <span className="text-[10px] uppercase text-gray-500">Hours</span>
                                </div>
                                <span className="text-xl font-bold">:</span>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">00</span>
                                    <span className="text-[10px] uppercase text-gray-500">Mins</span>
                                </div>
                                <span className="text-xl font-bold">:</span>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold">00</span>
                                    <span className="text-[10px] uppercase text-gray-500">Secs</span>
                                </div>
                            </div>
                        </div>

                        {/* Gift Wrap Option */}
                        <div className="flex items-center gap-3 p-4  rounded-2xl mb-6 border border-gray-100 dark:border-gray-700">

                            <label htmlFor="giftwrap" className="text-sm font-medium">
                                <span className=' text-black '>  Add Gift Wrap Paper? </span>
                                <div className='flex items-center gap-2'>

                                    <input
                                        type="checkbox"
                                        id="giftwrap"
                                        checked={giftWrap}
                                        onChange={(e) => setGiftWrap(e.target.checked)}
                                        className="w-5 h-5 rounded text-black focus:ring-[#EF4444] border-gray-300"
                                    />
                                    <span
                                        className="text-[#EF4444]">(+ $10.00)</span>
                                </div>
                            </label>
                        </div>

                        {/* Shipping Info */}
                        <div className="space-y-3 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center gap-3 text-sm">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                                </svg>
                                <span className='text-black'>Delivery time: <strong>3-5 days</strong></span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='text-black'><strong>14 Days</strong> Return Policy</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                                </svg>
                                <span className='text-black'>Free Shipping On All Orders Above $50</span>
                            </div>



                                <div className="space-y-4">
                                    <div className="flex flex-row  w-full items-end gap-4">
                                        <div className="w-auto">
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
                                                    className=" text-center border-x-2 border-r border-black border-l  py-2  w-1/2  text-sm focus:outline-none"
                                                />
                                                <button
                                                    onClick={() => handleQuantityChange(quantity + 1)}
                                                    className="px-2 w-1/4 py-2 transition cursor-pointer hover:bg-zinc-200 "
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <button onClick={addToCart} className="  text-nowrap px-12 py-2 w-auto border rounded-full text-black font-medium  transition shadow-lg hover:bg-zinc-200 cursor-pointer">
                                            Add To Cart
                                        </button>

                                    </div>

                                    <button className="w-full text-center text-sm text-gray-600 hover:text-gray-900 underline">
                                        View sample product
                                    </button>
{/* <div className='text-zinc-800 text-sm font-medium'>Seller: <span className=' uppercase text-sm'>{sellerinfo}</span></div> */}
                                </div>
                        </div>
                    </div>
                </section>

                {/* Pair It With Section */}
                <section className="mt-8 px-4">
                    <h2 className="text-lg font-bold mb-4 text-black">Pair It With:</h2>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                        {pairProducts.map((product) => (
                            <div key={product.id} className="min-w-[280px] bg-[#FEF9EB] p-3 rounded-2xl flex items-center gap-4 border border-orange-50 dark:border-gray-700">
                                <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 ">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={80}
                                        height={80}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-sm text-black font-bold">{product.name}</h3>
                                    <p className="text-sm">
                                        <span className="text-[#EF4444] font-bold">${product.price.toFixed(2)}</span>
                                        {product.oldPrice && (
                                            <span className="line-through text-gray-400 ml-1 text-xs">${product.oldPrice.toFixed(2)}</span>
                                        )}
                                    </p>
                                    <button className="text-[10px] uppercase font-bold text-[#3B82F6] mt-1">Choose Options</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Section */}
                <section className="mt-8 px-4">
                    <div className="relative aspect-video rounded-3xl overflow-hidden ">
                        <Image
                            src="/assets/gift.png"
                            alt="Video thumbnail"
                            width={800}
                            height={450}
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-16 h-16 bg-white dark:bg-[#EF4444] rounded-full flex items-center justify-center shadow-2xl transition-transform active:scale-90">
                                <svg className="w-8 h-8 text-[#EF4444] dark:text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 px-2">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed text-center italic">
                            At Toyo, we believe childhood is a magical journey filled with endless possibilities. That's why we dedicate ourselves to crafting delightful products that spark your baby's imagination.
                        </p>
                    </div>
                </section>



                {/* Newsletter Section */}

            </main>




        </div >


    </>
    );
}