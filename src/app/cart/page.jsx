"use client"
// import Header_two from "../Navigation/Header_two"
import Footer from "../Navigation/Footer"
import Cart from './cart'
import Herosection from "../products/Herosection"
import MobileCart from './mobilecart'
import Recommended from "../components/Home/recommeded"
import { useEffect, useState } from "react"
import api from "../utils/axiosInterceptor"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { isLoggedIn } from "../utils/auth"
const CartPage = () => {
    const router = useRouter();
    const [cart, setCart] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const fetchCart = async () => {

        try {
            const response = await api.get({ url: 'v1/cart/' });
            setCart(response.items);
            console.log("cart", response.items)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!isLoggedIn()) {

            return router.push('/login');
        }
        else {
            setLoggedIn(true);
            fetchCart();
        }
    }, [])

    return (
        <>
            {loggedIn && (
                <div>

                    {/* <Header_two /> */}

                    <div className="relative  w-full">
                        <Herosection />
                        <div className="relative rounded-2xl px-4 l max-w-6xl mx-auto -translate-y-44">
                            <Cart cartItems={cart} fetchCart={fetchCart} />
                            <MobileCart cartItems={cart} />

                        </div>
                        <Recommended />

                    </div>


                    <Footer />
                </div>

            )
            }
        </>
    )
}
export default CartPage