'use client';

const About = () => {
    return (
        <div className="font-sans text-text-900 bg-background-900 py-16">
            {/* Header Section */}
            <div className="container mx-auto text-center px-6 mb-16 mt-20">
                <h1 className="text-5xl font-bold text-primary-500 mb-4">
                    Discover Urbn Herb: A Farm-to-Table Experience
                </h1>
                <p className="text-xl text-text-500 mb-8 max-w-2xl mx-auto">
                    At Urbn Herb, we bring the freshest, locally sourced ingredients straight to your plate. Our commitment to sustainability, quality, and taste is reflected in every dish we create.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="#contact" className="bg-secondary-500 text-white py-2 px-6 rounded-2xl shadow-md hover:bg-secondary-400">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Info Cards Section */}
            <div className="container mx-auto flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Our Mission</h2>
                        <p className="text-text-600 text-lg">
                            We believe in a sustainable food system that prioritizes fresh, seasonal, and local ingredients. Our goal is to empower communities through healthy eating while reducing the carbon footprint of food production.
                        </p>
                    </div>
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Sustainability at Our Core</h2>
                        <p className="text-text-600 text-lg">
                            We are committed to sustainable practices, from the way we source our ingredients to how we package and deliver our meals.
                        </p>
                    </div>
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Meet the Team</h2>
                        <p className="text-text-600 text-lg">
                            Our team is made up of passionate individuals who are dedicated to making a difference in the food industry.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-center space-y-16 py-10">
                {/* Welcome Section */}
                <section className="w-[90%] max-w-5xl text-center flex flex-col items-center px-6 py-10 bg-green-600 text-white rounded-2xl shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-bold">Welcome to Urban Herb</h2>
                    <p className="text-lg md:text-xl mt-6 max-w-2xl">
                        At Urban Herb, we bring fresh, locally grown produce straight to your table. Our commitment to quality and sustainability ensures you get the best ingredients to nourish your body and support a healthier planet.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="w-[90%] max-w-5xl text-center flex flex-col justify-center items-center px-6 py-12 bg-green-400 text-gray-900 rounded-2xl shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl">
                        We are dedicated to sustainable farming and building a stronger local food ecosystem. By supporting small-scale farmers, reducing food waste, and prioritizing organic growth methods, we help cultivate a future where fresh food is accessible to all.
                    </p>
                </section>

                {/* Products Section */}
                <section className="w-[90%] max-w-6xl px-6 bg-green-600 text-white rounded-2xl shadow-xl py-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { src: "/imgs/products/herbs.jpg", alt: "Fresh Herbs" },
                            { src: "/imgs/products/vegetables.jpg", alt: "Organic Vegetables" },
                            { src: "/imgs/products/specialty.jpg", alt: "Specialty Produce" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white text-gray-900 p-4 rounded-2xl shadow-lg transition-transform hover:scale-105">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-60 object-cover rounded-xl"
                                />
                                <p className="mt-4 font-semibold text-lg">{item.alt}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="w-[90%] max-w-5xl text-center flex flex-col justify-center items-center px-6 py-12 bg-green-400 text-gray-900 rounded-2xl shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
                    <div className="mt-8 space-y-6">
                        <p className="text-lg md:text-xl max-w-2xl">
                            “Urban Herb has completely changed the way I cook! Their produce is always fresh, and I love knowing I’m supporting local farmers.” – <span className="font-semibold">Alex R.</span>
                        </p>
                        <p className="text-lg md:text-xl max-w-2xl">
                            “I never knew organic food could taste this good. The basil and mint are my absolute favorites!” – <span className="font-semibold">Samantha L.</span>
                        </p>
                    </div>
                </section>

                {/* Sustainability */}
                <section className="w-[90%] max-w-5xl text-center flex flex-col justify-center items-center px-6 py-12 bg-green-600 text-white rounded-2xl shadow-xl">
                    <h2 className="text-4xl md:text-5xl font-bold">Our Commitment to Sustainability</h2>
                    <p className="mt-6 text-lg md:text-xl max-w-2xl">
                        We believe in farming that respects the environment. By using eco-friendly growing techniques, composting, and minimizing our carbon footprint, Urban Herb ensures that every product is both delicious and responsibly sourced.
                    </p>
                </section>
            </div>


            {/* Team Members */}
            <div className="container mx-auto flex flex-col items-center my-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl">
                        <img src="/team-member-1.jpg" alt="Portrait of Alice Johnson, Head Chef" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">Alice Johnson</h3>
                        <p className="text-text-600 text-lg">Head Chef</p>
                    </div>
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl">
                        <img src="/team-member-2.jpg" alt="Portrait of Bob Smith, Farm Manager" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">Bob Smith</h3>
                        <p className="text-text-600 text-lg">Farm Manager</p>
                    </div>
                    <div className="bg-secondary-50 p-8 rounded-xl shadow-xl md:col-span-2 lg:col-span-1">
                        <img src="/team-member-3.jpg" alt="Portrait of Carla Lee, Sustainability Coordinator" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                        <h3 className="text-2xl font-semibold text-primary-500 mb-4">Carla Lee</h3>
                        <p className="text-text-600 text-lg">Sustainability Coordinator</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div id="contact" className="container mx-auto px-6 py-16">
                <div className="bg-primary-100 p-8 rounded-2xl shadow-xl text-center">
                    <h2 className="text-2xl font-semibold text-primary-500 mb-4">Get In Touch</h2>
                    <p className="text-text-600 text-lg mb-8">
                        Have any questions or want to collaborate? We’d love to hear from you. Reach out to us, and let’s create something delicious together.
                    </p>
                    <a href="/Contact" className="bg-accent-500 text-white py-2 px-6 rounded shadow-md hover:bg-accent-400">
                        Email Us
                    </a>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-primary-500 text-white py-8">
                <div className="container mx-auto text-center px-6">
                    <p className="text-sm text-text-900">&copy; 2025 Urbn Herb. All rights reserved.</p>
                    <div className="mt-4">
                        <a href="https://www.instagram.com/urbn.herb/" className="text-text-900 hover:text-white mx-4">Instagram</a>
                        <a href="https://facebook.com/Urbn_Herb" className="text-text-900 hover:text-white mx-4">Facebook</a>
                        <a href="https://x.com/Urbn_Herb" className="text-text-900 hover:text-white mx-4">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
