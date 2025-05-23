"use client";

import React, { useRef } from "react";
import HeroText from "@/app/Components/HeroText";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function FoodCarousel({ images }) {
    const autoplayPlugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );
    const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayPlugin.current]);

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {/* Embla Viewport */}
            <div ref={emblaRef} className="overflow-hidden w-full h-full">
                <div className="flex">
                    {images.map((src, index) => (
                        <div key={index} className="flex-shrink-0 w-full h-screen">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔥 Shadow Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />

            {/* Overlay Text */}
            <HeroText />
        </div>
    );
}

