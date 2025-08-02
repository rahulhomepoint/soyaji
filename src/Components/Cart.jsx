import React from "react";
import { useNavigate } from "react-router-dom";
import { Products } from "./future_products.jsx/Products";
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function Cart({ cart, updateQuantity }) {
  const navigate = useNavigate();
  if (!cart || cart.length === 0) {
    return (
      <div className="my-8 text-center text-gray-500">No products in cart.</div>
    );
  }

  const handleIncrease = (name, currentQuantity) => {
    if (typeof updateQuantity === "function") {
      updateQuantity(name, currentQuantity + 1);
    }
  };

  const handleDecrease = (name, currentQuantity) => {
    if (typeof updateQuantity === "function") {
      if (currentQuantity > 1) {
        updateQuantity(name, currentQuantity - 1);
      } else if (currentQuantity === 1) {
        updateQuantity(name, 0);
      }
    }
  };

  const removeFromCart = (name) => {
    if (typeof updateQuantity === "function") {
      updateQuantity(name, 0);
    }
  };

  const TotalAmount = cart
    .map((item) => item.product.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  const Tax = TotalAmount * 0.05; // Assuming a 5% tax rate

  return (
    <section class="bg-[#f7ede2]/60 py-8 antialiased md:py-16">
      <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 class="purple_text text-xl font-semibold sm:text-2xl">
          Shopping Cart
        </h2>

        <div class="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div class="space-y-6">
              {cart.length > 0
                ? cart.map((item) => {
                    return (
                      <>
                        <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                          <div class="space-y-4 md:flex md:items-center md:gap-6 md:space-y-0">
                            <a href="#" class="shrink-0 md:order-1">
                              <img
                                class="h-26 w-20 object-cover"
                                src={item.product.image}
                                alt="imac image"
                              />
                              {/* <img
                            class="hidden h-20 w-20"
                            src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                            alt="imac image"
                          /> */}
                            </a>

                            <label for="counter-input" class="sr-only">
                              Choose quantity:
                            </label>
                            <div class="flex items-center justify-between md:order-3 md:justify-end">
                              <div class="flex items-center">
                                <button
                                  type="button"
                                  id="decrement-button"
                                  onClick={() =>
                                    handleDecrease(
                                      item.product.name,
                                      item.quantity,
                                    )
                                  }
                                  data-input-counter-decrement="counter-input "
                                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-red-400 bg-red-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none"
                                >
                                  <svg
                                    class="h-2.5 w-2.5 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 2"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M1 1h16"
                                    />
                                  </svg>
                                </button>
                                <input
                                  type="text"
                                  id="counter-input"
                                  data-input-counter
                                  class="purple_text_light w-10 shrink-0 border-0 bg-transparent text-center text-xl font-medium focus:ring-0 focus:outline-none"
                                  placeholder=""
                                  value={item.quantity}
                                  required
                                />
                                <button
                                  type="button"
                                  id="increment-button"
                                  onClick={() =>
                                    handleIncrease(
                                      item.product.name,
                                      item.quantity,
                                    )
                                  }
                                  data-input-counter-increment="counter-input"
                                  class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-green-400 bg-green-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none"
                                >
                                  <svg
                                    class="h-2.5 w-2.5 text-gray-900"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 18"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M9 1v16M1 9h16"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <div class="text-end md:order-4 md:w-32">
                                <p class="purple_text flex items-center justify-end text-xl font-bold">
                                  <FaIndianRupeeSign />
                                  {item.product.price * item.quantity}
                                </p>
                              </div>
                            </div>

                            <div class="purple_text w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                              <p className="mb-2 font-bold">
                                {item.product.name}{" "}
                                <span className="ml-2 text-sm text-gray-500">
                                  ( ₹{item.product.price})
                                </span>
                              </p>
                              <a
                                href="#"
                                class="purple_text_light line-clamp-2 text-base font-medium hover:underline"
                              >
                                {item.product.description}
                              </a>
                              <div class="flex items-center gap-4">
                                <button
                                  type="button"
                                  class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline"
                                >
                                  <svg
                                    class="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                    />
                                  </svg>
                                  Add to Favorites
                                </button>

                                <button
                                  type="button"
                                  onClick={() =>
                                    removeFromCart(item.product.name)
                                  }
                                  class="inline-flex items-center text-sm font-medium text-red-600 hover:underline"
                                >
                                  <svg
                                    class="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke="currentColor"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                  </svg>
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                : " no products in cart"}
            </div>

            <div class="hidden xl:mt-8 xl:block">
              <h3 class="purpel_text text-2xl font-semibold">
                People also bought
              </h3>

              <Products leaf={true} backgroundImage={true} count={4} />
            </div>
          </div>

          <div class="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:sticky lg:top-8 lg:mt-0 lg:w-full">
            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p class="purple_text text-xl font-semibold">Order summary</p>

              <div class="space-y-4">
                <div class="space-y-2">
                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500">
                      Original price
                    </dt>
                    <dd class="text-base font-medium text-gray-900">
                      ₹{TotalAmount}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500">Savings</dt>
                    <dd class="text-base font-medium text-red-600">-₹299.00</dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500">
                      Store Pickup
                    </dt>
                    <dd class="text-base font-medium text-gray-900">
                      ₹{TotalAmount}
                    </dd>
                  </dl>

                  <dl class="flex items-center justify-between gap-4">
                    <dt class="text-base font-normal text-gray-500">Tax</dt>
                    <dd class="text-base font-medium text-gray-900">
                      ₹{Tax.toFixed(2)}
                    </dd>
                  </dl>
                </div>

                <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
                  <dt class="text-base font-bold text-gray-900">Total</dt>
                  <dd class="text-base font-bold text-gray-900">
                    ₹{TotalAmount + Tax}
                  </dd>
                </dl>
              </div>

              {/* Pass order summary to checkout */}
              <button
                type="button"
                onClick={() =>
                  navigate("/checkout", {
                    state: {
                      // updateQuantity,
                      cart,
                      total: TotalAmount,
                      tax: Tax,
                      grandTotal: TotalAmount + Tax,
                    },
                  })
                }
                class="bg_purple flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none"
              >
                Proceed to Checkout
              </button>

              <div class="flex items-center justify-center gap-2">
                <span class="text-sm font-normal text-gray-500"> or </span>
                <a
                  href="#"
                  title=""
                  class="purple_text inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline"
                >
                  Continue Shopping
                  <svg
                    class="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <form class="space-y-4">
                <div>
                  <label
                    for="voucher"
                    class="mb-2 block text-sm font-medium text-gray-900"
                  >
                    {" "}
                    Do you have a voucher or gift card?{" "}
                  </label>
                  <input
                    type="text"
                    id="voucher"
                    class="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    placeholder=""
                    required
                  />
                </div>
                <button
                  type="submit"
                  class="bg_purple flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 focus:outline-none"
                >
                  Apply Code
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
