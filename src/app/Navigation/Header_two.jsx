import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import Image from 'next/image';
import Navitems from './Navitems'
import Link from 'next/link'
const Header_two = () => {
    return (<div className='w-full'>
        <div className=" hidden md:block bg-[#FEED17] text-gray-800 text-sm py-2">
            <div className="container mx-auto px-12 flex justify-between items-center">
                <div className="flex gap-6">
                    <span>Trusted by Millions of Mumz</span>
                    <span>Curated for Every Stage</span>
                    <span>Delivery across the GCC</span>
                </div>
                <div className="flex gap-4">
                    <span>Help</span>
                    <span>العربية</span>
                    <span>Global</span>
                </div>
            </div>
        </div>

        {/* Main Header */}
        <header className=" md:block hidden bg-white shadow-md">
            <div className="container mx-auto px-18 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-18 aspect-[16/9] relative flex items-center justify-center">
                            <Link href={'/'}>
                                <Image src="/assets/logo2.svg" alt="logo" fill />
                            </Link>
                            {/* <span className="text-white font-bold text-xl">T</span> */}
                        </div>
                        <div>
                            {/* <h1 className="text-2xl font-bold text-gray-800">ToyStore</h1> */}
                        </div>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl mx-8">
                        <div className="relative">
                            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#CF092D] text-white p-2 rounded-full hover:bg-pink-600">
                                <Search size={20} />
                            </button>
                            <input
                                type="text"
                                placeholder="Search Baby Monitor"
                                className="w-full px-4 py-3 pl-12 font-sm text-zinc-800 border border-[#95969E] rounded-full focus:outline-none focus:border-zinc-800"
                            />

                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-6 text-zinc-800">
                        <div className="text-center cursor-pointer hover:text-pink-500">
                            {/* <User size={24} /> */}
                            <p className="text-xs">Delivering to</p>
                            <span className="text-sm">United States</span>
                        </div>
                        <button className="bg-[#CF092D] text-white px-6 py-2 rounded-md hover:bg-[#CF092D]/50 font-medium">
                            Sign In
                        </button>
                        <div className="relative cursor-pointer  hover:text-pink-500">
                            {/* <ShoppingCart size={24} /> */}
                            <Link href="/cart">
                                Cart </Link>
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                            </span> */}
                        </div>

                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="bg-gray-50 border-t">
                <Navitems />
            </nav>
        </header>
        {/* mobile header */}
        <header className="block md:hidden bg-white shadow-md py-4">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-18 aspect-[16/9] relative flex items-center justify-center">
                            <Link href={'/'}>

                                <Image src="/assets/logo2.svg" alt="logo" fill />
                            </Link>
                            {/* <span className="text-white font-bold text-xl">T</span> */}
                        </div>
                        <div>
                            {/* <h1 className="text-2xl font-bold text-gray-800">ToyStore</h1> */}
                        </div>
                    </div>

                    {/* Search Bar */}

                    {/* Right Section */}
                    <div className="flex items-center gap-6 text-zinc-800">

                        <button className="bg-[#CF092D] text-white px-6 py-2 rounded-md hover:bg-[#CF092D]/50 font-medium">
                            Sign In
                        </button>
                        <div className="relative cursor-pointer  hover:text-pink-500">
                            {/* <ShoppingCart size={24} /> */}
                            <Link href="/cart">
                                Cart </Link>
                            {/* <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">

                            </span> */}
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex-1 max-w-5xl mx-4 ">
                <div className="relative">
                    <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#CF092D] text-white p-2 rounded-full hover:bg-pink-600">
                        <Search size={20} />
                    </button>
                    <input
                        type="text"
                        placeholder="Search Baby Monitor"
                        className="w-full px-4 py-3 pl-12 font-sm text-zinc-800 border border-[#95969E] rounded-full focus:outline-none focus:border-zinc-800"
                    />

                </div>
            </div>


            {/* Navigation */}
            {/* <nav className="bg-gray-50 border-t">
                <Navitems />
            </nav> */}
        </header>
    </div>
    )
}

export default Header_two