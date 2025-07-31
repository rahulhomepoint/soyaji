// @ts-expect-error: No declaration file for JSX import from JS file
import SoyajiNavbar from "./Components/Navbar/Navbar";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Overview } from "./Components/overview/Overview";
// @ts-expect-error: No declaration file for JSX import from JS file
import { About } from "./Components/About/About";
// @ts-expect-error: No declaration file for JSX import from JS file
import { AskForOrder } from "./Components/AskForOrder/AskForOrder";
// @ts-expect-error: No declaration file for JSX import from JS file
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-expect-error: No declaration file for JSX import from JS file
import Home from "./Components/Home/Home";
// @ts-expect-error: No declaration file for JSX import from JS file
import ProductsPage from "./Components/All_Products/ProductsPage";
import { useState } from "react";

// Product type
interface Product {
  image: string;
  name: string;
  unit: string;
  price: number;
  description: string;
  button: string;
  category: string;
  discount: number;
}
// Cart item type
interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  // Cart state: array of { product, quantity }
  const [cart, setCart] = useState<CartItem[]>([]);
  // Notification state for Toast with position and auto-hide
  const [toast, setToast] = useState({
    show: false,
    message: "",
    position: { x: 0, y: 0 },
    timer: null as number | null,
  });

  // Add to cart handler
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.product.name === product.name,
      );
      if (existing) {
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });

    // Clear existing timer
    if (toast.timer) {
      clearTimeout(toast.timer);
    }

    // Set new timer for auto-hide
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3000);

    setToast({
      show: true,
      message: `${product.name} added to cart!`,
      position: { x: 0, y: 0 }, // Not used anymore but keeping for compatibility
      timer,
    });
  };

  // Hide toast handler
  const hideToast = () => {
    if (toast.timer) {
      clearTimeout(toast.timer);
    }
    setToast((prev) => ({ ...prev, show: false, timer: null }));
  };

  // Update quantity handler
  const updateQuantity = (productName: string, newQuantity: number) => {
    setCart((prevCart) => {
      if (newQuantity === 0) {
        // Remove item from cart
        return prevCart.filter((item) => item.product.name !== productName);
      } else {
        // Update quantity
        return prevCart.map((item) =>
          item.product.name === productName
            ? { ...item, quantity: newQuantity }
            : item,
        );
      }
    });
  };

  return (
    <BrowserRouter>
      <SoyajiNavbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              addToCart={addToCart}
              cart={cart}
              updateQuantity={updateQuantity}
              toast={toast}
              hideToast={hideToast}
            />
          }
        />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<AskForOrder />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
