"use client"
import ProductPage from "./product";
import Header_two from "../Navigation/Header_two";
import Herosection from "../products/Herosection";
import Footer from '../Navigation/Footer'
import Recommended from "../components/Home/recommeded";
import Mobileproduct from "./Mobileproduct";
import { useState } from "react";
const Product = () => {
    const [quantity, setQuantity] = useState(1);
    const [giftWrap, setGiftWrap] = useState(false);
    const [email, setEmail] = useState('');

    const handleQuantityChange = (change) => {
        setQuantity(Math.max(1, quantity + change));
    };
    return (
        <>
            <div className="min-h-screen relative">
                <Header_two />
                <div className="relative  w-full">
                    <Herosection />
                    <div className="rounded-2xl max-w-5l mx-auto -translate-y-44">
                        <ProductPage />
                        <Mobileproduct />

                    </div>
                    <Recommended />


                </div>

            </div>
            <Footer />
            <div className="md:hidden block sticky bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md px-4 py-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-4 z-[55]  ">
                <div className="flex items-center text-black rounded-full px-2 h-14">
                    <button
                        onClick={() => handleQuantityChange(-1)}
                        className="w-10 h-10 flex items-center justify-center text-xl font-bold"
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-10 bg-transparent border-none text-center focus:ring-0 font-bold p-0"
                    />
                    <button
                        onClick={() => handleQuantityChange(1)}
                        className="w-10 h-10 flex items-center justify-center text-xl font-bold"
                    >
                        +
                    </button>
                </div>
                <button className="flex-1 bg-[#FF3A09] text-white h-14 rounded-full font-bold shadow-lg shadow-red-500/20 transition-transform active:scale-95 uppercase tracking-wide">
                    Add To Cart
                </button>
            </div>

        </>
    );
};

export default Product;