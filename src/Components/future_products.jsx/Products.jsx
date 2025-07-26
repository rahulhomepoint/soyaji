import React from "react";
import { ProductCard } from "../../Util/Cards/ProductCard";
import BG_PAPER from "../../asset/WEBSITE_ASSETS/BG_PAPER_1.png";
import curdImg from "../../asset/WEBSITE_ASSETS/CURD.avif";
import soyaImg from "../../asset/WEBSITE_ASSETS/PLAIN_TOFU.jpg";
import soyaMilkImg from "../../asset/WEBSITE_ASSETS/RAW_SOYA_MILK.jpg";
import vanillaImg from "../../asset/WEBSITE_ASSETS/VANILLA_ICE_CREAM.jpg";
import chocolateImg from "../../asset/WEBSITE_ASSETS/CHOCKLATE_SOYA_MILK.jpg";
import cheeseImg from "../../asset/WEBSITE_ASSETS/PLAIN_CHEESE.jpg";
import yogurtImg from "../../asset/WEBSITE_ASSETS/NATURAL_YOGURT.jpg";
import { Button } from "flowbite-react";
import LEFT_LEAF from "../../asset/WEBSITE_ASSETS/leaf-01.png";

const products = [
  {
    image: curdImg,
    name: "Plain Soya Tofu",
    unit: "200 g",
    price: 100,
    description:
      "100% Veg Soya Paneer. Rich source of Protein and Iron. Low in fat and Cholesterol free.",
    button: "ADD",
  },
  {
    image: soyaImg,
    name: "Raw Soya Milk",
    unit: "1 ltr",
    price: 148,
    description:
      "Enriched with vital nutrients of soya. Help support healthy muscles and organs. Rich in Omega3.",
    button: "ADD",
  },
  {
    image: soyaMilkImg,
    name: "Plain Curd Lactose Free",
    unit: "400 g",
    price: 100,
    description:
      "Perfect combination of health & taste. It provides calcium for strong bones and teeth.",
    button: "ADD",
  },
  {
    image: vanillaImg,
    name: "Vanilla Ice Cream",
    unit: "700 ml",
    price: 210,
    description:
      "Rich Creamy Vanilla Dessert. Made from best ingredients: Fresh 100% soya milk.",
    button: "ADD",
  },
  {
    image: chocolateImg,
    name: "Chocolate Soya Milk",
    unit: "400 g",
    price: 100,
    description:
      "Perfect combination of health & taste. It provides calcium for strong bones and teeth.",
    button: "ADD",
  },
  {
    image: cheeseImg,
    name: "Plain Cheese",
    unit: "200 g",
    price: 420,
    description:
      "Perfect option for those with lactose intolerance, enjoy cheese without digestive discomfort.",
    button: "ADD",
  },
  {
    image: yogurtImg,
    name: "Natural Yogurt",
    unit: "400 g",
    price: 250,
    description:
      "Rich in protein | Low fat content. Made with all natural ingredients. Perfect blend of taste & nutrition.",
    button: "ADD",
  },
  {
    image: vanillaImg,
    name: "Soya Chakli",
    unit: "100 g",
    price: 159,
    description:
      "Soya sticks, or bondhi. Made with natural ingredients. Healthy snack option for any time.",
    button: "ADD",
  },
  {
    image: chocolateImg,
    name: "Herbal Tofu",
    unit: "200 g",
    price: 110,
    description:
      "Easy to digest. High in protein and very low in fat. Great substitute of meat.",
    button: "ADD",
  },
  {
    image: soyaMilkImg,
    name: "Strawberry Ice Cream",
    unit: "700 ml",
    price: 210,
    description:
      "Rich Creamy strawberry Dessert. Made from best ingredients: Fresh 100% soya milk.",
    button: "ADD",
  },
];

export const Products = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG_PAPER})`,
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "40px 0 100px",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h2 className="median-tomato purple_text text-3xl">
          Our Dairy Products For{" "}
          <span className="extrabold-tomato">Healthy Living</span>
        </h2>
        <hr
          style={{
            width: "60%",
            margin: "16px auto 0",
            border: "none",
            borderTop: "2px solid #4a295e",
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "32px",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
      <Button className="bg_purple hover:bg_purple absolute -bottom-5 left-1/2 z-10 mt-10 -translate-x-1/2 text-white">
        More Products
      </Button>
      <img
        src={LEFT_LEAF}
        alt="left_leaf"
        className="absolute -bottom-86 -left-20 z-20 w-80 rotate-38 rotate-x-15 -rotate-y-30"
      />
    </div>
  );
};
