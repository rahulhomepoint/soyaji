import { Hero } from "../Hero/Hero";
import { Overview } from "../overview/Overview";
import PopularProducts from "../PopularProducts/Popular_products";
import { About } from "../About/About";
import { AskForOrder } from "../AskForOrder/AskForOrder";
import { Products } from "../future_products.jsx/Products";
import { Footer } from "../Footer/Footer";
import { SEO } from "../SEO";

/**
 * @param {{ addToCart: (product: any) => void, cart: Array<{ product: { name: string }, quantity: number }>, updateQuantity: (productName: string, newQuantity: number) => void }} props
 */
export default function Home({ addToCart, cart, updateQuantity }) {
  return (
    <>
      <SEO
        title="Soyawala | Best Plant-Based Soya Dairy Products – Lactose Free & Organic"
        description="Buy fresh soya milk, paneer, yogurt, cheese and ice cream online. Soyawala delivers 100% organic, lactose-free, gluten-free soya products right to your door in Kolkata."
        keywords="soya milk, soya paneer, lactose free dairy, organic plant-based milk, buy soya products online, Soyawala Kolkata"
        canonical="https://www.soyawala.com/"
      />
      <Hero />
      <Overview />
      <PopularProducts
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
      />
      <Products
        count={4}
        addToCart={addToCart}
        cart={cart}
        updateQuantity={updateQuantity}
      />
      <About />
      <AskForOrder />
      {/* <Footer /> */}
    </>
  );
}
