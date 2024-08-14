import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { PiSpinnerGapThin } from "react-icons/pi";
import linkedin2 from "../assets/L.png";
import X2 from "../assets/X1.png";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const URL = "https://ajcbackend.onrender.com";
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const year = currentDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleSend = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${URL}/enquiry/create`, {
        name: name,
        email: email,
        query: message,
        date: formattedDate,
      });
      if (data?.success) {
        setLoading(false);
        setName("");
        setEmail("");
        setMessage("");
        alert("Message sent!!");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
      <div
        className="content p-4"
        style={{
          background: "linear-gradient(to right, #3180AC 100%, #326D8E 100%)",
        }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center mt-14 mb-20 gap-10 lg:gap-40">
          <div className="p-4 text-white mt-10 flex flex-col justify-center items-start text-center lg:text-left">
            <h1 className="font-serif text-4xl lg:text-6xl font-bold">
              Let's Work
            </h1>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold mt-2 lg:mt-5">
              together!
            </h1>
            <p className="w-full lg:w-[450px] mt-6 lg:mt-10 lg:text-[17px] tracking-wider leading-relaxed">
              Ready to take your chemical business to the next level? Whether
              you're looking to identify new growth opportunities, optimize your
              sales strategies, or explore investment options, AJC is here to
              help. Reach out to our team of industry experts today and let's
              discuss how we can drive success together.
            </p>
            <div className="bg-[#EDE8E8] rounded-xl shadow-xl mt-6 lg:mt-10 w-full lg:w-[350px] h-[51px] flex justify-evenly items-center p-2">
              <a target="_blank" href="https://x.com/JoshiEien">
                <img src={X2} className="h-8 rounded-lg" />
              </a>
              <span className=" h-8 border-[#D9D9D9] border-2"></span>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/joshi-ajay?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
                <img src={linkedin2} className="h-8 rounded-lg" />
              </a>
              <span className=" h-8 border-[#D9D9D9] border-2"></span>
              <span className="text-[#6D6666]">joshi_advisory@outlook.com</span>
            </div>
          </div>

          <div className="bg-white shadow-xl p-4 rounded-xl w-full lg:w-[500px] flex flex-col justify-center items-start">
            <label
              className="mt-6 lg:mt-10 font-bold text-lg lg:text-xl ml-6"
              htmlFor="name"
            >
              What is your name?
            </label>
            <input
              id="name"
              className="outline-none border-b-2 border-[#D9D9D9] w-[90%] lg:w-[350px] mt-3 ml-6"
              placeholder="type your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              className="mt-6 lg:mt-10 font-bold text-lg lg:text-xl ml-6"
              htmlFor="email"
            >
              What is your email?
            </label>
            <input
              id="email"
              className="outline-none border-b-2 border-[#D9D9D9] w-[90%] lg:w-[350px] mt-3 ml-6"
              placeholder="type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="mt-6 lg:mt-10 font-bold text-lg lg:text-xl ml-6"
              htmlFor="message"
            >
              Any Query?
            </label>
            <input
              id="message"
              className="outline-none border-b-2 border-[#D9D9D9] w-[90%] lg:w-[350px] mt-3 ml-6"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              className="mt-6 lg:mt-10 p-3 rounded-lg font-semibold ml-6  flex justify-center items-center gap-2 hover:opacity-75"
              onClick={handleSend}
              style={{
                background:
                  "linear-gradient(to left, #8099D8 100%, #9EF0F0 100%)",
              }}
            >
              {loading ? (
                <PiSpinnerGapThin size={20} className="animate-spin" />
              ) : (
                <div className="flex justify-center items-center gap-2">
                  Send
                  <FiSend />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
