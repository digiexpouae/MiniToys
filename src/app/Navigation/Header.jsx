'use client';
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import Dropdown from './Dropdown';
import MobileMenu from './Mobilemenu';
import Image from 'next/image'


export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const shopItems = ['All Products', 'New Arrivals', 'Sale'];
    const collectionsItems = ['Bears', 'Dolls', 'Puzzles'];

    return (
        <header className="bg-white rounded-full shadow-lg  px-4 md:px-6 py-6 md:py-4 mx-auto max-w-5xl">
            <div className="flex items-center justify-between w-full">
                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="lg:hidden text-gray-800 hover:text-gray-600 z-50"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Left Navigation */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    <Dropdown label="Shop" items={shopItems} />
                    <Dropdown label="Collections" items={collectionsItems} />
                    <a href="#" className="text-gray-800 font-medium  hover:text-gray-600  text-sm xl:text-base">
                        About Us
                    </a>
                    <a href="#" className="text-gray-800 font-medium  hover:text-gray-600  text-sm xl:text-base">
                        Blog
                    </a>
                </nav>

                {/* Logo */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="relative px-3 sm:px-4 py-1.5 sm:py-2">
                        <Image
                            src="/assets/Minilogo.png"
                            alt="Mini Toys Logo"
                            width={80}
                            height={50}
                            priority
                            className="object-contain"

                        />

                    </div>
                </div>

                {/* Right Navigation */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
                    {/* <Search className="hidden sm:block w-5 h-5 text-gray-800 hover:text-gray-600" /> */}
                    {/* <User className="hidden sm:block w-5 h-5 text-gray-800 hover:text-gray-600" /> */}
                    {/* <ShoppingCart className="w-5 h-5 text-gray-800 hover:text-gray-600" /> */}

                    <div className='relative block'><Image src={"/assets/search.svg"} width={20} height={20} /></div>
                    <div className='relative hidden md:block'><Image src={"/assets/person.svg"} width={20} height={20} /></div>
                    <div className='relative block'><Image src={"/assets/cart.svg"} width={20} height={20} /></div>
                    <span className='text-zinc-900 hidden md:block font-medium '>En</span>
                    <div className='relative hidden md:block'><Image src={"/assets/dropdown.svg"} width={10} height={10} /></div>
                    <div className="w-4 h-4 text-[#DA3C24] hidden md:block">|</div>
                    <div className='flex gap-2 items-center justify-center '>
                        <span className='text-zinc-900 hidden md:block font-medium  '>USD $</span>
                        <div className='relative hidden md:block'><Image src={"/assets/dropdown.svg"} width={10} height={10} /></div>
                    </div>

                </div>
            </div>

            {/* Mobile Menu */}
            <MobileMenu
                shopItems={shopItems}
                collectionsItems={collectionsItems}
                open={mobileMenuOpen}
            />
        </header>
    );
}
