import React from "react";
import Table from "../components/Table";
import style from "../css/invoice.module.css";
import favicon from "../assets/favicon.svg";
import { auth, db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";

function Invoice({ location }) {
  const [user, setuser] = React.useState({
    username: "NA",
    email: "NA",
    address: "NA",
    city: "NA",
  });
  const { price, title, timeStamp } = location.state;

  React.useEffect(() => {
    const getAddress = async () => {
      const snapshot = await db
        .collection("payment")
        .doc(auth.currentUser.email)
        .collection("tokens")
        .get();

      setuser({
        username: auth.currentUser?.displayName || "Username",
        email: auth.currentUser?.email || "user-email",
        address: snapshot.docs[0]?.data().token.card.address_line1 || "NA",
        state:
          snapshot.docs[0]?.data().token.card.address_city +
          ", " +
          snapshot.docs[0]?.data().token.card.address_country +
          "     " +
          snapshot.docs[0]?.data().token.card.address_zip,
      });
    };

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        getAddress();
      }
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return (
    <div className={style.invoice}>
      <div className={style.container}>
        <div className={style.header}>
          <div className={style.left}>
            <main>
              <img src={favicon} height="40" width="40" alt="brand" />
              <span className={style.brand}>Ebsite</span>
            </main>
            <div className={style.address}>
              {Object.keys(user).map((key) => (
                <div key={key}>{user[key]}</div>
              ))}
            </div>
          </div>
          <div className={style.right}>
            <div>
              {"DATE: "}
              {timeStamp}
            </div>
          </div>
        </div>
        <Table className={style.table} price={price} title={title} />

        <hr />
        <div className={style.footer}>
          <div className={style.left}>&copy;2021 ebsite</div>
          <div className={style.right}></div>
        </div>
        <Button
          className={style.button}
          style={{ width: "100px", margin: "0 auto" }}
          variant="primary"
          onClick={() => {
            window.print();
          }}
        >
          Print
        </Button>
      </div>
    </div>
  );
}

export default Invoice;
