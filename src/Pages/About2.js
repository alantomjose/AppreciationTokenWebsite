/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../Pages/NavBar";

export default function About2() {
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Navbar fixed />

      <section
        className="mt-48 md:mt-40 pb-40 relative "
        style={{ fontFamily: "Poppins" }}
      >
        <div className="container mx-auto">
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="w-full md:w-8/12 px-12 md:px-4">
              <h2 className="font-semibold text-6xl text-gray-800">
                What is Appreciation Token
              </h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque feugiat est a orci pellentesque fermentum. Praesent
                pharetra, mauris a tristique volutpat, tortor sem molestie eros,
                venenatis condimentum dui est maximus nibh. Aenean nulla nisl,
                semper in hendrerit quis, lobortis ultrices eros.
              </p>
            </div>
          </div>
          <div className="justify-center text-center flex flex-wrap mt-24 ">
            <div className="w-full md:w-10/12 px-12 md:px-4 relative">
              <h2 className="font-semibold text-6xl text-gray-800 mb-10">
                How to Send An Appreciation Token?
              </h2>
              <div>
                <div className="block">
                  <p
                    className=" z-0 text-9xl absolute font-extrabold text-blueGray-300   "
                    style={{ fontFamily: "Squada One" }}
                  >
                    01
                  </p>
                  <p className=" z-40 relative font-bold leading-relaxed mt-12 mb-4 text-gray-700 text-left text-5xl top-12 left-3 ">
                    Find The Configuration That Suits Your Business
                  </p>
                </div>
                <p className=" text-left text-gray-500 mt-12 text-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque feugiat est a orci pellentesque fermentum.
                  Praesent pharetra, mauris a tristique volutpat, tortor
                </p>
              </div>
              <div>
                <div className="block">
                  <p
                    className=" z-0 text-9xl absolute font-extrabold text-blueGray-300   "
                    style={{ fontFamily: "Squada One" }}
                  >
                    02
                  </p>
                  <p className=" z-40 relative font-bold leading-relaxed mt-12 mb-4 text-gray-700 text-left text-5xl top-12 left-3 ">
                    Let Us Build The Perfect Product
                  </p>
                </div>
                <p className=" text-left text-gray-500 mt-12 text-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque feugiat est a orci pellentesque fermentum.
                  Praesent pharetra, mauris a tristique volutpat, tortor
                </p>
              </div>
              <div>
                <div className="block">
                  <p
                    className=" z-0 text-9xl absolute font-extrabold text-blueGray-300   "
                    style={{ fontFamily: "Squada One" }}
                  >
                    03
                  </p>
                  <p className=" z-40 relative font-bold leading-relaxed mt-12 mb-4 text-gray-700 text-left text-5xl top-12 left-3 ">
                    Send Tokens and Appreciate Your Community
                  </p>
                </div>
                <p className=" text-left text-gray-500 mt-12 text-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque feugiat est a orci pellentesque fermentum.
                  Praesent pharetra, mauris a tristique volutpat, tortor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
