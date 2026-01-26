"use client"
import { useState } from "react";
import { Menu } from "lucide-react";

const navItems = [

    "SALE",
    "GEAR",
    "BEDROOM",
    "FEEDING",
    "TOYS",
    "DIAPERS",
    "OUTDOOR",
    "BATH",
    "SAFETY",
    "FASHION",
    "SCHOOL",
    "MUMZ",
    "HOME",
    "PHARMACY",
    "BOOKS",

];

export default function Navbar() {
    const [active, setActive] = useState("HOME");

    return (
        <div className="container mx-auto px-12">
            <ul className="flex  text-xs font-medium text-gray-700">
                <li
                    className={`flex items-center cursor-pointer px-3  rounded   
            ${active === "ALL" ? "bg-[#CF092D] text-white" : "hover:text-pink-500"}`}
                    onClick={() => setActive("ALL")}
                >
                    {/* <Menu size={20} /> */}
                    {/* ALL CATEGORIES */}
                </li>

                {navItems.map((item) => (
                    <li
                        key={item}
                        onClick={() => setActive(item)}
                        className={`cursor-pointer px-3 py-3     transition-all duration-500 ease-in-out
              ${active === item
                                ? "bg-[#CF092D] text-white"
                                : "hover:text-pink-500"
                            }`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}
