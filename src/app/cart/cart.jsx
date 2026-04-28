"use client"
import React, { useEffect, useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import api from '../utils/axiosInterceptor';
import { useCartStore } from '../store/cartstore';
import { useRouter } from 'next/navigation';

export default function ShoppingCartCheckout({ cartItems, fetchCart }) {
    // const [cartItems, setCartItems] = useState([
    //     {
    //         id: 1,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     },
    //     {
    //         id: 2,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     },
    //     {
    //         id: 3,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     },
    //     {
    //         id: 4,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     },
    //     {
    //         id: 5,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     },
    //     {
    //         id: 6,
    //         name: 'Kids Chair',
    //         color: 'Ashen Slate/Cobalt Bliss',
    //         size: 'DRFOS11 (Size 6 Yonth)',
    //         price: 40,
    //         quantity: 1,
    //         image: '/assets/stroller.svg'
    //     }
    // ]);
    const router = useRouter()
    const { refreshCount } = useCartStore();

    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cvv: '',
        expiryMonth: '',
        expiryYear: ''
    });
    const [cartItemsQuantity, setcartItemsQuantity] = useState(0)



    function debounce(fn, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    const removeItem = async (id) => {
        const response = await api.delete({ url: `v1/cart/${id}` });
        if (response.success) {
            await fetchCart()
            await refreshCount()
        }
    };

    const handleQuantityChange = (id, currentQty, change) => {
        const newQty = Math.max(1, currentQty + change);

        updateCartOnServer(id, newQty);
    };

    const updateCartOnServer = debounce(async (id, qty) => {
        await api.put({
            url: `v1/cart/update/${id}`,
            data: { quantity: qty }
        });
        fetchCart();

    }, 400);

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 9;
    const total = Math.floor(subtotal + shipping);

    return (<>
        <div className="md:block hidden w-full  relative p-4   h-[calc(100vh-400px)] lg:h-auto lg:aspect-[16/9] rounded-2xl mx-auto  ">
            <div className='absolute top-0  right-20 top-2 -bottom-2 w-full left-0 bg-black rounded-2xl   z-[10]'></div>

            <div className="absolute left-2 top-0 right-0 bottom-0 rounded-2xl bg-white z-20    w-full h-full p-4">
                < div className="max-w-7xl mx-auto h-full " >
                    {/* Header */}
                    <div className='flex justify-between h-full gap-4'>
                        <div className='flex flex-col w-2/3 h-full'>
                            < div className="  border-b-2  border-black/20 w-full p-4 " >
                                <button className="flex items-center gap-2 text-black hover:text-orange-100 transition ">
                                    <ChevronLeft className="w-5 h-5" />
                                    <span className="text-sm font-medium text-black">Shopping Cart/Checkout</span>
                                </button>

                            </div >
                            <div className="overflow-auto w-full gap-6 h-[80%]  scrollbar-hide ">
                                {/* Shopping Cart Section */}
                                <div className="col-span-2 p-6 ">
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-medium text-black">Shopping cart</h2>
                                        <p className="text-sm text-black">You have {cartItems.length} item(s) in your cart</p>
                                    </div>

                                    <div className="space-y-4">
                                        {cartItems.map((item, index) => (
                                            <div
                                                key={index}
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
                                                                onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                                                                className="p-1 hover:bg-gray-100 transition rounded-r-lg"
                                                            >
                                                                <Image src="/assets/2.svg" alt="Plus" width={20} height={20} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                                                                className="p-1 hover:bg-gray-100 transition rounded-l-lg"
                                                            >
                                                                <Image src="/assets/1.svg" alt="Minus" width={20} height={20} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <span className="font-medium text-black">${Math.floor(item.price * item.quantity)}</span>

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


                            </div>
                        </div>

                        <div className="bg-[#FFEFBF] rounded-3xl p-5 h-full w-1/3 ">
                            <div className="flex items-center justify-between mb-2">
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
                            <div className="mb-2 ">
                                <label className="block text-sm font-medium text-gray-700 ">Card type</label>
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
                            <div className="space-y-4 mb-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Name on card
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-2 text-sm bg-white  text-black rounded-lg focus:border-orange-400 focus:outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
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

                                <div className="grid grid-cols-2 gap-4 pb-3 border-b-2 border-[#5F65C3]">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
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
                                        <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
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
                            <div className="space-y-2   ">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium text-gray-900">${Math.floor(subtotal)}</span>
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
                            <div className="flex items-center mt-4 justify-between cursor-pointer mb-4 bg-[#FD8121] hover:bg-[#FD8121]/60 p-4 rounded-xl" onClick={() => router.push('/checkout')} >
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