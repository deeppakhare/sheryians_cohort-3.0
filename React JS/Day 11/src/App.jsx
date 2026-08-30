import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <div className="flex justify-center gap-4 border-b border-slate-800 bg-slate-950 p-4">
        <button
          onClick={() => setPage("home")}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-white"
        >
          Products
        </button>

        <button
          onClick={() => setPage("cart")}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm text-white"
        >
          Cart
        </button>
      </div>

      {page === "home" && <Home />}

      {page === "cart" && <Cart />}
    </div>
  );
};

export default App;
