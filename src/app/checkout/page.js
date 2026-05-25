"use client"
import AddressForm from "../components/addressform";
import OrderSummary from "../components/orderSummary";
import UnavailableItems from "../components/unavailableItems";
import DeliveryItems from "../components/DeliveryItems";
// import Header_two from "../Navigation/Header_two";
import Footer from "../Navigation/Footer";
import { useEffect, useState } from "react";
import api from "../utils/axiosInterceptor";
import { isLoggedIn } from "../utils/auth";
import Payment from '../components/payment'
import { useRouter } from "next/navigation";
export default function CheckoutPage() {

    const [cart, setCart] = useState([]);
    const [address, setAddress] = useState([]);


    const [loggedIn, setLoggedIn] = useState(false);
    const router = useRouter();
    useEffect(() => {
        if (!isLoggedIn()) {

            return router.push('/login');
        }
        else {
            setLoggedIn(true);
            fetchCart();
        }
    }, [])
    const fetchCart = async () => {

        try {
            const response = await api.get({ url: 'v1/cart/' });
            setCart(response.items);
            console.log("cart", response.items)
        } catch (error) {
            console.log(error);
        }
    }

    const fetchAddress = async () => {
        try {
            const response = await api.get({ url: 'v1/address/get' });
            setAddress(response.response);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchCart()
        fetchAddress()
    }, [])
    return (
        <>
            {loggedIn && (
                <>

                    {/* <Header_two /> */}
                    <div className="min-h-screen p-6">

                        <div className="max-w-7xl mx-auto text-black">
                            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

                            {/* Top Error Banner */}
                            <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-md mb-6 flex justify-between">
                                <span>Some items cannot be delivered</span>
                                <button className="underline">View</button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Left Section */}
                                <div className="lg:col-span-2 space-y-6">
                                    <AddressForm cart={cart} address={address} />
                                    <Payment />
                                </div>

                                {/* Right Section */}
                                <div>
                                    <OrderSummary cart={cart} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />

                </>
            )}</>

    );
}
