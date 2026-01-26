import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
    return (
        <section className="relative w-full h-screen   ">
            {/* Curved Yellow Background */}
            <div className='absolute top-0 left-0 w-full h-34 z-20'>
                <div className='relative w-full h-full '>
                    <Image
                        src="/assets/transparentcurve.png"
                        alt="Background transparent shape"
                        fill
                        className="object-cover"
                    /></div>
            </div>
            <div className='w-full  relative  bg-[#FFD265]  '>
                {/* Horizontal Dotted Lines */}


                {/* Content Container */}
                <div className="relative z-10 max-w-5xl mx-auto px-4 py-34 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-center">

                        {/* Left Column - Text Content */}
                        <div className="text-left space-y-6 order-2 lg:order-1">
                            <div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-[#DA3C24] mb-3">
                                    About Us
                                </h2>
                                <h2 className="text-xl md:text-4xl font-medium text-[#101010] ">
                                    Hard Work and a Passion for Quality
                                </h2>
                            </div>

                            <div className="space-y-4 text-gray-700">
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Toys has established itself as a premier destination for gamers and delights seeking particularly quality crochet business ethos toys, and accessories.
                                </p>
                                <p className="text-sm sm:text-base leading-relaxed">
                                    With an unwavering commitment to providing a delightful shopping experience and a wide range of meticulously curated rental products.
                                </p>
                            </div>

                            <button className="bg-[#DA3C24] hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                View More
                            </button>
                        </div>

                        {/* Right Column - Image Collage */}
                        <div className="relative order-1 lg:order-2 flex flex-col items-center">

                            {/* Vertical Dotted Line (Top) */}

                            {/* Image Frame Container */}
                            <div className="relative h-[420px] w-full rounded-2xl">
                                {/* Main Border Frame */}
                                <Image src="/assets/about.png" alt="Background transparent shape" width={500} height={400} className="object-cover rounded-2xl" />

                                {/* White Curved Accent */}


                                {/* Image Grid */}
                                {/* Top Left - Woman working */}

                            </div>

                            {/* White Decorative Circle */}

                            {/* Dimension Label */}

                        </div>

                    </div>
                </div>



            </div>
        </section >
    );
};

export default AboutUs;