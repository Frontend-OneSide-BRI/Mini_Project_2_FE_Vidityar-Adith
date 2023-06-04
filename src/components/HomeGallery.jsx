import React, { useState } from "react";
import { randomImage } from "../store/randomImage";
function Gallery() {
  return (
    <>
      <div className="gallery mb-3">
        {randomImage.map((item, index) => {
          return (
            <div className="pict" key={index}>
              <img src={item.src} style={{ width: "100%" }} alt="img Gallery" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
