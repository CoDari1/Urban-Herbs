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

                    <a href="#contact" className="bg-secondary-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-secondary-400">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Card Layout */}
            <div className="container mx-auto flex flex-col items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {/* Mission Card */}
                    <div className="bg-secondary-50 p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Our Mission</h2>
                        <p className="text-text-600 text-lg">
                            We believe in a sustainable food system that prioritizes fresh, seasonal, and local ingredients. Our goal is to empower communities through healthy eating while reducing the carbon footprint of food production. Every meal we serve is a step towards a greener future.
                        </p>
                    </div>

                    {/* Sustainability Card */}
                    <div className="bg-secondary-50 p-8 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Sustainability at Our Core</h2>
                        <p className="text-text-600 text-lg">
                            We are committed to sustainable practices, from the way we source our ingredients to how we package and deliver our meals. By supporting local farmers and using eco-friendly packaging, we ensure that every step of our process has a minimal impact on the environment.
                        </p>
                    </div>

                    {/* Team Card */}
                    <div className="bg-secondary-50 p-8 rounded-lg shadow-xl md:col-span-2 lg:col-span-1">
                        <h2 className="text-2xl font-semibold text-primary-500 mb-4">Meet the Team</h2>
                        <p className="text-text-600 text-lg">
                            Our team is made up of passionate individuals who are dedicated to making a difference in the food industry. From chefs to farmers, we are united by our love for fresh, local, and sustainable ingredients.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Member Cards */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 my-16">
                {/* Alice Card */}
                <div className="bg-secondary-200 p-6 rounded-lg shadow-xl">
                    <img src="/team-member-1.jpg" alt="Alice Johnson" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-xl font-semibold text-text-900">Alice Johnson</h3>
                    <p className="text-text-500">Head Chef</p>
                </div>
                {/* Bob Card */}
                <div className="bg-secondary-200 p-6 rounded-lg shadow-xl">
                    <img src="/team-member-2.jpg" alt="Bob Smith" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-xl font-semibold text-text-900">Bob Smith</h3>
                    <p className="text-text-500">Farm Manager</p>
                </div>
                {/* Carla Card */}
                <div className="bg-secondary-200 p-6 rounded-lg shadow-xl">
                    <img src="/team-member-3.jpg" alt="Carla Lee" className="w-full h-40 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-xl font-semibold text-text-900">Carla Lee</h3>
                    <p className="text-text-500">Sustainability Coordinator</p>
                </div>
            </div>

            {/* Contact Card */}
            <div id="contact" className="container mx-auto px-6 py-16">
                <div className="bg-primary-100 p-8 rounded-lg shadow-xl text-center">
                    <h2 className="text-2xl font-semibold text-primary-500 mb-4">Get In Touch</h2>
                    <p className="text-text-600 text-lg mb-8">
                        Have any questions or want to collaborate? We’d love to hear from you. Reach out to us, and let’s create something delicious together.
                    </p>
                    <a href="/Contact" className="bg-accent-500 text-white py-2 px-6 rounded-md shadow-md hover:bg-accent-400">
                        Email Us
                    </a>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="bg-primary-500 text-white py-8">
                <div className="container mx-auto text-center px-6">
                    <p className="text-sm text-text-900">&copy; 2025 Urbn Herb. All rights reserved. yay</p>
                    <div className="mt-4">
                        <a href="https://www.instagram.com/urbnherb" className="text-text-900 hover:text-white mx-4">Instagram</a>
                        <a href="https://www.facebook.com/urbnherb" className="text-text-900 hover:text-white mx-4">Facebook</a>
                        <a href="https://twitter.com/urbnherb" className="text-text-900 hover:text-white mx-4">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;
