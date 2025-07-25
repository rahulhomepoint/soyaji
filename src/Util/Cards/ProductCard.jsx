import React, { useState } from "react";

export const ProductCard = ({
  image,
  name,
  unit,
  price,
  description,
  button,
}) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => setQuantity(1);
  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 0));

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
          <div className="purple_text font-bold-tomato mb-1 text-lg leading-tight">
            {name}
          </div>
          <div className="purple_text mb-2 text-base">
            Unit - <span className="font-bold-tomato text-sm">{unit}</span>
          </div>
          <div className="purple_text mb-2 text-xs">{description}</div>
        </div>
        <div className="mt-1 flex items-center justify-between">
          <span className="purple_text font-bold-tomato text-lg">₹{price}</span>
          {quantity === 0 ? (
            <button
              className="font-bold-tomato rounded-md border border-[#4a295e] px-6 py-1 transition-colors duration-150 hover:bg-[#4a295e] hover:text-white"
              onClick={handleAdd}
            >
              {button}
            </button>
          ) : (
            <div className="flex items-center rounded-md bg-[#4a295e] px-6 py-1">
              <button
                className="px-2 text-xl text-white"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-3 text-lg text-white select-none">
                {quantity}
              </span>
              <button
                className="px-2 text-xl text-white"
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
