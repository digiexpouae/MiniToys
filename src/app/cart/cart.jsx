"use client"
import React, { useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus } from 'lucide-react';

export default function ShoppingCartCheckout() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80'
        },
        {
            id: 2,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80'
        },
        {
            id: 3,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80'
        },
        {
            id: 4,
            name: 'Kids Chair',
            color: 'Ashen Slate/Cobalt Bliss',
            size: 'DRFOS11 (Size 6 Yonth)',
            price: 40,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=200&q=80'
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

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6">
                    <button className="flex items-center gap-2 text-white hover:text-orange-100 transition">
                        <ChevronLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Shopping Cart/Checkout</span>
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Shopping Cart Section */}
                    <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-6 md:p-8">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-900">Shopping cart</h2>
                            <p className="text-sm text-gray-500">You have {cartItems.length} item(s) in your cart</p>
                        </div>

                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex flex-col sm:flex-row gap-4 p-4 border-2 border-gray-100 rounded-2xl hover:border-gray-200 transition"
                                >
                                    {/* Product Image */}
                                    <div className="flex-shrink-0">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                                        <p className="text-sm text-gray-600 mb-1">{item.color}</p>
                                        <p className="text-sm text-gray-500">{item.size}</p>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-4">
                                        <div className="flex items-center gap-2 border-2 border-gray-200 rounded-lg">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="p-2 hover:bg-gray-100 transition rounded-l-lg"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="p-2 hover:bg-gray-100 transition rounded-r-lg"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {/* Price and Delete */}
                                        <div className="flex items-center gap-3">
                                            <span className="font-bold text-gray-900">${item.price * item.quantity}</span>
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
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl shadow-2xl p-6 md:p-8 h-fit">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-gray-900">Card Details</h2>
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&q=80"
                                alt="User"
                                className="w-10 h-10 rounded-full object-cover ring-2 ring-white"
                            />
                        </div>

                        {/* Card Type Selection */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-3">Card type</label>
                            <div className="flex gap-3">
                                <button className="flex-1 p-3 bg-white border-2 border-blue-500 rounded-xl hover:shadow-md transition">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                                        alt="Visa"
                                        className="h-6 mx-auto"
                                    />
                                </button>
                                <button className="flex-1 p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                        alt="Mastercard"
                                        className="h-6 mx-auto"
                                    />
                                </button>
                                <button className="flex-1 p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 transition">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg"
                                        alt="Amex"
                                        className="h-6 mx-auto"
                                    />
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
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition"
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
                                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Expiration date
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="MM"
                                            maxLength="2"
                                            value={cardDetails.expiryMonth}
                                            onChange={(e) => setCardDetails({ ...cardDetails, expiryMonth: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition text-center"
                                        />
                                        <input
                                            type="text"
                                            placeholder="YY"
                                            maxLength="2"
                                            value={cardDetails.expiryYear}
                                            onChange={(e) => setCardDetails({ ...cardDetails, expiryYear: e.target.value })}
                                            className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition text-center"
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
                                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-400 focus:outline-none transition text-center"
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
                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <div className="text-sm text-gray-600">Total</div>
                                <div className="text-3xl font-bold text-gray-900">${total}</div>
                            </div>
                            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition shadow-lg hover:shadow-xl transform hover:scale-105">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}