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

    <section class="bg-white border-b py-8 font-sans">
      <div class="container max-w-5xl mx-auto m-8 flex flex-wrap">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Features
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 p-6">
                Powerful Integration
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Powerful integration with all prominent blockchain technologies
              </p>
              <img src = {integration}/>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 p-6">
                Customized Smart Contracts
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Powerful integration with all prominent blockchain technologies
              </p>
              <img src = {nftcomics}/>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
