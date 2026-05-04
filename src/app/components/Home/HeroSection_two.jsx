import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function ToyStoreHeader() {
    
    return (
        <div className="w-full">
            {/* Top Bar */}

            {/* Hero Section */}
            <div className="relative w-full h-[400px] md:h-screen bg-[#FF3A09] md:bg-[url('/assets/minion.png')] bg-cover bg-center overflow-hidden">
                {/* Decorative Circles */}


                {/* Content Container desktop */}
                <div className="container md:block hidden mx-auto px-8 h-full relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
                        {/* Left Content */}
                        <div className="flex flex-col translate-x-1/4 justify-center space-y-6">
                            <h2 className="text-6xl  tracking-tighter text-[#FEED17] font-bold leading-tight ">
                                Mini Toys

                                {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 leading-tight drop-shadow-lg"> */}
                                <br />
                                For Yous Mini's
                                {/* </h2> */}
                            </h2>
                              <Link href="/login">
                            <button className="bg-white text-zinc-800  px-8 py-2 rounded-xl hover:bg-white/50 hover:text-white hover:scale-105 transition-all duration-200 w-fit cursor-pointer shadow-xl text-sm">
                            
                                Sign in
                              
                            </button>
                              </Link>
                        </div>

                        {/* Right Content - Character Image */}
                        <div className="flex items-center justify-center h-full">
                            <div className="relative w-full h-full flex items-end justify-center pb-8">
                                {/* Toy Character Placeholder */}

                            </div>
                        </div>
                    </div>
                </div>
                {/* mobile */}
                <div className="container mx-auto px-8 h-full w-full relative z-10">
                    <div className='absolute inset-0'>
                        <div className="relative w-full aspect-[4/2] overflow-hidden">
                            {/* background image */}
                            <Image
                                src="/assets/ribbon.png"
                                alt="ribbon background"
                                fill
                                className="object-cover"
                                priority
                            />

                        </div>
                    </div>
                    <div className='absolute bottom-0 right-0 w-2/3 h-2/3 '>
                        <Image src={"/assets/minion-3.png"} alt="minion" width={500} height={500} className='object-cover' />

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-start">
                        {/* Left Content */}
                        <div className="flex flex-col justify-center translate-y-1/2 space-y-6 relative z-30">
                            <h2 className="text-4xl  tracking-tighter text-[#FEED17] font-bold leading-tight ">
                                Mini Toys

                                {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-yellow-300 leading-tight drop-shadow-lg"> */}
                                <br />
                                For Yous Mini's
                                {/* </h2> */}
                            </h2>
                                    <Link href="/login">
                            <button className="bg-white text-zinc-800  px-8 py-2 rounded-xl cursor-pointer hover:bg-white/50 hover:text-white hover:scale-105 transition-all duration-200 w-fit shadow-xl text-sm">
                    
                                Sign in
                              
                            </button>
                              </Link>
                        </div>

                        {/* Right Content - Character Image */}

                    </div>
                </div>
            </div>
        </div>
    );
}