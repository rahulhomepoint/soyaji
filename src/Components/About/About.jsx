import React from "react";
import aboutImg1 from "../../asset/WEBSITE_ASSETS/about_us_img.jpg";
import aboutImg2 from "../../asset/WEBSITE_ASSETS/about_us_img_2.jpg";
import organicIcon from "../../asset/logo_yellow.png";
import glutenFreeIcon from "../../asset/ICONS/gluten free.png";
import sugarFreeIcon from "../../asset/ICONS/sugerfre.png";
import lactoseFreeIcon from "../../asset/ICONS/lactose free.png";
import { IoMdCheckboxOutline } from "react-icons/io";
import RIGHT_LEAF from "../../asset/WEBSITE_ASSETS/leaf-01.png";

export const About = () => {
  return (
    <div className="relative md:overflow-hidden">
      <section className="flex flex-wrap items-center justify-center bg-white py-16 md:w-full">
        <div className="flex max-w-7xl flex-wrap items-center gap-6 px-6 md:w-full md:justify-center md:gap-12">
          {/* Left Side: Images and About Us */}
          <div className="flex w-2/4 flex-col items-center gap-6">
            <div className="relative flex w-full flex-row items-center gap-6">
              <img
                src={aboutImg1}
                alt="Mother and daughter drinking plant-based milk"
                className="h-70 rounded-xl object-cover shadow-lg md:h-96 md:w-80"
              />
              <div className="bg_purple absolute top-52 left-30 flex h-20 w-20 items-center justify-center rounded-xl shadow-lg md:top-62 md:left-70 md:h-42 md:w-42">
                <img
                  src={organicIcon}
                  alt="Organic Icon"
                  className="h-20 w-20"
                />
              </div>
              <div className="ml-4 flex w-56 flex-col items-center">
                <div className="w-32 text-start md:w-full">
                  {" "}
                  <span className="mb-2 text-start text-lg font-bold text-orange-500 md:ml-1">
                    About Us
                  </span>
                </div>
                <img
                  src={aboutImg2}
                  alt="Mother and child with plant-based milk"
                  className="mt-5 h-54 w-64 rounded-xl object-cover shadow-md md:h-64 md:w-[200px]"
                />
              </div>
            </div>
            <div className="hidden md:mr-14 md:inline-block">
              <p className="purple_text mt-1 items-start text-start text-xs md:w-2/4">
                Plant-based milk is rich in vitamins and minerals, and low in
                cholesterol. It is also advised to people who have a slow
                digestive system and in faster recovery the best of both worlds.
              </p>
            </div>
          </div>
          <div className="md:mr-14 md:hidden">
            <p className="purple_text mt-4 items-start text-start text-xs md:w-2/4">
              Plant-based milk is rich in vitamins and minerals, and low in
              cholesterol. It is also advised to people who have a slow
              digestive system and in faster recovery the best of both worlds.
            </p>
          </div>
          {/* Right Side: Text and Features */}
          <div className="mt-4 flex flex-col gap-4 md:mt-0 md:w-1/3">
            <h2 className="BREAKSONG purple_text mb-2 text-2xl leading-tight md:text-4xl">
              Our Farm Creates <br />
              <span className="text-3xl md:text-4xl">
                The Best Dairy Products
              </span>
            </h2>
            <p className="purple_text mb-4 text-xs">
              Being agriculture graduates, we, the Soyawala team think that if
              we can study above situation and make available a High quality
              fresh Paneer in today’s market we can win food lovers heart and at
              the same time can succeed in our business goals.
            </p>
            <ul className="mb-4 flex w-3/5 flex-col gap-6">
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline />
                </span>
                <span className="text-sm font-semibold">
                  All our food products are home delivered in the safest &
                  hygienic way possible
                </span>
              </li>
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline />
                </span>
                <span className="text-sm font-semibold">
                  Regular Control and Products Quality Monitoring
                </span>
              </li>
              <li className="purple_text flex items-start gap-2">
                <span className="text-xl">
                  <IoMdCheckboxOutline />
                </span>
                <span className="text-sm font-semibold">
                  No artificial or synthetic chemical preservatives have been
                  added to the product
                </span>
              </li>
            </ul>

            {/* Bottom Icons */}
            <div className="flex flex-row gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={sugarFreeIcon}
                  alt="Sugar Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  SUGAR FREE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={glutenFreeIcon}
                  alt="Gluten Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  GLUTEN FREE
                </span>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src={lactoseFreeIcon}
                  alt="Lactose Free"
                  className="mb-1 h-12 w-12"
                />
                <span className="purple_text text-xs font-bold">
                  LACTOSE FREE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center">
        <button className="z-10 mb-4 w-40 rounded-lg bg-orange-400 px-6 py-2 font-bold text-white transition-colors duration-200 hover:bg-orange-500 md:absolute md:bottom-15 md:left-1/2 md:mb-0 md:-translate-x-1/2">
          Know More
        </button>
      </div>
      {/* <img
        src={RIGHT_LEAF}
        alt="right_leaf"
        className="absolute -right-50 -bottom-18 w-80 -rotate-32"
      /> */}
    </div>
  );
};
