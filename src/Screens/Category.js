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
import firebase from "firebase/app";
import { db, auth } from "../firebase/firebase";

function CategoryItem({ id, title, rating, price, image, ind }) {
  const colors = [style_item.red, style_item.green, style_item.pale];

  const { cartlen, setCartlen, mycart} = useAppContext();

  const addToCart = (item) => {
    const isDuplicate = mycart.filter((obj_item) => {
      if (obj_item.id === item.id && obj_item.title === item.title) {
        return obj_item;
      }
      return null;
    });

    if (isDuplicate.length === 0) {
      db.collection("cart")
        .doc(auth.currentUser.email)
        .collection("cart_items")
        .doc(`${item.id}__${item.title}`)
        .set({
          timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
          item: item,
        });

      const temp = cartlen + 1;
      setCartlen(temp);
    }
  };

  const changeText = (ind) => {
    if (document.getElementById(`tooltip_${ind}`)) {
      const tooltip = document.getElementById(`tooltip_${ind}`);
      tooltip.innerText = "Added";
      tooltip.style.color = "lightgreen";
    }
  };

  const styleColor =
    rating > 3.0 ? colors[1] : rating < 2.0 ? colors[0] : colors[2];

  return (
    <div className={style_item.category_item}>
      <div className={style_item.wrapper}>
        <img src={image} alt={title} />
        <div className={style_item.overlay}>
          <button
            className={style_item.btn}
            onClick={() => addToCart({ id, title, price, image })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
              onClick={() => changeText(ind)}
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            <small id={`tooltip_${ind}`} className={style_item.tooltip}>
              Add To Cart{" "}
            </small>
          </button>
        </div>
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

// __________________________________________________________
function Category() {
  const { category } = useParams();

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
        {list.map((item, index) => (
          <CategoryItem
            key={`${item.id}_${item.title}`}
            {...item}
            ind={index}
            className={style_item.item}
          />
        ))}
      </div>
    );
  }
}

export default Category;
