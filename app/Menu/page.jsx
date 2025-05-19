'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const dishes = [
    {
        "title": "Garlic Parmesan Breadsticks",
        "imageUrl": "/imgs/menu/Appetizers/Breadsticks.jpg",
        "options": [
            { "label": "6 Breadsticks", "calories": 266, "price": "$2.99" },
            { "label": "12 Breadsticks", "calories": 536, "price": "$5.99" }
        ],
        "allergy": "This dish contains dairy, gluten, and garlic",
        "typeOf": "Appetizer"
    },
    {
        "title": "Ranch Deviled Eggs",
        "imageUrl": "/imgs/menu/Appetizers/DeviledEggs.webp",
        "options": [
            { "label": "6 Deviled eggs", "calories": 204, "price": "$4.99" },
            { "label": "12 Deviled eggs", "calories": 412, "price": "$6.99" }
        ],
        "allergy": "This dish contains eggs, dairy, and gluten",
        "typeOf": "Appetizer"
    },
    {
        "title": "Vegan Mozzarella Sticks",
        "imageUrl": "/imgs/menu/Appetizers/Cheesesticks.jpg",
        "options": [
            { "label": "6 Mozzarella sticks", "calories": 432, "price": "$7.99" },
            { "label": "12 Mozzarella sticks", "calories": 1046, "price": "$9.99" }
        ],
        "allergy": "This dish contains dairy",
        "typeOf": "Appetizer"
    },
    {
        "title": "Smoked Feta Dip",
        "imageUrl": "/imgs/menu/Appetizers/SmokedFetaDip.webp",
        "options": [
            { "label": "Family Serving", "calories": 897, "price": "$8.30" },
            { "label": "Individual Serving", "calories": 442, "price": "$6.45" }
        ],
        "allergy": "This dish contains dairy",
        "typeOf": "Appetizer"
    },
    {
        "title": "Hurricane Chips",
        "imageUrl": "/imgs/menu/Appetizers/HurricaneChips.webp",
        "options": [
            { "label": "Family Serving", "calories": 437, "price": "$6.30" },
            { "label": "Individual Serving", "calories": 215, "price": "$4.45" }
        ],
        "allergy": "This dish may contain gluten and oils",
        "typeOf": "Appetizer"
    },
    {
        "title": "Broccoli Cheese Soup",
        "imageUrl": "imgs/menu/Side Dishes/BroccoliCheeseSoup.jpg",
        "options": [
            { "label": "Family Serving", "calories": 400, "price": "$2.50" },
            { "label": "Individual Serving", "calories": 290, "price": "$1.25" }
        ],
        "allergy": "This dish contains dairy and broccoli",
        "typeOf": "Side Dish"
    },
    {
        "title": "Smashed Zucchini with Pesto Burrata",
        "imageUrl": "/imgs/menu/Side Dishes/Zucchini.jpg",
        "options": [
            { "label": "Family Serving", "calories": 1532, "price": "$5.30" },
            { "label": "Individual Serving", "calories": 473, "price": "$3.20" }
        ],
        "allergy": "This dish contains dairy and zucchini",
        "typeOf": "Side Dish"
    },
    {
        "title": "Grilled Vegetables",
        "imageUrl": "/imgs/menu/Side Dishes/GrilledVegetables.jpg",
        "options": [
            { "label": "5 Grilled Vegetables", "price": "$3.50" },
            { "label": "3 Grilled Vegetables", "price": "$2.25" }
        ],
        "allergy": "This dish may contain various vegetables",
        "typeOf": "Side Dish"
    },
    {
        "title": "Classic Minestrone Soup",
        "imageUrl": "/imgs/menu/Side Dishes/MinestroneSoup.jpeg",
        "options": [
            { "label": "Family Serving", "calories": 415, "price": "$10.20" },
            { "label": "Individual Serving", "calories": 740, "price": "$2.25" }
        ],
        "allergy": "This dish contains vegetables, legumes, and gluten",
        "typeOf": "Side Dish"
    },
    {
        "title": "Basic Polenta",
        "imageUrl": "/imgs/menu/Side Dishes/Polenta.jpg",
        "options": [
            { "label": "Family Serving", "calories": 600, "price": "$1.50" },
            { "label": "Individual Serving", "calories": 150, "price": "$0.50" }
        ],
        "allergy": "This dish contains corn and dairy",
        "typeOf": "Side Dish"
    },
    {
        "title": "Margherita Pizza",
        "imageUrl": "/imgs/menu/Main dishes/VeggiePizza.jpg",
        "options": [
            { "size": "Large", "calories": 1380, "price": 19.15 },
            { "size": "Medium", "calories": 1145, "price": 17.35 },
            { "size": "Small", "calories": 960, "price": 14.45 }
        ],
        "typeOf": "Main Dish",
        "allergy": "This dish contains gluten and dairy products"
    },
    {
        "title": "Eggplant Parmesan",
        "imageUrl": "/imgs/menu/Main dishes/EggplantParmesan.jpg",
        "options": [
            { "size": "Normal", "calories": 660, "price": 11.15 },
            { "size": "Kid’s meal", "calories": 335, "price": 8.55 }
        ],
        "typeOf": "Main Dish",
        "allergy": "This dish contains eggplant and dairy products"
    },
    {
        "title": "One Pot Pasta",
        "imageUrl": "/imgs/menu/Main dishes/OnePotPasta.jpg",
        "options": [
            { "size": "Large", "calories": 820, "price": 12.99 },
            { "size": "Medium", "calories": 465, "price": 10.25 },
            { "size": "Small", "calories": 280, "price": 7.50 }
        ],
        "typeOf": "Main Dish",
        "allergy": "This dish contains gluten, dairy, and various vegetables"
    },
    {
        "title": "Caprese Salad",
        "imageUrl": "/imgs/menu/Main dishes/CapresseSalad.jpg",
        "options": [
            { "size": "Large", "calories": 345, "price": 13.00 },
            { "size": "Medium", "calories": 250, "price": 11.15 },
            { "size": "Small", "calories": 201, "price": 9.50 }
        ],
        "typeOf": "Main Dish",
        "allergy": "This dish contains dairy, tomatoes, basil, and olive oil"
    },
    {
        "title": "Arrabbiata",
        "imageUrl": "/imgs/menu/Main dishes/Arrabbiata.jpg",
        "options": [
            { "size": "Large", "calories": 451, "price": 12.99 },
            { "size": "Medium", "calories": 307, "price": 10.25 },
            { "size": "Small", "calories": 243, "price": 7.50 }
        ],
        "typeOf": "Main Dish",
        "allergy": "This dish contains dairy, gluten, tomatoes, and various spices"
    }

];

const groupedTypes = ["Appetizer", "Side Dish", "Main Dish"];

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen py-4 px-2 sm:px-4">
        {groupedTypes.map((type) => {
            const filteredDishes = dishes.filter(dish => dish.typeOf === type);
            if (filteredDishes.length === 0) return null;
    
            const firstRow = filteredDishes.slice(0, 3);
            const secondRow = filteredDishes.slice(3, 5);

            return (
                <div key={type} className="w-full mt-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-8 text-center">
                        {type === "Appetizer" ? "Appetizers" : `${type}es`}
                    </h2>
    
                    <div className="flex flex-col space-y-8">
                        {/* First Row */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {firstRow.map((dish, index) => (
                                <Card key={index} className="bg-primary-600 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-sm">
                                    <CardHeader className="p-5 bg-primary-700 rounded-t-xl">
                                        <CardTitle className="text-2xl font-bold text-white text-center">{dish.title}</CardTitle>
                                        <CardDescription className="text-sm text-white opacity-80 text-center">{dish.allergy}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="flex justify-center w-full">
                                            <img src={dish.imageUrl} alt={dish.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                                        </div>
                                        <div className="text-white text-sm space-y-3 w-full text-center mt-4">
                                            {dish.options.map((opt, optIndex) => (
                                                <p key={optIndex} className="font-semibold">
                                                    {opt.label || opt.size} –{' '}
                                                    {opt.calories && <span>{opt.calories} kcal</span>}
                                                    {opt.calories && opt.price && <span> • </span>}
                                                    {opt.price && <span>{opt.price}</span>}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
    
                        {/* Second Row */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {secondRow.map((dish, index) => (
                                <Card key={index} className="bg-primary-600 shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-full max-w-sm">
                                    <CardHeader className="p-5 bg-primary-700 rounded-t-xl">
                                        <CardTitle className="text-2xl font-bold text-white text-center">{dish.title}</CardTitle>
                                        <CardDescription className="text-sm text-white opacity-80 text-center">{dish.allergy}</CardDescription>
                                    </CardHeader>
                                    <CardContent className="p-6 flex flex-col items-center">
                                        <div className="flex justify-center w-full">
                                            <img src={dish.imageUrl} alt={dish.title} className="w-full h-48 object-cover rounded-lg shadow-md" />
                                        </div>
                                        <div className="text-white text-sm space-y-3 w-full text-center mt-4">
                                            {dish.options.map((opt, optIndex) => (
                                                <p key={optIndex} className="font-semibold">
                                                    {opt.label || opt.size} –{' '}
                                                    {opt.calories && <span>{opt.calories} kcal</span>}
                                                    {opt.calories && opt.price && <span> • </span>}
                                                    {opt.price && <span>{opt.price}</span>}
                                                </p>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
    )}

    export default Page;