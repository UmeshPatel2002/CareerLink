import React from 'react';
import Slider from "react-slick";
import prev_icon from '../assets/pngegg.png'

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return (
    <button 
      className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 p-2 h-10 w-10 rotate-180 z-10"
      onClick={onClick}
    >
      <img src={prev_icon} alt=''/>
    </button>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <button 
      className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 p-2 h-10 w-10 z-10"
      onClick={onClick}
    >
      <img src={prev_icon} alt=''/>
    </button>
  );
};

const CategoryCarousel = () => {
  const categories = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "Fullstack Developer"
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />
  };

  return (
    <div className="relative mx-auto max-w-[1440px] flex justify-center items-center ">
        <div className='w-[80%] md:w-[40%] items-center'>
        <Slider {...settings}>
        {categories.map((category, index) => (
          <div key={index} className="p-2 md:p-4">
            <p className="bg-gray-200  shadow-md rounded-full text-center p-2 m-12">{category}</p>
          </div>
        ))}
      </Slider>
        </div>
     
    </div>
  );
};

export default CategoryCarousel;