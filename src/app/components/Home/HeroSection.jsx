"use client"
import { useState } from 'react';
import { ChevronDown, Search, User, ShoppingCart, Menu, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import Slider from './slide'
export default function ToyStoreHero() {
    const [shopOpen, setShopOpen] = useState(false);
    const [collectionsOpen, setCollectionsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(1);


    const slides = [
        {
            title: "Best Sellers",
            subtitle: "Bear with a Bow",
            image: "/assets/Link - Bear with a Bow → Bear with a Bow.svg",
        },
        {
            title: "New Arrival",
            subtitle: "Cute Bunny",
            image: "/assets/Link - Bear with a Bow → Bear with a Bow.svg",
        },
        {
            title: "Limited Edition",
            subtitle: "Teddy Love",
            image: "/assets/Link - Bear with a Bow → Bear with a Bow.svg",
        },
    ];


    return (
        <div className="h-full max-w-5xl mx-auto relative z-4">

            <div className=' flex  justify-center absolute top-[8%] h-full w-full'>
                <h3 className='text-5xl md:text-8xl tracking-tight text-white'>
                    <span>Playtime Is </span> <br />
                    <span>Best Time!</span>


                </h3>
            </div>
            <div className=' flex  justify-center absolute top-[30%] h-full w-full'>

                <div className='relative w-[300px] h-[400px] '>

                    <Image src={"/assets/Bear.png"} alt="bear" width={300} height={400} className='object-cover' />
                </div>






            </div>
            <Slider slides={slides} />


        </div >
    );
}