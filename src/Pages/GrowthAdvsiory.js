import React, { useState } from "react";
import growth from "../assets/servicegrowth.png";
import { Link, NavLink } from "react-router-dom";
import pollution from "../assets/pollution.png";
import dubai from "../assets/dubai.png";
import tiger from "../assets/tiger.png";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const GrowthAdvsiory = () => {
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
      <div className="flex flex-col lg:flex-row justify-start items-start  gap-10 lg:gap-28 bg-gradient-to-r from-[#008080] to-[#273939] p-4 text-white">
        <div className="services flex flex-col justify-center items-start mt-20">
          <h1 className="font-bold text-3xl lg:text-4xl ml-5 lg:ml-10">
            <span
              style={{ textDecorationColor: "#008080" }}
              className="underline underline-offset-2"
            >
              Servi
            </span>
            ces
          </h1>
          <div className="flex flex-col justify-center items-start ml-5 lg:ml-10 mt-5 lg:mt-10 gap-3 lg:gap-5 font-bold text-base lg:text-lg w-[200px] lg:w-[180px] ">
            <NavLink
              to="/growth"
              className={({ isActive }) =>
                isActive ? "text-white font-bold " : "text-black"
              }
            >
              {({ isActive }) => (
                <div className="flex justify-center items-center ">
                  {isActive && (
                    <span className="font-bold text-xl lg:text-3xl mb-2 mr-2">
                      •
                    </span>
                  )}
                  Growth Advisory
                </div>
              )}
            </NavLink>
            <NavLink
              to="/sales"
              className={({ isActive }) =>
                isActive ? "text-white font-bold " : "text-black"
              }
            >
              {({ isActive }) => (
                <div className="flex justify-center items-center ">
                  {isActive && (
                    <span className="font-bold text-xl lg:text-3xl mb-2 mr-2">
                      •
                    </span>
                  )}
                  Sales Consulting
                </div>
              )}
            </NavLink>
            <NavLink
              to="/financial"
              className={({ isActive }) =>
                isActive ? "text-white font-bold " : "text-black"
              }
            >
              {({ isActive }) => (
                <div className="flex justify-center items-center ">
                  {isActive && (
                    <span className="font-bold text-xl lg:text-3xl mb-2 mr-2">
                      •
                    </span>
                  )}
                  Company Profiling
                </div>
              )}
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start mt-20">
          <h1 className="font-bold text-xl lg:text-2xl font-serif text-center lg:text-left mx-5 lg:mx-0">
            Boost your chemical industry growth with AJC’s expert advisory,
            unlocking high-value opportunities and driving substantial revenue
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-8 lg:gap-12 mt-10">
            <p className="w-full lg:w-[500px] text-base lg:text-lg lg:mx-0">
              At AJC, we specialize in growth advisory services for the chemical
              industry, focusing on identifying lucrative new product and/or
              category opportunities for both existing chemical players and
              newer entrants. Our expert team conducts comprehensive market
              analysis and trend forecasting to pinpoint high-potential
              products. We provide actionable insights and strategic
              recommendations, enabling chemical companies to innovate,
              diversify their portfolios, and capitalize on emerging market
              demands. Partner with us to drive your product development and
              secure a competitive edge in the market!
            </p>
            <img
              className="w-full lg:w-auto rounded-xl"
              src={growth}
              alt="Growth"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#D1F9F9] to-[#C8E2E2] w-full  p-4 flex flex-col ">
        <h1 className="font-serif font-bold text-3xl lg:text-4xl ml-5 lg:ml-10 mt-10">
          Case Studies
        </h1>
        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <img className="w-full lg:w-auto" src={pollution} alt="Pollution" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Unlocking $450K/Month in New Markets for Indian Chemicals
              Manufacturer
            </h1>
            <p className="w-full lg:w-[700px] lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with an Indian chemicals manufacturer to identify 2
              high value products in the personal care category for the Chinese
              market with an incremental revenue realization of USD 450K per
              month (45% contribution margins) from 6 month of new products
              launch.  Here the client wanted to diversify into a higher margin
              category for better profits. Furthermore, this was the first time,
              the client had exported anything to the Chinese market from India.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col-reverse lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Driving $400M Capex Investment in Saudi Arabia for High-Growth
              Ethylene Oxide Products
            </h1>
            <p className="w-full lg:w-[700px]  lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with a Middle Eastern Oil to Chemicals manufacturer to
              diversify its product portfolio in the ethylene oxide downstream
              value chain. AJC successfully deep dived into the entire value
              chain to select high growth-high demand products with little to no
              competition from Chinese suppliers. This resulted in the client
              putting up a Capex of USD 400 Mn in the Kingdom of Saudi Arabia
              for the AJC recommended products.
            </p>
          </div>
          <img className="w-full lg:w-auto" src={dubai} alt="Dubai" />
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <img className="w-full lg:w-auto" src={tiger} alt="Tiger" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Propelling Indian Agrochemicals MNC into Specialty Chemicals with
              8 High-Growth Segments
            </h1>
            <p className="w-full lg:w-[700px] lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with an Indian agrochemicals MNC which wanted to
              venture into specialty chemicals (make-in-India for India). AJC
              helped identifying key growth segments for the client based on
              import substitution and existing value chain integration. AJC
              identified and mapped 8 specialties within 2 fast growing
              categories in India- Battery Chemicals and Nutrition & Health.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GrowthAdvsiory;
