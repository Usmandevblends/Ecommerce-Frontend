import React from "react";
import DummayImage from "../assets/Images/Dumy.webp";

const categories = [
    {
        title: "Men",
        imageUri: DummayImage,
    },
    {
        title: "Women",
        imageUri: DummayImage,
    },
    {
        title: "Kids",
        imageUri: DummayImage,
    },
];
function CategorySection() {
    return (
        <>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer mt-8">
                {categories.map((Category, index) => (
                    <div
                        key={index}
                        className="relative transform transition-transform duration-300 hover:scale-105" >
                        <img src={Category.imageUri} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <div className="absolute top-20 left-20">
                            <p className="text-xl font-bold">{Category.title}</p>
                            <p className="text-gray-600">View All</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CategorySection;
