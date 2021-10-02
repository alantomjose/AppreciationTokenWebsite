/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../Pages/NavBar";
import About from "./About.js";
import Header from "./Header";
import Partners from "./Partners";
import About2 from "./About2";
import Features from "./Features.js";
import Testimonials from "./Testimonials.js";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* <IndexNavbar fixed /> */}
      <Navbar />
      <Header />
      <About2 />
      <Features />
      <Testimonials />
      <Partners />

      <Footer />
    </div>
  );
}
