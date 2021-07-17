import React from "react";
import { useAppContext } from "../context/UsingContext";
import style from "../css/cartitem.module.css";

function CartItem({ id, title, url, price, image }) {
  const [num, setNum] = React.useState(1);

  const { mycart, setMycart } = useAppContext();

  const deleteFromCart = (id, title) => {
    const filteredcart = mycart.filter(
      (item) => item.id !== id && item.title !== title
    );

    setMycart(filteredcart);
  };

  const increase = () => {
    setNum((num) => num + 1);
  };

  const decrease = () => {
    setNum((num) => (num === 0 ? num : num - 1));
  };
  return (
    <div className={style.cartitem}>
      <div className={`${style.upperContainer} ${style.common}`}>
        <img src={image} alt={title} width="100" height="100" />
        <span>{title}</span>
        <span>{`Rs. ${price}`}</span>
      </div>
      <div className={`${style.lowerContainer} ${style.common}`}>
        <div className={style.counter}>
          <span>{num}</span>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
        <button onClick={() => window.open(url)}>BUY</button>
        <button onClick={() => deleteFromCart(id, title)}>delete</button>
      </div>
    </div>
  );
}

export default CartItem;
