import React from "react";
import secondbg from "../images/secondbg.jpg";
import Fade from "react-reveal/Fade";
import melogo from "../images/goodmelogo.png";
import pixelgroup from "../images/pixelsurfergroup-01.png";
import sunny from "../images/sunny.png";

const SolanaSurfers = () => {
  return (
    <div className="pb-10 h-screen">
      <img
        className="w-full h-screen md:object-cover absolute"
        src={secondbg}
        alt="firstbg"
      />
      <div className="flex justify-start sun absolute md:hidden">
        <img className="pixelImg h-128 w-full" src={sunny} alt="surfers" />
      </div>
      <div className="grid md:grid-cols-3 md:items-center md:pt-20">
        <Fade left>
          <img
            className="pixelImg h-128 w-full"
            src={pixelgroup}
            alt="surfers"
          />
          <div className="pt-10">
            <h1 className="text-2xl md:text-left text-center md:text-6xl">
              Solana Surfers
            </h1>
            <p className="md:text-lg pt-10 md:text-left text-center">
              With over 130+ attributes your Solana Surfer will be one of a
              kind. Each surfer is generated with attributes based on rarity.
              Ever single body feature is UNIQUE!
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.magiceden.io/creators/surfers"
                className="hover:cursor-pointer"
              >
                <img
                  className="text-black"
                  src={melogo}
                  alt="me"
                  style={{ width: 150, height: 100 }}
                />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SolanaSurfers;
