import React from "react";

export default function Hero() {
  return (
    <div
      className="banner py-0 jumbotron"
      style={{
        minHeight: "70vh",
        backgroundImage: `url('/assets/rev/assets/banner.jpg')`,
      }}
    ></div>
  );
}
