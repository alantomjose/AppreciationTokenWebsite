import React from "react";

export default function Footer() {
  return (
    <>
    <div
      style={{
        // backgroundImage: `linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)`,
        backgroundImage: "linear-gradient(90deg, #A12568 0%, #3B185F 100%)",
        backgroundSize: "100%",
        backgroundRepeat: "repeat-y",
        backgroundAttachment: "fixed",
      }}
    >
    <svg class="wave-top" viewBox="0 0 1439 147" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g class="wave" fill="#f8fafc">
            <path
              d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
            ></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <div className="container mx-auto px-4 text-white font-sans">
        <div className="flex flex-wrap text-center lg:text-left">
        <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-300">
            We'd love to hear from you, especially if you have some feedback for us.
            </h5>
            <div className="mt-4 lg:mb-0 mb-6">
            <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
            >
                <i className="fab fa-twitter"></i>
            </button>
            <button
                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
            >
                <i className="fab fa-facebook-square"></i>
            </button>
            </div>
            <h5 className="text-lg mt-4 mb-2 text-gray-300">
            If you have a new idea for us, we might just build it out for you :)
            </h5>
        </div>
        <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
            <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                Useful Links
                </span>
                <ul className="list-unstyled">
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=nr-footer"
                    >
                    About Us
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=nr-footer"
                    >
                    Blog
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=nr-footer"
                    >
                    Github
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                    >
                    Free Products
                    </a>
                </li>
                </ul>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-white text-sm font-semibold mb-2">
                Other Resources
                </span>
                <ul className="list-unstyled">
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://github.com/creativetimofficial/notus-react/blob/main/LICENSE.md?ref=nr-footer"
                    >
                    MIT License
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=nr-footer"
                    >
                    Terms & Conditions
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=nr-footer"
                    >
                    Privacy Policy
                    </a>
                </li>
                <li>
                    <a
                    className="text-gray-300 hover:text-gray-400 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/contact-us?ref=nr-footer"
                    >
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-6 pb-6 mx-auto text-center">
            <div className="text-sm text-white font-semibold py-1">
            Copyright © Appreciation Token
            </div>
        </div>
        </div>
    </div>
    </div>
    </>
  );
}
