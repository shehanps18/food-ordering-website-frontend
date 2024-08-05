import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { topMeal } from './Topmeal'; // Ensure the path is correct
import { CarouselItem } from './CarouselItem'; // Ensure the path is correct

export const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };
  return (
    <div>
      <Slider {...settings}>
        {topMeal.map((item, index) => (
          <CarouselItem
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </Slider>
    </div>
  );
};
