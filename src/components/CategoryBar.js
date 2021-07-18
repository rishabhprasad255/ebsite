import React from "react";
import style from "../css/categorybar.module.css";
import { Link } from "react-router-dom";

function CategoryBar() {
  const categoryList = [
    "electronics",
    "homedecore",
    "gaming",
    "lights",
    "sofa",
  ];

  return (
    <div className={style.category_bar}>
      {categoryList.map((category, index) => (
        <Link
          style={{ textDecoration: "none" }}
          className={style.category}
          key={index}
          to={`/home/categories/${category}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

export default CategoryBar;
