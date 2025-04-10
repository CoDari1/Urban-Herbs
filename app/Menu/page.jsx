'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const dishes = [
    {
        "title": "Garlic Parmesan Breadsticks",
        "imageUrl": "" +
            "/imgs/menu/Appetizers/Breadsticks.jpg",
        "options": [
            { "label": "6 Breadsticks", "calories": 266, "price": "$2.99" },
            { "label": "12 Breadsticks", "calories": 536, "price": "$5.99" }
        ],
        "allergy": "This dish contains dairy, gluten, and garlic"
    },
    {
        "title": "Ranch Deviled Eggs",
        "imageUrl": "/imgs/menu/Appetizers/DeviledEggs.webp",
        "options": [
            { "label": "6 Deviled eggs", "calories": 204, "price": "$4.99" },
            { "label": "12 Deviled eggs", "calories": 412, "price": "$6.99" }
        ],
        "allergy": "This dish contains eggs, dairy, and gluten"
    },
    {
        "title": "Vegan Mozzarella Sticks",
        "imageUrl": "/imgs/menu/Appetizers/Cheesesticks.jpg",
        "options": [
            { "label": "6 Mozzarella sticks", "calories": 432, "price": "$7.99" },
            { "label": "12 Mozzarella sticks", "calories": 1046, "price": "$9.99" }
        ],
        "allergy": "This dish contains dairy"
    },
    {
        "title": "Smoked Feta Dip",
        "imageUrl": "/imgs/menu/Appetizers/SmokedFetaDip.webp",
        "options": [
            { "label": "Family Serving", "calories": 897, "price": "$8.30" },
            { "label": "Individual Serving", "calories": 442, "price": "$6.45" }
        ],
        "allergy": "This dish contains dairy"
    },
    {
        "title": "Hurricane Chips",
        "imageUrl": "/imgs/menu/Appetizers/HurricaneChips.webp",
        "options": [
            { "label": "Family Serving", "calories": 437, "price": "$6.30" },
            { "label": "Individual Serving", "calories": 215, "price": "$4.45" }
        ],
        "allergy": "This dish may contain gluten and oils"
    },
    {
        "title": "Broccoli Cheese Soup",
        "imageUrl": "imgs/menu/Side Dishes/BroccoliCheeseSoup.jpg",
        "options": [
            { "label": "Family Serving", "calories": 400, "price": "$2.50" },
            { "label": "Individual Serving", "calories": 290, "price": "$1.25" }
        ],
        "allergy": "This dish contains dairy and broccoli"
    },
    {
        "title": "Smashed Zucchini with Pesto Burrata",
        "imageUrl": "https://www.eatingwell.com/recipe/7994048/smashed-zucchini-with-pesto-burrata/",
        "options": [
            { "label": "Family Serving", "calories": 1532, "price": "$5.30" },
            { "label": "Individual Serving", "calories": 473, "price": "$3.20" }
        ],
        "allergy": "This dish contains dairy and zucchini"
    },
    {
        "title": "Grilled Vegetables",
        "imageUrl": "https://www.loveandlemons.com/grilled-vegetables/",
        "options": [
            { "label": "5 Grilled Vegetables", "price": "$3.50" },
            { "label": "3 Grilled Vegetables", "price": "$2.25" }
        ],
        "allergy": "This dish may contain various vegetables"
    },
    {
        "title": "Classic Minestrone Soup",
        "imageUrl": "https://www.eatingbirdfood.com/classic-minestrone-soup/",
        "options": [
            { "label": "Family Serving", "calories": 415, "price": "$10.20" },
            { "label": "Individual Serving", "calories": 740, "price": "$2.25" }
        ],
        "allergy": "This dish contains vegetables, legumes, and gluten"
    },
    {
        "title": "Basic Polenta",
        "imageUrl": "https://cooking.nytimes.com/recipes/1014527-basic-polenta",
        "options": [
            { "label": "Family Serving", "calories": 600, "price": "$1.50" },
            { "label": "Individual Serving", "calories": 150, "price": "$0.50" }
        ],
        "allergy": "This dish contains corn and dairy"
    }
];
const Page = () => {
    return (

        console.log(dishes.imageUrl),
        <div className="flex flex-col items-center">
            {/* Hero Section */}
            <div className="h-[600px] w-full flex rounded-3xl bg-gradient-to-r from-red-500 to-orange-500 mt-[120px] justify-center items-center shadow-xl">
                <h1 className="text-4xl text-white font-bold">Menu Selection</h1>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 p-6">
                {dishes.slice(0, 15).map((dish, index) => (
                    <Card key={index} className="bg-primary-600 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                        <CardHeader className="p-4 bg-primary-700 rounded-t-xl">
                            <CardTitle className="text-xl font-semibold text-white">{dish.title}</CardTitle>
                            <CardDescription className="text-sm text-white opacity-80">{dish.allergy}</CardDescription>
                        </CardHeader>
                        <CardContent className="py-4 space-y-4 flex flex-col items-center">
                            <img
                                src={dish.imageUrl}
                                alt={dish.title}
                                className="w-full h-40 object-cover rounded-lg shadow-md"
                            />
                            <div className="text-white text-sm space-y-2 w-full text-center">
                                {dish.options.map((opt, optIndex) => (
                                    <p key={optIndex}>
                                        {opt.label}: <span className="font-semibold">
                                            {opt.calories ? `${opt.calories} kcal` : ''} {opt.price}
                                        </span>
                                    </p>
                                ))}
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
};

export default Page;
