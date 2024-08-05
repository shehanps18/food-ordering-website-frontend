import React from 'react';

export const CarouselItem = ({ image, title }) => {
    const handleError = (event) => {
        // Provide a fallback image or handle the error as needed
        event.target.src = 'fallback-image-url'; // Replace with your fallback image URL
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <img
                className='w-[10rem] h-[10rem] lg:h-[14rem] lg:w-[14rem] rounded-full object-cover object-center'
                src={image}
                alt={title}
                onError={handleError}
            />
            <span className='py-5 font-semibold text-xl text-gray-400'>
                {title}
            </span>
        </div>
    );
};
