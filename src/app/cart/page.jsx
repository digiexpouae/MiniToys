import Header_two from "../Navigation/Header_two"
import Footer from "../Navigation/Footer"
import Cart from './cart'
import Herosection from "../products/Herosection"
import MobileCart from './mobilecart'
import Recommended from "../components/Home/recommeded"
const CartPage = () => {
    return (
        <div>
            <Header_two />

            <div className="relative  w-full">
                <Herosection />
                <div className="relative rounded-2xl px-4 l max-w-6xl mx-auto -translate-y-44">
                    <Cart />
                    <MobileCart />

                </div>
                <Recommended />

            </div>


            <Footer />
        </div>
    )
}
export default CartPage