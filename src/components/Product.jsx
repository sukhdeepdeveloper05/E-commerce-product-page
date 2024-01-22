import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

export default function Product({handleAddCart}) {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 sm:gap-28 tracking-wide">
      <ProductImage />
      <ProductInfo onAddToCart={handleAddCart}/>
    </section>
  );
}
