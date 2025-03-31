// "use client";
//
//
// import FoodCarousel from "@/app/Components/FoodCarousel";
//
//
// const Home = () => {
//     return (
//         <div className="flex flex-col items-center justify-start min-h-screen py-2 overflow-hidden">
//             {/* Full-Page Carousel at the top */}
//             <div className="w-full h-screen">
//                 <FoodCarousel
//                     images={[
//                         "/imgs/carousel/Gemini_Generated_Image_uyqhxpuyqhxpuyqh.jpg",
//                         "/imgs/carousel/Caronchi_Photography_181030_1047.jpg",
//                     ]}
//                 />
//             </div>
//
//
//             {/* Content Below */}
//             <div className="w-full flex flex-col items-center justify-center py-20 px-6 space-y-16">
//                 <section className="max-w-4xl text-center">
//                     <h2 className="text-4xl font-bold">Welcome to Urban Herb</h2>
//                     <p className="mt-4 text-lg text-gray-600">
//                         Discover the freshest, locally grown produce to nourish your body and soul.
//                     </p>
//                 </section>
//
//
//                 <section className="max-w-4xl text-center">
//                     <h2 className="text-4xl font-bold">Our Mission</h2>
//                     <p className="mt-4 text-lg text-gray-600">
//                         We are dedicated to sustainable farming and supporting our local community.
//                     </p>
//                 </section>
//             </div>
//         </div>
//     );
// };
//
//
// export default Home;


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

            {/* Main Content */}
            <div className="w-full flex flex-col items-center justify-center space-y-10 py-10">
                {/* Welcome Section */}
                <section className="w-[98%] h-[75vh] max-w-7xl text-center flex flex-col justify-center items-center px-4 bg-green-600 text-white rounded-xl shadow-lg">
                    <h2 className="text-5xl font-bold">Welcome to Urban Herb</h2>
                    <p className="mt-6 text-xl max-w-3xl">
                        At Urban Herb, we bring fresh, locally grown produce straight to your table.
                        Our commitment to quality and sustainability ensures you get the best ingredients
                        to nourish your body and support a healthier planet.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="w-[98%] h-[75vh] max-w-7xl text-center flex flex-col justify-center items-center px-4 bg-green-400 text-gray-900 rounded-xl shadow-lg">
                    <h2 className="text-5xl font-bold">Our Mission</h2>
                    <p className="mt-6 text-xl max-w-3xl">
                        We are dedicated to sustainable farming and building a stronger local food
                        ecosystem. By supporting small-scale farmers, reducing food waste, and prioritizing
                        organic growth methods, we help cultivate a future where fresh food is accessible
                        to all.
                    </p>
                </section>

                {/* Featured Products */}
                <section className="w-[98%] max-w-7xl px-4 bg-green-600 text-white rounded-xl shadow-lg py-10">
                    <h2 className="text-5xl font-bold text-center mb-10">Featured Products</h2>

                    {/* Product Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Fresh Herbs Card */}
                        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col h-[50vh]">
                            <img src="/imgs/products/herbs.jpg" alt="Fresh Herbs" className="w-full h-full object-cover rounded-lg"/>
                        </div>

                        {/* Organic Vegetables Card */}
                        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col h-[50vh]">
                            <img src="/imgs/products/vegetables.jpg" alt="Organic Vegetables" className="w-full h-full object-cover rounded-lg"/>
                        </div>

                        {/* Specialty Produce Card */}
                        <div className="bg-white text-gray-900 p-6 rounded-xl shadow-lg flex flex-col h-[50vh]">
                            <img src="/imgs/products/specialty.jpg" alt="Specialty Produce" className="w-full h-full object-cover rounded-lg"/>
                        </div>
                    </div>
                </section>


                {/* Customer Testimonials */}
                <section className="w-[98%] h-[75vh] max-w-7xl text-center flex flex-col justify-center items-center px-4 bg-green-400 text-gray-900 rounded-xl shadow-lg">
                    <h2 className="text-5xl font-bold">What Our Customers Say</h2>
                    <p className="mt-6 text-xl max-w-3xl">
                        “Urban Herb has completely changed the way I cook! Their produce is always fresh,
                        and I love knowing I’m supporting local farmers.” - <span className="font-semibold">Alex R.</span>
                    </p>
                    <p className="mt-4 text-xl max-w-3xl">
                        “I never knew organic food could taste this good. The basil and mint are my
                        absolute favorites!” - <span className="font-semibold">Samantha L.</span>
                    </p>
                </section>

                {/* Sustainability Commitment */}
                <section className="w-[98%] h-[75vh] max-w-7xl text-center flex flex-col justify-center items-center px-4 bg-green-600 text-white rounded-xl shadow-lg">
                    <h2 className="text-5xl font-bold">Our Commitment to Sustainability</h2>
                    <p className="mt-6 text-xl max-w-3xl">
                        We believe in farming that respects the environment. By using eco-friendly
                        growing techniques, composting, and minimizing our carbon footprint,
                        Urban Herb ensures that every product is both delicious and responsibly sourced.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Home;
