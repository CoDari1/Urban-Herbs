import Navbar from "@/app/Components/Navbar";
import FoodCarousel from "@/app/Components/FoodCarousel";

export default function Home() {
    return (
        <div id='Home' className='flex flex-col items-center justify-center min-h-screen py-2 overflow-hidden scrollbar-custom'>
            <Navbar/>
            <div className='w-full h-full'>
                <FoodCarousel/>
            </div>
        </div>
    )
}