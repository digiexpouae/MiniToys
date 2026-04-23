"use client"
import React, { useEffect, useState } from 'react';
import { Package, ChevronDown, ChevronUp, MessageCircle, Truck, Info } from 'lucide-react';
import api from '../utils/axiosInterceptor'
import Image from 'next/image';
// Sample order data
const sampleOrders = [
    {
        id: '#176927512438023',
        placedOn: '30 Dec 2023 15:50:28',
        total: 1940,
        packages: [
            {
                packageNumber: 1,
                seller: "The Bhasar's Trader",
                deliveryWindow: 'Tue 02 Jan - Sun 07 Jan',
                deliveryType: 'Standard Delivery',
                currentStatus: 'shipped',
                trackingUpdates: [
                    {
                        date: '02 Jan 2024 - 15:58',
                        message: 'Your package has been handed over to PK-TCS_OLE.'
                    }
                ],
                items: [
                    {
                        image: 'https://images.unsplash.com/photo-1503602642458-232111445657?w=400',
                        name: 'Full Folding Color Coated Chair - Easy to Travel',
                        warranty: 'No Warranty',
                        price: 1940,
                        quantity: 1,
                        canCancel: true
                    }
                ]
            }
        ]
    },
    {
        id: '#176927512438024',
        placedOn: '15 Jan 2024 10:30:15',
        total: 3250,
        packages: [
            {
                packageNumber: 1,
                seller: "Electronics Hub",
                deliveryWindow: 'Mon 22 Jan - Fri 26 Jan',
                deliveryType: 'Express Delivery',
                currentStatus: 'processing',
                trackingUpdates: [
                    {
                        date: '16 Jan 2024 - 09:15',
                        message: 'Order confirmed and being prepared for shipment.'
                    }
                ],
                items: [
                    {
                        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
                        name: 'Wireless Bluetooth Headphones with Noise Cancellation',
                        warranty: '1 Year Warranty',
                        price: 3250,
                        quantity: 1,
                        canCancel: true
                    }
                ]
            }
        ]
    },
    {
        id: '#176927512438025',
        placedOn: '05 Feb 2024 14:22:40',
        total: 4580,
        packages: [
            {
                packageNumber: 1,
                seller: "Fashion Store",
                deliveryWindow: 'Thu 15 Feb - Mon 19 Feb',
                deliveryType: 'Standard Delivery',
                currentStatus: 'delivered',
                trackingUpdates: [
                    {
                        date: '18 Feb 2024 - 11:30',
                        message: 'Package delivered successfully.'
                    },
                    {
                        date: '17 Feb 2024 - 08:45',
                        message: 'Out for delivery.'
                    },
                    {
                        date: '16 Feb 2024 - 14:20',
                        message: 'Package arrived at local facility.'
                    }
                ],
                items: [
                    {
                        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
                        name: 'Premium Leather Jacket - Genuine Leather',
                        warranty: '6 Months Warranty',
                        price: 4580,
                        quantity: 1,
                        canCancel: false
                    }
                ]
            }
        ]
    }
];

const ProgressTracker = ({ currentStatus }) => {
    const stages = [
        { key: 'payment-pending', label: 'Payment Pending' },
        { key: 'processing', label: 'Processing' },
        { key: 'shipped', label: 'Shipped' },
        { key: 'delivered', label: 'Delivered' }
    ];

    const statusIndex = {
        'payment-pending': 0,
        'processing': 1,
        'shipped': 2,
        'delivered': 3
    };

    const currentIndex = statusIndex[currentStatus] || 0;

    return (
        <div className="py-6">
            <div className="flex items-center justify-between relative">
                {/* Progress Line */}
                <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-200 -z-10">
                    <div
                        className="h-full bg-green-500 transition-all duration-500"
                        style={{ width: `${(currentIndex / (stages.length - 1)) * 100}%` }}
                    />
                </div>

                {/* Stage Markers */}
                {stages.map((stage, index) => {
                    const isCompleted = index <= currentIndex;
                    const isCurrent = index === currentIndex;

                    return (
                        <div key={stage.key} className="flex flex-col items-center flex-1">
                            <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'
                                    }`}
                            >
                                {isCompleted && (
                                    <div className="w-3 h-3 bg-white rounded-full" />
                                )}
                            </div>
                            <span className={`text-xs mt-2 text-center ${isCurrent ? 'text-gray-900 font-medium' : 'text-gray-500'
                                }`}>
                                {stage.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// const OrderCard = ({ order }) => {
//     const [expandedPackages, setExpandedPackages] = useState({});
//     const [showAllUpdates, setShowAllUpdates] = useState({});

//     const togglePackage = (packageIndex) => {
//         setExpandedPackages(prev => ({
//             ...prev,
//             [packageIndex]: !prev[packageIndex]
//         }));
//     };

//     const toggleUpdates = (packageIndex) => {
//         setShowAllUpdates(prev => ({
//             ...prev,
//             [packageIndex]: !prev[packageIndex]
//         }));
//     };

//     return (
//         <div className="bg-white border border-gray-200 shadow-sm">
//             {/* Order Header */}
//             <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                     <div>
//                         <h3 className="text-lg font-medium text-gray-900">Order {order.id}</h3>
//                         <p className="text-sm text-gray-500 mt-1">Placed on {order.placedOn}</p>
//                     </div>
//                     <div className="text-right">
//                         <p className="text-sm text-gray-500">Total:</p>
//                         {/* <p className="text-xl font-semibold text-gray-900">Rs. {order.total.toLocaleString()}</p> */}
//                     </div>
//                 </div>
//             </div>

//             {/* Packages */}
//             {order.pacages.map((pkg, pkgIndex) => (
//                 <div key={pkgIndex} className="border-b border-gray-200 last:border-b-0">
//                     {/* Package Header */}
//                     <div className="px-6 py-4 bg-white">
//                         <div className="flex items-start justify-between mb-3">
//                             <div className="flex-1">
//                                 <div className="flex items-center gap-2 mb-2">
//                                     <Package size={18} className="text-gray-600" />
//                                     <span className="font-medium text-gray-900">Package {pkg.packageNumber}</span>
//                                 </div>
//                                 <div className="text-sm text-gray-600">
//                                     Sold by <span className="text-blue-600">{pkg.seller}</span>
//                                 </div>
//                             </div>
//                             <button
//                                 onClick={() => togglePackage(pkgIndex)}
//                                 className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
//                             >
//                                 <MessageCircle size={16} />
//                                 Chat with Seller
//                             </button>
//                         </div>

//                         <div className="flex items-center justify-between text-sm mb-4">
//                             <div className="flex items-center gap-2 text-green-600">
//                                 <span>Get by {pkg.deliveryWindow}</span>
//                             </div>
//                             <div className="flex items-center gap-2 text-gray-600">
//                                 <Truck size={16} />
//                                 <span>{pkg.deliveryType}</span>
//                             </div>
//                         </div>

//                         {/* Progress Tracker */}
//                         <ProgressTracker currentStatus={pkg.currentStatus} />

//                         {/* Latest Tracking Update */}
//                         <div className="bg-gray-50 p-4 mt-4">
//                             <div className="flex justify-between items-start">
//                                 <div>
//                                     <p className="text-xs text-gray-500 mb-1">{pkg.trackingUpdates[0].date}</p>
//                                     <p className="text-sm text-gray-700">{pkg.trackingUpdates[0].message}</p>
//                                 </div>
//                             </div>
//                             {pkg.trackingUpdates.length > 1 && (
//                                 <button
//                                     onClick={() => toggleUpdates(pkgIndex)}
//                                     className="text-blue-600 text-sm mt-2 hover:text-blue-700"
//                                 >
//                                     {showAllUpdates[pkgIndex] ? 'HIDE' : 'VIEW MORE'}
//                                 </button>
//                             )}
//                         </div>

//                         {/* All Tracking Updates */}
//                         {showAllUpdates[pkgIndex] && pkg.trackingUpdates.length > 1 && (
//                             <div className="bg-gray-50 p-4 mt-2 space-y-3">
//                                 {pkg.trackingUpdates.slice(1).map((update, idx) => (
//                                     <div key={idx} className="border-t border-gray-200 pt-3 first:border-t-0 first:pt-0">
//                                         <p className="text-xs text-gray-500 mb-1">{update.date}</p>
//                                         <p className="text-sm text-gray-700">{update.message}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         )}

//                         {/* Package Items */}
//                         <div className="mt-4 space-y-4">
//                             {pkg.items.map((item, itemIndex) => (
//                                 <div key={itemIndex} className="flex gap-4">
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="w-24 h-24 object-cover bg-gray-100"
//                                     />
//                                     <div className="flex-1">
//                                         <h4 className="text-gray-900 font-medium mb-1">{item.name}</h4>
//                                         {/* <p className="text-xs text-gray-500 mb-2">{item.warranty}</p> */}
//                                         <div className="flex items-center justify-between">
//                                             <div>
//                                                 <span className="text-lg font-semibold text-gray-900">Rs. {item.price.toLocaleString()}</span>
//                                                 <span className="text-sm text-gray-500 ml-4">Qty: {item.quantity}</span>
//                                             </div>
//                                             {item.canCancel && (
//                                                 <button className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1">
//                                                     Cancel
//                                                     <Info size={14} />
//                                                 </button>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };


const MyOrders = () => {
    const [orders, setOrders] = useState([]);

    // Fetch orders from API
    const fetchOrders = async () => {
        try {
            const response = await api.get({ url: 'v1/order/myOrders' });
            const ordersData = Array.isArray(response?.order) ? response.order : [];
            console.log("ordersData", ordersData)
            setOrders(ordersData);

            console.log("MyOrders:", ordersData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6 py-6">
                    <h1 className="text-2xl font-semibold text-gray-900">My Orders</h1>
                </div>
            </div>

            {/* Orders List */}
            <div className="max-w-6xl mx-auto px-6 py-6">
                {orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white border border-gray-200 shadow-sm rounded-lg p-6"
                            >
                                {/* Order Header */}
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Order {order.id}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            Placed on {new Date(order.createdAt).toLocaleString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Total</p>
                                        <p className="text-xl font-semibold text-gray-900">
                                            Rs. {order.totalAmount.toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Products */}
                                <div className="space-y-3">
                                    {order.orderitems?.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-center gap-4 border-t border-gray-100 pt-3"
                                        >
                                            <Image
                                                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}`}
                                                width={100}
                                                height={100}
                                                alt={item.name}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <div className="flex-1">
                                                <h4 className="text-gray-900 font-medium">
                                                    {item.name || 'Product Name'}
                                                </h4>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    Qty: {item.quantity} | Price: Rs. {item.price.toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    // Empty State
                    <div className="bg-white border border-gray-200 p-12 text-center">
                        <Package size={48} className="mx-auto text-gray-300 mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
                        <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
                        <button className="bg-blue-600 text-white py-3 px-8 hover:bg-blue-700 transition-colors">
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;
