import { Hero } from "../Hero/Hero";
import { Overview } from "../overview/Overview";
import PopularProducts from "../PopularProducts/Popular_products";
import { About } from "../About/About";
import { AskForOrder } from "../AskForOrder/AskForOrder";
import { Products } from "../future_products.jsx/Products";
import { Footer } from "../Footer/Footer";

/**
 * @param {{ addToCart: (product: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
export default function Home({ addToCart, cart, updateQuantity }) {
  return (
    <>
      <Hero />
      <Overview />
      <PopularProducts
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
      />
      <Products
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
      />
      <About />
      <AskForOrder />
      <Footer />
    </>
  );
}
