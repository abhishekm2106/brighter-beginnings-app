import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import injectContext from "./store/appContext";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Programs from "./pages/programs";
import Staff from "./pages/staff";
// import Contact from "./pages/contact";
import About from "./pages/about";
import Reviews from "./pages/reviews";
import Photos from "./pages/photos";
import Careers from "./pages/careers";
const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar
          pages={["About", "Programs", "Staff", "Reviews", "Photos", "Careers"]}
        />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Programs />} path="/programs" />
          <Route element={<Staff />} path="/staff" />
          {/* <Route element={<Contact />} path="/contact" /> */}
          <Route element={<Reviews />} path="/reviews" />
          <Route element={<Photos />} path="/photos" />
          <Route element={<Careers />} path="/careers" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
