import React from "react";
import { useAppContext } from "../context/UsingContext";
import style from "../css/cartitem.module.css";
import { auth, db } from "../firebase/firebase";

function CartItem({ id, title, url, price, image }) {
  const [num, setNum] = React.useState(1);

  const {
    cartlen,
    setCartlen,
    hideCartModal,
    setCartmodal,
    cartmodal,
    setPartid,
  } = useAppContext();

  const checkout = (id, title, price) => {
    setCartmodal(true);
    setPartid({ id, title, price });
  };

  const deleteFromCart = (id, title) => {
    // const filteredcart = mycart.filter(
    //   (item) => item.id !== id && item.title !== title
    // );

    db.collection("cart")
      .doc(auth.currentUser.email)
      .collection("cart_items")
      .doc(`${id}__${title}`)
      .delete();

    // setMycart(filteredcart);
    const temp = cartlen - 1;
    setCartlen(temp);
  };

  const increase = () => {
    setNum((num) => num + 1);
  };

  const decrease = () => {
    setNum((num) => (num === 1 ? num : num - 1));
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
          <button onClick={decrease}>-</button>
          <button onClick={increase}>+</button>
        </div>
        <button
          onClick={() => {
            const p = price.split(",").join("");
            checkout(id, title, num * p);
          }}
        >
          BUY
        </button>
        <button onClick={() => deleteFromCart(id, title)}>delete</button>
      </div>
    </div>
  );
}

export default CartItem;
