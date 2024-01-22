import React from "react";
import Button from "./Button";
import * as images from "../assets/images/images";

export default function Cart({ cartItem, handleDelete, isCartVisible }) {
  return (
    <div
      className={`${
        !isCartVisible ? "hidden" : undefined
      } flex flex-col overflow-hidden bg-white absolute sm:top-full sm:right-0 shadow-2xl w-80 h-60 z-50 rounded-lg -top-3 right-1/2 sm:translate-x-0 sm:translate-y-0 translate-x-1/2 translate-y-1/2`}
    >
      <h4 className="px-6 py-5 shadow-sm shadow-gray-200 font-bold text-veryDarkBlue">
        Cart
      </h4>
      {!cartItem.image && (
        <div className="my-auto">
          <p className="text-darkGrayishBlue text-center">
            Your cart is empty.
          </p>
        </div>
      )}
      {cartItem.image && (
        <div className="flex flex-col justify-between p-6 h-full overflow-auto">
          <div className="flex items-center justify-between">
            <img src={cartItem.image} alt="" className="w-10 rounded-md" />
            <div>
              <p className="text-sm text-darkGrayishBlue font-medium">
                {cartItem.title}
              </p>
              <p className="text-sm text-darkGrayishBlue">
                <span>${cartItem.price}.00</span>
                <span> x </span>
                <span>{cartItem.count} </span>
                <span className="text-veryDarkBlue font-semibold">
                  ${cartItem.price * cartItem.count}.00
                </span>
              </p>
            </div>
            <img
              src={images.deleteIcon}
              alt=""
              className="cursor-pointer"
              onClick={handleDelete}
            />
          </div>
          <Button>Checkout</Button>
        </div>
      )}
    </div>
  );
}
