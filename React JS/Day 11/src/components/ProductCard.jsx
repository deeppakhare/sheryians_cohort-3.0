import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ items }) => {
  const { addCart } = useContext(CartContext);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      <div className="flex h-64 items-center justify-center bg-yellow-900 p-6">
        <img
          src={items.image}
          alt={items.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-medium uppercase text-indigo-400">
          {items.category}
        </p>

        <h2 className="min-h-14 text-lg font-semibold text-white">
          {items.title}
        </h2>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-white">${items.price}</span>

          <button
            onClick={() => addCart(items)}
            className="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
