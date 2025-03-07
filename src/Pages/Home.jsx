import React from 'react'
import { Categories } from '../mockData'
import HeroImage from '../assets/Images/Hero.jpg'
function Home() {
    return (
        <>
            <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
                <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
                    <div className='w-full md:w-3/12'>
                        <div className='bg-red-500 text-white font-bold '>SHOP BY CATEGORIES</div>
                        <ul>
                            {Categories.map((category, index) => (
                                <li key={index}>
                                    <div></div>
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <img src={HeroImage} />
                        <div>
                            <p>Bug e-shop</p>
                            <h2>WELCOME TO E-SHOP</h2>
                            <p>MILLION+ PRODUCTS</p>
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home