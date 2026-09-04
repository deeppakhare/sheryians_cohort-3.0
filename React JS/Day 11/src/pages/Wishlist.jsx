import React from "react";

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              My Wishlist
            </h1>

            <p className="mt-2 text-gray-500">
              Save your favorite products for later.
            </p>
          </div>

          {/* You will connect this button to clearWishlist() */}
          <button
            className="rounded-lg border border-red-200 bg-white px-5 py-2.5
                       text-sm font-semibold text-red-600
                       transition hover:bg-red-50"
          >
            Clear Wishlist
          </button>
        </div>
      </div>


      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto">

        {/* Wishlist Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Product Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm
                          ring-1 ring-gray-200 transition duration-300
                          hover:-translate-y-1 hover:shadow-lg">

            {/* Remove Button */}
            <button
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center
                         justify-center rounded-full bg-white text-red-500 shadow-md
                         transition hover:bg-red-50"
            >
              ♥
            </button>


            {/* Product Image */}
            <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                alt="Product"
                className="h-full w-full object-contain transition duration-300
                           group-hover:scale-105"
              />
            </div>


            {/* Product Information */}
            <div className="p-5">

              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Men's Clothing
              </p>

              <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
              </h2>


              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>

                <span className="text-sm text-gray-500">
                  3.9
                </span>
              </div>


              {/* Price */}
              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  $109.95
                </span>
              </div>


              {/* Actions */}
              <div className="mt-5 flex gap-3">

                {/* You will connect this to addToCart() */}
                <button
                  className="flex-1 rounded-lg bg-black px-4 py-3
                             text-sm font-semibold text-white
                             transition hover:bg-gray-800"
                >
                  Add to Cart
                </button>

                {/* You can connect this to Product Details later */}
                <button
                  className="rounded-lg border border-gray-300 px-4 py-3
                             text-sm font-semibold text-gray-700
                             transition hover:bg-gray-100"
                >
                  View
                </button>

              </div>
            </div>
          </div>


          {/* Duplicate this card while practicing */}
          <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm
                          ring-1 ring-gray-200 transition duration-300
                          hover:-translate-y-1 hover:shadow-lg">

            <button
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center
                         justify-center rounded-full bg-white text-red-500 shadow-md
                         transition hover:bg-red-50"
            >
              ♥
            </button>

            <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
              <img
                src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                alt="Product"
                className="h-full w-full object-contain transition duration-300
                           group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Men's Clothing
              </p>

              <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
                Mens Casual Premium Slim Fit T-Shirts
              </h2>

              <div className="mt-3 flex items-center gap-2">
                <div className="flex text-yellow-400">
                  ★ ★ ★ ★ ★
                </div>

                <span className="text-sm text-gray-500">
                  4.1
                </span>
              </div>

              <div className="mt-4">
                <span className="text-2xl font-bold text-gray-900">
                  $22.30
                </span>
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  className="flex-1 rounded-lg bg-black px-4 py-3
                             text-sm font-semibold text-white
                             transition hover:bg-gray-800"
                >
                  Add to Cart
                </button>

                <button
                  className="rounded-lg border border-gray-300 px-4 py-3
                             text-sm font-semibold text-gray-700
                             transition hover:bg-gray-100"
                >
                  View
                </button>
              </div>
            </div>
          </div>

        </div>


        {/* Empty Wishlist UI
            Later, conditionally show this when wishlist.length === 0
        */}
        <div className="hidden flex-col items-center justify-center py-24 text-center">

          <div className="mb-6 flex h-24 w-24 items-center justify-center
                          rounded-full bg-gray-100 text-5xl">
            ♡
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            Your Wishlist is Empty
          </h2>

          <p className="mt-2 max-w-md text-gray-500">
            You haven't added any products to your wishlist yet.
            Start exploring and save products you love.
          </p>

          <button
            className="mt-6 rounded-lg bg-black px-6 py-3
                       font-semibold text-white transition hover:bg-gray-800"
          >
            Continue Shopping
          </button>

        </div>

      </div>
    </div>
  );
};

export default Wishlist;