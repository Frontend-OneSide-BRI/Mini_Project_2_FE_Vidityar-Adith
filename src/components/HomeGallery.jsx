import React, { useState } from "react";
import "./gallery.css";

export const dataImage = [
  {
    id: 1,
    title: "Exploring",
    src: "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "nature",
  },
  {
    id: 2,
    title: "Sunset",
    src: "https://images.unsplash.com/photo-1685358665786-b00f2c4aa358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "nature",
  },
  {
    id: 3,
    title: "Forest",
    src: "https://images.unsplash.com/photo-1685404910379-8e8163f53ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80",
    category: "nature",
  },
  {
    id: 4,
    title: "City Bridge",
    src: "https://plus.unsplash.com/premium_photo-1685149096772-5947f727b130?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    category: "nature",
  },
  {
    id: 5,
    title: "Flower",
    src: "https://images.unsplash.com/photo-1685355732476-4a84dc2e6557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "nature",
  },
  {
    id: 6,
    title: "Swimming",
    src: "https://plus.unsplash.com/premium_photo-1684917944838-30fe85aa6059?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "sport",
  },
  {
    id: 7,
    title: "Running Athletes",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    category: "sport",
  },
  {
    id: 8,
    title: "Weightlifting Woman",
    src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    category: "sport",
  },
  {
    id: 9,
    title: "Yoga Exercise",
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 10,
    title: "Outdoor Sport",
    src: "https://plus.unsplash.com/premium_photo-1685055940260-7cdf1ee78d85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 11,
    title: "Weightlifting Man",
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "sport",
  },
  {
    id: 12,
    title: "Weightlifting Woman",
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNwb3J0fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "sport",
  },
  {
    id: 13,
    title: "Banana",
    src: "https://images.unsplash.com/photo-1685399246583-54cb7a2a5b8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 14,
    title: "Orange",
    src: "https://images.unsplash.com/photo-1685307836310-6528e38b85d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    category: "fruit",
  },
  {
    id: 15,
    title: "Watermelon",
    src: "https://images.unsplash.com/photo-1685342995314-1e55a6591f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 16,
    title: "Lemon",
    src: "https://images.unsplash.com/photo-1685209343081-30636b4a3f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "fruit",
  },
  {
    id: 17,
    title: "Cute Cat",
    src: "https://images.unsplash.com/photo-1685377507301-e01b4c17e1f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "animal",
  },
  {
    id: 18,
    title: "Bird",
    src: "https://images.unsplash.com/photo-1685371442008-a3316948f1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1307&q=80",
    category: "animal",
  },
  {
    id: 19,
    title: "Fish Clown",
    src: "https://images.unsplash.com/photo-1685345324402-460a889064d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "animal",
  },
  {
    id: 20,
    title: "Goat",
    src: "https://images.unsplash.com/photo-1685210838807-696b25fa1684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80",
    category: "animal",
  },
];
function Gallery() {
  const [modal, setModal] = useState(false);
  const [tempImg, setTempImg] = useState("");

  const getImg = (imgsrc) => {
    setTempImg(imgsrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? "modal open" : "modal"}>
        <img src={tempImg} alt="img Modal" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          onClick={() => setModal(false)}
        >
          <path
            fill="currentColor"
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          />
        </svg>
      </div>
      <div className="gallery">
        {dataImage.map((item, index) => {
          return (
            <div className="pict" key={index} onClick={() => getImg(item.src)}>
              <img src={item.src} style={{ width: "100%" }} alt="img Gallery" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Gallery;
