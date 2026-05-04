"use client"
import { useState } from 'react';
import Image from 'next/image';
import api from '../utils/axiosInterceptor';
import { useCartStore } from '../store/cartstore';
import { useRouter } from 'next/navigation';
import {Trash2} from 'lucide-react';
import { DirhamSymbol } from '../components/Dirhamsymbol';
export default function Mobilecart({ cartItems,fetchCart }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [cardType, setCardType] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });
        const router = useRouter()
    const { refreshCount } = useCartStore();

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };




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
    // const shipping = 9;
    const total = Math.floor(subtotal );

    return (
        <>


            <div className="md:hidden block">
                <div className=" text-slate-900 dark:text-slate-100 min-h-screen font-['Inter',sans-serif]">
                    <div className="max-w-md mx-auto bg-white  rounded-tl-2xl rounded-tr-2xl min-h-screen flex flex-col pb-6">
                        {/* Header */}
                        <header className="px-6 pt-8 pb-4">
                            <button className="flex items-center  text-slate-500 dark:text-slate-400 hover:text-[#ff7a22] transition-colors">
                                <span className="material-icons-round text-lg mr-1">arrow_back_ios</span>
                                <span className="text-sm font-medium">Shopping Continue</span>
                            </button>
                            <div className="mt-6">
                                <h1 className="text-2xl text-black font-bold">Shopping cart</h1>
                                <p className="text-slate-500 dark:text-slate-400 text-sm">
                                 
                                </p>
                            </div>
                        </header>

                        {/* Cart Item */}
                        <div className="px-6 space-y-3 mb-8 ">
                              
                            <div className="bg-white text-black px-3 py-8 relative  rounded-2xl overflow-y-scroll flex flex-col items-start gap-8 shadow-md border border-slate-100 dark:border-slate-700">
                             {cartItems.length==0 ?
                              ( <p className="text-slate-500 dark:text-slate-400 text-sm">
   You have {cartItems.length} items in your cart
                                </p>):
                         (cartItems.map((item, index) => (
                             <div className='flex max-w-5xl gap-4 relative overflow-auto '
                             key={index}>
                             <div className="w-[120px] h-[120px] relative  rounded-xl flex items-start justify-center">
                                    <Image
                                        alt="Kids Chair"
                                       width={120}
                                       height={120}
                                        src={item.image}
                                    />
                                </div>
                                <div className=" w-1/2 flex items-center">
                                    <h3 className="font-semibold  text-xs">{item.name}</h3>
                                 {/* for details */}
                                    {/* <p className="text-[10px] text-slate-400 leading-tight">
                                        {/* Megastar - Magic Lightweight Foldable Baby Stroller Pram... */}
                                    {/* </p> */} 
                                </div>
                               <div className="flex flex-row  w-1/2 items-center justify-between gap-4 ">
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
                                                    <span className=" flex gap-2 font-medium text-black"><DirhamSymbol />  {Math.floor(item.price * item.quantity)}</span>

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
                                    ) ))   
                                      }         
                            </div>
                            
                        </div>

                        {/* Card Details Section */}
                        <div className="mx-4 flex-grow">
                            <div className="bg-[#FFEFBF] text-black rounded-2xl p-6 shadow-xl ">
                                <h2 className='text-2xl font-medium'>Cart Total</h2>
                                {/* Header with Avatar */}
                                {/* <div className="flex justify-between  items-center mb-6">
                                    <h2 className="text-xl font-bold   text-black ">Card Details</h2>
                                    <Image
                                        alt="Profile Avatar"
                                        src="/assets/person_two.png"
                                        width={50}
                                        height={50}

                                    />

                                </div>

                                {/* Card Type Selection */}
                                {/* <div className="mb-6">
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
                                            <Image
                                                alt="visa"
                                                width={40}
                                                height={40}
                                                src="/assets/visa.svg"
                                            />
                                        </button>
                                        <button
                                            onClick={() => setCardType('visa')}
                                            className={`bg-white  p-2 rounded-xl flex items-center justify-center min-w-[60px] h-10 border-2 transition-colors ${cardType === 'visa'
                                                ? 'border-[#ff7a22]'
                                                : 'border-slate-200 dark:border-slate-600'
                                                }`}
                                        >
                                            <Image
                                                alt="Rupay"
                                                width={40}
                                                height={40}
                                                src="/assets/Rupay.svg"
                                            />
                                        </button>
                                        <button
                                            onClick={() => setCardType('rupay')}
                                            className={`bg-white  p-2 rounded-xl flex items-center justify-center min-w-[60px] h-10 border-2 transition-colors ${cardType === 'rupay'
                                                ? 'border-[#ff7a22]'
                                                : 'border-slate-200 dark:border-slate-600'
                                                }`}
                                        >
                                            <Image
                                                alt="mastercard"
                                                width={40}
                                                height={40}
                                                src="/assets/mastercard.svg"
                                            />
                                        </button>
                                        <button className="text-xs font-bold text-black  ml-1 whitespace-nowrap">
                                            See all
                                        </button>
                                    </div>
                                </div> */} 

                                {/* Form Fields */}
                                {/* <div className="space-y-4">
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
                                </div> */}

                                {/* Price Summary */}
                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 space-y-3">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                                        <span className="font-bold">${Math.floor(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                                        {/* <span className="font-bold">${shipping}</span> */}
                                    </div>
                                    <div className="flex justify-between items-center text-base pt-2">
                                        <span className="text-slate-600 dark:text-slate-400">Total (Tax incl.)</span>
                                        <span className="font-bold text-xl"><DirhamSymbol /> {total}</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full mt-8 bg-[#FD8121] hover:bg-orange-600 text-black font-bold py-4 rounded-2xl flex justify-between items-center px-6 transition-all active:scale-95 shadow-lg shadow-orange-500/30"
                                onClick={() => router.push('/checkout')}>
                                    <span className="text-lg"><DirhamSymbol /> {total}</span>
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