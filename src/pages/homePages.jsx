import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/HomeGallery";

function Home() {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}> Polish your image to shine </h1>
      <h2 style={{ textAlign: "center" }}>
        {" "}
        Vidith comes with many features that can improve your image quality.
        Let's start using Vidith
      </h2>
      <Gallery />
    </>
  );
}

export default Home;
