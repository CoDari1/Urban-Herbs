"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setVisible(false); // Hide on scroll down
            } else {
                setVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            id="Heading"
            className={`fixed top-0 w-full z-20 transition-transform duration-300 ${
                visible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div id="Navbar" className="flex items-center justify-between bg-secondary-900 h-20 md:h-24">
                {/* Logo */}
                <div
                    id="Logo"
                    className="flex items-center justify-start w-fit h-full cursor-pointer"
                    onClick={() => (window.location.href = "/")}
                >
                    <img
                        src="/imgs/navbar/UrbnHerb.png"
                        className="w-32 h-32 mt-[-5px] md:w-36 md:h-36"
                    />
                </div>

                {/* Menu Links */}
                <div id="Menu" className="flex items-center justify-end h-full">
                    {["About", "Menu", "Contact"].map((item) => (
                        <a
                            key={item}
                            className={`mx-6 text-2xl font-bold cursor-pointer p-2 rounded transition duration-300 ease-in-out ${
                                item === "Contact"
                                    ? "border-2 border-accent-500 hover:bg-primary-700"
                                    : "hover:bg-primary-600"
                            }`}
                            onClick={() => (window.location.href = `/${item}`)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
