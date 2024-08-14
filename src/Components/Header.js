import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className="h-[111px]  p-4 flex justify-between top-0 sticky  text-white z-50"
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
        <div
          className="fixed inset-0  bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-lg text-white "
          style={{
            background: "linear-gradient(90deg, #1131A0 0%, #0A1919 100%)",
          }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl"
          >
            <FaTimes />
          </button>
          <div className="h-full flex flex-col justify-center items-start gap-10 text-2xl">
            <NavLink
              to="/ourStory"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold mb-4" : "text-white mb-4"
              }
              onClick={toggleMenu}
            >
              Our Story
            </NavLink>
            <NavLink
              to="/growth"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold" : "text-white"
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/allBlogs"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold mb-4" : "text-white mb-4"
              }
              onClick={toggleMenu}
            >
              Insights
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold mb-4" : "text-white mb-4"
              }
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-[#008080] font-bold mb-4" : "text-white mb-4"
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
