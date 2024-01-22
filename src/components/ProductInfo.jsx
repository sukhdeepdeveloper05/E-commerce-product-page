import React, { useState } from "react";
import * as images from '../assets/images/images'
import Button from "./Button";

export default function ProductInfo({ onAddToCart }) {
  const [count, setCount] = useState(1);

  function increaseCount(max) {
    setCount((prevValue) => (max > prevValue ? prevValue + 1 : prevValue));
  }
  function decreaseCount(min) {
    setCount((prevValue) => (min < prevValue ? count - 1 : prevValue));
  }

  return (
    <div className="sm:p-0 p-6 flex flex-col justify-center">
      <h5 className="text-orange text-xs font-semibold uppercase">
        Sneaker Company
      </h5>
      <h1 className="xl:text-5xl text-3xl tracking-tight mt-4 font-bold text-veryDarkBlue">
        Fall Limited Edition Sneakers
      </h1>
      <p className="text-darkGrayishBlue md:my-10 my-6 lg:mt-14 tracking-wider lg:tracking-normal">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="price flex-row sm:flex-col flex items-center sm:items-start justify-between">
        <div className="flex items-center">
          <span className="text-3xl lg:text-2xl font-semibold text-veryDarkBlue">
            $125.00
          </span>
          <span className="bg-paleOrange text-orange rounded-md font-semibold px-2 py-1 text-xs ml-6">
            50%
          </span>
        </div>
        <span className="line-through text-grayishBlue text-sm block my-2">
          $250.00
        </span>
      </div>
      <div className="sm:flex-row flex-col flex sm:items-center font-bold mt-6">
        <div className="bg-lightGrayishBlue rounded-lg flex justify-between items-center sm:mr-6 mb-6 sm:mb-0">
          <button className="text-orange py-3 px-6" onClick={() => decreaseCount(1)}>
            <img src={images.minusIcon} alt="" className="min-w-3" />
          </button>
          <span className="px-2 text-lg py-3">{count}</span>
          <button className="text-orange py-3 px-6" onClick={() => increaseCount(10)}>
            <img src={images.plusIcon} alt="" className="min-w-3" />
          </button>
        </div>
        <Button
          onClick={() =>
            onAddToCart({
              title: "Fall Limited Edition Sneakers",
              count,
              price: 125,
              image: images.productImage1,
            })
          }
        >
          <img src={images.cartIcon} alt="" className="brightness-0 invert" />
          <span> Add to Cart</span>
        </Button>
      </div>
    </div>
  );
}
