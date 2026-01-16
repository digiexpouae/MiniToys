'use client';

export default function OurValues() {
    return (
        <div className="relative w-full min-h-screen bg-[#F5E6D3] overflow-hidden">
            {/* Top curved section */}
            <div className="relative">
                <svg className="w-full h-auto" viewBox="0 0 1920 450" preserveAspectRatio="none">
                    <path d="M0,300 Q480,100 960,150 T1920,200 L1920,0 L0,0 Z" fill="#F4D58D" />
                </svg>

                {/* Decorative curves */}
                <div className="absolute bottom-20 left-16">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                        <path d="M 20 100 Q 20 20, 100 20" stroke="white" strokeWidth="16" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
                <div className="absolute top-12 right-32">
                    <svg width="80" height="80" viewBox="0 0 80 80">
                        <path d="M 20 60 Q 20 20, 60 20" stroke="white" strokeWidth="12" fill="none" strokeLinecap="round" />
                    </svg>
                </div>

                {/* Blue accent line top right */}
                <div className="absolute top-0 right-0 w-2 h-full bg-blue-500"></div>
            </div>

            {/* Content */}
            <div className="absolute top-0 left-0 right-0 pt-24 pb-32">
                <div className="max-w-6xl mx-auto px-8">
                    <h1 className="text-5xl font-bold text-red-600 text-center mb-16">Our Values</h1>

                    {/* Cards Container */}
                    <div className="flex justify-center items-start gap-6 max-w-5xl mx-auto">
                        {/* Organic Card */}
                        <div className="bg-white rounded-2xl p-6 flex-1 shadow-lg border-4 border-black transform -rotate-3 hover:rotate-0 transition-transform">
                            <h2 className="text-2xl font-bold text-indigo-700 mb-3">Organic</h2>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                Toyo takes great pride in sourcing materials for its products organically, ensuring the highest level of quality and safety.
                            </p>
                            <div className="flex justify-center">
                                <svg width="70" height="70" viewBox="0 0 80 80">
                                    <rect x="25" y="15" width="30" height="50" rx="15" fill="none" stroke="#EC4899" strokeWidth="3" />
                                    <ellipse cx="40" cy="35" rx="8" ry="12" fill="#EC4899" />
                                </svg>
                            </div>
                        </div>

                        {/* Innovative & Safe Card */}
                        <div className="bg-white rounded-2xl p-6 flex-1 shadow-lg border-4 border-black transform rotate-1 hover:rotate-0 transition-transform">
                            <h2 className="text-2xl font-bold text-pink-600 mb-3">Innovative & Safe</h2>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                At Toyo innovation meets safety as we curate products that spark joy and provide peace of mind for parents and their children.
                            </p>
                            <div className="flex justify-center">
                                <svg width="70" height="70" viewBox="0 0 80 80">
                                    <circle cx="40" cy="45" r="20" fill="none" stroke="#EAB308" strokeWidth="3" />
                                    <path d="M 40 25 L 40 45 M 40 45 L 50 35" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
                                    <path d="M 35 20 L 40 10 L 45 20" fill="#EAB308" />
                                </svg>
                            </div>
                        </div>

                        {/* Eco Friendly Card */}
                        <div className="bg-white rounded-2xl p-6 flex-1 shadow-lg border-4 border-black transform rotate-3 hover:rotate-0 transition-transform">
                            <h2 className="text-2xl font-bold text-green-600 mb-3">Eco Friendly</h2>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                                Toyo is committed to a greener future offering eco-friendly products that nurture both babies and the planet they will inherit.
                            </p>
                            <div className="flex justify-center">
                                <svg width="70" height="70" viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="22" fill="none" stroke="#10B981" strokeWidth="3" />
                                    <circle cx="28" cy="32" r="6" fill="none" stroke="#10B981" strokeWidth="2" />
                                    <circle cx="52" cy="32" r="6" fill="none" stroke="#10B981" strokeWidth="2" />
                                    <circle cx="40" cy="50" r="6" fill="none" stroke="#10B981" strokeWidth="2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom curved section */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-auto" viewBox="0 0 1920 200" preserveAspectRatio="none">
                    <path d="M0,50 Q480,150 960,100 T1920,80 L1920,200 L0,200 Z" fill="#F4D58D" />
                </svg>

                {/* Blue accent line bottom */}
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            </div>
        </div>
    );
}