import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/HomeGallery";
import CarouselHome from "../components/CarouselHome";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-[#212529]">
      <Navbar />
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center mt-10">
          Polish your image to shine
        </h1>
        <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-gray-400 text-center">
          Vidith comes with many features that can improve your image quality.
          Let's start using Vidith
        </p>
        <div className="flex justify-center mb-5">
          <a
            href="/image-gallery"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <CarouselHome />
      <div className="flex justify-center">
        <div className="bg-[#31353a] w-11/12 mb-5">
          <div className="flex justify-center p-4 text-center">
            <p className="rounded bg-green-700 text-white p-2">Our Feature</p>
          </div>
          <h2 className="flex justify-center text-white text-2xl font-semibold mb-5">
            Providing premium filters, quality tools and creative community
          </h2>
          <Gallery />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
