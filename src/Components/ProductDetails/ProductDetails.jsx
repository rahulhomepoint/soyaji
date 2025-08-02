import React, { useState } from "react";
// import CartSlider from "./CartSlider";
import { useParams, Link } from "react-router-dom";
import { HiCheck, HiArrowLeft, HiStar, HiClock, HiScale } from "react-icons/hi";
import { Toast, ToastToggle } from "flowbite-react";
import headerBG from "../../asset/BANNER_01.jpg";
import organic1 from "../../asset/ICONS/organic_1.png";
import organic2 from "../../asset/ICONS/organic_2.png";
import organic3 from "../../asset/ICONS/organic_3.png";

// Import shared products data
import { allProducts } from "../../Util/productsData";
import { Products } from "../future_products.jsx/Products";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
// const [show, setShow] = useState(false);

export default function ProductDetails({
  addToCart,
  cart,
  updateQuantity,
  toast,
  hideToast,
}) {
  const { productId } = useParams();
  const product = allProducts.find((p) => p.id === productId);
  const [selectedWeight, setSelectedWeight] = useState(product?.unit || "");

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f7ede2]">
        <div className="text-center">
          <h1 className="purple_text mb-4 text-2xl font-bold">
            Product Not Found
          </h1>
          <Link
            to="/products"
            className="bg_purple inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white hover:bg-purple-700"
          >
            <HiArrowLeft className="h-5 w-5" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const cartItem = cart?.find((item) => item.product.name === product.name);
  const currentQuantity = cartItem?.quantity || 0;
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  const handleAddToCart = () => {
    if (typeof addToCart === "function") {
      addToCart(product);
    }
  };

  const handleIncrease = () => {
    if (typeof updateQuantity === "function") {
      updateQuantity(product.name, currentQuantity + 1);
    }
  };

  const handleDecrease = () => {
    if (typeof updateQuantity === "function") {
      if (currentQuantity > 1) {
        updateQuantity(product.name, currentQuantity - 1);
      } else if (currentQuantity === 1) {
        updateQuantity(product.name, 0);
      }
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <HiStar key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <HiStar
          key="half"
          className="h-5 w-5 fill-yellow-400 text-yellow-400"
        />,
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <HiStar key={`empty-${i}`} className="h-5 w-5 text-gray-300" />,
      );
    }

    return stars;
  };
  const [show, setShow] = useState(false);
  return (
    <div className="min-h-screen scroll-smooth bg-[#f7f1eb]/70">
      {!product ? (
        <div
          className="flex h-[100px] items-center justify-center md:h-[200px]"
          style={{
            backgroundImage: `url(${headerBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-2xl font-bold text-white">PRODUCT DETAILS</h1>
        </div>
      ) : null}
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
        <nav className="mb-8 flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-purple-600">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-purple-600">
            Products
          </Link>
          <span>/</span>
          <span className="text-purple-600">{product.name}</span>
        </nav>

        <div className="relative grid gap-8 lg:grid-cols-7 xl:gap-12">
          {/* Product Image Gallery */}
          <div className="col-span-4 space-y-4">
            {/* Main Product Image */}
            <div className="aspect-square h-[420px] overflow-hidden rounded-lg border border-gray-200 md:w-[670px]">
              <div className="grid h-[420px] w-[670px] grid-cols-4 gap-4">
                <div className="col-span-1 flex flex-col gap-4 p-2 *:mx-auto *:h-20 *:w-20 *:rounded-lg *:object-cover">
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="col-span-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-cover"
                  />
                </div>
              </div>
              {/* 
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover md:h-full"
              /> */}
            </div>

            {/* Product Image Gallery */}
            {/* Highlights */}
            {product.highlight && product.highlight.length > 0 && (
              <div className="mb-6">
                <h3 className="purple_text mb-3 text-lg font-semibold">
                  Highlights
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.highlight.map((highlight, index) => (
                    <span
                      key={index}
                      className="purple_text rounded-lg border border-purple-950 p-3 text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* product details  */}
            <div className="purple_text px-4">
              <h1 className="flex items-center justify-between text-lg font-semibold">
                <span>Product Details</span>
              </h1>
              <p className="mt-3 text-sm font-bold underline">Description</p>
              <p className="mt-3 w-2/3 text-sm">
                {product.detailedDescription}
              </p>

              {show ? (
                <>
                  {" "}
                  <p className="mt-3 text-sm font-bold underline">
                    Key Features
                  </p>
                  <ul className="mt-3 ml-3 w-2/3 list-disc text-sm">
                    {product.keyFeatures.map((item, index) => {
                      return (
                        <>
                          <li>{item}</li>
                        </>
                      );
                    })}
                  </ul>
                  <p className="mt-3 text-sm font-bold">
                    Unit : {product.unit}
                  </p>
                  <p className="mt-3 text-sm">
                    FSSAI License <br /> 10020043003508 <br /> Flavour: Natural
                  </p>
                  <p className="mt-3 text-sm">Shelf Life: 3 months</p>
                  <p className="mt-3 text-sm font-bold underline">
                    {" "}
                    Return Policy
                  </p>
                  <p className="mt-3 text-sm">
                    This Item is non-returnable. For a damaged, defective,
                    incorrect or expired item, you can request a replacement
                    within 72 hours of delivery. In case of an item, you can
                    request a incorrect item, you may raise a replacement or
                    return request only if the item sealed/ unopened/ unused and
                    in original condition.
                  </p>
                  <p className="mt-3 text-sm font-bold underline">
                    {" "}
                    Manufacturer's Name and Address{" "}
                  </p>
                  <p className="mt-3 text-sm">
                    COMMUNITY FOOD SYSTEM <br />& SERVICE INDIA PVT LTD Godown
                    no.33,34: S/No.44, Hissa 2/2/6. Near Matoshree Garden,
                    Pisoli, Pune, Maharashtra 411060 Marketer's Name and Address{" "}
                    <br></br>
                    Marketer's Name and Address <br /> Vegolution India Pvt
                    Ltd,No.93, 1st Block, 3rd Main, RT Nagar,Bengaluru
                    (Bangalore) Urban,Karnataka, 560032
                  </p>
                  <p className="mt-3 text-sm">Country of Origin: India</p>
                  <p className="mt-3 text-sm font-bold underline">
                    {" "}
                    Disclaimer:
                  </p>
                  <p className="mt-3 text-sm">
                    Every effort is made to maintain accuracy of all
                    information. However, actual aterials may contain more
                    and/or different product packaging and materials may contain
                    mo information. It is recommended not to solely rely on the
                    information information. It presented.
                  </p>
                  <p className="mt-3 text-sm font-bold underline"> FSSAI:</p>
                  <p className="mt-3 text-sm">
                    10020064002537 <br />
                    Essential information on food additives:
                  </p>
                </>
              ) : (
                ""
              )}
              <span
                className="mt-4 flex cursor-pointer items-center gap-2 text-sm font-medium text-yellow-400"
                onClick={(e) => {
                  e.stopPropagation();
                  setShow(!show);
                }}
              >
                {" "}
                {show ? <FiArrowUp /> : <FiArrowDown />}
                Read more..
              </span>
            </div>
          </div>

          {/* Product Information */}
          <div className="lg:scrollbar-thin lg:scrollbar-thumb-purple-300 lg:scrollbar-track-transparent col-span-3 h-fit space-y-6 lg:sticky lg:top-4 lg:overflow-y-auto">
            <div>
              <h1 className="purple_text mb-2 font-bold md:text-xl">
                {product.name}
              </h1>
              <p className="purple_text mb-6 w-2/3 text-xs">
                {product.description}
              </p>

              <p className="purple_text">
                <span className="opacity-80">Unit - </span>
                <span className="font-bold opacity-100">
                  {product.unit}
                </span>{" "}
              </p>

              <div className="flex items-center gap-12">
                <p className="purple_text mt-1 text-lg font-semibold">
                  price : <span>₹{product.price} </span>{" "}
                  <span className="text-sm tracking-widest">
                    (₹{product.price / 100}/gram)
                  </span>
                  <p className="text-[10px]">(inclusive of all taxes)</p>
                </p>
                {/* Add to Cart Section */}
                <div className="">
                  {currentQuantity === 0 ? (
                    <button
                      onClick={handleAddToCart}
                      className="bg_purple_light w-full rounded-lg px-4 py-2 text-sm text-white transition-colors hover:bg-purple-700"
                    >
                      Add to Cart - ₹{discountedPrice}
                    </button>
                  ) : (
                    <div className="flex items-center justify-center gap-4">
                      <button
                        onClick={handleDecrease}
                        className="bg_purple_light flex h-6 w-6 items-center justify-center rounded-full px-6 text-white transition-colors hover:bg-purple-700"
                      >
                        -
                      </button>
                      <span className="purple_text min-w-[1rem] text-center text-xl font-semibold">
                        {currentQuantity}
                      </span>
                      <button
                        onClick={handleIncrease}
                        className="bg_purple_light flex h-6 w-6 items-center justify-center rounded-full px-6 text-white transition-colors hover:bg-purple-700"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Category and Subcategory */}
              {/* <div className="mb-4 flex items-center gap-4">
                <span className="purple_text rounded-full bg-purple-100 px-3 py-1 text-sm font-medium">
                  {product.category}
                </span>
                {product.subcategory && (
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {product.subcategory}
                  </span>
                )}
              </div> */}

              {/* Rating and Reviews */}
              {/* {product.rating && (
                <div className="mb-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              )} */}

              {/* Price Section */}
              {/* <div className="mb-6 flex items-center gap-4">
                <span className="purple_text text-3xl font-bold">
                  ₹{discountedPrice}
                </span>
                {product.discount && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      ₹{product.price}
                    </span>
                    <span className="rounded bg-green-100 px-2 py-1 text-sm font-medium text-green-800">
                      {product.discount}% OFF
                    </span>
                  </>
                )}
              </div> */}

              {/* Weight Type Selection */}
              {product.wigthType && product.wigthType.length > 0 && (
                <div className="mt-8 mb-6">
                  {/* <h3 className="purple_text mb-3 flex items-center gap-2 text-lg font-semibold">
                    <HiScale className="h-5 w-5" />
                    Select Size
                  </h3> */}
                  <div className="flex flex-wrap gap-2">
                    {product.wigthType.map((weight, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedWeight(weight)}
                        className={`rounded-lg border-2 px-4 py-2 text-sm font-medium transition-colors ${
                          selectedWeight === weight
                            ? "bg_purple_light border-fuchsia-800 text-white"
                            : "purple_text_light border-gray-300 bg-white hover:border-purple-300"
                        }`}
                      >
                        {weight}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h1 className="purple_text mb-3 font-semibold">
                  About Our Products{" "}
                </h1>
                <p className="purple_text w-2/3 text-sm font-light">
                  {product.aboutProduct
                    ? product.aboutProduct
                    : "no description"}
                </p>
              </div>

              <div className="purple_text mt-8">
                <h1 className="font-semibold">Why shop from Us ?</h1>
                <div className="mt-3 flex w-5/6 items-center gap-6">
                  <img src={organic1} alt="" className="size-16" />
                  <p className="text-sm">
                    <span className="font-semibold text-yellow-500">
                      Purity at Every Step:
                    </span>{" "}
                    Our products are made Highlights from non-GMO, high-grade
                    soybeans, sourced from trusted farms.
                  </p>
                </div>
                <div className="mt-3 flex w-5/6 items-center gap-6">
                  <img src={organic2} alt="" className="size-16" />
                  <p className="text-sm">
                    <span className="font-semibold text-yellow-500">
                      Modern Manufacturing:
                    </span>{" "}
                    State- Moder State-of-the-art equipment ensures hygienic
                    processing, freshness, and consistency in every batch.
                  </p>
                </div>
                <div className="mt-3 flex w-5/6 items-center gap-6">
                  <img src={organic3} alt="" className="size-16" />
                  <p className="text-sm">
                    <span className="font-semibold text-yellow-500">
                      No Artificial Additives:
                    </span>{" "}
                    We keep it clean no chemicals, preservatives, or synthetic
                    colors. Just real, nutritious soy.
                  </p>
                </div>
              </div>

              {/* Expiry Date */}
              {/* {product.expire && (
                <div className="mb-6 flex items-center gap-2 text-sm text-gray-600">
                  <HiClock className="h-4 w-4" />
                  <span>Expires in: {product.expire}</span>
                </div>
              )} */}

              {/* Description */}
              {/* <p className="mb-6 leading-relaxed text-gray-700">
                {product.detailedDescription}
              </p> */}

              {/* Key Features */}
              {/* {product.keyFeatures && product.keyFeatures.length > 0 && (
                <div className="mb-6">
                  <h3 className="purple_text mb-3 text-lg font-semibold">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <HiCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )} */}

              {/* Benefits */}
              {/* <div className="mb-6">
                <h3 className="purple_text mb-3 text-lg font-semibold">
                  Key Benefits
                </h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <HiCheck className="h-5 w-5 flex-shrink-0 text-green-500" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div> */}

              {/* Nutritional Information */}
              {/* <div className="mb-6">
                <h3 className="purple_text mb-3 text-lg font-semibold">
                  Nutritional Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(product.nutritionalInfo).map(
                    ([key, value]) => (
                      <div key={key} className="rounded-lg border bg-white p-3">
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, " $1")}
                        </div>
                        <div className="purple_text font-semibold">{value}</div>
                      </div>
                    ),
                  )}
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div>
          <h2 className="purple_text mt-10 mb-4 text-xl font-semibold">
            Top 10 Products in this category
          </h2>
        </div>
        <Products leaf={true} backgroundImage={true} count={4.5} />
      </div>

      {toast && toast.show && (
        <div className="fixed right-5 bottom-5 z-50">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{toast.message}</div>
            <ToastToggle onDismiss={hideToast} />
          </Toast>
        </div>
      )}
    </div>
  );
}
