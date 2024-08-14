import React, { useState } from "react";
import gif from "../assets/gif.gif";
import logo from "../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const OurStory = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div
        className="h-[111px]  p-4 flex justify-between top-0 sticky  text-black bg-white z-50"
        style={{
          background: "linear-gradient(90deg, #0B4A5E 0%, #191D28 100%)",
        }}
      >
        <div className="flex items-center w-auto">
          <Link to="/">
            <img className="h-[80px]" src={logo} alt="Logo" />
          </Link>

          <div className="hidden md:flex justify-center items-center gap-14 text-xl ml-10">
            <NavLink
              to="/ourStory"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
              }
            >
              Our Story
            </NavLink>
            <NavLink
              to="/growth"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/allBlogs"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
              }
            >
              Insights
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
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
      <div
        className="flex flex-col justify-start items-start p-4 text-white"
        style={{
          background: "linear-gradient(90deg, #0B4A5E 0%, #191D28 100%)",
        }}
      >
        <h1 className="font-bold text-[50px] ml-10 mt-10">
          <span
            style={{ textDecorationColor: "#008080" }}
            className="underline underline-offset-4"
          >
            Our St
          </span>
          ory
        </h1>

        <div className="mt-10  flex flex-col md:flex-row justify-center items-center w-full gap-10 md:gap-[100px]">
          <p className="w-full md:w-[500px] text-lg tracking-widest leading-relaxed">
            Ajay Joshi Chemicals (AJC) is a niche and premier advisory firm
            dedicated to driving profitable growth for chemical companies.
            Founded by Mr. Ajay Joshi, who is recognized as one of the foremost
            experts in the chemicals sector, AJC boasts the best team of
            chemical experts from sales, marketing and contract manufacturing
            domains based out of India, China, UAE, Indonesia, Vietnam and
            Thailand.
          </p>
          <img
            className="w-full md:w-auto h-auto md:h-[400px] rounded-xl mt-4 md:mt-0"
            src={gif}
            alt="Ajay Joshi"
          />
        </div>

        <div className="mt-20  flex flex-col justify-center items-center w-full gap-10  mb-10">
          <div className="flex flex-col justify-center items-start lg:w-[1000px] font-serif text-[18px]">
            <p className="">
              AJC offers strategic insights, market analysis, and innovative
              solutions tailored to the unique needs of the chemical industry.
            </p>
            <p>
              Our expert team leverages deep industry knowledge, global network
              and cutting-edge methodologies to help clients diversify sales,
              enhance product portfolios, grow export revenues and achieve
              sustainable growth
            </p>
          </div>

          <p className="font-bold text-[20px] font-serif">
            Partner with us to unlock your company's full potential and thrive
            in the competitive chemical market!
          </p>
        </div>
      </div>
    </>
  );
};

export default OurStory;
