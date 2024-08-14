import React from "react";
import linkedin from "../assets/linkedin.png";
import X from "../assets/X.png";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-[#565252] flex flex-col justify-center items-center bottom-0 text-[white] p-4">
      <div className="flex flex-col md:flex-row justify-evenly items-start w-full mt-5 gap-10 md:gap-0">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="font-semibold text-lg">SERVICES</h1>
          <Link to="/growth" className="text-lg">
            Growth Advisory
          </Link>
          <Link to="/sales" className="text-lg">
            Sales Consulting
          </Link>
          <Link to="/financial" className="text-lg">
            Profiling
          </Link>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="font-semibold text-lg">SOCIALS</h1>
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/joshi-ajay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <FaLinkedin size={30} />
            </a>

            <a target="_blank" href="https://x.com/JoshiEien">
              <FaXTwitter size={30} />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="font-semibold text-lg">CONTACTS</h1>
          <h1>+911234567890</h1>
          <h1>Delhi, India</h1>
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="font-semibold text-lg">INQUIRES</h1>
          <h1>query@ajc.in</h1>
        </div>
      </div>
      <div className="bg-[#D9D9D9] w-full h-1 mt-5 "></div>
      <div className="mt-5 flex justify-center items-center">
        <h1 className="text-white font-semibold text-lg text-center">
          <span className="text-xl">© </span> Ajay Joshi Chemicals. All rights
          reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
