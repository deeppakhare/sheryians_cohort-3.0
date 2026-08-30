import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}

      {page === "cart" && <Cart />}
    </div>
  );
};

export default App;
