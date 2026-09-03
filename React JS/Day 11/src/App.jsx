import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [toggle, setToggle] = useState("home");
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar setToggle={setToggle} />

      {toggle == "home" && <Home />}
      {toggle == "cart" && <Cart /> }
    </div>
  );
};

export default App;
