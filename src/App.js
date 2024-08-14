import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import OurStory from "./Pages/OurStory";
import AllBlogs from "./Pages/AllBlogs";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import GrowthAdvsiory from "./Pages/GrowthAdvsiory";
import SalesConsulting from "./Pages/SalesConsulting";
import FinancialAdvsiory from "./Pages/FinancialAdvisory";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/allBlogs" element={<AllBlogs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/growth" element={<GrowthAdvsiory />} />
          <Route path="/sales" element={<SalesConsulting />} />
          <Route path="/financial" element={<FinancialAdvsiory />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
