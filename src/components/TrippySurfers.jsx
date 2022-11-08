import React from "react";
import lastBg from "../images/lastbg.jpg";
import Fade from "react-reveal/Fade";
import trippy from "../images/trippygroup.png";

const TrippySurfers = () => {
  return (
    <div className="w-full h-screen">
      <img className="w-full h-screen absolute" src={lastBg} alt="last" />
      <div className="md:grid md:grid-cols-2 md:pl-20">
        <Fade left>
          <div className="text-center md:text-left pt-20">
            <h1 className="trippy text-2xl md:text-6xl text-white">
              Trippy Surfers
            </h1>
            <p className="text-white">
              4,444 Trippy Surfers. Drop in. Get Pitted! WOOPAH! <br />
              Our OG Surfer Collection
            </p>
          </div>
          <div>
            <img src={trippy} alt="trippy" className="h-128 w-full" />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default TrippySurfers;
