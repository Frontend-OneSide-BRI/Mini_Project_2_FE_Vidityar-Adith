import React, { useEffect, useState } from "react";
import { dataImage } from "../store/imageData";
import "./gallery.css";

function ImageGallery({ isFilter, isSearch }) {
  const [filterImage, setFilterImage] = useState(dataImage);
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const filterData = (isFilter, isSearch) => {
    const result = dataImage.filter((item) => {
      const matchInput = item.title
        .toLowerCase()
        .includes(isSearch.toLowerCase());
      const matchSelect = isFilter === "" || item.category === isFilter;
      return matchInput && matchSelect;
    });

    setFilterImage(result);
  };

  useEffect(() => {
    filterData(isFilter, isSearch);
  }, [isFilter, isSearch]);

  const getImg = (imgsrc) => {
    setTempImg(imgsrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? "modalOpen z-10" : "modal"}>
        <img src={tempImg} alt="img Modal" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          className="cursor-pointer"
          onClick={() => setModal(false)}
        >
          <path
            fill="currentColor"
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          />
        </svg>
      </div>
      <div className="mb-8">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 z-0">
          {filterImage.map((item, index) => {
            return (
              <div
                className="border rounded-lg shadow bg-gray-800 border-gray-700 hover:opacity-80"
                key={index}
                onClick={() => getImg(item.src)}
              >
                <div className="flex flex-col h-full">
                  <img
                    className="object-cover rounded-t-lg h-80 w-auto"
                    src={item.src}
                    alt=""
                  />
                  <div className="p-5">
                    <div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.title}
                      </h5>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ImageGallery;
