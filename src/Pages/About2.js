/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import MindMap from "../assets/images/MindMap.png";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../Pages/NavBar";

export default function About2() {
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Navbar fixed />

    <section class="bg-white border-b p-8 font-sans">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          What is Appreciation Token
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="text-center">
            <h3 class="text-xl text-gray-600 leading-none mb-3">
              A way to keep your community engaged via subsequent airdrops, tokens, 3D printed items, physical products, metaverse wearables and much more.
            </h3>
        </div>
      </div>
      </div>
      </section>
      <section class="bg-white border-b p-8">
      <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Our way of appreciating the community
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="flex flex-wrap">
          <div class="text-center">
            <img src = {MindMap}/>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
