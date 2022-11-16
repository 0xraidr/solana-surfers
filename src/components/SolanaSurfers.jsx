import React from "react";
import secondbg from "../images/secondbg.jpg";
import Fade from "react-reveal/Fade";
import melogo from "../images/goodmelogo.png";
import pixelgroup from "../images/pixelsurfergroup-01.png";
import sunny from "../images/sunny.png";
import surfbg from "../images/surfbg.jpg";

const SolanaSurfers = () => {
  return (
    <div className="pb-10 h-screen">
      <img
        className="w-full h-screen md:object-cover absolute"
        src={surfbg}
        alt="firstbg"
      />
      <div className="md:grid md:grid-cols-2 items-center md:pt-20">
        <Fade left>
          <img
            className="pixelImg md:pl-20 h-128 w-full"
            src={pixelgroup}
            alt="surfers"
          />
          <div className=" md:pl-20 w-full">
            <h1 className="text-2xl md:text-left text-center md:text-6xl ">
              Solana Surfers
            </h1>
            <p className="md:text-lg pt-10 md:text-left text-center">
              With over 130+ attributes your Solana Surfer will be one of a
              kind. Each surfer is generated with attributes based on rarity.
              Ever single body feature is UNIQUE!
            </p>
            <div className="flex pt-10 justify-center">
              <button className="bg-slate-600 border-buttonBorder border-2 rounded-md">
                <a
                  href="https://www.magiceden.io/creators/surfers"
                  className="hover:cursor-pointer"
                >
                  <img
                    className="text-black w-40"
                    src="https://magiceden.io/static/media/logo.ca418d755e6ce4e95fd276056b9285f2.svg"
                    alt="me"
                  />
                </a>
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default SolanaSurfers;
