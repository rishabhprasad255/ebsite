import React from "react";
import { db, auth } from "../firebase/firebase";
import style from "../css/Cart.module.css";
import CartItem from "../components/CartItem";
import { useAppContext } from "../context/UsingContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
function Cart() {
  const {
    mycart,
    setCartlen,
    setMycart,
    cartmodal,
    hideCartModal,
    partid,
    setOrders,
  } = useAppContext();
  const history = useHistory();

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
      setCartlen(mycart.length);
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getCartItems();
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, [mycart]);

  const checkoutWithOne = () => {
    hideCartModal();

    setOrders([partid]);
    history.push({
      pathname: "/checkout",
      state: { partid: partid },
    });
  };
  const date = new Date();

  const checkout = () => {
    const cart_item = mycart.map((item) => {
      return {
        ...item,
        timeStamp: `${date.getDate()}/0${date.getMonth()}/${date.getFullYear()} AT ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      };
    });
    setOrders(cart_item);
    hideCartModal();
    let sum = 0;

    const mytitle = mycart[0].title;
    mycart.forEach((item) => {
      const p = item.price.split(",").join("");
      sum += Number(p);
    });

    const obj = { title: mytitle, price: sum };
    history.push({
      pathname: "/checkout",
      state: { partid: obj },
    });
  };

  return (
    <>
      {cartmodal ? (
        <div className={style.modal}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Please select to continue.</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {mycart.length > 1 ? (
                <p style={{ textAlign: "center" }}>
                  You have more than one item in the cart! <br />
                  Click on "checkout all" to buy all items...
                  <br />
                </p>
              ) : (
                <p>
                  Checkout this item!
                  <br />
                </p>
              )}
            </Modal.Body>

            <Modal.Footer>
              <Button variant="danger" onClick={hideCartModal}>
                Close
              </Button>
              {mycart.length > 1 ? (
                <>
                  <Button variant="secondary" onClick={checkout}>
                    Checkout all
                  </Button>
                  <Button variant="primary" onClick={checkoutWithOne}>
                    Continue with one
                  </Button>
                </>
              ) : (
                <Button variant="primary" onClick={checkout}>
                  Checkout all
                </Button>
              )}
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ) : null}
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
    </>
  );
}

export default Cart;
