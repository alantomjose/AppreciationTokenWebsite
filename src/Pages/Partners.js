/*eslint-disable*/
import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import Slider from "react-slick";
import polygon from "../assets/images/polygon.png";
import ethmen from "../assets/images/eth-men_logo.png";
import alphabetty from "../assets/images/alphabetty.png";
import vox from "../assets/images/vox.png";
import weapon from "../assets/images/wpcnt.jpeg";
import nftcomics from "../assets/images/nftcomics.png";

export default function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autosPlay: true,
  };

  return (
    <>
      <div className="m-20">
        <div className="w-full md:px-4 pb-20" style={{ fontFamily: "Poppins" }}>
          <h2 className=" uppercase  font-bold text-4xl text-gray-800 text-center ">
            Partners
          </h2>
        </div>
        <Slider {...settings}>
          <div className="mx-10 px-5">
            <img src={polygon} />
          </div>
          <div className="mx-10 px-5">
            <img src={ethmen} />
          </div>
          <div className="mx-10 px-5 ">
            <img className="mx-auto" src={alphabetty} width="170px" />
          </div>
          <div className="mx-10 px-5">
            <img src={vox} />
          </div>
          <div className="mx-10 px-5 top-0  px-auto">
            <img src={weapon} className="mx-auto" width="170px" />
          </div>
          <div className="mx-10 px-5">
            <img src={nftcomics} className="mx-auto" width="170px" />
          </div>
        </Slider>
      </div>
    </>
  );
}
