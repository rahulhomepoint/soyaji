import SoyajiNavbar from "./Components/Navbar/Navbar";
import { Hero } from "./Components/Hero/Hero";
import { Overview } from "./Components/overview/Overview";
import PopularProducts from "./Components/PopularProducts/Popular_products";
import { Products } from "./Components/future_products.jsx/Products";

export default function App() {
  return (
    <>
      <SoyajiNavbar />
      <Hero />
      <Overview />
      <PopularProducts />
      <Products />
    </>
  );
}
