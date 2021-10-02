/*eslint-disable*/
import React from "react";
import Slider from "react-slick";
import bg from "../assets/images/bg4.jpg";
import test from "../assets/images/test.PNG";
export default function Testimonials() {
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
        backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        fontFamily: "Open Sans",
        backgroundAttachment: "fixed",
      }}
    >
      <section className="header relative pt-16 items-center  h-screen max-h-860-px xl:mx-52  ">
        <>
          <div className="container mx-auto items-center flex flex-wrap ">
            <div className="w-full md:w-8/12 lg:w-6/12 xl:w-11/12 px-4">
              <div className="sm:pt-0">
                <h2 className="font-semibold text-6xl text-gray-700 w-1/2  mt-20 ">
                  What Our Clients Say About Us!
                </h2>
              </div>
            </div>
          </div>
          <div className="p-10 my-24 bg-white rounded-3xl w-1/2 shadow-2xl">
            <img src={test} />
          </div>

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
