
import React from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-indigo-500"></span>

              <span className="text-sm font-medium text-indigo-400">
                Store
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Explore Products
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Discover products from our collection and find something
              that fits your needs.
            </p>
          </div>

          {/* Product Count */}
          <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
              📦
            </div>

            <div>
              <p className="text-xs text-slate-500">
                Products
              </p>

              <p className="text-lg font-bold text-white">
                20
              </p>
            </div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 rounded-2xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex flex-col gap-3 md:flex-row">

            {/* Search */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
            </div>

            {/* Category */}
            <select
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400 outline-none focus:border-indigo-500"
            >
              <option value="">
                All Categories
              </option>

              <option value="mens-clothing">
                Men's Clothing
              </option>

              <option value="womens-clothing">
                Women's Clothing
              </option>

              <option value="jewelery">
                Jewelry
              </option>

              <option value="electronics">
                Electronics
              </option>
            </select>

            {/* Sort */}
            <select
              className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-400 outline-none focus:border-indigo-500"
            >
              <option value="">
                Sort By
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="rating">
                Rating
              </option>
            </select>
          </div>
        </div>

        {/* Products */}
        <section>
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">
                All Products
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Browse our latest products.
              </p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </section>

      </div>
    </main>
  );
};

export default Products;
