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
    <div className = "font-sans">
    <section class="bg-gray-100 border-b p-8">
      <div class="container max-w-5xl mx-auto m-8 flex flex-wrap">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          What Our Client Say About Us!
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-2/3 p-6 flex flex-col flex-grow flex-shrink">
          <img src = {test}/>
        </div>
      </div>
    </section>
    </div>
  );
}
