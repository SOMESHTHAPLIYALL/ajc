import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
import { NavLink, Link } from "react-router-dom";
import stratergy from "../assets/stratergy.png";
import market from "../assets/market.png";
import invest from "../assets/invest.png";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const FinancialAdvisory = () => {
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
      <div className="flex flex-col lg:flex-row justify-start items-start  lg:gap-28 gap-10 bg-gradient-to-r from-[#008080] to-[#273939] p-4 text-white">
        <div className="services flex flex-col justify-center items-start mt-20">
          <h1 className="font-bold text-4xl ml-4 lg:ml-10">
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
            Optimize Your Portfolio with AJC's Chemical Market Evaluations
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-8 lg:gap-12 mt-10">
            <p className="w-full lg:w-[500px] text-base lg:text-lg lg:mx-0">
              AJC excels in mapping (deep-diving) chemical companies for private
              equity, sovereign, and mutual funds. We conduct thorough market
              evaluations and competitive assessments to identify growth
              opportunities. We provide detailed reports and strategic insights,
              empowering investors to make informed decisions and optimize their
              portfolios. Partner with us to navigate the chemical industry
              landscape!
            </p>
            <img src={portfolio} className="w-full lg:w-auto rounded-xl" />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#D1F9F9] to-[#C8E2E2] w-full  p-4 flex flex-col">
        <h1 className="font-serif font-bold text-3xl lg:text-4xl ml-5 lg:ml-10 mt-10">
          Case Studies
        </h1>
        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <img src={stratergy} className="w-full lg:w-auto" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Strategic Insights: Analyzing Indian Chemical Contract
              Manufacturing for Leading Sovereign Funds
            </h1>
            <p className="w-full lg:w-[700px] lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with 2 of the top 5 sovereign funds (based out of
              Singapore & UAE respectively) to deep dive into the Indian
              contract manufacturing space within chemicals. Here the clients
              wanted to understand high growth companies in terms of their
              product offerings, R&D capabilities, and potential customer
              partnerships.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col-reverse lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Strategic Market Assessment: Profiling India’s Emerging Battery
              Chemicals Sector for Leading US Private Equity Fund
            </h1>
            <p className="w-full lg:w-[700px]  lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with one of the largest PE funds (based out of the USA)
              to help it understand the emerging battery chemicals landscape in
              India. The client wanted to evaluate companies entering (and
              operating) in this faster-growing segment.
            </p>
          </div>
          <img src={market} className="w-full lg:w-auto" />
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <img src={invest} className="w-full lg:w-auto" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Comprehensive Investment Mapping: Evaluating 14 High-Growth Indian
              Chemical Companies for Global Brokerage & Rating Agency
            </h1>
            <p className="w-full lg:w-[700px] lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with one of the largest brokerage & rating agencies in
              the world in helping them identify high-growth chemical companies
              in India for investment purposes. AJC mapped a total of 14
              companies for the client based on various parameters like product
              pipeline, competition intensity, management approach, and global
              reach.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FinancialAdvisory;
