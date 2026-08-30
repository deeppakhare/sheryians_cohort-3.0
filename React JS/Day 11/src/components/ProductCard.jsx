import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">

      <div className="flex h-64 items-center justify-center bg-white p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5">

        <p className="mb-2 text-xs font-medium uppercase text-indigo-400">
          {product.category}
        </p>

        <h2 className="min-h-14 text-lg font-semibold text-white">
          {product.title}
        </h2>

        <div className="mt-5 flex items-center justify-between">

          <span className="text-xl font-bold text-white">
            ${product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
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