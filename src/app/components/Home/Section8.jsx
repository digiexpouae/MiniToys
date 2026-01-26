import React from 'react';
import Image from 'next/image';
export default function HeroSection() {
    return (
        <div className="w-full bg-[#FEF7E6]">
            {/* Hero Banner Section */}
            <div className="relative h-[400px] w-full overflow-hidden bg-[url('/assets/saveupto.jpg')] bg-center bg-cover">
                {/* Background Pattern Overlay */}
                <div className="absolute -bottom-1 z-[999] left-0 right-0 ">
                    <Image src="/assets/transparent-curve-5.svg" width={1800} height={300} alt="" />
                </div>
                <div
                    className="absolute inset-0 opacity-40"
                />
                {/* Simulated background image area */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />



                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg md:text-6xl">
                        Save Up to 50%
                    </h1>
                    <p className="mb-8 max-w-xl text-base text-white/95 drop-shadow md:text-lg">
                        Get the right membership to receive the features you need and services you love.
                    </p>
                    <button className="rounded-full bg-orange-600 px-10 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl hover:scale-105">
                        Shop Now
                    </button>
                </div>

            </div>
            <div className="relative py-20 px-4 overflow-hidden">

                <div className="absolute bottom-0 left-0 right-0 h-[300px] md:h-[450px] pointer-events-none">
                    <Image src={'/assets/backgroundcircle.png'} alt="backgroundcircle" width={1920} height={400} />
                </div>
                <div className="absolute left-4 top-16 md:left-12">
                    <Image src={'/assets/elem09.svg'} width={100} height={100} />

                </div>

                <div className="absolute right-4 top-16 md:right-12">
                    <Image src={'/assets/elem08.svg'} width={140} height={140} />
                </div>

                <div className="mx-auto max-w-6xl relative z-10">
                    {/* Section Title */}
                    <div className="mb-16 text-center">
                        <h2 className="mb-3 text-3xl md:text-4xl font-bold text-[#2D3679]">
                            Find the Perfect Match
                        </h2>
                        <p className="text-black text-sm md:text-base max-w-2xl mx-auto">
                            Explore a range of delightful oven mitts and pot holders that <br /> perfectly suits your needs.
                        </p>
                    </div>

                    {/* Product Cards Container */}
                    <div className="relative mx-auto max-w-4xl">




                        {/* Product Cards Grid */}
                        <div className="grid md:grid-cols-2 shadow-2xl relative z-20">
                            {/* Left Card - Pink Floral */}
                            <div className="bg-white  p-8 md:p-10 flex rounded-l-2xl flex-col items-center">
                                <h3 className="mb-6 text-xs md:text-sm font-bold  tracking-wider text-[#DA3C24] text-center">
                                    Crochet Floral Hippo
                                </h3>
                                <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
                                    {/* Pink Floral Mitt Illustration */}
                                    <div className='absolute left-1/2 top-1/2 '>
                                        <Image src={'/assets/buttton.svg'} width={30} height={30} /></div>
                                </div>
                            </div>

                            {/* Right Card - Yellow Floral */}
                            <div className="bg-white  border-l-0 md:border-l-4 rounded-r-2xl   border-zinc-900 p-8 md:p-10 flex flex-col items-center">
                                <h3 className="mb-6 text-xs md:text-sm font-bold tracking-wider text-[#DA3C24] text-center">
                                    Crochet Floral Hippo
                                </h3>
                                <div className="relative w-full h-48 md:h-56 flex items-center justify-center">
                                    {/* Pink Floral Mitt Illustration */}
                                    <div className='absolute left-1/2 top-1/2 '>
                                        <Image src={'/assets/buttton.svg'} width={30} height={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div >
    );
}