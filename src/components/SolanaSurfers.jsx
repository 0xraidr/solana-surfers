import React from "react";
import secondbg from "../images/secondbg.jpg";

const SolanaSurfers = () => {
  return (
    <div className="pb-10 h-screen">
      <img
        className="w-full h-screen object-fill md:object-cover absolute"
        src={secondbg}
        alt="firstbg"
      />
      <div className="grid">
        <h1>solana</h1>
      </div>
    </div>
  );
};

export default SolanaSurfers;
