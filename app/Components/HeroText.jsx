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

            <Button
                className="mt-6 px-8 py-4 text-4xl bg-primary-400 hover:bg-primary-500 hover:shadow-lg animate-fade-in-up"
                onClick={() => alert("Learn More Clicked!")}
            >
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
