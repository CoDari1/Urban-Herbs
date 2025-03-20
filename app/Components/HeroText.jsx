import { Button } from "@/components/ui/button";

export default function HeroText() {
    return (
        <div className="absolute inset-0 flex flex-col justify-center items-center text-text-900 text-center z-10">
            {/* Main Text */}
            <div className="text-5xl md:text-6xl font-bold space-y-2">
                <div className="animate-fade-in-up ">Fresh.</div>
                <div className="animate-fade-in-up delay-200 ">Local.</div>
                <div className="animate-fade-in-up delay-400 ">Sustainable.</div>
            </div>

            {/* Mission Statement */}
            <p className="mt-6 text-lg md:text-2xl font-medium animate-fade-in-up">
                Providing fresh produce to our community.
            </p>

            {/* Call to Action */}
            <Button className="mt-6 px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-2xl transition-all duration-300 hover:bg-green-700" onClick={() => window.location.href = '/About'}>
                Learn More
            </Button>

            {/* Tailwind Animations */}
            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 2s ease-out;
                }
            `}</style>
        </div>
    );
}
