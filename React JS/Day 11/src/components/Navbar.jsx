import React from "react";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white shadow-lg shadow-indigo-600/20">
            S
          </div>

          <div>
            <h1 className="text-base font-bold text-white">
              ShopHub
            </h1>
            <p className="hidden text-xs text-slate-500 sm:block">
              Modern Store
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-white transition hover:text-indigo-400"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Products
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Categories
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            About
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            type="button"
            className="hidden rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 sm:block"
          >
            Search
          </button>

          {/* Cart */}
          <button
            type="button"
            className="relative rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            🛒 Cart

            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-indigo-600 text-[10px] font-bold text-white">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
