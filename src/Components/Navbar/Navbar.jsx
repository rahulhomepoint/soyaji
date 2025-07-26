import React, { useState } from "react";
import {
  Badge,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import {
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import logo from "../../asset/Soyawala Logo design.png";
import { Link } from "react-router-dom";

/**
 * @param {{ cart: Array<{ product: { name: string }, quantity: number }> }} props
 */
const SoyajiNavbar = ({ cart }) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <Navbar fluid rounded className="sticky top-0 z-50 w-full py-2 sm:!px-20">
      {/* Logo and Brand */}
      <NavbarBrand href="/">
        <img src={logo} className="mr-3 h-10 sm:h-12" alt="Soyawala Logo" />
      </NavbarBrand>
      {/* Responsive Toggle */}
      <NavbarToggle />
      {/* Navigation Links */}
      <NavbarCollapse>
        <Link to="/">
          {" "}
          <NavbarLink href="/" active className="text-orange-600">
            Home
          </NavbarLink>
        </Link>
        <Link to="/about">
          <NavbarLink className="text-purple-900">About Us</NavbarLink>
        </Link>
        <Link to="/products">
          <NavbarLink className="text-purple-900">Products</NavbarLink>
        </Link>
        <Link to="/contacts">
          <NavbarLink className="text-purple-900">Contacts</NavbarLink>
        </Link>
      </NavbarCollapse>
      {/* Icons */}
      <div className="ml-4 flex items-center gap-4">
        <button
          className="text-purple-900 hover:text-orange-600"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </button>
        <div
          className={`flex items-center overflow-hidden transition-all duration-300 ${showSearch ? "ml-2 w-40 opacity-100" : "ml-0 w-0 opacity-0"}`}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded border border-gray-300 bg-white px-2 py-1 focus:ring-2 focus:ring-orange-400 focus:outline-none"
            autoFocus={showSearch}
            style={{ minWidth: 0 }}
          />
        </div>
        <button className="text-purple-900 hover:text-orange-600">
          <UserIcon className="h-6 w-6" />
        </button>
        <button className="relative text-purple-900 hover:text-orange-600">
          <ShoppingCartIcon className="h-6 w-6" />
          <span className="absolute -top-3 -right-3">
            <Badge
              color="pink"
              size="xs"
              className="rounded-full border-2 border-white"
            >
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </Badge>
          </span>
        </button>
      </div>
    </Navbar>
  );
};

export default SoyajiNavbar;
