/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Navbar from "../Pages/NavBar";

export default function About() {
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <Navbar fixed />
    <section class="bg-gray-100 border-b py-8 font-sans">
      <div class="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 class="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          The three facets of Appreciation
        </h1>
        <div class="w-full mb-4">
          <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 p-6">
                01. Analytics
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Finding out who and what constitutes your community is key, our in depth analytics gives you
              </p>
              <ul class="text-gray-800 text-base px-6 mb-5">
                <li>&#10149; Top holders by volume</li>
                <li>&#10149; Every wallet address associated with your smart contract</li>
                <li>&#10149; Current holders and amounts</li>
                <li>&#10149; Diamond Hands (people who buy and have never sold)</li>
              </ul>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 p-6">
                02. Asset Creation
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Creating the perfect asset requires experience and technique, chose the best option from our in-house expertise in GLB files, 3-D printing, or something simple that we co-create such as colouring books and posters.
              </p>
              <p class="text-gray-800 text-base px-6 mb-5">
                Don't forget to chose your perfect custom beat from our library of composed music to add more value to your NFT
              </p>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
              <div class="w-full font-bold text-xl text-gray-800 p-6">
                03. Distribution
              </div>
              <p class="text-gray-800 text-base px-6 mb-5">
                Save on gas costs by using our contract to distribute across a large list of wallet addresses, or simply create a claiming portal on our website. Layer 2 solutions are always an exciting option as well.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
