import React from "react";
import "./Style.css";
import CategoryButton from "./CategoryButton ";

const CategoryList = ({ categories }) => {
  const handleClick = (category) => {
    alert(`Category clicked: ${category}`);
  };

  return (
    <div className="category-list">
      {categories.map((category, i) => (
        <CategoryButton
          key={i}
          category={category.name}
          jobCount={category.jobCount}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default CategoryList;
