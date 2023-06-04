import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImageGallery from "../components/ImageGallery";
import SearchForm from "../components/SearchImage";
import SelectImage from "../components/SelectImage";
import Parallax from "../components/Parallax";
import Footer from "../components/Footer";

function GalleryPages() {
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = (type) => {
    setSearch(type);
  };

  const handleSelect = (type) => {
    setCategory(type);
  };

  return (
    <div className="bg-[#212529]">
      <Navbar />
      <Parallax />
      <SearchForm handleSearch={handleSearch} />
      <SelectImage handleSelect={handleSelect} />
      <ImageGallery isFilter={category} isSearch={search} />
      <Footer />
    </div>
  );
}

export default GalleryPages;
