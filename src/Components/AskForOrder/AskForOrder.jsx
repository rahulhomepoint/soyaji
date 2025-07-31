import React, { useState } from "react";
import contact_bg from "../../asset/WEBSITE_ASSETS/Contact_BG.png";
import contact_us from "../../asset/WEBSITE_ASSETS/CONTACT_US.jpg";
import leaf_icon from "../../asset/logo_purple.png";
import left_leaf from "../../asset/WEBSITE_ASSETS/leaf-02.png";

export const AskForOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
    bulkOrder: true,
    enquiry: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url(${contact_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background leaf decoration */}
      <div className="absolute bottom-0 left-0 z-0">
        <img
          src={left_leaf}
          alt="Leaf decoration"
          className="h-32 w-32 opacity-60 md:h-48 md:w-48"
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-5xl px-4 py-14">
        <div className="grid items-start gap-20 lg:grid-cols-2">
          {/* Left Section - Soy Products Display using CONTACT_US.jpg */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-lg border-2 border-yellow-400 p-4">
              {/* Main soy products image */}
              <img
                src={contact_us}
                alt="Soy Products Collection"
                className="h-[560px] w-full rounded-lg object-cover"
              />

              {/* Product labels overlay */}

              {/* Leaf icon decorations */}
              <div className="absolute top-16 -left-7 z-10 rounded-full bg-yellow-300 p-2">
                <img
                  src={leaf_icon}
                  alt="Leaf icon"
                  className="h-8 w-8 md:h-10 md:w-10"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-transparent">
              <h2 className="mb-2 text-2xl font-bold text-yellow-400 md:text-3xl">
                ASK US OR ORDER?
              </h2>
              <p className="mb-8 text-lg text-white">
                Please give your details to better serve you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full border-b-2 border-[#a682bd] bg-transparent px-0 py-3 text-white placeholder-[#a682bd] transition-colors focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="w-full border-b-2 border-[#a682bd] bg-transparent px-0 py-3 text-white placeholder-[#a682bd] transition-colors focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Phone Input */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className="w-full border-b-2 border-[#a682bd] bg-transparent px-0 py-3 text-white placeholder-[#a682bd] transition-colors focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Details Textarea */}
                <div className="relative">
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    placeholder="Details of your Order/Enquiry."
                    rows="3"
                    className="w-full resize-none border-b-2 border-[#a682bd] bg-transparent px-0 py-3 text-white placeholder-[#a682bd] transition-colors focus:border-yellow-400 focus:outline-none"
                    required
                  />
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <p className="font-medium text-white">
                    Bulk Order / Enquiry?
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <label className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="checkbox"
                        name="bulkOrder"
                        checked={formData.bulkOrder}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-2 border-gray-300 bg-transparent text-yellow-400 focus:ring-2 focus:ring-yellow-400"
                      />
                      <span className="text-white">Bulk Order</span>
                    </label>
                    <label className="flex cursor-pointer items-center space-x-2">
                      <input
                        type="checkbox"
                        name="enquiry"
                        checked={formData.enquiry}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-2 border-gray-300 bg-transparent text-yellow-400 focus:ring-2 focus:ring-yellow-400"
                      />
                      <span className="text-white">Enquiry</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="purple_text w-full transform rounded-lg bg-yellow-400 px-6 py-4 font-bold transition-colors duration-300 hover:scale-105 hover:bg-yellow-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
