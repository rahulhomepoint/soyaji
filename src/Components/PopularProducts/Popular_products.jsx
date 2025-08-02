import React from "react";
import { PopulerCard } from "../../Util/Cards/PopulerCard";
import popularProducts from "../../Util/popularProductsData";
import background from "../../asset/WEBSITE_ASSETS/BG_purple.png";
// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

/**
 * @param {{ addToCart: (product: any, event?: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
const PopularProducts = ({ addToCart, cart, updateQuantity }) => (
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
    <h2 className="mb-2 text-center text-3xl text-white md:text-3xl">
      Our Dairy Products For{" "}
      <span className="text-[#ffe066]">Healthy Living</span>
    </h2>
    <div className="mx-auto my-1 h-0.5 w-84 rounded-full bg-[#ffe066]"></div>
    <div className="relative mb-10 text-center font-semibold tracking-[0.2rem] text-[#e6d6f3]">
      <span>OUR POPULAR PRODUCTS</span>
    </div>
    {/* Swiper Carousel */}
    <div className="mb-10 w-full max-w-6xl">
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={4}
        // navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-12"
      >
        {popularProducts.map((product, idx) => (
          <SwiperSlide key={idx}>
            <PopulerCard
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <Link
      to={"/products"}
      className="purple_text rounded-lg bg-[#ffe066] px-8 py-3 text-lg font-bold shadow-md transition-colors duration-200 hover:bg-[#ffdb4d]"
    >
      More Products
    </Link>
  </section>
);

export default PopularProducts;
