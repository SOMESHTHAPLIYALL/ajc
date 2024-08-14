import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PiSpinnerGapThin } from "react-icons/pi";

const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
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

  useEffect(() => {
    getBlog();
    getBlogs();
  }, [id]);

  const items = blogs.map((blog, index) => (
    <div
      key={index}
      className="bg-[#F4F4F4] w-[340px] md:w-[400px] flex flex-col p-4 mx-2 overflow-auto "
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
      {loading ? (
        <div className="flex justify-center items-center p-4 mt-20">
          <PiSpinnerGapThin size={120} className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start p-4 w-full">
          <div className="w-full flex justify-start">
            <h1 className="font-bold text-4xl mt-10 ml-4 md:ml-20">
              <span
                style={{ textDecorationColor: "#008080" }}
                className="underline underline-offset-2"
              >
                Insig
              </span>
              hts
            </h1>
          </div>

          <div className="mt-10 p-4 flex justify-center items-center w-full">
            <div className="flex flex-col justify-start items-start w-full max-w-[550px] p-4">
              <h1 className="font-serif font-bold text-2xl md:text-4xl">
                {blog?.title}
              </h1>

              <p className="text-[#585353] mt-5 font-mono text-sm md:text-lg">
                By Ajay Joshi | Published on {formatDate(blog?.date)}
              </p>
              <p className="w-full mt-5 text-sm md:text-base">
                {blog?.description}
              </p>
            </div>
          </div>

          <div className="flex justify-start items-start p-4 mt-20">
            <h1 className="font-bold font-serif text-2xl md:text-3xl ml-4 md:ml-10">
              More Posts
            </h1>
          </div>

          {loading2 ? (
            <div className="flex justify-center items-center p-4 mt-20 w-full">
              <PiSpinnerGapThin size={120} className="animate-spin" />
            </div>
          ) : (
            <div className="relative w-full mt-10 mb-10">
              <AliceCarousel
                mouseTracking
                infinite
                items={items}
                responsive={{
                  0: { items: 1 },
                  768: { items: 2 },
                  1024: { items: 4 },
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
      )}
    </>
  );
};

export default Blog;
