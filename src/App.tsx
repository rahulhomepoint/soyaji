// @ts-expect-error: No declaration file for JSX import from JS file
import SoyajiNavbar from "./Components/Navbar/Navbar";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Hero } from "./Components/Hero/Hero";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Overview } from "./Components/overview/Overview";
// @ts-expect-error: No declaration file for JSX import from JS file
import PopularProducts from "./Components/PopularProducts/Popular_products";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Products } from "./Components/future_products.jsx/Products";
// @ts-expect-error: No declaration file for JSX import from JS file
import { About } from "./Components/About/About";
// @ts-expect-error: No declaration file for JSX import from JS file
import { AskForOrder } from "./Components/About/AskForOrder";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Footer } from "./Components/Footer/Footer";

export default function App() {
  return (
    <>
      <SoyajiNavbar />
      <Hero />
      <Overview />
      <PopularProducts />
      <Products />
      <About />
      <AskForOrder />
      <Footer />
    </>
  );
}
