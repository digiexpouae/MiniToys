import React from 'react';
// import { Pinterest } from 'lucide-react';
import Image from 'next/image';
import Dropdown from './Dropdown';
import Link from 'next/link';
export default function NewsletterFooter() {
    const socialMedia = [
        {
            icon: "/assets/facebook.svg",
            link: "/"
        },
        {
            icon: "/assets/in.svg",
            link: "/"
        },
        {

            icon: "/assets/x.svg",
            link: "/"
        }
        ,
        {
            icon: "/assets/instagram.svg",
            link: "/"
        }
    ]




    return (
        <div className="w-full bg-[#FFD265] relative overflow-hidden">
            {/* Decorative Squiggles */}
            <div className="absolute  top-0 left-0 right-0 z-10">
                <Image src="/assets/transparent-curve3.svg" alt="curve" width={1920} height={10} />
            </div>

            <div className='absolute translate-y-2/3 top-2 -right-16 md:right-0 '>
                <Image src="/assets/elem06.svg" alt="curve" width={120} height={120} />
            </div>
            <div className='absolute top-2 left-1/6'>
                <Image src="/assets/elem07.svg" alt="curve" width={120} height={120} />
            </div>
            <div className='absolute translate-y-2/3 top-2/3 md:top-1/6 -left-24 md:left-0'>
                <Image src="/assets/elem05.svg" alt="curve" width={180} height={120} />
            </div>


            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
                {/* Newsletter Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                        Sign Up to the Newsletter
                    </h2>
                    <p className="text-slate-800 text-sm md:text-base mb-6">
                        Be the first to get notified about New Arrivals, Discounts, and Bargain Deals!
                    </p>

                    {/* Newsletter Form */}
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center items-center">
                        <input
                            type="email"
                            placeholder="Add Your E-Mail Here"
                            className="w-full sm:w-64 px-4 py-2.5 text-zinc-800 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.35)] border-2 border-zinc-800 bg-white focus:outline-none  text-sm"
                        />
                        <button className="w-full sm:w-auto px-8 py-2.5 bg-[#DA3C24] text-white font-semibold rounded-full hover:from-pink-600 hover:to-red-600 transition-all shadow-md  text-sm">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8 text-sm">
                    {/* Home Column */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">Home</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Trending</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Browse Wrap</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Marvel/Multiverse</a></li>
                        </ul>
                    </div>

                    {/* Shop Column */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">Shop</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">New Collection</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Merch Kn</a></li>
                        </ul>
                    </div>

                    {/* Benefits Column */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">Benefits</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Our Story</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">FAQ</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Column */}
                    <div>
                        <h3 className="font-bold text-slate-900 mb-3">Contact Us</h3>
                        <ul className="space-y-2 text-slate-700">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Customer Service</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Live Help</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Returns & Exchanges</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Shipping</a></li>
                        </ul>
                    </div>
                    <div className='w-48'>
                        <select className='border w-full border-zinc-800 text-zinc-800 px-4 py-3 rounded-full'>
                            <option value="USD">United States USD $</option>
                            <option value="EUR">Europe EUR €</option>
                            <option value="GBP">United Kingdom GBP £</option>
                        </select>

                    </div>

                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-6 ">
                    {/* Social Icons */}

                    {/* Latest Items Link */}
                    <div className="mb-4 md:mb-0">
                        <div className="flex gap-4 mb-4 md:mb-0">
                            {socialMedia.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="hover:scale-110 transition-transform"
                                >
                                    <Image
                                        src={item.icon}
                                        alt="social icon"
                                        width={index === 0 ? 12 : 20}
                                        height={index === 0 ? 12 : 20}
                                    />
                                </Link>
                            ))}
                        </div>

                    </div>

                    {/* Payment Icons */}
                    <div className="flex items-center">
                        <Image src="/assets/List.svg" alt="payment" width={390} height={120} />
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-[#DA3C24] text-white py-4">
                <div className="max-w-6xl mx-auto px-4 text-center text-xs md:text-sm">
                    <p>
                        Proudly Made <span className="mx-2">|</span> Privacy Policy <span className="mx-2">|</span> Terms of Service <span className="mx-2">|</span> Refund Policy <span className="mx-2">|</span> Shipping Policy
                    </p>
                </div>
            </div>
        </div>
    );
}