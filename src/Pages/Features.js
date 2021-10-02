/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import integration from "../assets/images/Capture3.PNG";
import nftcomics from "../assets/images/Capture4.PNG";

export default function Features() {
  return (
    <>
      {/* <IndexNavbar fixed /> */}

      <section className="mt-12 relative   " style={{ fontFamily: "Poppins" }}>
        <div className="container mx-auto">
          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="flex">
              <div className=" mr-12 w-4/12 text-left  ">
                <div className="text-xl uppercase font-extrabold text-gray-400">
                  feature
                </div>
                <div className="text-7xl font-bold text-gray-800">
                  Powerful Integration
                </div>
                <div className="text-xl mr-12  text-left text-gray-500 mt-6 ">
                  Powerful Integration with all prominent blockchain
                  technologies
                </div>
              </div>

              <div className="w-6/12 relative ml-auto ">
                <img className=" -mt-20" src={integration} />
              </div>
            </div>
          </div>

          <div className="justify-center text-center flex flex-wrap mt-24">
            <div className="flex">
              <div className="w-6/12 relative  p-36 ">
                <img
                  className="  rounded-3xl  shadow-2xl -mt-20"
                  src={nftcomics}
                />
              </div>
              <div className=" mr-12 w-4/12 text-left pt-20  ">
                <div className="text-xl uppercase font-extrabold text-gray-400">
                  feature
                </div>
                <div className="text-7xl font-bold text-gray-800">
                  Customized Smart Contracts
                </div>
                <div className="text-xl mr-12  text-left text-gray-500 mt-6 ">
                  Powerful Integration with all prominent blockchain
                  technologies
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
