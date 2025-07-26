import React, { useState } from "react";
import { ProductCard } from "../../Util/Cards/ProductCard";
import BG_PAPER from "../../asset/WEBSITE_ASSETS/BG_PAPER_1.png";
import curdImg from "../../asset/WEBSITE_ASSETS/CURD.avif";
import soyaImg from "../../asset/WEBSITE_ASSETS/PLAIN_TOFU.jpg";
import soyaMilkImg from "../../asset/WEBSITE_ASSETS/RAW_SOYA_MILK.jpg";
import vanillaImg from "../../asset/WEBSITE_ASSETS/VANILLA_ICE_CREAM.jpg";
import chocolateImg from "../../asset/WEBSITE_ASSETS/CHOCKLATE_SOYA_MILK.jpg";
import cheeseImg from "../../asset/WEBSITE_ASSETS/PLAIN_CHEESE.jpg";
import yogurtImg from "../../asset/WEBSITE_ASSETS/NATURAL_YOGURT.jpg";
import chakliImg from "../../asset/WEBSITE_ASSETS/soya-chakli.jpg";
import herbalTofuImg from "../../asset/WEBSITE_ASSETS/HARBAL_TOFU.jpg";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import headerBG from "../../asset/BANNER_01.jpg";

const products = [
  {
    image: soyaImg,
    name: "Plain Soya Tofu",
    unit: "200 g",
    price: 100,
    description:
      "100% Veg Soya Paneer, Rich source of Protein and Iron, Low in fat and cholesterol free.",
    button: "ADD",
    category: "Tofu",
    discount: 20,
  },
  {
    image: soyaMilkImg,
    name: "Raw Soya Milk",
    unit: "1 ltr",
    price: 148,
    description:
      "Enriched with vital nutrients of soya. It offers a delightful taste with various health benefits.",
    button: "ADD",
    category: "Milk",
    discount: 15,
  },
  {
    image: curdImg,
    name: "Plain Curd Lactose Free",
    unit: "400 g",
    price: 100,
    description:
      "Perfect combination of health & taste. It provides calcium for strong bones and teeth.",
    button: "ADD",
    category: "Curd",
    discount: 10,
  },
  {
    image: vanillaImg,
    name: "Vanilla Ice Cream",
    unit: "700 ml",
    price: 210,
    description:
      "Rich Creamy Vanilla Dessert. Made from best ingredients: Fresh 100% soya milk.",
    button: "ADD",
    category: "Ice Cream",
    discount: 25,
  },
  {
    image: cheeseImg,
    name: "Plain Cheese",
    unit: "200 g",
    price: 420,
    description:
      "Perfect option for those with lactose intolerance, enjoy cheese without digestive discomfort.",
    button: "ADD",
    category: "Cheese",
    discount: 30,
  },
  {
    image: yogurtImg,
    name: "Natural Yogurt",
    unit: "400 g",
    price: 250,
    description:
      "Rich in protein | Low fat content. Made with natural ingredients. Perfect blend of taste & nutrition.",
    button: "ADD",
    category: "Yogurt",
    discount: 20,
  },
  {
    image: chakliImg,
    name: "Soya Chakli",
    unit: "100 g",
    price: 159,
    description:
      "Soya sticks, or boondi. Made with low-carb ingredients, healthy snack option for any time.",
    button: "ADD",
    category: "Namkeen",
    discount: 15,
  },
  {
    image: herbalTofuImg,
    name: "Herbal Tofu",
    unit: "200 g",
    price: 110,
    description:
      "Easy to digest. High in protein and very low in fat. Great substitute of meat.",
    button: "ADD",
    category: "Tofu",
    discount: 10,
  },
];

const categories = [
  "Cheese",
  "Milk",
  "Tofu",
  "Yogurt",
  "Curd",
  "Ice Cream",
  "Namkeen",
];
const sortOptions = [
  "Popularity",
  "Price -- Low to High",
  "Price -- High to Low",
  "Discount",
];
const discountOptions = [
  "50% or more",
  "40% or more",
  "30% or more",
  "20% or more",
  "10% or more",
];

export default function ProductsPage() {
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
        className={`flex items-center justify-center`}
        style={{
          backgroundImage: `url(${headerBG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "200px",
        }}
      >
        <h1 className="text-2xl font-bold text-white">ALL PRODUCTS</h1>
      </div>
      {/* Top Navigation Bar */}
      <div className="py-3">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <h1 className="purple_text text-2xl font-bold">All Products</h1>
            <div className="flex items-center gap-2">
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

      <div className="mx-auto max-w-7xl py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar - Filters */}
          <div className="flex-shrink-0 lg:w-64">
            <div className="border border-gray-200 bg-white shadow-sm">
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
              <div className="flex flex-wrap items-center gap-4">
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
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredAndSortedProducts.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>

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
