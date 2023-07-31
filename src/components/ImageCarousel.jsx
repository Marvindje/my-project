import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageCarousel = () => {
  const images = [
    'mohamad-khosravi-4fkUAduhoSY-unsplash.jpg',
    'mediamodifier-0UBg7jhsSxs-unsplash.jpg',
    'jesus-eca-qM2yxI-PcPs-unsplash.jpg',
    'benjamin-rascoe-WdhmRPvMn7A-unsplash.jpg',
    'peri-stojnic-iM9rXbjAoXI-unsplash.jpg',
    'camila-seves-espasandin-o4RpLOAF2OA-unsplash.jpg',
    'faith-yarn-Wr0TpKqf26s-unsplash.jpg',
    'gama-films-7hg75UX_0zY-unsplash.jpg'
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
         <img src={`/articles/${image}`} alt="Product" className="w-32 h-32 rounded-lg shadow-lg" />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
