import React from "react";
import Fade from "react-reveal/Fade";
import firstbg from "../images/firstbg.jpg";
import button from "../images/button.png";
import melogo from "../images/goodmelogo.png";

const Home = () => {
  return (
    <div className="pb-10 h-screen">
      <img
        className="w-full h-screen md:object-cover absolute"
        src={firstbg}
        alt="firstbg"
      />
      <div className="grid w-1/2">
        <Fade left>
          <h1 className="text-4xl pl-10 pt-10 md:text-6xl md:text-left text-center">
            Welcome Surfers!
          </h1>
          <div className="pt-10 pl-10 text-sm md:text-2xl md:text-left">
            Sit back and enjoy the ride around Solana Beach
          </div>
          <div className="p-8">
            <p className="text-md md:text-left">Check out our Collection</p>
            <div className="">
              {/* <a
                href="https://www.magiceden.io/creators/surfers"
                className="hover:cursor-pointer"
              >
                <img src={button} alt="me" />
              </a> */}
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

export default Home;
