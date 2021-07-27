import React from "react";
import style from "../css/home.module.css";
import Carousel from "../components/Carousell";
import Card from "../components/Card";
import { home_products } from "../utils/home";
import { useAppContext } from "../context/UsingContext";
import { db, auth } from "../firebase/firebase";

function Home() {
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
        setCartlen(mycart.length);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, [mycart]);

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
