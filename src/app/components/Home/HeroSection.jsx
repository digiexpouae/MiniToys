import { useState } from 'react';
import { ChevronDown, Search, User, ShoppingCart, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ToyStoreHero() {
    const [shopOpen, setShopOpen] = useState(false);
    const [collectionsOpen, setCollectionsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);

    const totalSlides = 3;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev >= totalSlides ? 1 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev <= 1 ? totalSlides : prev - 1));
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
            {/* Header */}
            <div className="pt-4 px-2 sm:px-4">
                <header className="bg-white rounded-full shadow-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 mx-auto max-w-7xl relative">
                    <div className="flex items-center justify-between">
                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden text-gray-800 hover:text-gray-600 z-50"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>

                        {/* Left Navigation - Desktop */}
                        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                            <div className="relative">
                                <button
                                    onClick={() => setShopOpen(!shopOpen)}
                                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 font-medium text-sm xl:text-base"
                                >
                                    Shop
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {shopOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">All Products</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">New Arrivals</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Sale</a>
                                    </div>
                                )}
                            </div>

                            <div className="relative">
                                <button
                                    onClick={() => setCollectionsOpen(!collectionsOpen)}
                                    className="flex items-center gap-1 text-gray-800 hover:text-gray-600 font-medium text-sm xl:text-base"
                                >
                                    Collections
                                    <ChevronDown className="w-4 h-4" />
                                </button>
                                {collectionsOpen && (
                                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Bears</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Dolls</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">Puzzles</a>
                                    </div>
                                )}
                            </div>

                            <a href="#" className="text-gray-800 hover:text-gray-600 font-medium text-sm xl:text-base">
                                About Us
                            </a>
                            <a href="#" className="text-gray-800 hover:text-gray-600 font-medium text-sm xl:text-base">
                                Blog
                            </a>
                        </nav>

                        {/* Center Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <div className="bg-black text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-base sm:text-xl">
                                <span className="block text-center leading-tight">MINI</span>
                                <span className="block text-center text-red-500 leading-tight">TOYS</span>
                            </div>
                        </div>

                        {/* Right Navigation */}
                        <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
                            <button className="text-gray-800 hover:text-gray-600 hidden sm:block">
                                <Search className="w-5 h-5" />
                            </button>
                            <button className="text-gray-800 hover:text-gray-600 hidden sm:block">
                                <User className="w-5 h-5" />
                            </button>
                            <button className="text-gray-800 hover:text-gray-600">
                                <ShoppingCart className="w-5 h-5" />
                            </button>

                            <div className="hidden md:flex items-center gap-1 text-gray-800 text-sm">
                                <span className="font-medium">En</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>

                            <div className="hidden md:flex items-center gap-1 text-gray-800 text-sm">
                                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 30'%3E%3Crect width='60' height='30' fill='%23b22234'/%3E%3Cpath d='M0 3.5h60M0 10h60M0 16.5h60M0 23h60' stroke='%23fff' stroke-width='3.5'/%3E%3Crect width='24' height='17' fill='%233c3b6e'/%3E%3C/svg%3E" alt="US Flag" className="w-5 h-3" />
                                <span className="font-medium">USD $</span>
                                <ChevronDown className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 bg-white shadow-lg rounded-lg py-4 z-40">
                            <nav className="flex flex-col gap-4 px-6">
                                <div>
                                    <button
                                        onClick={() => setShopOpen(!shopOpen)}
                                        className="flex items-center justify-between w-full text-gray-800 hover:text-gray-600 font-medium py-2"
                                    >
                                        Shop
                                        <ChevronDown className={`w-4 h-4 transition-transform ${shopOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {shopOpen && (
                                        <div className="pl-4 flex flex-col gap-2 mt-2">
                                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">All Products</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">New Arrivals</a>
                                            <a href="#" className="text-gray-600 hover:text-gray-800 text-sm">Sale</a>
                                        </div>
                                    )}
                                </div>

                                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium py-2">
                                    About Us
                                </a>
                                <a href="#" className="text-gray-800 hover:text-gray-600 font-medium py-2">
                                    Blog
                                </a>
                            </nav>
                        </div>
                    )}
                </header>
            </div>

            {/* Hero Section */}
            <div className="relative mt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Background with decorative elements */}
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Decorative curved lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
                        <path
                            d="M-100,200 Q100,100 200,150 T400,200 T600,150"
                            fill="none"
                            stroke="#FCD34D"
                            strokeWidth="8"
                            opacity="0.6"
                        />
                        <path
                            d="M1300,200 Q1100,300 1000,250 T800,200 T600,250"
                            fill="none"
                            stroke="#FCD34D"
                            strokeWidth="8"
                            opacity="0.6"
                        />
                        <circle cx="250" cy="180" r="8" fill="#FCD34D" opacity="0.8" />
                        <circle cx="950" cy="280" r="8" fill="#FCD34D" opacity="0.8" />
                        {/* Bottom wave */}
                        <path
                            d="M0,500 Q300,450 600,480 T1200,500 L1200,600 L0,600 Z"
                            fill="#FEF3C7"
                            opacity="0.9"
                        />
                    </svg>

                    {/* Content Container */}
                    <div className="relative z-10 pt-12 pb-20 sm:pt-16 sm:pb-32">
                        {/* Product Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm sm:text-base font-semibold inline-flex items-center gap-2 shadow-lg">
                                <span className="text-xl sm:text-2xl font-bold">92 × 54</span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <div className="text-center mb-8">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2">
                                Playtime Is
                            </h1>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                Best Time!
                            </h1>
                        </div>

                        {/* Teddy Bear Image */}
                        <div className="flex justify-center mb-8">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 flex items-end justify-center">
                                <div className="text-8xl sm:text-9xl">🧸</div>
                            </div>
                        </div>

                        {/* Product Card with Navigation */}
                        <div className="flex items-center justify-center gap-4 px-4">
                            {/* Left Arrow */}
                            <button
                                onClick={prevSlide}
                                className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6 text-gray-800" />
                            </button>

                            {/* Product Card */}
                            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl px-6 sm:px-12 py-4 sm:py-6 shadow-xl max-w-md w-full">
                                <div className="flex items-center justify-between text-white">
                                    <div className="text-center flex-1">
                                        <div className="text-xs sm:text-sm font-medium mb-1">{currentSlide} / {totalSlides}</div>
                                        <div className="text-2xl mb-2">🧸</div>
                                        <div className="text-xs sm:text-sm uppercase tracking-wide mb-1 text-yellow-300">
                                            Best Sellers
                                        </div>
                                        <div className="font-bold text-base sm:text-lg">
                                            Bear with a Bow
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Arrow */}
                            <button
                                onClick={nextSlide}
                                className="w-12 h-12 sm:w-14 sm:h-14 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center shadow-lg transition-colors"
                            >
                                <ChevronRight className="w-6 h-6 text-gray-800" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <div className="mt-8 sm:mt-12 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 tracking-wide">
                        CRAFTING SMILES, ONE TOY AT A
                    </h2>
                </div>
            </div>
        </div>
    );
}