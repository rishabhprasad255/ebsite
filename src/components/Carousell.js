import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "../css/carousel.module.css";
import first from "../assets/first.jpg";
import last from "../assets/last.jpg";
import middle from "../assets/middle.jpg";

function Carousell() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className={style.carousel}
      activeIndex={index}
      onSelect={handleSelect}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={first} alt="First slide" />
        <Carousel.Caption>
          <h3> Styles for Men and women</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={last} alt="Second slide" />

        <Carousel.Caption>
          <h3>Shoes</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={middle} alt="Third slide" />

        <Carousel.Caption>
          <h3>One Stop Solution For You</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousell;
