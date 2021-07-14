import React from "react";
import style from "../css/card.module.css";

function Card({ home_products }) {
  const { image, title, category, url, price } = home_products;

  return (
    <a
      className={style.a}
      href={url}
      style={{ textDecoration: "none" }}
      target="_blank"
      rel="noreferrer"
    >
      <div className={style.card}>
        <img src={image} alt={title} />
      </div>
      <div className={style.info}>
        <span>{title}</span>
        <div>{price}</div>
        <small>{category}</small>
      </div>
    </a>
  );
}

export default Card;
