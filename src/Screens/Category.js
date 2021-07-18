import React from "react";
import style from "../css/category.module.css";
import style_item from "../css/category_item.module.css";
import { useParams } from "react-router-dom";
import { electronics } from "../utils/electronic";
import { gaming } from "../utils/gaming";
import { homedecore } from "../utils/homedecore";
import { lights } from "../utils/lights";
import { sofa } from "../utils/sofa";
import { useAppContext } from "../context/UsingContext";
import Error from "../Screens/Error";

function CategoryItem({ id, title, rating, price, image, url }) {
  const colors = [style_item.red, style_item.green, style_item.pale];

  const styleColor =
    rating > 3.0 ? colors[1] : rating < 2.0 ? colors[0] : colors[2];
  console.log(styleColor);
  return (
    <div className={style_item.category_item} onClick={() => window.open(url)}>
      <div>
        <img src={image} alt={title} />
      </div>
      <div className={style_item.info}>
        <small>{title}</small>
        <span>Rs {price}</span>

        <p className={styleColor}>
          Rating: {rating} <i className="fas fa-star"></i>
        </p>
      </div>
    </div>
  );
}

function Category() {
  const { category } = useParams();
  const { setCategory } = useAppContext();

  React.useEffect(() => {
    const effect = () => {
      setCategory(category);
    };
    return effect();
    // eslint-disable-next-line
  }, [category]);

  const categoryList = [
    { name: "electronics", list: electronics },
    { name: "gaming", list: gaming },
    { name: "homedecore", list: homedecore },
    { name: "lights", list: lights },
    { name: "sofa", list: sofa },
  ];

  const filteredItem = categoryList.filter((item) => item.name === category);

  if (filteredItem.length === 0) {
    return <Error />;
  } else {
    const { list } = filteredItem[0];
    return (
      <div className={style.category}>
        {list.map((item) => (
          <CategoryItem
            key={`${item.id}_${item.title}`}
            {...item}
            className={style_item.item}
          />
        ))}
      </div>
    );
  }
}

export default Category;
