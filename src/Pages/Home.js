/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../Pages/NavBar";
import About from "./About.js";
import Header from "./Header";
import Partners from "./Partners";

export default function Home() {
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Navbar />
      <Header />
      <Partners />
      {/* <About /> */}
      <Footer />
    </>
  );
}
