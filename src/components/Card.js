import React from "react";
import style from "../css/card.module.css";

function Card({ home_products }) {
  const { image, title, category, price } = home_products;

  return (
    <span className={style.a} href="#" style={{ textDecoration: "none" }}>
      <div className={style.card}>
        <img src={image} alt={title} />
      </div>
      <div className={style.info}>
        <span>{title}</span>
        <div>{price}</div>
        <small>{category}</small>
      </div>
    </span>
  );
}

export default Card;
