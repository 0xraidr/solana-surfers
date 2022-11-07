import React from "react";
import Fade from "react-reveal/Fade";
import firstbg from "../images/firstbg.jpg";
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
          <h1 className="text-lg pl-10 pt-10 md:text-6xl md:text-left text-center">
            Welcome Surfers!
          </h1>
          <div className="pt-10 pl-10 text-sm md:text-2xl md:text-left text-center">
            Sit back and enjoy the ride around Solana Beach
          </div>
          <div className="p-8">
            <p className="text-md md:text-left text-center">
              Check out our Collection
            </p>
            <div className="">
              <a
                href="https://www.magiceden.io/creators/surfers"
                className="hover:cursor-pointer"
              >
                <img
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

export default Home;
