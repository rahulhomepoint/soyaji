import { Hero } from "../Hero/Hero";
import { Overview } from "../overview/Overview";
import PopularProducts from "../PopularProducts/Popular_products";
import { About } from "../About/About";
import { AskForOrder } from "../AskForOrder/AskForOrder";
import { Products } from "../future_products.jsx/Products";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <PopularProducts />
      <Products />
      <About />
      <AskForOrder />
    </>
  );
}
