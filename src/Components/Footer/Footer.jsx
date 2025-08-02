import React from "react";
import footerBg from "../../asset/WEBSITE_ASSETS/Footer_BG.png";
import soyawalaLogo from "../../asset/WEBSITE_ASSETS/Logo_footer.png";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        position: "relative",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Purple overlay */}
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: 370,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top border */}
        <div style={{ height: 10, background: "#FFB84C", width: "100%" }} />
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "40px 30px 0 30px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Left section */}
          <div style={{ flex: 1 }}>
            <div className="mediam_tomato mb-18 text-3xl text-white md:text-6xl">
              CONTACTS
            </div>

            <div className="BREAKSONG text-2xl text-yellow-300">
              Soya Products, A Good Source <br /> of Plant-based Protein.
            </div>
          </div>
          {/* Center section */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              fontSize: 16,
              fontWeight: 400,
              color: "#fff",
              marginTop: 30,
            }}
          >
            <div style={{ marginBottom: 8 }}>
              <span>Location :- </span> &nbsp; Seal Lane, Kolkata
            </div>
            <div style={{ marginBottom: 8 }}>
              <span>Mobile :- </span> &nbsp; +91 810037780
            </div>
            <div>
              <span>Email</span> &nbsp; sales@soyawala.com
            </div>
          </div>
          {/* Right section: Logo */}
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <img
                src={soyawalaLogo}
                alt="Soyawala Logo"
                style={{ width: 220, marginBottom: 10 }}
              />
            </div>
          </div>
        </div>
        {/* Divider */}
        <div
          style={{
            borderTop: "2px solid #fff",
            margin: "30px 0 0 0",
            width: "100%",
          }}
        />
        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between px-10 py-8 text-sm text-white">
          <div>copyright @2025 by Home Point </div>
          <div className="mt:mb-0 mt-5 flex flex-wrap gap-4 md:gap-10">
            <span>About</span>
            <span>Products</span>
            <span>Services</span>
            <span>Blog</span>
            <span>Home</span>
            <span>Shop</span>
          </div>
        </div>
      </div>
    </div>
  );
};
