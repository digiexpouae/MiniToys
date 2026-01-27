import Header_two from "../Navigation/Header_two"
import Footer from "../Navigation/Footer"
import Cart from './cart'
import Herosection from "../products/Herosection"
import MobileCart from './mobilecart'
const CartPage = () => {
    return (
        <div>
            <Header_two />

            <div className="relative  w-full">
                <Herosection />
                <div className="relative rounded-2xl max-w-6xl mx-auto -translate-y-44">
                    <Cart />
                    <MobileCart />

                </div>

            </div>


            <Footer />
        </div>
    )
}
export default CartPage