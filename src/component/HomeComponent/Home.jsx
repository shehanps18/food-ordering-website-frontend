import React from 'react';
import "./Home.css";
import { MultiItemCarousel } from './MultiItemCarousel';
import RestaurantCard from '../restaurantComponent/RestaurantCard';

export const Home = () => {
    const restaurant = [1, 1, 1];
    
    return (
        <div>
            <section className='banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-20 text-center'>
                    <p className='text-2xl lg:text-6xl font-bold z-20 py-5 text-white'>Foodies World</p>
                    <p className='z-20 text-gray-300 text-xl lg:text-4xl'>Taste the food</p>
                </div>
                <div className='cover absolute top-0 left-0 right-0'></div>
            </section>
            <section className='p-10 lg:py-10 lg:px-20'>
                <p className='text-2xl font-semibold text-gray-400 py-3 pb-10'>Top meals</p>
                <MultiItemCarousel />
            </section>
            <section className='px-5 lg:px-20'>
                <h1 className='text-2xl font-semibold text-gray-400 py-2'>
                    Order from Handpicked Favourites
                </h1>
                <div className='flex flex-wrap gap-4'>
                    {restaurant.map((item, index) => (
                        <RestaurantCard key={index} />
                    ))}
                </div>
            </section>
        </div>
    );
};
