
"use client"
import React, { useEffect, useState } from 'react'
// import Header_two from '../Navigation/Header_two'
import Footer from '../Navigation/Footer'
import Order from '../components/order'
import api from '../utils/axiosInterceptor'
const page = () => {




    return (
        <>
            {/* <Header_two /> */}
            <div className="min-h-screen p-6">

                <div className="max-w-7xl mx-auto text-black">
                    <h1 className="text-2xl font-semibold mb-4">My Orders</h1>

                    {/* Top Error Banner */}
                    <div className="bg-red-100 text-red-600 text-sm px-4 py-2 rounded-md mb-6 flex justify-between">
                        <span>Some items cannot be delivered</span>
                        <button className="underline">View</button>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Left Section */}
                        <div className="lg:col-span-2 space-y-6">
                            <Order />
                        </div>



                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default page