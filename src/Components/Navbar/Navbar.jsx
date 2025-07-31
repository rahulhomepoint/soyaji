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
import { Link, useLocation } from "react-router-dom";

/**
 * @param {{ cart: Array<{ product: { name: string }, quantity: number }> }} props
 */
const SoyajiNavbar = ({ cart }) => {
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  return (
    <Navbar
      fluid
      className="sticky top-0 z-50 w-full py-2 sm:!px-20 dark:!bg-white"
    >
      {/* Logo and Brand */}
      <NavbarBrand href="/">
        <img src={logo} className="mr-3 h-10 sm:h-12" alt="Soyawala Logo" />
      </NavbarBrand>
      {/* Responsive Toggle */}
      <NavbarToggle />
      {/* Navigation Links */}
      <NavbarCollapse>
        <Link to="/">
          <NavbarLink
            href="/"
            active={location.pathname === "/"}
            className={`!text-purple-900 ${location.pathname === "/" ? "border-b-2 border-purple-700 font-semibold !text-white md:!text-orange-600" : ""}`}
          >
            Home
          </NavbarLink>
        </Link>
        <Link to="/about">
          <NavbarLink
            href="/about"
            active={location.pathname === "/about"}
            className={`!text-purple-900 ${location.pathname === "/about" ? "border-b-2 border-purple-700 font-semibold !text-white md:!text-orange-600" : ""}`}
          >
            About Us
          </NavbarLink>
        </Link>
        <Link to="/products">
          <NavbarLink
            href="/products"
            active={location.pathname === "/products"}
            className={`!text-purple-900 ${location.pathname === "/products" ? "border-b-2 border-purple-700 font-semibold !text-white md:!text-orange-600" : ""}`}
          >
            Products
          </NavbarLink>
        </Link>
        <Link to="/contacts">
          <NavbarLink
            href="/contacts"
            active={location.pathname === "/contacts"}
            className={`!text-purple-900 ${location.pathname === "/contacts" ? "border-b-2 border-purple-700 font-semibold !text-white md:!text-orange-600" : ""}`}
          >
            Contacts
          </NavbarLink>
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
        <button className="hidden text-purple-900 hover:text-orange-600 md:block">
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
