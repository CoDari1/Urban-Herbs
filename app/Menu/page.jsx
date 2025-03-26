'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


const Page = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <div className="h-[600px] w-full flex rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 mt-[120px] justify-center items-center shadow-xl">
                <h1 className="text-4xl text-white font-bold">Menu Selection</h1>
            </div>


            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 p-6">
                {/* Loop to reduce redundancy */}
                {[...Array(10)].map((_, index) => (
                    <Card key={index} className="bg-primary-600 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <CardHeader className="p-4 bg-primary-700 rounded-t-xl">
                            <CardTitle className="text-xl font-semibold text-white">Dish {index + 1}</CardTitle>
                            <CardDescription className="text-sm text-white opacity-80">A brief description of the dish.</CardDescription>
                        </CardHeader>
                        <CardContent className="py-6 space-y-4">
                            <div className="w-28 h-28 bg-blue-600 rounded-full mx-auto"></div>


                            <div className="text-white">
                                <p className="text-sm">Calories: <span className="font-semibold">250 kcal</span></p>
                                <p className="text-sm">Sizes: <span className="font-semibold">Small, Medium, Large</span></p>
                                <p className="text-sm">Ingredients: <span className="font-semibold">Lettuce, Chicken, Cheese, Dressing</span></p>
                            </div>
                        </CardContent>
                        <CardFooter className="p-4 bg-primary-700 rounded-b-xl">
                            <button className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-200">
                                Add to Cart
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}


export default Page;
