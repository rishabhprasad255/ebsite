import React from "react";
import style from "../css/categorybar.module.css";
import { Link, useLocation } from "react-router-dom";

function CategoryBar() {
  const categoryList = [
    "electronics",
    "homedecore",
    "gaming",
    "lights",
    "sofa",
  ];

  const location = useLocation();

  const setTransparent = () => {
    const lists = [
      document.getElementById("category_0"),
      document.getElementById("category_1"),
      document.getElementById("category_2"),
      document.getElementById("category_3"),
      document.getElementById("category_4"),
    ];
    lists.forEach((list) => {
      list.style.background = "transparent";
      list.style.color = "white";
    });
  };

  React.useEffect(() => {
    let unmount = false;
    if (!unmount) {
      const lists = [
        document.getElementById("category_0"),
        document.getElementById("category_1"),
        document.getElementById("category_2"),
        document.getElementById("category_3"),
        document.getElementById("category_4"),
      ];

      const splitted = location.pathname.split("/");
      const filtered = lists.filter(
        (item) => item.innerHTML.toLowerCase() === splitted[splitted.length - 1]
      );

      if (filtered.length > 0) {
        setTransparent();
        filtered[0].style.background = "white";
        filtered[0].style.color = "black";
      }
    }

    return () => (unmount = true);
  }, [location]);

  return (
    <div className={style.category_bar}>
      {categoryList.map((category, index) => (
        <Link
          id={`category_${index}`}
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
