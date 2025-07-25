import React from "react";
import { PopulerCard } from "../../Util/Cards/PopulerCard";
import popularProducts from "../../Util/popularProductsData";
import background from "../../asset/WEBSITE_ASSETS/BG_purple.png";

const PopularProducts = () => (
  <section
    className="relative flex w-full flex-col items-center overflow-hidden px-4 py-16"
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "100% 99%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Decorative background leaves or patterns can be added here if needed */}
    <h2 className="mb-2 text-center text-4xl text-white md:text-3xl">
      Our Dairy Products For{" "}
      <span className="text-[#ffe066]">Healthy Living</span>
    </h2>
    <div className="mx-auto my-1 h-0.5 w-84 rounded-full bg-[#ffe066]"></div>
    <div className="relative mb-10 text-center font-semibold tracking-[0.2rem] text-[#e6d6f3]">
      <span>OUR POPULAR PRODUCTS</span>
    </div>
    <div className="mb-10 grid w-full max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
      {popularProducts.map((product, idx) => (
        <PopulerCard
          key={idx}
          title={product.title}
          image={product.image}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
    <button className="purple_text rounded-lg bg-[#ffe066] px-8 py-3 text-lg font-bold shadow-md transition-colors duration-200 hover:bg-[#ffdb4d]">
      More Products
    </button>
  </section>
);

export default PopularProducts;
