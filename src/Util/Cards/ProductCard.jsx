import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * @param {{ id: string, image: string, name: string, unit: string, price: number, description: string, button: string, addToCart: (product: any, event?: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
export const ProductCard = ({
  id,
  image,
  name,
  unit,
  price,
  description,
  button,
  addToCart,
  cart,
  updateQuantity,
}) => {
  const [loaded, setLoaded] = useState(false);
  // Defensive: if addToCart is not a function, warn and use a no-op
  const safeAddToCart =
    typeof addToCart === "function"
      ? addToCart
      : () => {
          console.warn("addToCart prop is not a function in ProductCard");
        };

  // Check if product is in cart
  const cartItem = cart?.find((item) => item.product.name === name);
  const currentQuantity = cartItem?.quantity || 0;

  // Safe update quantity function
  const safeUpdateQuantity =
    typeof updateQuantity === "function"
      ? updateQuantity
      : () => {
          console.warn("updateQuantity prop is not a function in ProductCard");
        };

  const handleIncrease = () => {
    safeUpdateQuantity(name, currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      safeUpdateQuantity(name, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      safeUpdateQuantity(name, 0); // Remove from cart
    }
  };
  return (
    <div
      className="mx-auto flex max-w-xs flex-col justify-between border border-[#4a295e] bg-[#f7ede2] shadow-md"
      style={{ fontFamily: "median-tomato" }}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative mb-3 overflow-hidden">
          {/* Blurred placeholder */}
          <div
            className={`absolute inset-0 h-full w-full bg-gray-200 transition-all duration-500 ${loaded ? "opacity-0" : "opacity-100 blur-md"}`}
          />
          {/* Actual image */}
          <img
            src={image}
            alt={name}
            className={`h-34 w-full rounded-b-2xl border-b border-[#4a295e] object-cover transition-all duration-500 md:h-54 ${loaded ? "blur-0 opacity-100" : "opacity-0 blur-md"}`}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <Link to={`/product/${id}`} className="block">
            <div className="purple_text bold-tomato mb-1 line-clamp-1 leading-tight transition-colors hover:text-purple-600 md:text-lg">
              {name}
            </div>
          </Link>
          <div className="purple_text mb-2 text-sm opacity-80 md:text-base">
            Unit - <span className="text-sm">{unit}</span>
          </div>
          <div className="purple_text mb-2 line-clamp-2 overflow-hidden text-xs">
            {description}
          </div>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="purple_text text-lg">₹{price}</span>
          {currentQuantity === 0 ? (
            <button
              className="rounded-md border border-[#4a295e] px-6 py-1 transition-colors duration-150 hover:bg-[#4a295e] hover:text-white"
              onClick={() =>
                safeAddToCart({ image, name, unit, price, description, button })
              }
            >
              {button}
            </button>
          ) : (
            <div className="flex items-center rounded-md bg-[#4a295e] px-6 py-1">
              <button
                className="text-white transition-colors hover:text-gray-200 md:px-2 md:text-xl"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-2 text-lg text-white select-none md:px-3">
                {currentQuantity}
              </span>
              <button
                className="text-white transition-colors hover:text-gray-200 md:px-2 md:text-xl"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
