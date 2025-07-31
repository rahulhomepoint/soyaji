import React from "react";
import { Button, Badge } from "flowbite-react";
import banner from "../../asset/BANNER_01.jpg";
// Inline background image for demonstration; replace with actual asset if available
const heroBg = banner;
import organic from "../../asset/ICONS/ORGANIC.png";
import baby from "../../asset/ICONS/For_Babies.png";
import milk from "../../asset/ICONS/RAW_MILK.png";

export const Hero = () => {
  return (
    <>
      <section
        className="relative flex h-45 w-full flex-col flex-wrap justify-between bg-cover bg-center bg-no-repeat md:min-h-[80vh] lg:min-h-[82vh]"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-200/10 to-purple-400/30" />
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-between gap-8 px-6 md:flex-row md:py-32">
          {/* Left: Product Image (placeholder) */}
          <div className="flex w-full flex-col !items-end gap-4 md:w-1/2 md:items-start">
            {/* <div className="flex items-end gap-4">
            <img
              src="/src/asset/Soyawala Logo design.png"
              alt="Soyaji Product"
              className="h-24 w-24 rounded-xl bg-white/80 object-contain shadow-lg md:h-36 md:w-36"
            />
            <img
              src="/src/asset/logo leaf.png"
              alt="Leaf"
              className="h-12 w-12 rounded-full bg-white/80 object-contain md:h-16 md:w-16"
            />
          </div> */}
          </div>
          {/* Right: Text Content */}
          <div className="flex w-full flex-col items-end gap-6 text-left md:w-1/2 md:items-start md:text-left">
            <h1 className="BREAKSONG text-xl leading-tight text-[#fed365] drop-shadow-lg md:text-4xl">
              The Best alternative <br className="hidden md:block" /> To Cow's
              Milk
            </h1>
            <p className="media-tomato hidden max-w-lg text-lg text-white md:inline md:text-2xl">
              Soya milk as healthy as cow's milk is the new idea of faster and
              healthy lifestyle.
            </p>
            <Button
              size="sm"
              className="!hover:!bg-amber-500 shadow- w-fit !bg-amber-400 text-sm font-bold !text-[#4a295e] md:px-8 md:py-2 md:text-base"
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Bottom Banner */}
      </section>
      <div>
        {/* Features Row */}
        <div className="md: z-10 mx-0 flex flex-wrap items-center justify-center gap-6 bg-white/90 px-4 py-4 shadow-lg md:mx-0 md:flex-row md:gap-12 md:px-0">
          <div className="flex items-center gap-2 text-sm text-[#4a295e] md:text-lg">
            <img
              src={organic}
              alt="organic"
              className="h-5 w-5 md:h-6 md:w-6"
            />{" "}
            100% <span className="">Organic Products</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#4a295e] md:text-lg">
            <img src={baby} alt="baby" className="h-5 w-5 md:h-6 md:w-6" />
            <span className="">Recommended</span> For Babies
          </div>
          <div className="flex items-center gap-2 text-sm text-[#4a295e] md:text-lg">
            <img src={milk} alt="milk" className="h-5 w-5 md:h-6 md:w-6" /> High
            Quality <span className="">Raw Milk</span>
          </div>
        </div>
        <div className="w-full bg-[#4a295e] px-4 py-4 text-center md:px-0">
          <span className="text-sm font-semibold tracking-widest text-white md:text-lg md:tracking-[0.4em]">
            SOYA BASED <span className="text-[#fed365]">LACTOSE FREE</span>{" "}
            PRODUCTS FOR EVERYONE AT ANY AGE
          </span>
        </div>
      </div>
    </>
  );
};
