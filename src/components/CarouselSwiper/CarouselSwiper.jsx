import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carouselSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const CarouselSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="https://www.linkpicture.com/q/Untitled-design-11_4.jpg"
            alt=""
          />

          <h1 className="slider__content__title">Best Desert Safaris</h1>
          <p className="slider__content__text">
            Don’t miss our popular Evening Desert Safari
            <button className="slider__content__btn">Book Now</button>
          </p>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://www.linkpicture.com/q/Untitled-design-11_4.jpg"
            alt=""
          />

          <h1 className="slider__content__title">Best Desert Safaris</h1>
          <p className="slider__content__text">
            Don’t miss our popular Evening Desert Safari
            <button className="slider__content__btn">Book Now</button>
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselSwiper;
