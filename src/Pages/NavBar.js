/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/images/mmlogosmall.png";
// components
import hamb from "../assets/images/hamb.png";

// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import { useLocation } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [navColor, setNavColor] = useState(false);
  // const [address, setaddress] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      console.log(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    setNavbarOpen(false);
  }, [location]);

  const changeNavbarColor = () => {
    if (window.scrollY >= 5) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className = "font-sans">
      <nav
        className={`top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg ease-in-out transition-all ${
          !navColor ? `transparent text-white` : `bg-white shadow text-black`
        }   `}
      >
        <div
          // style={{ fontFamily: "Allan" }}
          className="container text-3xl px-4 mx-auto flex flex-wrap items-center justify-between"
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start font-semibold text-lg">
            <p>Appreciation Token</p>

            <button
              className="cursor-pointer text-xl leading-none px-3 py-1  block lg:hidden outline-none focus:outline-none text-white"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={hamb} className=" lw-10 h-10" />
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
              // (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index-navbar"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul> */}
            <ul
              className={`${
                !navbarOpen ? " -top-96 lg:top-0   " : " lg:top-0 top-16  "
              } absolute lg:relative justify-end left-0 w-full  lg:flex flex-col lg:flex-row  list-none  lg:ml-auto    lg:h-auto   transition-all duration-500 ease-in-out`}
            >
              <li className="flex items-center">
                <Link to="/">
                  <p className="text-lg   mt-20 md:mt-0 mb-10 lg:mb-0 mx-5 translate-y-20">
                    Home
                  </p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link to="/#about">
                  <p className="text-lg   mb-10 lg:mb-0 mx-5">
                    About
                  </p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link to="/#roadmap">
                  <p className="text-lg   mb-10 lg:mb-0 mx-5">
                    Testimonials
                  </p>
                </Link>
              </li>

              <li className="flex items-center">
                <Link to="/#team">
                  <p className="text-lg   mb-10 lg:mb-0 mx-5">
                    Contact
                  </p>
                </Link>
              </li>

              <li className="flex items-center   "></li>
            </ul>
            {/* //mobile */}
          </div>
        </div>
      </nav>
    </div>
  );
}
