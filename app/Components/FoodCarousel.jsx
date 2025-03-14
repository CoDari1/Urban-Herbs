"use client";

import React, { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import HeroText from "@/app/Components/HeroText";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function FoodCarousel() {
    // Initialize Embla with autoplay
    const autoplayPlugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
    const [emblaRef] = useEmblaCarousel({ loop: true, draggable: false }, [autoplayPlugin.current]);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Embla Carousel */}
            <div className="absolute inset-0 w-full h-full pointer-events-none" ref={emblaRef}>
                <div className="flex">
                    {[1, 2, 3].map((index) => (
                        <div key={index} className="flex-shrink-0 w-full h-screen">
                            <img
                                src={`/imgs/carousel/Gemini_Generated_Image_uyqhxpuyqhxpuyqh.jpg`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Overlay Text */}
            <HeroText />
        </div>
    );
}
