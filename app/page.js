


import Navbar from "@/app/Components/Navbar";
import FoodCarousel from "@/app/Components/FoodCarousel";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-2 overflow-hidden">
            {/* Navbar - Fixed at the top (Optional) */}
            <Navbar className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" />

            {/* Full-Page Carousel at the top */}
            <div className="w-full h-screen">
                <FoodCarousel images={[
                    "/imgs/carousel/Gemini_Generated_Image_uyqhxpuyqhxpuyqh.jpg",
                    "/imgs/carousel/Caronchi_Photography_181030_1047.jpg"
                ]} />
            </div>

            {/* Content Below */}
            <div className="w-full flex flex-col items-center justify-center py-20 px-6 space-y-16">
                <section className="max-w-4xl text-center">
                    <h2 className="text-4xl font-bold">Welcome to Urban Herb</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Discover the freshest, locally grown produce to nourish your body and soul.
                    </p>
                </section>

                <section className="max-w-4xl text-center">
                    <h2 className="text-4xl font-bold">Our Mission</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We are dedicated to sustainable farming and supporting our local community.
                    </p>
                </section>
            </div>
        </div>
    );
}
