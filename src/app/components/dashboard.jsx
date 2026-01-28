"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { LineChart, Line, Cell, ResponsiveContainer, PieChart, Pie } from "recharts";
import Link from 'next/link';
import Storagechart from '../components/Storagechart'
import {
    Home,
    ShoppingCart,
    Package,
    Users,
    DollarSign,
    BarChart3,
    TrendingUp,
    Percent,
    Search,
    X,
    ChevronRight,
    ChevronDown,
    Store,
    MapPin,
    ShoppingBag,
    Mail
} from 'lucide-react';

export default function AnalyticsDashboard() {

    const data = [
        { name: 'Used', value: 12 },
        { name: 'Available', value: 12 }
    ];
    const digitalOrdersData = [
        { day: "Mon", orders: 120 },
        { day: "Tue", orders: 150 },
        { day: "Wed", orders: 90 },
        { day: "Thu", orders: 170 },
        { day: "Fri", orders: 200 },
    ];
    const [selectedMenu, setSelectedMenu] = useState('Home');
    const [salesChannelOpen, setSalesChannelOpen] = useState(false);
    const [appsOpen, setAppsOpen] = useState(false);

    const menuItems = [
        { icon: '/assets/orders.svg', label: 'Home', active: true },
        { icon: '/assets/orders.svg', label: 'Orders' },
        { icon: '/assets/products.svg', label: 'Products' },
        { icon: '/assets/customers.svg', label: 'Customers' },
        { icon: '/assets/finanaces.svg', label: 'Finances' },
        { icon: '/assets/analytics.svg', label: 'Analytics' },
        { icon: '/assets/marketing.svg', label: 'Marketing' },
        { icon: '/assets/discount.svg', label: 'Discounts' },
    ];

    const salesChannels = [
        { icon: '/assets/onlinestore.svg', label: 'Online store' },
        { icon: '/assets/shopify.svg', label: 'Point of sale' },
        { icon: '/assets/shop.svg', label: 'Shop' },
    ];

    const apps = [
        { icon: '/assets/email.png', label: 'Shopify Email' },
    ];

    const topDownloads = [
        {
            name: 'HDRR Garage',
            url: 'https://www.myretail.com/products/elektricheskaya-zubnaya-shhetka-b...',
            image: '/assets/shoe.svg'
        },
        {
            name: 'Backplates Snow Landscape 0006',
            url: 'https://www.myretail.com/products/elektricheskaya-zubnaya-shhetka-philips-s5420-06-200...',
            image: '/assets/shoe.svg'
        },
        {
            name: 'Backplates Nomiral 01 0006',
            url: 'https://www.myretail.com/products/smart-chasy-honor-watch-gs-pro-b...',
            image: '/assets/shoes-2.svg'
        },
        {
            name: 'Backplates Nomiral 02 0128',
            url: 'https://www.myretail.com/products/smartfon-xiaomi-redmi-9-4-64gb-oc...',
            image: '/assets/shoes-2.svg'
        },
        {
            name: 'HDRR View Paris',
            url: 'https://www.myretail.com/products/smartfon-xiaomi-redmi-9-4-64gb-oc...',
            image: '/assets/shoe.svg'
        },
    ];

    const lastOrders = [
        {
            name: 'HDRR Garage',
            url: 'https://www.myretail.com/products/elektricheskaya-zubnaya-shhetka-b...',
            image: '/assets/shoe.svg'
        },
        {
            name: 'Backplates Snow Landscape 0006',
            url: 'https://www.myretail.com/products/elektricheskaya-zubnaya-shhetka-philips-s5420-06-200...',
            image: '/assets/shoes-2.svg'
        },
        {
            name: 'Backplates Nomiral 01 0006',
            url: 'https://www.myretail.com/products/smart-chasy-honor-watch-gs-pro-b...',
            image: '/assets/shoes-2.svg'
        },
        {
            name: 'Backplates Nomiral 02 0128',
            url: 'https://www.myretail.com/products/smartfon-xiaomi-redmi-9-4-64gb-oc...',
            image: '/assets/shoe.svg'
        },
        {
            name: 'HDRR View Paris',
            url: 'https://www.myretail.com/products/smartfon-xiaomi-redmi-9-4-64gb-oc...',
            image: '/assets/shoes-2.svg'
        },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <aside className="w-64 bg-[#F8F9FC] border-r  border-gray-200 overflow-y-auto">
                {/* Logo */}
                <div className="p-4 border-b border-gray-200  bg-white">
                    <div className="flex items-center gap-2">
                        <div className="w-18 aspect-[16/9] rounded-lg">
                            <Link href="/">
                                <Image src="/assets/logo2.png" alt="Logo" width={100} height={100} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Store Selector */}
                <div className="p-4 border-b border-gray-200">
                    <button className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-black">Vandelay Industries</span>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </button>
                </div>

                {/* Main Menu */}
                <nav className="p-2 ">
                    {menuItems.map((item) => (
                        <button
                            key={item.label}
                            onClick={() => setSelectedMenu(item.label)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${item.active
                                ? 'bg-orange-50 text-orange-600 font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                                }`}
                        >
                            <Image src={item.icon} width={15} height={15} />
                            <span className='font-inter'>{item.label}</span>
                        </button>
                    ))}
                </nav>

                {/* Sales Channels */}
                <div className="mt-4">
                    <button
                        onClick={() => setSalesChannelOpen(!salesChannelOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span>Sales channels</span>
                        <ChevronRight className={`w-4 h-4 transition ${salesChannelOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {salesChannelOpen && (
                        <nav className="px-2 py-1">
                            {salesChannels.map((item) => (
                                <button
                                    key={item.label}
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    <Image src={item.icon} width={15} height={15} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    )}
                </div>

                {/* Apps */}
                <div className="mt-2">
                    <button
                        onClick={() => setAppsOpen(!appsOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        <span>Apps</span>
                        <ChevronRight className={`w-4 h-4 transition ${appsOpen ? 'rotate-90' : ''}`} />
                    </button>
                    {appsOpen && (
                        <nav className="px-2 py-1">
                            {apps.map((item) => (
                                <button
                                    key={item.label}
                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
                                >
                                    <Image src={item.icon} alt="app" width={15} height={15} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </nav>
                    )}
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex-1 max-w-xl">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-4 py-2 bg-[#F1F3F9] border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-3 ml-4 text-black">
                            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold">
                                XA
                            </div>
                            <span className="text-sm font-medium">Xavionics Andreev</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-6">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {/* Total Digital Orders */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8  flex items-center justify-center">
                                    <Image src={'/assets/digitalorders.svg'} width={100} height={100} alt="Digital Orders" />
                                </div>
                                <span className="text-sm text-gray-600">Total digital orders</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">1,589</div>
                            <div className="h-12 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={digitalOrdersData}>
                                        <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Total Pieces of Content */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8  flex items-center justify-center">
                                    <Image src={'/assets/pieces2.svg'} width={100} height={100} alt="Digital Orders" />
                                </div>
                                <span className="text-sm text-gray-600">Total pieces of content delivered</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">22,925</div>

                            <div className="h-12 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={digitalOrdersData}>
                                        <Line type="monotone" dataKey="orders" stroke="#7239EA" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Total Revenue */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-2">

                                <span className="text-sm text-gray-600">Total revenue from digital orders</span>
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-4">$22,925</div>

                            <div className="h-12 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={digitalOrdersData}>
                                        <Line type="monotone" dataKey="orders" stroke="#51CD88" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Storage and Data Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Storage */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Package className="w-3 h-3 text-orange-600" />
                                </div>
                                <span className="text-sm font-medium text-gray-700">Used vs Available Storage</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <Storagechart
                                        total={100}
                                        used={75}
                                        title="Disk Usage"
                                        color="#ef4444"
                                    />

                                </div>
                                <div>
                                    <div className="text-lg font-bold text-gray-900 mb-1">Available Storage</div>
                                    <div className="text-sm text-gray-600">4GB of 20GB used</div>
                                </div>
                            </div>
                        </div>

                        {/* Data Transferred */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                                        <TrendingUp className="w-3 h-3 text-yellow-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Data transferred vs. plan limit</span>
                                </div>
                                <span className="text-xs text-gray-500">Jan 31</span>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <Storagechart
                                        total={100}
                                        used={75}
                                        title="Disk Usage"
                                        color="#FEED17"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-600">10GB Limit</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Alert */}
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs">!</span>
                            </div>
                            <div>
                                <span className="text-sm text-gray-700">One or more orders require your attention. </span>
                                <button className="text-sm text-purple-600 font-medium underline hover:no-underline">
                                    View Orders
                                </button>
                            </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Lists */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Top Downloads */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                                        <Image src="/assets/top.svg" alt="top" width={20} height={20} />
                                    </div>
                                    <h3 className="font-medium text-gray-900">Top 10 Most Popular Downloads</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">Showing 1-5 of 10 results</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {topDownloads.map((item, index) => (
                                    <div key={index} className="p-4 hover:bg-gray-50 transition">
                                        <div className="flex items-center gap-3">
                                            <Image src={item.image} alt={item.name} width={50} height={50} />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm text-gray-900 mb-1">{item.name}</div>
                                                <div className="text-xs text-blue-600 truncate">{item.url}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Last Orders */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                        <ShoppingCart className="w-3 h-3 text-red-600" />
                                    </div>
                                    <h3 className="font-medium text-gray-900">Last 10 Orders</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs text-gray-500">Showing 1-5 of 10 results</span>
                                    <ChevronRight className="w-4 h-4 text-gray-400" />
                                </div>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {lastOrders.map((item, index) => (
                                    <div key={index} className="p-4 hover:bg-gray-50 transition">
                                        <div className="flex items-center gap-3">
                                            <Image src={item.image} alt={item.name} width={50} height={50} />
                                            <div className="flex-1 min-w-0">
                                                <div className="font-medium text-sm text-gray-900 mb-1">{item.name}</div>
                                                <div className="text-xs text-blue-600 truncate">{item.url}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}