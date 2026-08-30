
import React from "react";

const Cart = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>

            <span className="text-sm font-medium text-indigo-400">
              Shopping Cart
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Review your selected products before checkout.
          </p>
        </div>

        {/* Cart Layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">

          {/* Cart Items */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

            <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-5">
              <div>
                <h2 className="text-xl font-bold text-white">
                  Cart Items
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  2 products in your cart
                </p>
              </div>

              <button
                type="button"
                className="text-sm font-medium text-red-400 transition hover:text-red-300"
              >
                Clear Cart
              </button>
            </div>

            {/* Cart Item */}
            <div className="flex flex-col gap-5 border-b border-slate-800 py-5 sm:flex-row">

              {/* Image */}
              <div className="flex h-28 w-full items-center justify-center rounded-2xl bg-white p-4 sm:h-28 sm:w-28">
                <img
                  src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
                  alt="Product"
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex flex-1 flex-col justify-between gap-4">

                <div>
                  <h3 className="font-semibold text-white">
                    Fjallraven Backpack
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Men's Clothing
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">

                  {/* Quantity */}
                  <div className="flex items-center rounded-xl border border-slate-700 bg-slate-950">
                    <button
                      type="button"
                      className="px-3 py-2 text-slate-400 hover:text-white"
                    >
                      −
                    </button>

                    <span className="px-3 text-sm font-semibold text-white">
                      1
                    </span>

                    <button
                      type="button"
                      className="px-3 py-2 text-slate-400 hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <p className="text-lg font-bold text-white">
                    $109.95
                  </p>

                  {/* Remove */}
                  <button
                    type="button"
                    className="text-sm font-medium text-red-400 hover:text-red-300"
                  >
                    Remove
                  </button>

                </div>
              </div>
            </div>

            {/* Empty Cart Design */}
            <div className="hidden flex-col items-center justify-center py-20 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-2xl">
                🛒
              </div>

              <h3 className="text-lg font-semibold text-white">
                Your cart is empty
              </h3>

              <p className="mt-2 max-w-sm text-sm text-slate-500">
                Add some products to your cart and they will appear here.
              </p>

              <button
                type="button"
                className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Browse Products
              </button>
            </div>

          </section>

          {/* Order Summary */}
          <aside className="h-fit rounded-3xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="mb-6 text-xl font-bold text-white">
              Order Summary
            </h2>

            <div className="space-y-4 border-b border-slate-800 pb-6">

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Subtotal
                </span>

                <span className="font-medium text-white">
                  $109.95
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Shipping
                </span>

                <span className="font-medium text-emerald-400">
                  Free
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500">
                  Tax
                </span>

                <span className="font-medium text-white">
                  $10.99
                </span>
              </div>

            </div>

            {/* Total */}
            <div className="flex justify-between py-6">
              <span className="text-base font-semibold text-slate-300">
                Total
              </span>

              <span className="text-2xl font-bold text-white">
                $120.94
              </span>
            </div>

            {/* Checkout */}
            <button
              type="button"
              className="w-full rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500"
            >
              Proceed to Checkout
            </button>

            <button
              type="button"
              className="mt-3 w-full rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800"
            >
              Continue Shopping
            </button>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Cart;
