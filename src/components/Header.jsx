import React, { useState } from "react";
import * as images from '../assets/images/images'
import Cart from "./Cart";

export default function Header({ cartItem, handleDelete }) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function handleShowCart() {
    setIsCartVisible((prevState) => !prevState);
  }

  function handleShowMenu() {
    setIsMenuVisible((prevState) => !prevState);
  }

  return (
    <header className="flex xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm mx-auto py-4 px-6 sm:px-0 sm:py-7 items-center justify-between border-b-2 relative">
      <div className="flex items-center">
        <div
          className="hamburger w-5 mr-5 before:bg-veryDarkBlue after:bg-veryDarkBlue relative bg-veryDarkBlue inline-block sm:hidden"
          onClick={handleShowMenu}
        ></div>
        <img src={images.logo} alt="" className="mr-14" />
        <nav
          className={
            isMenuVisible
              ? `sm:block bg-veryDarkBlue bg-opacity-50 fixed inset-0 z-50`
              : undefined
          }
          onClick={handleShowMenu}
        >
          <ul
            className={`md:flex ${
              isMenuVisible
                ? "flex flex-col w-8/12 bg-white h-screen p-7"
                : "hidden"
            } gap-6 text-md text-darkGrayishBlue font-bold`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="block sm:hidden mb-8" onClick={handleShowMenu}>
              <img src={images.closeIcon} alt="" />
            </div>
            <li className="sm:after:inline-block after:hidden cursor-pointer relative hover:text-veryDarkBlue">
              Collections
            </li>
            <li className="sm:after:inline-block after:hidden cursor-pointer relative hover:text-veryDarkBlue">
              Men
            </li>
            <li className="sm:after:inline-block after:hidden cursor-pointer relative hover:text-veryDarkBlue">
              Women
            </li>
            <li className="sm:after:inline-block after:hidden cursor-pointer relative hover:text-veryDarkBlue">
              About
            </li>
            <li className="sm:after:inline-block after:hidden cursor-pointer relative hover:text-veryDarkBlue">
              Contact
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-8">
        <button onClick={handleShowCart} className="relative">
          <img src={images.cartIcon} alt="Cart Button" className="hover:brightness-0" />
          <div className="badge absolute top-0 sm:top-1 -right-3 bg-orange px-2 rounded-xl text-xs text-white">{cartItem.count}</div>
        </button>
        <div className="w-9 sm:w-12 rounded-full cursor-pointer flex border-2 hover:border-orange">
          <img src={images.avatarImage} alt="" />
        </div>
      </div>
      <Cart
        cartItem={cartItem}
        handleDelete={handleDelete}
        isCartVisible={isCartVisible}
      />
    </header>
  );
}
