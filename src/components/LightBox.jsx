import React, { useState } from "react";
import * as images from "../assets/images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

const PRODUCTS = [
  {
    id: 0,
    image: images.productImage1,
    thumb: images.productThumb1,
  },
  {
    id: 1,
    image: images.productImage2,
    thumb: images.productThumb2,
  },
  {
    id: 2,
    image: images.productImage3,
    thumb: images.productThumb3,
  },
  {
    id: 3,
    image: images.productImage4,
    thumb: images.productThumb4,
  },
];

export default function LightBox({ onShow, showNavigation }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        effect={"fade"}
        navigation={true}
        modules={[Navigation, EffectFade, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="relative h-80 sm:h-auto"
      >
        {PRODUCTS.map((product) => {
          return (
            <SwiperSlide key={product.id} onClick={onShow}>
              <img src={product.image} alt="" className="sm:rounded-2xl cursor-pointer object-cover w-full h-full" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        watchSlidesProgress={true}
        slidesPerView={4}
        spaceBetween={20}
        className="sm:flex hidden py-5 items-center justify-between"
      >
        {PRODUCTS.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className={`swiper-thumb rounded-xl cursor-pointer border-2 border-transparent overflow-hidden relative transition-all duration-200 ease-in-out`}
            >
              <img src={product.thumb} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
