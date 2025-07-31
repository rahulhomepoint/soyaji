import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BG_PAPER from "../../asset/BG_PAPER.png";
import SOYA_MILK_ICON from "../../asset/ICONS/BOTTLE.png";
import PANEER_ICON from "../../asset/ICONS/PANEER.png";
import YOGURT_ICON from "../../asset/ICONS/YOGURT.png";
import CHEESE_ICON from "../../asset/ICONS/CHEESE.png";
import ICECREAM_ICON from "../../asset/ICONS/ICECREAM.png";
import SUGAR_FREE_ICON from "../../asset/ICONS/sugerfre.png";
import GLUTEN_FREE_ICON from "../../asset/ICONS/gluten free.png";
import LACTOSE_FREE_ICON from "../../asset/ICONS/lactose free.png";
import { List, ListItem } from "flowbite-react";
import RIGHT_LEAF from "../../asset/WEBSITE_ASSETS/leaf-01.png";
import LEFT_LEAF from "../../asset/WEBSITE_ASSETS/leaf-02.png";
import bollet from "../../asset/WEBSITE_ASSETS/bottle_mock.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const Overview = () => {
  const rightLeafRef = useRef(null);
  const leftLeafRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Initial state - leaves hidden and positioned off-screen
      gsap.set(rightLeafRef.current, {
        opacity: 0,
        scale: 0.3,
        x: 200,
        y: 100,
        rotation: -45,
      });

      gsap.set(leftLeafRef.current, {
        opacity: 0,
        scale: 0.2,
        x: -200,
        y: -50,
        rotation: 60,
      });

      // Right leaf animation - slides in from bottom-right with bounce effect
      gsap.to(rightLeafRef.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: -32,
        duration: 1.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Left leaf animation - slides in from top-left with elastic effect
      gsap.to(leftLeafRef.current, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 10,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "top 10%",
          toggleActions: "play none none reverse",
        },
      });

      // Different floating animations for each leaf
      // Right leaf - gentle up and down
      gsap.to(rightLeafRef.current, {
        y: -15,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Left leaf - circular floating motion
      gsap.to(leftLeafRef.current, {
        y: -20,
        x: 10,
        rotation: 15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="overview-container bg-none !pt-5 md:bg-center"
      style={{
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="flex flex-wrap items-center justify-between gap-2 md:max-w-[1200px] md:gap-0"
        style={{
          // maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Left: Benefits */}
        <div className="mt-0 flex flex-wrap justify-center gap-1 md:mt-2 md:flex-col md:gap-10">
          <BenefitItem
            icon={SOYA_MILK_ICON}
            title="Soya Milk"
            color="#F6A623"
            desc="Help support healthy muscles and organs. Rich in Omega3"
          />
          <BenefitItem
            icon={PANEER_ICON}
            title="Soya Paneer"
            color="#F6A623"
            desc="Healthy hair & skin, weight loss, prevents heart disease"
          />
          <BenefitItem
            icon={YOGURT_ICON}
            title="Yogurt"
            color="#F6A623"
            desc="Good source of calcium, vitamin A, & vitamin D"
          />
          <BenefitItem
            icon={CHEESE_ICON}
            title="Cheese"
            color="#F6A623"
            desc="Strengthen your bones, reduces heart disease, rich in vitamin D"
          />
          <BenefitItem
            icon={ICECREAM_ICON}
            title="Ice Cream"
            color="#F6A623"
            desc="Lower in saturated fat and calories than those made with coconut cream or milk"
          />
          <BenefitItem
            icon={ICECREAM_ICON}
            title="Ice Cream"
            color="#F6A623"
            desc="Lower in saturated fat and calories than those made with coconut cream or milk"
            large={true}
          />
        </div>
        {/* Center: Bottle as background */}
        {/* <div
          className="!hidden md:!flex"
          style={{
            flex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            minHeight: 420,
            minWidth: 320,
            height: 420,
            width: "100%",
          }}
        > */}
        {/* No <img> here, bottle is background */}
        {/* </div> */}
        {/* Right: Features */}
        <div
          style={{
            color: "#5B3A7A",
          }}
          className="flex flex-1 flex-col md:gap-16 md:pl-[200px]"
        >
          <div className="mt-4 mb-8 text-center text-xl font-bold text-[#5B3A7A] md:mt-0 md:text-left">
            We Bring The Best Soya
            <br />
            Based Milk Products right
            <br />
            at your door steps.
          </div>
          <List className="list-outside p-2 *:mb-4 *:ml-6 *:text-sm *:!text-[#5B3A7A] *:md:ml-0 *:md:text-lg">
            <ListItem>Cold pressed & processed organically</ListItem>
            <ListItem>No preservatives added</ListItem>
            <ListItem>Rated 5 stars. Over 1 million reviews</ListItem>
            <ListItem>In-house factory</ListItem>
            <ListItem>150+ Delivery locations</ListItem>
          </List>
          <div className="mb-6 ml-4 flex md:mt-9 md:mb-0 md:ml-0 md:gap-16">
            {/* You can add icons for sugar free, gluten free, lactose free here if needed */}
            <img src={SUGAR_FREE_ICON} className="h-14 w-14" alt="sugar free" />
            <img
              src={GLUTEN_FREE_ICON}
              className="h-14 w-14"
              alt="gluten free"
            />
            <img
              src={LACTOSE_FREE_ICON}
              className="h-14 w-14"
              alt="lactose free"
            />
          </div>
        </div>
      </div>
      <img
        ref={rightLeafRef}
        src={RIGHT_LEAF}
        alt="right_leaf"
        className="absolute -right-26 -bottom-18 w-[150px] md:-right-46 md:w-[250px]"
      />
      <img
        ref={leftLeafRef}
        src={LEFT_LEAF}
        alt="left_leaf"
        className="absolute bottom-50 -left-15 w-[150px] md:-left-30 md:w-[250px]"
      />
    </div>
  );
};

const BenefitItem = ({ icon, title, color, desc, large }) => (
  <div
    className={`:md:w-48 flex w-44 flex-col items-center gap-2 ${large == undefined ? "border" : null} border-fuchsia-800 p-2 md:w-1/2 md:flex-row md:gap-6 md:border-none md:p-0`}
  >
    {large == undefined ? (
      <img
        src={icon}
        alt={title}
        style={{ objectFit: "fill", marginTop: 4 }}
        className="h-9 w-9 md:h-9 md:w-9"
      />
    ) : null}
    {large == undefined ? (
      <div>
        <div
          style={{ color, fontWeight: 700 }}
          className="text-base md:!text-[22px]"
        >
          {title}
        </div>
        <div style={{ color: "#5B3A7A" }} className="!text-xs md:!text-[17px]">
          {desc}
        </div>
      </div>
    ) : null}
    {large != undefined ? (
      <div>
        <img
          src={bollet}
          alt=""
          srcset=""
          className="h-34 w-28 bg-contain md:hidden"
        />
      </div>
    ) : null}
  </div>
);
