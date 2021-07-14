import React, { useState } from "react";
import style from "../css/navbar.module.css";

import { useAppContext } from "../context/UsingContext";
import { Link } from "react-router-dom";
import search from "../assets/search.svg";

function Navbar() {
  const { hideSideBar, isSidebarOpen } = useAppContext();
  const [input, setInput] = useState("");

  const styles = {
    text: {
      textDecoration: "none",
    },
  };

  const handleSubmit = (e) => {
    setInput("");
    e.preventDefault();
  };
  return (
    <div className={style.navbar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className={`bi bi-list-ul ${style.navbar}`}
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
        <Link style={styles.text} to="/">
          Home
        </Link>
        <Link style={styles.text} to="/user">
          User
        </Link>
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
