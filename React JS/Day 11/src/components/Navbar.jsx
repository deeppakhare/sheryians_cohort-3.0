import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div>
          <h1 className="text-xl font-bold text-white">ShopHub</h1>

          <p className="text-xs text-slate-500">Context API Practice</p>
        </div>

        <nav className="flex items-center gap-6">
          <button
            onClick={() => setToggle("home")}
            className="text-sm text-slate-300 hover:text-white"
          >
            Home
          </button>

          <button 
            onClick={() => setToggle("home")}
  
          className="text-sm text-slate-300 hover:text-white">
            Products
          </button>

          <button
            onClick={() => setToggle("cart")}
            className="relative rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Cart
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">
              Count
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
