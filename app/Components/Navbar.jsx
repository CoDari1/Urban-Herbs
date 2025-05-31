"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from Next.js

export default function Navbar() {
    const [collapsed, setCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMounted, setIsMounted] = useState(false);
    const collapseThreshold = 100;

    useEffect(() => {
        setIsMounted(true); // Ensure the component is mounted before accessing `window`

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set collapsed state using functional update form
            setCollapsed(prev => (currentScrollY > prev && currentScrollY > collapseThreshold));
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    if (!isMounted) {
        return null; // Or a loading state, if needed
    }

    return (
        <div
            id="Heading"
            className={`fixed top-0 w-full z-20 transition-all duration-300 ${collapsed ? "h-12 md:h-16 bg-secondary-900 bg-opacity-75" : "h-16 md:h-20 bg-secondary-900"}`}
        >
            <div id="Navbar" className="flex items-center justify-between w-full h-full px-4 md:px-8">
                {/* Logo */}
                <div
                    id="Logo"
                    className="flex items-center justify-start cursor-pointer transition-all duration-300"
                    onClick={() => (window.location.href = "/")}
                >
                    <img
                        src="/imgs/navbar/UrbnHerb.png"
                        className={`transition-all duration-300 ${collapsed ? "w-16 h-16 md:w-20 md:h-20" : "w-28 h-28 md:w-32 md:h-32"}`}
                        alt="logo"
                    />
                </div>

                {/* Menu Links */}
                <div id="Menu" className="flex items-center justify-end h-full">
                    {["References", "About", "Menu", "Contact"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item}`}
                            className={`mx-3 text-base md:text-lg font-bold cursor-pointer p-1 rounded transition duration-300 ease-in-out ${
                                item === "Contact"
                                    ? "border-2 border-accent-500 hover:bg-primary-700"
                                    : "hover:bg-primary-600"
                            }`}>
                            {item === "References" ? (
                                <>
                                    <span className="block md:hidden">Refs</span>
                                    <span className="hidden md:block">References</span>
                                </>
                            ) : (
                                item
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
