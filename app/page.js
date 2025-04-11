"use client";

import FoodCarousel from "@/app/Components/FoodCarousel";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-2 overflow-hidden">
            {/* Full-Page Carousel */}
            <div className="w-full h-screen">
                <FoodCarousel
                    images={[
                        "/imgs/carousel/Gemini_Generated_Image_uyqhxpuyqhxpuyqh.jpg",
                        "/imgs/carousel/Caronchi_Photography_181030_1047.jpg",
                    ]}
                />
            </div>
        </div>
    );
};

export default Home;
