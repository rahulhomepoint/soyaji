import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { Modal, Label, TextInput, Select, Textarea, Button } from "flowbite-react";

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
  // Add state to control Order Summary visibility and address visibility
  const [showOrderSummaryContent, setShowOrderSummaryContent] = useState(false);
  const [showAddressSection, setShowAddressSection] = useState(true);
  // Add state for modal control and new address
  const [openModal, setOpenModal] = useState(false);
  const [newAddress, setNewAddress] = useState({
    name: "",
    type: "HOME",
    phone: "",
    address: "",
    pincode: "",
  });
  const [addresses, setAddresses] = useState([
    {
      name: "Rahul Srivastava",
      type: "HOME",
      phone: "9507981942",
      address: "1, Krishna Puri colony, Kenduadih, Jharkhand",
      pincode: "828117",
    },
  ]);

  console.log("cart data ", cart);

  // Function to handle "DELIVER HERE" button click
  const handleDeliverHereClick = () => {
    setShowOrderSummaryContent(true);
    setShowAddressSection(false);
  };

  // Function to handle "CHANGE" button click for delivery address
  const handleChangeAddressClick = () => {
    setShowOrderSummaryContent(false);
    setShowAddressSection(true);
  };

  // Function to handle input changes in the address form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Function to add a new address
  const handleAddAddress = () => {
    setAddresses(prev => [...prev, newAddress]);
    setNewAddress({
      name: "",
      type: "HOME",
      phone: "",
      address: "",
      pincode: "",
    });
    setOpenModal(false);
  };

  return (
    <section className="min-h-screen bg-[#f7ede2]/60 py-8 antialiased md:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-2 md:flex-row md:px-6">
        {/* Left Main Content: Stepper, Address, Order Summary */}
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          {/* Stepper */}
          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center">
              <span className="bg_purple mr-2 flex size-5 items-center justify-center rounded-full font-bold text-white">
                1
              </span>
              <span className="text-sm font-semibold text-gray-500">LOGIN</span>
              <span className="purple_text ml-2 text-sm font-medium">
                Rahul Srivastava{" "}
                <span className="font-normal">+919507981942</span>
              </span>
              <button className="purple_text ml-4 rounded border border-blue-600 px-3 py-1 text-xs hover:bg-blue-50">
                CHANGE
              </button>
            </div>
          </div>
          {/* Delivery Address */}
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="bg_purple flex items-center rounded-t-lg px-6 py-3">
              <span className="purple_text mr-2 flex size-5 items-center justify-center rounded-full bg-white font-bold">
                2
              </span>
              <span className="text-lg text-white">DELIVERY ADDRESS</span>
              {!showAddressSection && (
                <button
                  className="purple_text ml-auto cursor-pointer rounded border border-fuchsia-800 bg-fuchsia-200 px-3 py-1 text-xs hover:bg-blue-50"
                  onClick={handleChangeAddressClick}
                >
                  CHANGE
                </button>
              )}
            </div>
            {showAddressSection && (
              <div className="px-6 py-4">
                {addresses.map((addr, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 rounded-xl border-b border-gray-200 px-4 py-4 ${selectedAddress === idx ? "bg-blue-50" : ""}`}
                  >
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddress === idx}
                      onChange={() => setSelectedAddress(idx)}
                      className="mt-1 accent-blue-600"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="purple_text font-semibold">
                          {addr.name}
                        </span>
                        <span className="purple_text rounded bg-gray-200 px-2 py-0.5 text-xs">
                          {addr.type}
                        </span>
                        <span className="purple_text font-semibold">
                          {addr.phone}
                        </span>
                        <button className="ml-2 text-xs font-medium text-red-600 hover:underline">
                          EDIT
                        </button>
                      </div>
                      <div className="purple_text mt-1 text-sm">
                        {addr.address} -{" "}
                        <span className="font-bold">{addr.pincode}</span>
                      </div>
                      {selectedAddress === idx && (
                        <button
                          className="bg_purple_light mt-3 rounded px-2 py-2 text-xs text-white transition hover:bg-orange-600"
                          onClick={handleDeliverHereClick}
                        >
                          DELIVER HERE
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <div className="border-b border-gray-200 py-4">
                  <button className="purple_text text-sm font-medium hover:underline">
                    View all 7 addresses
                  </button>
                </div>
                <div className="py-4">
                  <button 
                    className="purple_text flex items-center text-sm font-medium hover:underline"
                    onClick={() => setOpenModal(true)}
                  >
                    <span className="mr-2 text-xl">+</span> Add a new address
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Order Summary Step 3 - Always show header, but conditionally show content */}
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="bg_purple flex items-center rounded-t-lg px-6 py-3">
              <span className="purple_text mr-2 flex size-5 items-center justify-center rounded-full bg-white font-bold">
                3
              </span>
              <span className="text-lg text-white">ORDER SUMMARY</span>
            </div>
            {showOrderSummaryContent && (
              <>
                {/* Available Items */}
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="purple_text mb-3 font-medium">
                    You can continue to place order with following available
                    items.
                  </div>
                  {cart.length > 0
                    ? cart.map((item, index) => {
                        return (
                          <div
                            className="flex flex-col items-start gap-4 border-b-1 border-gray-200 py-2 md:flex-row md:items-center"
                            key={index}
                          >
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-24 w-32 rounded border object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                  <div className="purple_text font-semibold">
                                    {item.product.name}
                                  </div>
                                  <div className="line-clamp-1 text-xs text-gray-600">
                                    {item.product.description}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    Seller: RetailNet
                                  </div>
                                  <div className="mt-1 flex items-center gap-2">
                                    <span className="purple_text flex w-94 items-center justify-between text-xl font-bold">
                                      ₹{item.product.price}{" "}
                                      <div className="flex items-center gap-2">
                                        <button className="size-6 rounded border bg-red-100 p-1 text-lg font-bold text-red-700 hover:bg-gray-100">
                                          <IoIosRemove />
                                        </button>
                                        <span className="flex size-6 items-center justify-center rounded border text-sm">
                                          {item.quantity}
                                        </span>
                                        <button className="size-6 rounded border bg-green-100 text-lg font-bold text-green-700 hover:bg-gray-100">
                                          <IoIosAdd />
                                        </button>
                                        <button className="purple_text ml-6 text-xs font-semibold hover:underline">
                                          REMOVE
                                        </button>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    : "product are not in cart "}
                </div>
                {/* Order Confirmation Email */}
                <div className="flex flex-col px-0 py-4 md:flex-row md:items-center md:justify-between md:px-6">
                  <div className="purple_text text-sm">
                    Order confirmation email will be sent to{" "}
                    <span className="purple_text font-semibold">
                      rahulhomepoint@gm<span className="text-xs">...</span>
                    </span>
                  </div>
                  <button className="bg_purple_light mt-4 cursor-pointer rounded px-10 py-2 text-white transition hover:bg-orange-600 md:mt-0">
                    CONTINUE
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Price Details Sidebar */}
        <div className="w-full md:w-96">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:sticky md:top-4">
            <h3 className="purple_text mb-4 text-lg font-semibold">
              PRICE DETAILS
            </h3>
            <div className="mb-2 flex justify-between text-base">
              <span>
                Price (
                {cart.map((item) => item.quantity).reduce((a, b) => a + b, 0)}{" "}
                items)
              </span>
              <span>₹{total}</span>
            </div>
            <div className="mb-2 flex justify-between text-base">
              <span>Tax </span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="mb-2 flex justify-between text-base">
              <span>Protect Promise Fee</span>
              <span>₹ 49 </span>
            </div>
            <hr className="my-3 border-gray-200" />
            <div className="mb-2 flex justify-between text-lg font-bold">
              <span>Total Payable</span>
              <span>₹{grandTotal + 49}</span>
            </div>
            <div className="mb-3 rounded bg-green-50 px-3 py-2 text-sm font-semibold text-green-700">
              Your Total Savings on this order{" "}
              <span className="font-bold">₹{savings}</span>
            </div>
            <button className="bg_purple_light mt-4 w-full cursor-pointer rounded px-10 py-2 text-white transition hover:bg-orange-600 md:mt-0">
              CONTINUE
            </button>
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

      {/* Flowbite React Modal for adding new address */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="purple_text">Add New Address</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Full Name" />
              </div>
              <TextInput
                id="name"
                name="name"
                value={newAddress.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="type" value="Address Type" />
              </div>
              <Select
                id="type"
                name="type"
                value={newAddress.type}
                onChange={handleInputChange}
                required
              >
                <option value="HOME">HOME</option>
                <option value="WORK">WORK</option>
                <option value="OTHER">OTHER</option>
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number" />
              </div>
              <TextInput
                id="phone"
                name="phone"
                type="tel"
                value={newAddress.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
              </div>
              <Textarea
                id="address"
                name="address"
                value={newAddress.address}
                onChange={handleInputChange}
                rows={3}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="pincode" value="Pincode" />
              </div>
              <TextInput
                id="pincode"
                name="pincode"
                value={newAddress.pincode}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg_purple_light" onClick={handleAddAddress}>Save Address</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
