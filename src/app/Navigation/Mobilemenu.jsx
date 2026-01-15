'use client';
import { useState } from 'react';
import { ChevronDown, Search, User } from 'lucide-react';
import Dropdown from './Dropdown';

export default function MobileMenu({ shopItems, collectionsItems, open }) {
    if (!open) return null;

    return (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-white shadow-lg rounded-lg py-4 z-40">
            <nav className="flex flex-col gap-4 px-6">
                <Dropdown label="Shop" items={shopItems} className="w-full" />
                <Dropdown label="Collections" items={collectionsItems} className="w-full" />

                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium py-2">
                    About Us
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium py-2">
                    Blog
                </a>

                <div className="border-t pt-4 mt-2">
                    <button className="flex items-center gap-3 text-gray-800 hover:text-gray-600 w-full py-2">
                        <Search className="w-5 h-5" /> Search
                    </button>
                    <button className="flex items-center gap-3 text-gray-800 hover:text-gray-600 w-full py-2">
                        <User className="w-5 h-5" /> Account
                    </button>
                </div>
            </nav>
        </div>
    );
}
