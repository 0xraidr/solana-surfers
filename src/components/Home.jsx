import React from "react";
import Fade from "react-reveal/Fade";
import firstbg from "../images/firstbg.jpg";
import melogo from "../images/goodmelogo.png";

const Home = () => {
  return (
    <div className="pb-10 h-screen">
      <img
        className="w-full h-screen object-cover absolute"
        src={firstbg}
        alt="firstbg"
      />
      <div className="grid w-1/2">
        <Fade left>
          <h1 className="text-6xl pl-10 pt-10 md:text-7xl">Welcome Surfers!</h1>
          <div className="pt-10 pl-10 text-l md:text-l">
            Sit back and enjoy the ride around Solana Beach
          </div>
          <div className="p-8">
            <p className="text-lg">Check out our Collection</p>
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
