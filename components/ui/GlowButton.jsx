import React from 'react';

const GlowButton = ({ onClick, children }) => {
    return (
        <button
            className="btn-101 relative flex items-center justify-center text-white font-poppins font-semibold uppercase px-12 py-3 rounded-lg bg-transparent border-0 outline-none cursor-pointer group"
            onClick={onClick}
        >
            {children}
            {/* SVG filter for glow effect */}
            <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur result="coloredBlur" stdDeviation="5" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
            </svg>
            <svg className="absolute inset-0 w-full h-full filter-glow">
                <rect
                    className="fill-none stroke-white stroke-2 rounded-xl stroke-dasharray-[185%] stroke-dashoffset-[80%] opacity-0 group-hover:opacity-60 group-hover:animate-snake"
                />
            </svg>
        </button>
    );
};

export default GlowButton;
