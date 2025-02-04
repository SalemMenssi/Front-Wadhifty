import React from "react";
import "./Style.css";
import location from "../Assets/Icons/Icon (Stroke).svg";
import categorie from "../Assets/Icons/li_clipboard-list.svg";
import search from "../Assets/Icons/search.svg";

const SearchBar = () => {
  const handleSearch = () => {
    alert("Search button clicked!");
  };
  return (
    <div className="search-bar">
      <img src={location} alt="icon" />
      <select className="search-select">
        <option value="">Select Location</option>
        <option value="new-york">New York</option>
        <option value="san-francisco">San Francisco</option>
        <option value="los-angeles">Los Angeles</option>
      </select>
      <span></span>
      <img src={categorie} alt="icon" />
      <select className="search-select">
        <option value="">Select Category</option>
        <option value="software">Software</option>
        <option value="design">Design</option>
        <option value="marketing">Marketing</option>
      </select>
      <button className="search-button" onClick={handleSearch}>
        <img src={search} alt="icon" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
