import React, { useState, useEffect } from "react";
import style from "../css/login_register.module.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const cleanInputs = () => {
    setUsername("");
    setPassword("");
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //to check whether a user is logged in or not
      if (authUser) {
        // goto home page
        history.replace("/home");
      }
    });
    return unsubscribe;
  }, []);

  const loginForm = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(username, password)
      .catch((err) => alert(err.message));
    cleanInputs();
  };

  return (
    <div className={style.main}>
      <form
        className={style.container}
        style={{ height: "70vh" }}
        onSubmit={loginForm}
      >
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="email"
            placeholder="Email"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="username">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            name="confirm_password"
            type="password"
            placeholder="Confirm password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit">Sign Up</button>

        <span>
          Already registered?{" "}
          <Link
            to="/login"
            style={{ textDecoration: "none" }}
            className={style.link}
          >
            Sign In
          </Link>
        </span>
      </form>
    </div>
  );
}

export default Register;
