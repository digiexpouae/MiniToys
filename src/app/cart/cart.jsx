"use client"
import React, { useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
export default function ShoppingCartCheckout() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        },
        {
            id: 2,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        },
        {
            id: 3,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        },
        {
            id: 4,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        },
        {
            id: 5,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        },
        {
            id: 6,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: '/assets/stroller.svg'
        }
    ]);


    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: ''
    });

    const updateQuantity = (id, change) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 9;
    const total = subtotal + shipping;

    return (<>
        <div className="md:block hidden w-full min-h-screen relative p-4 rounded-2xl mx-auto">
            <div className='absolute top-0  right-20 top-2 -bottom-2 w-full left-0 bg-black rounded-2xl   z-[10]'></div>

            <div className="absolute left-2 top-0 right-0 bottom-0 rounded-2xl bg-white z-20 overflow-auto scrollbar-hide   w-full h-full p-4">
                < div className="max-w-7xl mx-auto " >
                    {/* Header */}
                    < div className="mb-6  border-b-2  border-black/20 w-1/2 p-4" >
                        <button className="flex items-center gap-2 text-white hover:text-orange-100 transition ">
                            <ChevronLeft className="w-5 h-5" />
                            <span className="text-sm font-medium text-black">Shopping Cart/Checkout</span>
                        </button>
                    </div >

                    <div className="grid grid-cols-3 overflow-auto gap-6">
                        {/* Shopping Cart Section */}
                        <div className="col-span-2 p-6 ">
                            <div className="mb-6">
                                <h2 className="text-2xl font-medium text-black">Shopping cart</h2>
                                <p className="text-sm text-black">You have {cartItems.length} item(s) in your cart</p>
                            </div>

                            <div className="space-y-4">
                                {cartItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex flex-col sm:flex-row gap-4 p-3 shadow-lg rounded-2xl backdrop-blur-sm hover:border-gray-200 transition"
                                    >
                                        {/* Product Image */}
                                        <div className="flex-shrink-0">
                                            <Image
                                                width={50}
                                                height={50}
                                                src={item.image}
                                                alt={item.name}
                                                className=" object-cover rounded-xl"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                                            <p className="text-sm text-gray-600 mb-1">{item.color}</p>
                                            <p className="text-sm text-gray-500">{item.size}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col md:flex-row flex-1 items-center justify-between ">
                                            <div className="flex flex-row items-center ">

                                                <span className="w-8 text-center text-black font-medium">{item.quantity}</span>
                                                <div className='flex flex-col items-center'>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, 1)}
                                                        className="p-1 hover:bg-gray-100 transition rounded-r-lg"
                                                    >
                                                        <Image src="/assets/2.svg" alt="Plus" width={20} height={20} />
                                                    </button>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, -1)}
                                                        className="p-1 hover:bg-gray-100 transition rounded-l-lg"
                                                    >
                                                        <Image src="/assets/1.svg" alt="Minus" width={20} height={20} />
                                                    </button>
                                                </div>
                                            </div>
                                            <span className="font-medium text-black">${item.price * item.quantity}</span>

                                            {/* Price and Delete */}
                                            <div className="flex items-center gap-3">
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Card Details Section */}
                        <div className="bg-[#FFEFBF] rounded-3xl p-6 md:p-8 h-fit">
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-xl font-medium text-gray-900">Card Details</p>
                                <Image
                                    src="/assets/person_two.png"
                                    alt="User"
                                    className="w-10 h-10 rounded-xl object-cover"
                                    width={20}
                                    height={20}
                                />
                            </div>

                            {/* Card Type Selection */}
                            <div className="mb-6">
                                <label className="block text-sm font-medium text-gray-700 mb-3">Card type</label>
                                <div className="flex gap-3">
                                    <button className="flex-1 p-3  transition">
                                        <Image
                                            src="/assets/mastercard.svg"
                                            alt="Mastercard"
                                            className="mx-auto"
                                            width={60}
                                            height={60}
                                        />
                                    </button>
                                    <button className="flex-1 p-3  hover:shadow-md transition">
                                        <Image
                                            src="/assets/visa.svg"
                                            alt="Visa"
                                            className=" mx-auto"
                                            width={60}
                                            height={60}
                                        />
                                    </button>

                                    <button className="flex-1 p-3  rounded-xl hover:border-gray-300 transition">
                                        <Image
                                            src="/assets/Rupay.svg"
                                            alt="Amex"
                                            className="h-6 mx-auto"
                                            width={60}
                                            height={60}
                                        />
                                    </button>
                                    <button className="flex-1 text-sm text-black bg-[#FFFFFF33] font-medium  rounded-xl hover:border-gray-300 transition">
                                        See all
                                    </button>
                                </div>
                            </div>

                            {/* Card Inputs */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Name on card
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2 text-sm bg-white  text-black rounded-lg focus:border-orange-400 focus:outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="1111 2222 3333 4444"
                                        value={cardDetails.cardNumber}
                                        onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                                        className="w-full px-4 py-2 text-sm bg-white  text-black rounded-lg  focus:border-orange-400 focus:outline-none transition"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Expiration date
                                        </label>
                                        <div className="flex gap-2">
                                            <input
                                                type="date"
                                                placeholder="MM"
                                                maxLength="2"
                                                value={cardDetails.expiryMonth}
                                                onChange={(e) => setCardDetails({ ...cardDetails, expiryMonth: e.target.value })}
                                                className="w-full text-sm px-4 py-3 bg-white text-black rounded-lg  text-center"
                                            />

                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            maxLength="3"
                                            value={cardDetails.cvv}
                                            onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                                            className="w-full text-sm px-4  py-3 bg-white  rounded-lg text-black text-start"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Price Summary */}
                            <div className="space-y-2 mb-6 pb-6 border-b-2 border-gray-200">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium text-gray-900">${subtotal}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="font-medium text-gray-900">${shipping}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Total (Tax incl.)</span>
                                    <span className="font-medium text-gray-900">${total}</span>
                                </div>
                            </div>

                            {/* Total and Checkout */}
                            <div className="flex items-center justify-between cursor-pointer mb-4 bg-[#FD8121] hover:bg-[#FD8121]/60 p-4 rounded-xl">
                                <div>
                                    <div className="text-xl font-semibold text-gray-900">
                                        ${total}</div>
                                </div>
                                <button className="px-8 py-2 text-black font-bold rounded-xl ">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </div >

    </>
    );
}