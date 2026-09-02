import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  let { cart, increaeQuantity, removeFromCart } = useContext(CartContext);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm text-indigo-400">Shopping Cart</p>

          <h1 className="mt-2 text-3xl font-bold">Your Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-800 p-16 text-center">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-4 text-xl font-semibold">Your cart is empty</h2>

            <p className="mt-2 text-slate-500">
              Add some products to your cart.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {cart.map((item) => (
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
                      <h2 className="font-semibold">{item.title}</h2>

                      <p className="mt-2 text-indigo-400">${item.price}</p>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <button className="h-8 w-8 rounded-lg bg-slate-800">
                          -
                        </button>

                        <span>1</span>

                        <button
                          onClick={() => increaeQuantity(item.id)}
                          className="h-8 w-8 rounded-lg bg-slate-800"
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm text-red-400 hover:text-red-300"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h2 className="text-xl font-bold">Order Summary</h2>

              <div className="mt-6 flex justify-between border-b border-slate-800 pb-4">
                <span className="text-slate-400">Total</span>

                <span className="text-xl font-bold">0.00</span>
              </div>

              <button className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold hover:bg-indigo-500">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
