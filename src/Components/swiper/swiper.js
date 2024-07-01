import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

SwiperCore.use([Navigation, Pagination, Autoplay]);

import Image1 from '../../assets/Group 53.png';
import Image2 from '../../assets/Group 54.png';
import Image3 from '../../assets/Group 55.png';

const slides = [
  { image: Image1, alt: 'Slide 1' },
  { image: Image2, alt: 'Slide 2' },
  { image: Image3, alt: 'Slide 3' }
];

const ImageCarousel = ({ navigation = true, pagination = true, autoplay = false, loop = true, spaceBetween = 30 }) => {
  return (
    <Swiper
      navigation={navigation}
      pagination={pagination}
      autoplay={autoplay ? { delay: 2500, disableOnInteraction: false } : false}
      loop={loop}
      spaceBetween={spaceBetween}
      className="mySwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.image} alt={slide.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
