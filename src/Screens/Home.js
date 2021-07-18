import React from "react";
import style from "../css/home.module.css";
import Carousel from "../components/Carousell";
import Card from "../components/Card";
import { home_products } from "../utils/home";

function Home() {
  return (
    <div className={style.home}>
      <Carousel />

      <div className={style.tag}>Get Offer On Your Favourite Items</div>
      <div className={style.container}>
        {home_products.map((item) => (
          <Card key={item.id} home_products={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
