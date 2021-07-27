import React from "react";
import styleOrder from "../css/orders.module.css";
import { auth, db } from "../firebase/firebase";
import style from "../css/cartitem.module.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import styleCart from "../css/Cart.module.css";

function Item({ title, price, image, id, timeStamp }) {
  const history = useHistory();
  return (
    <div className={style.orders}>
      <div className={style.cartitem}>
        <div className={`${style.upperContainer} ${style.common}`}>
          <img src={image} alt={title} width="100" height="100" />
          <span>{title}</span>
          <span>{`Rs. ${price}`}</span>
        </div>
        <div className={`${style.lowerContainer} ${style.common}`}>
          <Button
            onClick={() =>
              history.push({
                pathname: "/orders/invoice",
                state: { title: title, price: price, timeStamp: timeStamp },
              })
            }
            variant="primary"
          >
            Invoice
          </Button>
        </div>
      </div>
    </div>
  );
}

function Orders() {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(() => {
    const getAddress = async () => {
      const snapshot = await db
        .collection("payment")
        .doc(auth.currentUser.email)
        .collection("tokens")
        .get();

      const list = [];
      snapshot.docs.map((doc) => {
        const data = doc.data().orders;

        list.push(...data);
        return null;
      });

      setOrders(list);
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getAddress();
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  if (orders.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          marginTop: "200px",
        }}
      >
        <div className={styleCart.box}>
          <span>Orders Empty....</span>
        </div>
      </div>
    );
  }

  return (
    <div className={styleOrder.orders}>
      {orders.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
    </div>
  );
}

export default Orders;
