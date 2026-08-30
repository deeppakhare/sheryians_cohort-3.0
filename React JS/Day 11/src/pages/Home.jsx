import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10">

      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="mb-2 text-sm font-medium text-indigo-400">
            Context API Practice
          </p>

          <h1 className="text-4xl font-bold text-white">
            Products
          </h1>

          <p className="mt-2 text-slate-500">
            Add products to your shopping cart.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </main>
  );
};

export default Home;