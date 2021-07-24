import React, { useState, useEffect } from "react";
import style from "../css/navbar.module.css";
import { auth } from "../firebase/firebase";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useAppContext } from "../context/UsingContext";
import { Link, useHistory } from "react-router-dom";
import search from "../assets/search.svg";

function Navbar() {
  const { hideSideBar, isSidebarOpen } = useAppContext();
  const [input, setInput] = useState("");
  const [user, setUser] = useState("User");

  const history = useHistory();
  //auth.currentUser is created in a brower******

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //to check whether a user is logged in or not
      if (authUser) {
        setUser(authUser.displayName.split(" ")[0]);
      }
    });
    return unsubscribe;
  }, []);

  const styles = {
    text: {
      textDecoration: "none",
    },
  };

  const checkUser = () => {
    if (auth.currentUser) {
      history.push("/user");
    } else alert("User Not Logged In");
  };

  const logOut = (e) => {
    e.preventDefault();
    if (auth.currentUser) {
      auth
        .signOut()
        .then(() => {
          history.replace("/login");
        })
        .catch((err) => alert(err.message));
    }
  };

  const handleSubmit = (e) => {
    setInput("");
    e.preventDefault();
  };
  return (
    <div className={style.navbar}>
      <svg
        height="16"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className={`bi bi-list-ul`}
        viewBox="0 0 16 16"
        onClick={hideSideBar}
      >
        <path
          fillRule="evenodd"
          d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
        />
      </svg>
      <form className={style.input} onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          <img src={search} alt="search-icon" />
        </button>
      </form>

      <div className={style.nav_right_side}>
        <Link style={styles.text} to="/home">
          Home
        </Link>

        <div
          style={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "center",
          }}
        >
          <span
            style={{ fontSize: "1.1rem", color: "white", marginRight: "5px" }}
          >
            {user}
          </span>
          <DropdownButton
            id="dropdown-basic-button"
            title=""
            className={style.dropdown}
          >
            <Dropdown.Item>
              <div style={styles.text} onClick={checkUser}>
                Settings
              </div>
            </Dropdown.Item>
            {auth.currentUser ? (
              <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
            ) : (
              <Dropdown.Item>
                <Link
                  style={styles.text}
                  to="#"
                  onClick={() => {
                    history.replace("/login");
                  }}
                >
                  Login
                </Link>
              </Dropdown.Item>
            )}
          </DropdownButton>
        </div>
        <Link style={styles.text} to="/more">
          More
        </Link>
        <Link
          style={styles.text}
          to="/cart"
          className={style.cart}
          onClick={isSidebarOpen ? hideSideBar : null}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
