import React from "react";
import { db, auth } from "../firebase/firebase";
import style from "../css/Cart.module.css";
import CartItem from "../components/CartItem";
import { useAppContext } from "../context/UsingContext";

function Cart() {
  const { mycart, setCartlen, setMycart } = useAppContext();

  React.useEffect(() => {
    const getCartItems = async () => {
      //has to be asyn bcz we use await
      const snapshot = await db
        .collection("cart")
        .doc(auth.currentUser.email)
        .collection("cart_items")
        .get();

      let items = snapshot.docs.map((doc) => {
        return doc.data().item;
      });

      setMycart(items);
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getCartItems();
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, [mycart]);

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
