import React, { useEffect, useState } from 'react'
import { usePaymentMethod } from '../store/payment'
const payment = () => {
const { selectedMethod, setselectedMethod } = usePaymentMethod()

const paymentMethod=["Card","Cash Payment"]
    // const notify = () => toast.success("Order Placed successfully");


  return (
   <div className="max-w-md  border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
    <h3 className="text-lg font-semibold mb-5 text-gray-900">Payment Method</h3>
    
    <div className="flex flex-col gap-4">
        {/* Cash on Delivery */}
       {paymentMethod.map((ele, index) => (
  <label
    key={index}
    className="flex items-center border border-gray-300 p-4 rounded-md cursor-pointer hover:border-gray-400 transition"
  >
    <input
      type="radio"
      name="payment_method"
      value={ele}
      checked={selectedMethod === ele}
      onChange={() => setselectedMethod(ele)}
      className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 mr-4"
    />
    <span className="text-gray-700">{ele}</span>
  </label>
))}
        
        {/* Online Payment */}
        {/* <label className="flex items-center border border-gray-300 p-4 rounded-md cursor-pointer hover:border-gray-400 transition">
            <input 
                type="radio" 
                name="payment_method" 
                value="online" 
                className="w-4 h-4 text-red-600 focus:ring-red-500 border-gray-300 mr-4" 
            />
            <span className="text-gray-700">Online Payment (Credit/Debit Card)</span>
        </label> */}
    </div>

    {/* Complete Payment Button */}
    {/* <button 
        type="button" 
        onClick={handlePayment}
        className="mt-6 w-full  bg-[#DA3C24] hover:bg-[#DA3C24]/40 text-white font-medium py-3 px-4 rounded cursor-pointer transition duration-200"
    >
        Complete Payment
    </button> */}
</div>
  )
}

export default payment
