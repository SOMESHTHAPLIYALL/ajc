import React, { useEffect, useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { PiSpinnerGapThin } from "react-icons/pi";
import home from "../assets/home.png";
import gif from "../assets/gif.gif";
import ban from "../assets/ban.png";
import bcg from "../assets/bcg.png";
import gic from "../assets/gic.jpg";
import upl from "../assets/upl.png";
import circle from "../assets/circle.png";
import jefferies from "../assets/jefferies.png";
import hsbc from "../assets/hsbc.png";
import arrow from "../assets/arrow.png";
import Dow from "../assets/Dow.png";
import news from "../assets/news.png";
import cnbc from "../assets/cnbc.png";
import growth from "../assets/growth.png";
import ETNOW from "../assets/ETNOW.png";
import sales from "../assets/sales.png";
import profiling from "../assets/profiling.png";
import oliver from "../assets/oliver.png";
import { FaArrowRightLong } from "react-icons/fa6";
import logo from "../assets/logo2.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSpring, animated } from "@react-spring/web";
const Home = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [animateSection, setAnimateSection] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const id = localStorage.getItem("blogID");

  const URL = "https://ajcbackend.onrender.com";

  const getBlogs = async () => {
    setLoading2(true);
    try {
      const { data } = await axios.get(`${URL}/blog/get`);
      if (data?.success) {
        setBlogs(data?.blogs);
        setLoading2(false);
      }
    } catch (error) {
      console.log(error);
      setLoading2(false);
    }
  };

  const getBlog = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${URL}/blog/single`, {
        id: id,
      });
      if (data?.success) {
        setBlog(data?.blog);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleReadmore = (id) => {
    localStorage.setItem("blogID", id);
    navigate("/blog");
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const numberProps = useSpring({
    from: { number: 0 },
    to: { number: 100 }, // Trigger animation when inView is true
    delay: 1200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number2Props = useSpring({
    from: { number: 0 },
    to: { number: 20 },
    delay: 1200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number3Props = useSpring({
    from: { number: 0 },
    to: { number: 10 },
    delay: 1200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  const number4Props = useSpring({
    from: { number: 0 },
    to: { number: 15 },
    delay: 1200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  useEffect(() => {
    getBlog();
    getBlogs();
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSection(true);
          observer.disconnect(); // Stop observing once section is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const items = blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-[#F4F4F4] w-[300px] lg:w-[400px] flex flex-col p-4 lg:ml-[200px] ml-6 overflow-auto rounded-xl"
    >
      <img
        className="h-[200px] md:h-[300px] w-full object-cover rounded-lg"
        src={blog?.image}
        alt="Blog"
      />
      <h1 className="text-[#7E7D7D] mt-2 text-sm md:text-base">
        {formatDate(blog?.date)}
      </h1>
      <h1 className="mt-2 font-semibold text-lg md:text-xl">{blog.title}</h1>
      <p className="mt-2 text-[#656161] text-sm md:text-base">
        {truncateText(blog?.description, 100)}
      </p>
      <button
        onClick={() => handleReadmore(blog?._id)}
        className="bg-[#008080] p-2 rounded-xl text-white shadow-2xl hover:opacity-70 mt-8 w-fit "
      >
        Read More
      </button>
    </div>
  ));

  return (
    <>
      <style>
        {`
    @keyframes slideFromLeft {
      0% { transform: translateX(-100vw); opacity: 0; }
      100% { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideFromTop {
      0% { transform: translateY(-100vh); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideFromBottom {
      0% { transform: translateY(100vh); opacity: 0; }
      100% { transform: translateY(0); opacity: 1; }
    }
    .animate-left {
      animation: slideFromLeft 1s ease-out forwards;
    }
    .animate-top {
      animation: slideFromTop 1s ease-out forwards;
    }
    .animate-bottom {
      animation: slideFromBottom 1s ease-out forwards;
    }
      @keyframes slowRotate {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.slow-rotation {
  animation: slowRotate 10s linear infinite;
}
  `}
      </style>
      <div
        className="h-[111px]  p-4 flex justify-between top-0 sticky  text-black bg-white z-50"
        style={{
          background: "linear-gradient(90deg, #1131A0 0%, #0A1919 100%)",
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
        className="flex flex-col lg:flex-row justify-start items-start gap-5 lg:gap-10 text-white"
        style={{
          background: "linear-gradient(90deg, #1131A0 0%, #0A1919 100%)",
        }}
      >
        <div className="flex flex-col justify-start items-start mt-10 lg:mt-20 lg:ml-16 p-2">
          <h1 className="font-bold font-serif text-2xl lg:text-5xl ">
            Unlock the Formula for
          </h1>
          <h1 className="font-bold font-serif text-2xl lg:text-5xl mt-2">
            Chemical Industry Success.
          </h1>
          <p className="mt-5 text-base lg:text-lg w-full lg:w-[600px]">
            At Ajay Joshi Chemicals (AJC), we offer a range of services,
            including market analysis, strategy development, growth advisory,
            mergers and acquisitions advisory, and sales consulting to grow our
            clients profitably.
          </p>
          <Link
            className=" py-2 px-4 rounded-lg text-white font-serif mt-5 text-[20px] hover:underline underline-offset-8 flex justify-center items-center gap-2"
            to="/growth"
          >
            Explore Now <FaArrowRightLong />
          </Link>
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start mb-10 lg:ml-24">
          <img
            className="w-full lg:w-auto slow-rotation"
            src={home}
            alt="Home"
          />

          <h1 className="ml-0 lg:ml-10 text-lg lg:text-xl font-bold flex justify-center items-center mt-5 lg:mt-0">
            Featured on:{" "}
            <span className="flex justify-center items-center gap-4 lg:gap-5 ">
              <img className="h-12 lg:h-12 ml-5" src={cnbc} alt="CNBC" />
              <img className="h-12 lg:h-12" src={ETNOW} alt="ET Now" />
            </span>
          </h1>
        </div>
      </div>
      <div
        className="w-full p-4 h-auto flex flex-col md:flex-row justify-center items-center gap-10 md:gap-40 text-white"
        style={{
          background: "linear-gradient(90deg, #0F286E 0%, #1A1E28 100%)",
        }}
        ref={sectionRef}
      >
        <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {numberProps.number.to(
              (value) => Math.floor(value).toLocaleString() + " %"
            )}
          </animated.h2>
          <h1 className="text-[16px] md:text-[18px]">Client Retention rate</h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number2Props.number.to(
              (value) => Math.floor(value).toLocaleString() + " +"
            )}
          </animated.h2>
          <h1 className="text-[16px] md:text-[18px]">
            Advisories to Chemical MNCs
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number3Props.number.to((value) =>
              Math.floor(value).toLocaleString()
            )}
          </animated.h2>
          <h1 className="text-[16px] md:text-[18px]">
            Top Mutual Funds Advisory
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 md:gap-5">
          <animated.h2 className="text-[40px] font-figtree font-bold">
            {number4Props.number.to(
              (value) => Math.floor(value).toLocaleString() + " +"
            )}
          </animated.h2>
          <h1 className="text-[16px] md:text-[18px]">Global Speakerships</h1>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row p-4 gap-5 lg:gap-20 justify-center items-start bg-[#1A1E28] text-white ">
        <img
          className="rounded-xl h-[350px] lg:h-[550px] w-[400px] lg:w-[815px] mt-20 lg:mb-10"
          src={gif}
          alt="About us GIF"
        />

        <div className="flex flex-col gap-5 mt-5 lg:mt-20  text-center lg:text-left mb-10">
          <h1 className="font-bold text-3xl lg:text-[50px] tracking-wider leading-relaxed">
            Who are we?
          </h1>
          <p className="mt-6  lg:text-[20px] w-full lg:w-[500px] tracking-wide leading-loose">
            Started by Ajay Joshi in 2021, AJC is a boutique advisory firm in
            the chemicals industry, with focus on delivering highly specialized
            and tailored advisory services to our clients within this sector. We
            pride ourselves on our deep understanding of the unique challenges,
            regulations, and market dynamics that shape the chemical industry
            landscape. At AJC, we offer a range of services, including market
            analysis, strategy development, growth advisory, mergers and
            acquisitions advisory, and sales consulting to grow our clients
            profitably.
          </p>
        </div>
      </div>

      <div className="  flex flex-col p-4 bg-[#eee0c7]">
        <h1 className="place-self-center text-4xl lg:text-6xl font-semibold font-serif mt-5">
          Clientele
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-20 justify-items-center mt-20">
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={ban}
            alt="Ban"
          />
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={bcg}
            alt="BCG"
          />
          <img
            className="h-[50px] lg:h-[70px] w-[140px] lg:w-[110px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={gic}
            alt="GIC"
          />
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={upl}
            alt="UPL"
          />
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={circle}
            alt="Circle"
          />
          <img
            className="h-[70px] lg:h-[100px] w-[140px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={jefferies}
            alt="Jefferies"
          />
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={hsbc}
            alt="HSBC"
          />
          <img
            className="h-[70px] lg:h-[80px] w-[130px] lg:w-[140px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={arrow}
            alt="Arrow"
          />
          <img
            className="h-[80px] lg:h-[90px] w-[140px] lg:w-[150px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={cnbc}
            alt="CNBC"
          />
          <img
            className="h-[80px] lg:h-[90px] w-[140px] lg:w-[150px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={Dow}
            alt="Dow"
          />
          <img
            className="h-[80px] lg:h-[90px] w-[140px] lg:w-[240px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={oliver}
            alt="Oliver"
          />
          <img
            className="h-[80px] lg:h-[100px] w-[140px] lg:w-[190px] transition duration-300 ease-in-out grayscale hover:grayscale-0 hover:scale-125"
            src={news}
            alt="News"
          />
        </div>

        <div className="flex flex-wrap justify-evenly items-center mt-10 lg:mt-20 gap-4 lg:gap-0"></div>
      </div>

      <div className="mt-[50px] flex justify-center items-center w-full">
        <h1 className="text-3xl lg:text-4xl font-semibold font-serif">
          What we Offer
        </h1>
      </div>
      <div
        ref={sectionRef}
        className="hidden lg:flex  lg:flex-row lg:justify-center lg:items-center mt-10 lg:gap-5"
      >
        <div
          className={`h-[400px] lg:h-[400px] w-[300px] lg:w-[700px] rounded-xl flex flex-col lg:text-left ${
            animateSection ? "animate-left" : ""
          }`}
        >
          <img
            className="h-[300px] lg:h-[400px] w-full p-2 lg:p-4"
            src={growth}
            alt="Growth"
          />
        </div>

        <div
          className="flex flex-col justify-center items-center gap-2 lg:gap-5"
          ref={sectionRef}
        >
          {" "}
          {/* Adjusted gap */}
          <img
            className={`h-[150px] lg:h-[200px] lg:w-[400px] p-2 lg:p-4 ${
              animateSection ? "animate-top" : ""
            }`}
            src={sales}
            alt="Sales"
          />
          <img
            className={`h-[150px] lg:h-[200px] lg:w-[400px] p-2 lg:p-4 ${
              animateSection ? "animate-bottom" : ""
            }`}
            src={profiling}
            alt="Profiling"
          />
        </div>
      </div>
      <div
        ref={sectionRef}
        className="lg:hidden flex flex-col justify-center items-center mt-10 lg:gap-5"
      >
        <div className="h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] rounded-xl flex flex-col lg:text-left">
          <img className="h-full w-full p-2 lg:p-4" src={growth} alt="Growth" />
        </div>

        <div className="flex flex-col justify-center items-center gap-2 lg:gap-5">
          <img
            className="h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] p-2 lg:p-4"
            src={sales}
            alt="Sales"
          />
          <img
            className="h-[300px] lg:h-[400px] w-[300px] lg:w-[500px] p-2 lg:p-4"
            src={profiling}
            alt="Profiling"
          />
        </div>
      </div>

      <div
        className="flex flex-col p-4 mt-20"
        style={{
          background: "linear-gradient(to right, #0F265E 0%, #1FBAC4 100%)",
        }}
      >
        <h1 className="place-self-center text-3xl lg:text-4xl font-serif font-semibold mt-10 text-white">
          Insights
        </h1>

        {loading2 ? (
          <div className="flex justify-center items-center p-4 mt-20 w-full">
            <PiSpinnerGapThin size={120} className="animate-spin" />
          </div>
        ) : (
          <div className="relative w-full mt-10 mb-10 flex justify-center">
            <AliceCarousel
              mouseTracking
              infinite
              items={items}
              responsive={{
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 },
              }}
              controlsStrategy="alternate"
              disableDotsControls
              renderPrevButton={() => (
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
                  <FaChevronLeft />
                </button>
              )}
              renderNextButton={() => (
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10">
                  <FaChevronRight />
                </button>
              )}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
