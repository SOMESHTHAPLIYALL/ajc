import React, { useState } from "react";
import growth from "../assets/growthADV.png";
import { Link, NavLink } from "react-router-dom";
import asia from "../assets/asia.png";
import chemical from "../assets/chemical.png";
import gujrat from "../assets/gujrat.png";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const SalesConsulting = () => {
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
      <div className="flex flex-col lg:flex-row justify-start items-start gap-10 lg:gap-28 bg-gradient-to-r from-[#008080] to-[#273939] p-4 text-white">
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
          <h1 className="font-bold text-xl lg:text-2xl font-serif mx-5 lg:mx-0">
            Elevate Your Chemical Sales with Expert Consulting from AJC
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center p-4 gap-8 lg:gap-12 mt-10">
            <p className="w-full lg:w-[500px] text-base lg:text-lg mx-5 lg:mx-0 tracking-wider leading-relaxed">
              AJC, having seasoned chemical sales professionals in the team,
              offers customized sales consulting services for the chemical
              industry, connecting clients with potential customers. Our team
              leverages extensive industry networks and market intelligence to
              identify and target high-value prospects. We facilitate strategic
              introductions and provide tailored sales strategies, ensuring our
              clients effectively penetrate new markets and boost revenue.
              Partner with us to accelerate your sales growth and expand your
              customer base!
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
          <img className="w-full lg:w-auto" src={asia} alt="Asia" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Expanding Horizons: $360K/Month Export Success for Indian Additive
              Manufacturer in Southeast Asia
            </h1>
            <p className="w-full lg:w-[700px] lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with an Indian additive manufacturer which wanted to
              export its products to the Southeast Asian markets. AJC team
              identified 1 product from the client’s offerings (where supply
              landscape was consolidated) and introduced that in the Vietnam
              market to the Rubber chemical manufacturers. The client today
              sells approximately 120 MT per month (USD 360K per month) of this
              product to 2 customers in Vietnam. Furthermore, AJC helped the
              client replicating the success story in the Malaysian market as
              well.
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col-reverse lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Boosting Export Sales: Securing $2.7M Annual Contracts for Indian
              Specialty Chemical Manufacturer
            </h1>
            <p className="w-full lg:w-[700px]  lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with an Indian specialty chemical manufacturer to
              expand its export sales to newer geographies. The client had broad
              spectrum of anti-oxidants which could be used in food & beverage
              and polymer industries. AJC identified two high avenues for the
              client in the export markets- Indonesia where these anti-oxidants
              go in edible oil (palm oil) and Turkey where these anti-oxidants
              go in packaging polymers. With AJC’s connects and guidance, the
              client secured annual supply contract with a major Turkish
              customer (USD 1500K per annum) and with a major distributor in
              Indonesia (USD 1200K per annum).
            </p>
          </div>
          <img className="w-full lg:w-auto" src={chemical} alt="Chemical" />
        </div>

        <div className="mt-10 lg:mt-20 flex flex-col lg:flex-row justify-center items-start gap-10 lg:gap-20">
          <img className="w-full lg:w-auto" src={gujrat} alt="Gujarat" />
          <div className="flex flex-col justify-center items-start gap-5 lg:gap-10 mt-5 lg:mt-10">
            <h1 className="font-bold text-xl lg:text-2xl  lg:ml-10 w-full lg:w-[650px]">
              Optimizing Capacity: Boosting Gujarat SME’s Exports to China with
              $100K Monthly Sales
            </h1>
            <p className="w-full lg:w-[700px]  lg:ml-10 text-base lg:text-lg font-semibold">
              AJC worked with a SME company based out of Gujarat, India which
              was operating its plant at 40% capacity. The plant produced high
              value active ingredients for the personal care products. AJC
              helped the client export its most priced product (USD 50/kg) to
              China (and out of India for the first time ever directly). Today
              the client’s plant utilization is 70% with monthly sales of USD
              100K to China alone with a single product.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesConsulting;
