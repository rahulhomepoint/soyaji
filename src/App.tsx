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
import Home from "./Components/Home/Home";
import ProductsPage from "./Components/All_Products/ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <SoyajiNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/order" element={<AskForOrder />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
