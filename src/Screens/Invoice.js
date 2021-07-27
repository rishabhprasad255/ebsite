import React from "react";
import Table from "../components/Table";
import style from "../css/invoice.module.css";
import favicon from "../assets/favicon.svg";
import { auth, db } from "../firebase/firebase";
import Button from "react-bootstrap/Button";

function Invoice() {
  const [user, setuser] = React.useState({
    username: "NA",
    email: "NA",
    address: "NA",
    city: "NA",
  });

  const [timestamp, setTimeStamp] = React.useState("");

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
        address: snapshot.docs[0]?.data().token.card.address_line1,
        state:
          snapshot.docs[0]?.data().token.card.address_city +
          ", " +
          snapshot.docs[0]?.data().token.card.address_country +
          "     " +
          snapshot.docs[0]?.data().token.card.address_zip,
      });

      const date = new Date();
      setTimeStamp(
        `${date.getDate()}/0${date.getMonth()}/${date.getFullYear()} AT ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
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
              {timestamp}
            </div>
          </div>
        </div>
        <Table className={style.table} />

        <hr />
        <div className={style.footer}>
          <div className={style.left}></div>
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
