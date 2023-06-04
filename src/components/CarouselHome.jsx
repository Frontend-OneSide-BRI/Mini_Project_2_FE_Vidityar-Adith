import React, { useEffect, useState } from "react";
import { carouselData } from "../store/imageCarousel";

const CarouselHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div className="flex justify-center items-center mb-7 mt-7">
        <div className="carousel w-3/5 m-auto">
          <div className="flex">
            {carouselData.map((item, index) => (
              <div
                key={item.id}
                className={`h-[500px] w-[800px] ${
                  index === currentSlide ? "block" : "hidden"
                }`}
              >
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute flex justify-between items-center left-5 right-5">
          <button className="btn btn-circle" onClick={goToPrevSlide}>
            ❮
          </button>
          <button className="btn btn-circle" onClick={goToNextSlide}>
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselHome;
