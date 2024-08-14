import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PiSpinnerGapThin } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const AllBlogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const URL = "https://ajcbackend.onrender.com/blog/get";
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const getBlogs = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${URL}`);
      if (data?.success) {
        setBlogs(data?.blogs);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "........";
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };

  const handleReadmore = (id) => {
    localStorage.setItem("blogID", id);
    navigate("/blog");
  };

  useEffect(() => {
    getBlogs();
  }, []);

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
      {loading ? (
        <div className="flex justify-center items-center p-4 mt-20">
          <PiSpinnerGapThin size={120} className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <h1 className="font-bold text-4xl ml-10 mt-10">
            <span
              style={{ textDecorationColor: "#008080" }}
              className="underline underline-offset-2"
            >
              Insig
            </span>
            hts
          </h1>

          <div className="flex flex-col justify-center items-center mt-10 w-full gap-20">
            {blogs?.map((blog, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={blog?._id}
                  className="bg-[#F6F6F2] w-full max-w-5xl p-4 rounded-xl "
                >
                  <div
                    className={`flex flex-col md:flex-row justify-center h-full items-center gap-6 md:gap-10 lg:gap-40 ${
                      isEven ? "" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="image">
                      <img
                        className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] object-cover rounded-xl"
                        src={blog?.image}
                        alt="Blog"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start md:text-left">
                      <h1 className="text-[#7E7D7D] text-lg md:text-2xl">
                        {formatDate(blog?.date)}
                      </h1>
                      <h1 className="font-serif font-bold text-2xl md:text-4xl mt-2">
                        {blog?.title}
                      </h1>
                      <p className="w-full max-w-xl mt-5">
                        {truncateText(blog?.description, 200)}
                      </p>
                      <button
                        onClick={() => handleReadmore(blog?._id)}
                        className="bg-[#008080] p-2 rounded-xl text-white shadow-2xl hover:opacity-70 mt-8"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default AllBlogs;
