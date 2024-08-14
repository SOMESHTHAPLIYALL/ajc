import React, { useState } from "react";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.jpg";
import seven from "../assets/seven.png";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="h-[111px]  p-4 flex justify-between top-0 sticky  text-black bg-white z-50">
        <div className="flex items-center w-auto">
          <Link to="/">
            <img className="h-[80px]" src={logo} alt="Logo" />
          </Link>

          <div className="hidden md:flex justify-center items-center gap-14 text-xl ml-10">
            <NavLink
              to="/ourStory"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-black"
              }
            >
              Our Story
            </NavLink>
            <NavLink
              to="/growth"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-black"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/allBlogs"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-black"
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-black"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-black"
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-lg text-white ">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-3xl text-black"
            >
              <FaTimes />
            </button>
            <div className="h-full flex flex-col justify-center items-start gap-10 text-2xl">
              <NavLink
                to="/ourStory"
                className={({ isActive }) =>
                  isActive ? "text-[#008080] font-bold mb-4" : "text-black mb-4"
                }
                onClick={toggleMenu}
              >
                Our Story
              </NavLink>
              <NavLink
                to="/growth"
                className={({ isActive }) =>
                  isActive ? "text-[#008080] font-bold" : "text-black"
                }
                onClick={toggleMenu}
              >
                Services
              </NavLink>
              <NavLink
                to="/allBlogs"
                className={({ isActive }) =>
                  isActive ? "text-[#008080] font-bold mb-4" : "text-black mb-4"
                }
                onClick={toggleMenu}
              >
                Insights
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? "text-[#008080] font-bold mb-4" : "text-black mb-4"
                }
                onClick={toggleMenu}
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#008080] font-bold mb-4" : "text-black mb-4"
                }
                onClick={toggleMenu}
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-start bg-gradient-to-br from-[#0B4A5E] to-[#191D28]">
        <h1 className="font-bold text-[50px] ml-10 mt-10 text-white">
          <span
            style={{ textDecorationColor: "#008080" }}
            className="underline underline-offset-8"
          >
            Gall
          </span>
          ery
        </h1>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 w-full text-white max-w-screen-xl mx-auto p-4">
          <div className="bg-black rounded-lg  flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://youtu.be/qJ_GNsbAZvE?si=0X29RB9sGMDEMBV2"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="font-bold text-xl mt-2">Interview</h1>
              <img className=" rounded-lg mt-2" src={one} alt="One" />
              <p className=" font-semibold text-lg mt-5">
                Battery chemicals- a new high growth avenue for Indian chemical
                industry
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg  flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://youtu.be/WlcrqYiG51U?si=VECSNqqSkx-CtBrM"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-xl mt-2">Interview</h1>
              <img className=" rounded-lg mt-2" src={two} alt="Two" />
              <p className=" font-semibold text-lg mt-5">
                How China’s weak demand is affecting India’s growth
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg  flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://youtu.be/Blsvkxqj6lE?si=R5c8cqiwoHbbQvTy"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-xl mt-2">Interview</h1>
              <img className="rounded-lg mt-2" src={three} alt="Three" />
              <p className=" font-semibold text-lg mt-5">
                Indian chemical exports to suffer till 2024 end!
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg  flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://youtu.be/XV-N8bQ0a-Q?si=y2NxtbtYTcP1tdrR"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-xl mt-2">Interview</h1>
              <img className=" rounded-lg mt-2" src={four} alt="Four" />
              <p className=" font-semibold text-lg mt-5">
                Key chemical companies seeing growth momentum
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg  flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="#"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-xl mt-2">Interview</h1>
              <img className=" rounded-lg mt-2" src={five} alt="Five" />
              <p className=" font-semibold text-lg mt-5">
                Chemical sector finally seeing tailwinds!
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://m.economictimes.com/markets/expert-view/agrochem-seeing-subdued-demand-battery-chemicals-in-focus-ajay-joshi/articleshow/106480049.cms"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-xl mt-2">Article</h1>
              <img
                className="rounded-lg mt-2 w-full h-[200px]"
                src={six}
                alt="Six"
              />
              <p className="font-semibold text-lg mt-5">
                Agrochemicals industry would continue to suffer due
                to poor exports
              </p>
            </a>
          </div>

          <div className="bg-black rounded-lg flex flex-col cursor-pointer hover:opacity-80 animate-slideInUp hover:scale-105">
            <a
              href="https://www.outlookbusiness.com/enterprise-3/feature/fault-in-the-formula-for-indias-chemical-sector-7020"
              className="p-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className=" font-bold text-lg">Article</h1>
              <img
                className=" rounded-lg mt-2 w-full"
                src={seven}
                alt="Seven"
              />
              <p className=" font-semibold text-lg mt-5">
                China 2.0 in the post-pandemic world
              </p>
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes slideInUp {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
      `}</style>
    </>
  );
};

export default Gallery;
