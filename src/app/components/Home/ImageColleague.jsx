'use client';

import Image from 'next/image';

export default function BentoGrid() {
    return (
        <div className=" min-h-screen p-8 relative">
            {/* Decorative curve in top right */}
            <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-indigo-600 rounded-full"></div>
            </div>

            {/* Bento Grid */}
            <div className="max-w-4xl mx-auto pt-12 flex items-center justify-center">
                <div className="grid grid-cols-12  gap-4 w-full   auto-rows-[140px] ">
                    {/* Large image - Cat and Bunny - Left side */}
                    <div className="col-span-4 row-span-3 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-1.png"
                            alt="Cat and bunny plush toys"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Discounts Button */}


                    {/* Blue octopus toy */}
                    <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-2.png"
                            alt=" Blue octopus toy"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Baby with orange hat and giraffe */}
                    <div className="col-span-5 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-3.png"
                            alt="Baby with plush toys"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Best Sellers Button */}
                    {/* <div className="col-span-3 row-span-2 bg-pink-600 rounded-3xl shadow-lg flex items-center justify-center hover:bg-pink-700 transition cursor-pointer">
                        <span className="text-white text-2xl font-semibold">Best Sellers</span>
                    </div> */}

                    {/* Striped plush toys */}
                    <div className="col-span-5 row-span-2 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-4.png"
                            alt="Striped plush toys"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* New Collection Button */}


                    {/* Sheep plush toy */}
                    <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-5.png"
                            alt="Sheep plush toy"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="col-span-3 row-span-2 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-7.png"
                            alt="Sheep plush toy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-8.png"
                            alt="Sheep plush toy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-9.png"
                            alt="Sheep plush toy"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="col-span-3 row-span-1 rounded-3xl overflow-hidden shadow-lg relative">
                        <Image
                            src="/assets/s-6.png"
                            alt="Sheep plush toy"
                            fill
                            className="object-cover"
                        />
                    </div>



                    {/* Trending Button */}

                </div>
            </div>
        </div>
    );
}