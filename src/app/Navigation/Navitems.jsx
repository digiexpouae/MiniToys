"use client"
import { useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const navItems = [
    { id: 1, label: "SALE", link: "/" },
    { id: 2, label: "GEAR", link: "/" },
    { id: 3, label: "BEDROOM", link: "/" },
    { id: 4, label: "FEEDING", link: "/" },
    { id: 5, label: "TOYS", link: "/" },
    { id: 6, label: "DIAPERS", link: "/" },
    { id: 7, label: "OUTDOOR", link: "/" },
    { id: 8, label: "BATH", link: "/" },
    { id: 9, label: "SAFETY", link: "/" },
    { id: 10, label: "FASHION", link: "/" },
    { id: 11, label: "SCHOOL", link: "/" },
    { id: 12, label: "MUMZ", link: "/" },
    { id: 13, label: "HOME", link: "/" },
    { id: 14, label: "PHARMACY", link: "/" },
    { id: 15, label: "BOOKS", link: "/" },
];

export default function Navbar() {
    const [active, setActive] = useState("HOME");

    return (
        <div className="container mx-auto px-12 overflow-auto">
            <ul className="flex  text-xs font-medium text-gray-700">
                <li
                    className={`flex items-center cursor-pointer px-3  rounded   
            ${active === "ALL" ? "bg-[#0875AE] text-white" : "hover:text-pink-500"}`}
                    onClick={() => setActive("ALL")}
                >
                    {/* <Menu size={20} /> */}
                    {/* ALL CATEGORIES */}
                </li>

                {navItems.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActive(item.label)}
                        className={`cursor-pointer px-3 py-3 transition-all duration-500 ease-in-out
      ${active === item.label
                                ? "bg-[#0875AE] text-white"
                                : "hover:text-pink-500"
                            }`}
                    >
                        <Link href={item.link}>
                            {item.label}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    );
}
