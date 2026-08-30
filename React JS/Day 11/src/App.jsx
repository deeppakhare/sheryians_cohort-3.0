import React from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Products />
      {/* <ProductCard /> */}
      {/* <Cart/> */}
    </div>
  );
};

export default App;
