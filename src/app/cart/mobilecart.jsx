"use client"
import { useState } from 'react';
import Head from 'next/head';

export default function PaymentDetails() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cardType, setCardType] = useState('mastercard');
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>


            <div className="md:hidden block">
                <div className=" text-slate-900 dark:text-slate-100 min-h-screen font-['Inter',sans-serif]">
                    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col pb-6">
                        {/* Header */}
                        <header className="px-6 pt-8 pb-4">
                            <button className="flex items-center  text-slate-500 dark:text-slate-400 hover:text-[#ff7a22] transition-colors">
                                <span className="material-icons-round text-lg mr-1">arrow_back_ios</span>
                                <span className="text-sm font-medium">Shopping Continue</span>
                            </button>
                            <div className="mt-6">
                                <h1 className="text-2xl text-black font-bold">Shopping cart</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                    You have 3 items in your cart
                                </p>
                            </div>
                        </header>

                        {/* Cart Item */}
                        <div className="px-6 space-y-3 mb-8">
                            <div className="bg-white text-black p-3 rounded-2xl flex items-center gap-4 shadow-md border border-slate-100 dark:border-slate-700">
                                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden flex items-center justify-center">
                                    <img
                                        alt="Kids Chair"
                                        className="w-12 h-12 object-contain"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtABVdewBbeXHGnxwtA8AGkGLjT9SIhXHNVtnNA8X88JU2MHhD8DDUG-nE0F2sKD3p1SUZxLkOprIhmb7tRCbsVN0ncARn-Z7oGpOl1-KxfYetNJIvxtM2pXn0xbivq-9Jwc-eVepQPKquS3wDwmu-tyvdBt4oC703jpPFNSyZOu9ELkoZlVuGeUkQgK2N_7X_ApqXEHiEnnROwMnPtREjOjbJu7Jt56_XfaRXFBBMSjy0cmarK1dol3FwPOVpw3ol4I2zKsllZw95"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold  text-sm">Kids Chair</h3>
                                    <p className="text-[10px] text-slate-400 leading-tight">
                                        Megastar - Magic Lightweight Foldable Baby Stroller Pram...
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <span className="font-bold text-sm">$881</span>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <span className="material-icons-round text-sm">delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card Details Section */}
                        <div className="mx-4 flex-grow">
                            <div className="bg-white text-black rounded-[2.5rem] p-6 shadow-xl dark:shadow-none border border-amber-100 dark:border-slate-700">
                                {/* Header with Avatar */}
                                <div className="flex justify-between  items-center mb-6">
                                    <h2 className="text-xl font-bold   text-black ">Card Details</h2>
                                    <img
                                        alt="Profile Avatar"
                                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-600 shadow-sm"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK3YMlsQBDk3r2thKtmHgkQ4iMzEbASc32jZ6lFcgXll6DQrdavsM4fdeoMjxC_tnO4YyObk8uVwUsaVVZksMY1GGYoKXKoEBOyE_wSpDziCHM4WxgLrTZL4oowobYq_eDzO07uYIjR1zRhVIEl-DK2IiU8nLbvwYbaNnztXJhyqIuFHrEnSpeSh6WQHhiLAI8jtkO2Z-4WJ6NMGi_nIu6pFwnINl8ajNDlUVh-UWjL470cOhOalkRlhNvF3M0k0Q6m375SNM7kiFP"
                                    />
                                </div>

                                {/* Card Type Selection */}
                                <div className="mb-6">
                                    <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-3">
                                        Card type
                                    </label>
                                    <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                                        <button
                                            onClick={() => setCardType('mastercard')}
                                            className={`bg-white p-2 rounded-xl flex items-center justify-center min-w-[60px] h-10 border-2 transition-colors ${cardType === 'mastercard'
                                                ? 'border-[#ff7a22]'
                                                : 'border-slate-200 dark:border-slate-600'
                                                }`}
                                        >
                                            <img
                                                alt="Mastercard"
                                                className="h-5 object-contain"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASFLrFbio3bXbZPwI4eTb_00uHlJN8XkvQ16jJoqsgyBFYo_xmadYSF-weIkXpxQqzEQK3f8xNYcLZbN0zYFqFo6-pGvhThgGty45RRWE8UVW_IFUSxB-AUxB1VC53Ac7AqiSzqB9crBsCiyO43V681egEdyDRAQCn1uKxOKXZeXSuHniY-tUvwBWohyvQlnPMr_sQ10ejigvXvtnJBXhSp011OL4QVxMP7ucV-Hu_Mb7eewYgN9tFaKDZM9cW_Cw9572eHE-j0VZD"
                                            />
                                        </button>
                                        <button
                                            onClick={() => setCardType('visa')}
                                            className={`bg-white  p-2 rounded-xl flex items-center justify-center min-w-[60px] h-10 border-2 transition-colors ${cardType === 'visa'
                                                ? 'border-[#ff7a22]'
                                                : 'border-slate-200 dark:border-slate-600'
                                                }`}
                                        >
                                            <img
                                                alt="Visa"
                                                className="h-3 object-contain"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz3WoKusEnRFNDlTIjE0Qxe4vY9aku9Yhvh7ZujCkR5NXW1jSZwSSX3rgpGGxYrrv4rWWu27sckt8Zh7CSmkiqM7CiAkpNzYk2TceenIEFfWiLjdRVUx9SQzpos1fc3u61An-k0768EIo95xx8tc72uDPV4D0y9VXcl3ESoSUAIcvNMV5sK-wzUu8UNd2zPpb59ZNYJeLx0PjOxAMDht8clEMsETSUU1iMQSXvM83T97kCY7xEzwT1uZUEahtSGKThDzc7hn8Tt4Er"
                                            />
                                        </button>
                                        <button
                                            onClick={() => setCardType('rupay')}
                                            className={`bg-white  p-2 rounded-xl flex items-center justify-center min-w-[60px] h-10 border-2 transition-colors ${cardType === 'rupay'
                                                ? 'border-[#ff7a22]'
                                                : 'border-slate-200 dark:border-slate-600'
                                                }`}
                                        >
                                            <img
                                                alt="RuPay"
                                                className="h-3 object-contain"
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrLjIVk_0oiovvoAF2fx9vUR_yXauZfcUQ8719t4osvFk8YJgGsnqlWSEFdf2PuerDl1z5_1WBUxR5I5wg9glJx9OW4SBAt6uHQTTahmQNTj787aTTvSaK0nhvC1a91y7xAlPmdHUlq0QIi254X12IsSDyyoCJcvzBfHR6nX4ZAkL5-ZlF52RcW2cS8oP21MwX4NqD8-ipzQiX00YMwp9kBctiI17hIvXY2gKauWRlJmoTbTU0Nkf_qV0Im8gXXi1QF-8oub7X10j7"
                                            />
                                        </button>
                                        <button className="text-xs font-bold text-black  ml-1 whitespace-nowrap">
                                            See all
                                        </button>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                            Name on card
                                        </label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full bg-white  border rounded-xl py-3 px-4 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#ff7a22]"
                                            placeholder="Name"
                                            type="text"
                                        />
                                    </div>
                                    <div>
                                        <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                            Card Number
                                        </label>
                                        <input
                                            name="cardNumber"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            className="w-full bg-white  border rounded-xl py-3 px-4 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#ff7a22]"
                                            placeholder="1111 2222 3333 4444"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="flex-1">
                                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                Expiration date
                                            </label>
                                            <input
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border rounded-xl py-3 px-4 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#ff7a22]"
                                                placeholder="mm/yy"
                                                type="text"
                                            />
                                        </div>
                                        <div className="w-24">
                                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                                                CVV
                                            </label>
                                            <input
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                className="w-full bg-white border rounded-xl py-3 px-4 text-sm placeholder:text-slate-300 dark:placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#ff7a22]"
                                                placeholder="123"
                                                type="password"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Price Summary */}
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                                        <span className="font-bold">$1,668</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                                        <span className="font-bold">$4</span>
                                    </div>
                                    <div className="flex justify-between items-center text-base pt-2">
                                        <span className="text-slate-600 dark:text-slate-400">Total (Tax incl.)</span>
                                        <span className="font-bold text-xl">$1,672</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full mt-8 bg-[#FD8121] hover:bg-orange-600 text-white font-bold py-4 rounded-2xl flex justify-between items-center px-6 transition-all active:scale-95 shadow-lg shadow-orange-500/30">
                                    <span className="text-lg">$1,672</span>
                                    <span className="flex items-center gap-2">
                                        Checkout
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="h-8"></div>
                    </div>

                    {/* Dark Mode Toggle */}

                </div>
            </div>
        </>
    );
}