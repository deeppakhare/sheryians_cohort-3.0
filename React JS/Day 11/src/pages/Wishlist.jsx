import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeWishlistItem, removeAllItems } =
    useContext(WishlistContext);
  console.log(wishlist);

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>

            <p className="mt-2 text-gray-500">
              Save your favorite products for later.
            </p>
          </div>

          {/* You will connect this button to clearWishlist() */}
          <button
            onClick={() => removeAllItems()}
            className="rounded-lg border border-red-200 bg-white px-5 py-2.5
                       text-sm font-semibold text-red-600
                       transition hover:bg-red-50"
          >
            Clear WishlistX
          </button>
        </div>
      </div>

      {/* Wishlist Content */}
      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-white p-3">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h2 className="font-semibold text-amber-300">{item.title}</h2>

              <p className="mt-2 text-indigo-400">${item.price}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm p-2 rounded-2xl bg-blue-700 text-black-400 hover:text-red-50 "
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeWishlistItem(item.id)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
