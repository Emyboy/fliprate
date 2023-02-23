import React from "react";

export default function Hero() {
  return (
    <div
      className="banner p-5 jumbotron d-flex flex-column justify-content-center"
      style={{
        minHeight: "70vh",
        backgroundImage: `url('/assets/rev/assets/banner.jpg')`,
      }}
    >
      <h1 style={{ fontSize: "70px", lineHeight: "65px" }} className="mb-4">
        Fliprate Technologies
      </h1>
      <h6 className="text-muted">Real Time solutions</h6>
    </div>
  );
}
