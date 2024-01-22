import { useState } from "react";
import Header from "./components/Header";
import Product from "./components/Product";

function App() {
  const [cartItem, setCartItem] = useState({});

  function handleAddCart({title, count, price, image}) {
    setCartItem({ title, price, count, image });
  }

  function handleDelete() {
    setCartItem({});
  }

  return (
    <>
      <Header cartItem={cartItem} handleDelete={handleDelete} />
      <main className="container xl:max-w-screen-lg lg:max-w-screen-md md:max-w-screen-sm mx-auto sm:mt-24 sm:mb-20 p-0 relative sm:px-4">
        <Product handleAddCart={handleAddCart} />
      </main>
    </>
  );
}

export default App;
