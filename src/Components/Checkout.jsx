import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Modal,
  Label,
  TextInput,
  Select,
  Textarea,
  Button,
} from "flowbite-react";

export default function Checkout() {
  const location = useLocation();
  const {
    cart = [],
    total = 58766,
    tax = 49,
    grandTotal = 58815,
    savings = 34174,
  } = location.state || {};

  // Mock addresses for demo
  const [selectedAddress, setSelectedAddress] = useState(0);
  const addresses = [
    {
      name: "Rahul Srivastava",
      type: "HOME",
      phone: "9507981942",
      address: "1, Krishna Puri colony, Kenduadih, Jharkhand",
      pincode: "828117",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f7ede2]/60 py-8 antialiased md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-2 md:flex-row md:px-6">
        {/* Left Main Content: Stepper, Address, Order Summary */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {/* Stepper */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center">
              <span className="mr-2 flex size-5 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </span>
              <span className="font-semibold text-gray-900">LOGIN</span>
              <span className="ml-2 text-sm font-medium text-gray-700">
                Rahul Srivastava{" "}
                <span className="font-normal">+919507981942</span>
              </span>
              <button className="ml-4 rounded border border-blue-600 px-3 py-1 text-xs text-blue-600 hover:bg-blue-50">
                CHANGE
              </button>
            </div>
          </div>
          {/* Delivery Address */}
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="bg_purple flex items-center rounded-t-lg px-6 py-3">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-bold text-blue-600">
                2
              </span>
              <span className="text-lg font-semibold text-white">
                DELIVERY ADDRESS
              </span>
            </div>
            <div className="px-6 py-4">
              {addresses.map((addr, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-3 border-b border-gray-200 py-4 ${selectedAddress === idx ? "bg-blue-50" : ""}`}
                >
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === idx}
                    onChange={() => setSelectedAddress(idx)}
                    className="mt-1 accent-blue-600"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-900">
                        {addr.name}
                      </span>
                      <span className="rounded bg-gray-200 px-2 py-0.5 text-xs text-gray-700">
                        {addr.type}
                      </span>
                      <span className="font-semibold text-gray-900">
                        {addr.phone}
                      </span>
                      <button className="ml-2 text-xs font-medium text-blue-600 hover:underline">
                        EDIT
                      </button>
                    </div>
                    <div className="mt-1 text-sm text-gray-700">
                      {addr.address} -{" "}
                      <span className="font-bold">{addr.pincode}</span>
                    </div>
                    {selectedAddress === idx && (
                      <button className="mt-3 rounded bg-orange-500 px-6 py-2 font-semibold text-white transition hover:bg-orange-600">
                        DELIVER HERE
                      </button>
                    )}
                  </div>
                </div>
              ))}
              <div className="border-b border-gray-200 py-4">
                <button className="text-sm font-medium text-blue-600 hover:underline">
                  View all 7 addresses
                </button>
              </div>
              <div className="py-4">
                <button className="flex items-center text-sm font-medium text-blue-600 hover:underline">
                  <span className="mr-2 text-xl">+</span> Add a new address
                </button>
              </div>
            </div>
          </div>
          {/* Order Summary Step 3 */}
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="flex items-center rounded-t-lg bg-blue-600 px-6 py-3">
              <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-white font-bold text-blue-600">
                3
              </span>
              <span className="text-lg font-semibold text-white">
                ORDER SUMMARY
              </span>
            </div>
            {/* Out of Stock Warning */}
            {/* <div className="border-b border-gray-200 bg-red-50 px-6 py-4">
              <div className="mb-1 font-semibold text-red-600">
                The following item has become Out of Stock.
              </div>
              <ul className="ml-6 list-disc text-sm text-red-700">
                <li>
                  Apple MacBook AIR Apple M2 - (16 GB/256 GB SSD/macOS Sequoia)
                  MC7W4HN/A
                </li>
              </ul>
            </div> */}
            {/* Available Items */}
            <div className="border-b border-gray-200 px-6 py-4">
              <div className="mb-3 font-medium text-gray-900">
                You can continue to place order with following available items.
              </div>
              <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <img
                  src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/laptop/2/6/2/-original-imagzjhwtzqgqg7z.jpeg"
                  alt="Samsung Galaxy Book4"
                  className="h-24 w-32 rounded border object-contain"
                />
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        Samsung Galaxy Book4 Edge Series Copilot AI-PC Q...
                      </div>
                      <div className="text-xs text-gray-600">
                        15.6 inch, Sapphire Blue, 1.55 Kg, With MS Office
                      </div>
                      <div className="text-xs text-gray-600">
                        Seller: RetailNet
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-400 line-through">
                          ₹92,390
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          ₹58,490
                        </span>
                        <span className="text-sm font-semibold text-green-600">
                          36% Off
                        </span>
                        <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          1 coupon applied{" "}
                          <span className="inline-block align-middle">
                            <svg
                              className="ml-1 inline h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <circle cx="10" cy="10" r="10" fill="#16a34a" />
                              <text
                                x="10"
                                y="15"
                                textAnchor="middle"
                                fontSize="12"
                                fill="#fff"
                              >
                                i
                              </text>
                            </svg>
                          </span>
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-gray-700">
                        + ₹49 Protect Promise Fee
                      </div>
                      <div className="mt-1 text-xs text-gray-500">
                        Or Pay ₹58,390 + <span className="font-bold">100</span>{" "}
                        <span className="text-yellow-500">●</span>
                      </div>
                    </div>
                    <div className="mt-2 text-right md:mt-0 md:ml-8">
                      <div className="text-xs text-gray-600">
                        Delivery by{" "}
                        <span className="font-semibold">Wed Aug 6</span>
                      </div>
                      <div className="mt-1 flex items-center">
                        <svg
                          className="mr-2 h-6 w-6 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M21 19V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12"
                            fill="#fbbf24"
                          />
                          <path d="M3 19h18" stroke="#fbbf24" strokeWidth="2" />
                          <path
                            d="M7 19v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"
                            stroke="#fbbf24"
                            strokeWidth="2"
                          />
                        </svg>
                        <span className="text-xs font-semibold text-gray-700">
                          Open Box Delivery is eligible for this item. You will
                          receive a confirmation post payment.{" "}
                          <a href="#" className="ml-1 text-blue-600 underline">
                            Know More
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <button className="h-8 w-8 rounded border text-lg font-bold text-gray-700 hover:bg-gray-100">
                      -
                    </button>
                    <span className="flex h-8 w-8 items-center justify-center rounded border text-lg">
                      1
                    </span>
                    <button className="h-8 w-8 rounded border text-lg font-bold text-gray-700 hover:bg-gray-100">
                      +
                    </button>
                    <button className="ml-6 text-lg font-semibold text-gray-700 hover:underline">
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* GST Invoice */}
            <div className="flex items-center gap-2 border-b border-gray-200 px-0 py-4 md:px-6">
              <input
                type="checkbox"
                id="gst-invoice"
                className="accent-blue-600"
              />
              <label htmlFor="gst-invoice" className="text-sm text-gray-900">
                Use GST Invoice
              </label>
            </div>
            {/* Order Confirmation Email */}
            <div className="flex flex-col px-0 py-4 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="text-sm text-gray-700">
                Order confirmation email will be sent to{" "}
                <span className="font-semibold text-gray-900">
                  rahulranjeetusha123mom@gm<span className="text-xs">...</span>
                </span>
              </div>
              <button className="mt-4 rounded bg-orange-500 px-10 py-2 text-lg font-semibold text-white transition hover:bg-orange-600 md:mt-0">
                CONTINUE
              </button>
            </div>
          </div>
        </div>
        {/* Price Details Sidebar */}
        <div className="w-full md:w-96">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              PRICE DETAILS
            </h3>
            <div className="mb-2 flex justify-between text-base">
              <span>Price (2 items)</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
            <div className="mb-2 flex justify-between text-base">
              <span>Protect Promise Fee</span>
              <span>₹{tax}</span>
            </div>
            <hr className="my-3 border-gray-200" />
            <div className="mb-2 flex justify-between text-lg font-bold">
              <span>Total Payable</span>
              <span>₹{grandTotal.toLocaleString()}</span>
            </div>
            <div className="mb-3 rounded bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
              Your Total Savings on this order{" "}
              <span className="font-bold">₹{savings.toLocaleString()}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2l4 -4"
                />
                <circle cx="12" cy="12" r="10" />
              </svg>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
