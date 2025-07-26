import React from "react";

/**
 * @param {{ title: string, image: string, price: number, oldPrice: number, addToCart: (product: any, event?: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
export const PopulerCard = ({
  title,
  image,
  price,
  oldPrice,
  addToCart,
  cart,
  updateQuantity,
}) => {
  // Defensive: if addToCart is not a function, warn and use a no-op
  const safeAddToCart =
    typeof addToCart === "function"
      ? addToCart
      : () => {
          console.warn("addToCart prop is not a function in PopulerCard");
        };

  // Check if product is in cart
  const cartItem = cart?.find((item) => item.product.name === title);
  const currentQuantity = cartItem?.quantity || 0;

  // Safe update quantity function
  const safeUpdateQuantity =
    typeof updateQuantity === "function"
      ? updateQuantity
      : () => {
          console.warn("updateQuantity prop is not a function in PopulerCard");
        };

  const handleIncrease = () => {
    safeUpdateQuantity(title, currentQuantity + 1);
  };

  const handleDecrease = () => {
    if (currentQuantity > 1) {
      safeUpdateQuantity(title, currentQuantity - 1);
    } else if (currentQuantity === 1) {
      safeUpdateQuantity(title, 0); // Remove from cart
    }
  };

  return (
    <div
      className="flex max-w-xs flex-col items-center overflow-hidden border-2 border-[#e98209] bg-[#ede6e1] shadow-lg"
      style={{ boxShadow: "0 4px 16px rgba(124,77,158,0.15)" }}
    >
      <div className="flex h-64 w-full items-center justify-center overflow-hidden bg-[#7c4d9e]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="w-full py-4 text-center">
        <h2 className="purple_text mb-2 text-xl font-bold tracking-wide">
          {title}
        </h2>
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="purple_text">₹{price}.00</span>
          <span className="text-base text-gray-500 line-through">
            ₹{oldPrice}.00
          </span>
        </div>

        {/* Cart Controls */}
        {currentQuantity === 0 ? (
          <button
            className="rounded-md border border-[#4a295e] px-6 py-1 transition-colors duration-150 hover:bg-[#4a295e] hover:text-white"
            onClick={() =>
              safeAddToCart({
                image,
                name: title,
                unit: "1 unit",
                price,
                description: `${title} - Premium quality dairy product`,
                button: "ADD",
              })
            }
          >
            ADD
          </button>
        ) : (
          <div className="flex items-center justify-center rounded-md bg-[#4a295e] px-6 py-1">
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
  );
};
