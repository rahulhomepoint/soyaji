import React from "react";

/**
 * @param {{ image: string, name: string, unit: string, price: number, description: string, button: string, addToCart: (product: any, event?: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
export const ProductCard = ({
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
      className="flex max-w-xs flex-col justify-between border border-[#4a295e] bg-[#f7ede2] shadow-md"
      style={{ fontFamily: "median-tomato" }}
    >
      <div className="mb-3 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-54 w-full rounded-b-2xl border-b border-[#4a295e] object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-3">
        <div>
          <div className="purple_text bold-tomato mb-1 text-lg leading-tight">
            {name}
          </div>
          <div className="purple_text mb-2 text-base opacity-80">
            Unit - <span className="text-sm">{unit}</span>
          </div>
          <div className="purple_text mb-2 text-xs">{description}</div>
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
                className="px-2 text-xl text-white transition-colors hover:text-gray-200"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-3 text-lg text-white select-none">
                {currentQuantity}
              </span>
              <button
                className="px-2 text-xl text-white transition-colors hover:text-gray-200"
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
