import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-footerColor">
      <div className="pt-5 flex justify-center text-xl text-white">
        <div className="px-2">
          <a href="https://twitter.com/SolanaSurfers">
            <FaTwitter />
          </a>
        </div>
        <div className="px-2">
          <a href="https://discord.gg/7AfN2Dk5nT">
            <FaDiscord />
          </a>
        </div>
        <div className="px-2">
          <a href="https://magiceden.io/marketplace/solana_surfers">
            <img
              className="w-20"
              src="https://magiceden.io/static/media/logo.ca418d755e6ce4e95fd276056b9285f2.svg"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="font-sans text-xs text-center py-3 text-white">
        <a href="https://github.com/0xraidr">
          <p className="hover:text-pink-200">Built by 0xraidr</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
