'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ label, items, className }) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`relative ${className || ''}`}>
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 text-gray-800 hover:text-gray-600 font-medium text-sm xl:text-base"
            >
                {label}
                <ChevronDown className="w-4 h-4 transition-transform" />
            </button>

            {open && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                    {items.map((item, index) => (
                        <a key={index} href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
