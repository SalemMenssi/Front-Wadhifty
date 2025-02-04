import React from "react";
import "./Style.css";

const CategoryButton = ({ category, jobCount, onClick }) => {
  return (
    <button className="category-button" onClick={() => onClick(category)}>
      {category} <span>{jobCount}</span>
    </button>
  );
};

export default CategoryButton;
