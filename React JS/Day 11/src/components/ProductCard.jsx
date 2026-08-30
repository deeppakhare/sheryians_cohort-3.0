
import React from "react";

const ProductCard = () => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:border-slate-700">

      {/* Product Image */}
      <div className="relative flex h-64 items-center justify-center bg-white p-6">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          alt="Product"
          className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-slate-950 px-3 py-1.5 text-xs font-medium capitalize text-white">
          Men's Clothing
        </span>

        {/* Wishlist */}
        <button
          type="button"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm text-white transition hover:bg-indigo-600"
        >
          ♡
        </button>
      </div>

      {/* Product Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm text-yellow-400">
            ★★★★★
          </span>

          <span className="text-xs text-slate-500">
            3.9 (120)
          </span>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 text-white">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-5 text-slate-500">
          Your perfect pack for everyday use and walks in the forest.
          Stash your laptop in the padded sleeve.
        </p>

        {/* Price */}
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500">
              Price
            </p>

            <p className="text-xl font-bold text-white">
              $109.95
            </p>
          </div>

          {/* Add Button */}
          <button
            type="button"
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;