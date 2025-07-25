import React from "react";

export const PopulerCard = ({ title, image, price, oldPrice }) => {
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
        <div className="flex items-center justify-center gap-3">
          <span className="purple_text">₹{price}.00</span>
          <span className="text-base text-gray-500 line-through">
            ₹{oldPrice}.00
          </span>
        </div>
      </div>
    </div>
  );
};
