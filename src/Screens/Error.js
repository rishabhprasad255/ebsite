import React from "react";
import { Link } from "react-router-dom";
import style from "../css/error.module.css";
function Error() {
  return (
    <div className={style.error}>
      <div className={style.container}>
        <section>
          <p>
            <i className="fas fa-exclamation-triangle" />
            404 - Page Not Found
          </p>
          <Link to="/" className={style.route}>
            click here to go back to home
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Error;
