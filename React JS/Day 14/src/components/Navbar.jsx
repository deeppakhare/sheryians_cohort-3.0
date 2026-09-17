import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-sm font-bold text-white shadow-lg shadow-indigo-600/20">
            U
          </div>

          <div>
            <h1 className="text-base font-bold text-white">UserHub</h1>

            <p className="hidden text-xs text-slate-500 sm:block">
              User Management
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            onClick={() => {
              setToggle(false);
            }}
            href="#"
            className="text-sm font-medium text-white transition hover:text-indigo-400"
          >
            Home
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Users
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Analytics
          </a>

          <a
            href="#"
            className="text-sm font-medium text-slate-400 transition hover:text-white"
          >
            Settings
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 sm:block"
          >
            Search
          </button>

          <button
            onClick={() => {
              setToggle(true);
            }}
            type="button"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            Create User
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
