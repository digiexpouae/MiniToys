import { useRouter } from "next/navigation";
import api from "../utils/axiosInterceptor";
import { toast } from "react-toastify";
import { usePaymentMethod } from "../store/payment";
import { useCartStore } from "../store/cartstore";
import { DirhamSymbol } from "./Dirhamsymbol";
export default function OrderSummary({ cart }) {
    const router = useRouter()
    const Shipping = 20
    const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const cart_item_ids = cart.map(item => item.id);
    const sellers_id=cart.map(item=>item.seller_id)
const {selectedMethod }=usePaymentMethod()
const {refreshCount }=useCartStore()
console.log("selected method",selectedMethod)

    const notify = () => toast.success("Order Placed successfully");

    const data = {
        subTotal: cartTotal,
        shippingFee: Shipping,
        totalAmount: cartTotal + Shipping,
        pay_method:selectedMethod,
        cart_item_ids,
        status: "pending",
        seller_id:sellers_id
    };

    const handleSubmit = async () => {
        try {

                if(!selectedMethod){
                    toast.error("Please enter all Fields")
                    return;}

            const response = await api.post({ url: 'v1/order/new', data: data })
            if (response.success == true) {
                console.log(response)
       
                notify();
                refreshCount()
                setTimeout(() => {
                    router.push(`/myorders`)
                    router.refresh()
                }, 1000)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }


    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-transparent sticky top-6">
            <h2 className="font-semibold mb-4">Order summary</h2>

            <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                    <span>Item subtotal</span>
                    <span><DirhamSymbol  /> {cartTotal}</span>
                </div>

                <div className="flex justify-between">
                    <span>Estimated shipping</span>
                    <span><DirhamSymbol  />  {Shipping}</span>
                </div>

                {/* <div className="flex justify-between">
                    <span>VAT (5%)</span>
                    <span>$ 21.75</span>
                </div> */}

                <div className="border-t pt-3 flex justify-between font-semibold text-base">
                    <span>Order total</span>
                    <span><DirhamSymbol  /> {cartTotal + Shipping}</span>
                </div>
            </div>

            <button onClick={handleSubmit} className="w-full mt-6 bg-[#DA3C24] hover:bg-[#DA3C24]/40 cursor-pointer text-white py-3 rounded-md font-medium hover:opacity-90 transition">
                Place Order
            </button>

            <div className="mt-4 text-xs text-gray-500">
                Flexible payment methods
                <div className="flex gap-2 mt-2">
                    <div className="px-2 py-1 bg-gray-100 rounded">Visa</div>
                    <div className="px-2 py-1 bg-gray-100 rounded">Mastercard</div>
                    <div className="px-2 py-1 bg-gray-100 rounded">Apple Pay</div>
                </div>
            </div>
        </div>
    );
}
