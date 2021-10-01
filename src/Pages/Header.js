/*eslint-disable*/
import React from "react";
import Slider from "react-slick";
import bg from "../assets/images/bg3.jpg";
export default function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        fontFamily: "Open Sans",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px xl:mx-52  ">
        <>
          <div className="container mx-auto items-center flex flex-wrap ">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-11/12 px-4">
              <div className="pt-32 sm:pt-0">
                <h2 className="font-semibold text-6xl text-gray-700  ">
                  Send an{" "}
                  <span className="text-rose-700"> Appreciation Token </span>{" "}
                  and show the community how much you appreciate them!
                </h2>

                <div className="mt-12">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 bg-gradient-to-br from-rose-500 to-rose-800  active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          <img
            className="  sm:w-4/12 -mt-48 sm:mt-0 w-10/12   "
            src={require("../assets/images/logo.png").default}
            alt="..."
          />
          <div className="bg-lightBlue-600 w-20 mr-44 "></div>

          {/* <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("../assets/images/analytics.png").default}
          alt="..."
        /> */}
        </>
      </section>
    </div>
  );
}
