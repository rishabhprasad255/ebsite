import React, { useState, useEffect } from "react";
import style from "../css/login_register.module.css";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../firebase/firebase";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  const cleanInputs = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setName("");
  };

  const register = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(username, password)
        .then((authUser) => {
          authUser.user
            .updateProfile({
              displayName: name,
            })
            .then(() => {
              alert("User id registered.");
              history.replace("/home");
            });
        })
        .catch((err) => alert(err.message));

      cleanInputs();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className={style.main}>
      <form
        className={style.container}
        style={{ height: "80vh" }}
        onSubmit={register}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
