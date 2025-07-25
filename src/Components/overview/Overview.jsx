import React from "react";
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

export const Overview = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG_PAPER})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        padding: "40px 0",
        boxSizing: "border-box",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          //   alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
          gap: 0,
        }}
      >
        {/* Left: Benefits */}
        <div
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 32 }}
          className="mt-2"
        >
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
        </div>
        {/* Center: Bottle as background */}
        <div
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
        >
          {/* No <img> here, bottle is background */}
        </div>
        {/* Right: Features */}
        <div
          style={{
            flex: 1,
            color: "#5B3A7A",
            fontWeight: 500,
            fontSize: 22,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div className="mb-10 text-xl font-bold text-[#5B3A7A]">
            We Bring The Best Soya
            <br />
            Based Milk Products right
            <br />
            at your door steps.
          </div>
          <List className="list-outside p-2 text-[#5B3A7A] *:mb-4 *:text-lg">
            <ListItem>Cold pressed & processed organically</ListItem>
            <ListItem>No preservatives added</ListItem>
            <ListItem>Rated 5 stars. Over 1 million reviews</ListItem>
            <ListItem>In-house factory</ListItem>
            <ListItem>150+ Delivery locations</ListItem>
          </List>
          <div style={{ display: "flex", gap: 16, marginTop: 36 }}>
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
        src={RIGHT_LEAF}
        alt="right_leaf"
        className="absolute -right-46 -bottom-18 w-[250px] -rotate-32"
      />
      <img
        src={LEFT_LEAF}
        alt="left_leaf"
        className="absolute bottom-40 -left-40 w-[250px]"
      />
    </div>
  );
};

const BenefitItem = ({ icon, title, color, desc }) => (
  <div style={{ display: "flex", gap: 16 }} className="items-center">
    <img
      src={icon}
      alt={title}
      style={{ width: 36, height: 36, objectFit: "fill", marginTop: 4 }}
    />
    <div>
      <div style={{ color, fontWeight: 700, fontSize: 22 }}>{title}</div>
      <div style={{ color: "#5B3A7A", fontSize: 17 }}>{desc}</div>
    </div>
  </div>
);
