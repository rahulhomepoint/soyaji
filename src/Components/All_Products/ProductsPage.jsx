import React, { useState } from "react";
import { Toast, ToastToggle } from "flowbite-react";
import { HiCheck } from "react-icons/hi";
import { ProductCard } from "../../Util/Cards/ProductCard";
import {
  allProducts,
  categories,
  sortOptions,
  discountOptions,
} from "../../Util/productsData";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import headerBG from "../../asset/BANNER_01.jpg";

const products = allProducts;

/**
 * @param {{ addToCart: (product: any, event?: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void, toast: { show: boolean, message: string, position: { x: number, y: number } }, hideToast: () => void }} props
 */
export default function ProductsPage({
  addToCart,
  cart,
  updateQuantity,
  toast,
  hideToast,
}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");
  const [selectedDiscounts, setSelectedDiscounts] = useState([]);
  const [expandedFilters, setExpandedFilters] = useState({
    offers: false,
    availability: false,
    discount: true,
  });

  const toggleFilter = (filterName) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const toggleDiscount = (discount) => {
    setSelectedDiscounts((prev) =>
      prev.includes(discount)
        ? prev.filter((d) => d !== discount)
        : [...prev, discount],
    );
  };

  const filteredAndSortedProducts = products
    .filter((product) => {
      if (selectedCategory !== "All" && product.category !== selectedCategory)
        return false;
      if (selectedDiscounts.length > 0) {
        const hasMatchingDiscount = selectedDiscounts.some((discount) => {
          const discountValue = parseInt(discount);
          return product.discount >= discountValue;
        });
        if (!hasMatchingDiscount) return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Price -- Low to High":
          return a.price - b.price;
        case "Price -- High to Low":
          return b.price - a.price;
        case "Discount":
          return b.discount - a.discount;
        default:
          return 0; // Popularity - keep original order
      }
    });

  return (
    <div className="min-h-screen bg-[#f7ede2]">
      <div
        className={`flex h-[100px] items-center justify-center md:h-[200px]`}
        style={{
          backgroundImage: `url(${headerBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-2xl font-bold text-white">ALL PRODUCTS</h1>
      </div>
      {/* Top Navigation Bar */}
      <div className="py-3">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full flex-wrap items-center justify-between gap-4 p-2">
            <h1 className="purple_text text-2xl font-bold">All Products</h1>
            <div className="hidden items-center gap-2 md:inline-flex">
              <span className="purple_text text-sm font-medium opacity-70">
                Buy Dairy Products:
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`border-e-2 border-gray-300 px-2 text-sm transition-colors ${
                      selectedCategory === category
                        ? "font-medium text-purple-600"
                        : "text-yellow-400 hover:text-purple-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border border-gray-300 bg-white px-2 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl md:py-6">
        <div className="flex flex-col md:gap-8 lg:flex-row">
          {/* Left Sidebar - Filters */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="hidden border border-gray-200 bg-white shadow-sm md:inline">
              <h2 className="mb-4 border-b border-gray-200 p-3 text-lg font-semibold text-yellow-400">
                Filters
              </h2>

              {/* Offers Filter */}
              <div className="mb-4 border-b border-gray-200">
                <button
                  onClick={() => toggleFilter("offers")}
                  className="flex w-full items-center justify-between rounded px-2 py-2 text-left hover:bg-gray-50"
                >
                  <span className="purple_text font-medium">Offers</span>
                  {expandedFilters.offers ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                {expandedFilters.offers && (
                  <div className="space-y-2 pl-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="purple_text text-sm">
                        Special Offers
                      </span>
                    </label>
                  </div>
                )}
              </div>

              {/* Availability Filter */}
              <div className="mb-4 border-b border-gray-200">
                <button
                  onClick={() => toggleFilter("availability")}
                  className="flex w-full items-center justify-between rounded px-2 py-2 text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-700">
                    Availability
                  </span>
                  {expandedFilters.availability ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                {expandedFilters.availability && (
                  <div className="space-y-2 pl-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="purple_text text-sm">In Stock</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="purple_text text-sm">Out of Stock</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Discount Filter */}
              <div className="mb-4">
                <button
                  onClick={() => toggleFilter("discount")}
                  className="flex w-full items-center justify-between rounded px-2 py-2 text-left hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-700">Discount</span>
                  {expandedFilters.discount ? (
                    <ChevronUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </button>
                {expandedFilters.discount && (
                  <div className="space-y-2 pl-4">
                    {discountOptions.map((discount) => (
                      <label key={discount} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedDiscounts.includes(discount)}
                          onChange={() => toggleDiscount(discount)}
                          className="mr-2"
                        />
                        <span className="purple_text text-sm">{discount}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Advertisement */}
              <div className="mt-6 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 p-4">
                <div className="text-center">
                  <h3 className="mb-2 font-semibold text-purple-900">
                    So Good Plant-Based Beverage
                  </h3>
                  <p className="mb-2 text-sm text-purple-700">
                    Chocolate Flavor
                  </p>
                  <div className="space-y-1 text-xs text-purple-600">
                    <p>Zero Sterol</p>
                    <p>Net Quantity: 1L</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Product Grid */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="mb-6 border-b border-purple-800 p-3">
              <div className="hidden flex-wrap items-center gap-1 text-xs md:inline-flex md:gap-4 md:text-base">
                <span className="purple_text font-bold">Sort By:</span>
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`py- px-3 transition-colors ${
                      sortBy === option
                        ? "border-b border-purple-700 font-extrabold text-yellow-400"
                        : "text-gray-700 hover:text-yellow-400"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-2 p-1 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAndSortedProducts.map((product, index) => (
                <ProductCard
                  key={product.id || index}
                  {...product}
                  addToCart={addToCart}
                  cart={cart}
                  updateQuantity={updateQuantity}
                />
              ))}
            </div>

            {/* Toast Notification - positioned in bottom-right corner */}
            {toast && toast.show && (
              <div className="fixed right-5 bottom-5 z-50">
                <Toast>
                  <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                    <HiCheck className="h-5 w-5" />
                  </div>
                  <div className="ml-3 text-sm font-normal">
                    {toast.message}
                  </div>
                  <ToastToggle onDismiss={hideToast} />
                </Toast>
              </div>
            )}

            {filteredAndSortedProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-lg text-gray-500">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
