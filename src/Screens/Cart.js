import React from "react";
import style from "../css/Cart.module.css";
import CartItem from "../components/CartItem";
import { useAppContext } from "../context/UsingContext";

function Cart() {
  const { mycart, setCartlen } = useAppContext();
  React.useEffect(() => {
    const effect = () => {
      setCartlen(mycart.length);
    };
    return effect();

    // eslint-disable-next-line
  }, [mycart]);

  return (
    <div className={style.cart}>
      <>
        <main>CART</main>
        {mycart.length !== 0 ? (
          <section>
            {mycart.map((item) => {
              return <CartItem key={`${item.title}_${item.id}`} {...item} />;
            })}
          </section>
        ) : (
          <div className={style.box}>
            <span>Your cart is empty...</span>
          </div>
        )}
      </>
    </div>
  );
}

export default Cart;
