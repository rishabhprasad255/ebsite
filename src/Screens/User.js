import React from "react";
import style from "../css/User.module.css";
import profile_img from "../assets/person-circle.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase/firebase";

function User() {
  const profile = null;
  const user = {
    username: auth.currentUser?.displayName || "Username",
    email: auth.currentUser?.email || "user-email",
    address: "NA",
    dob: "NA",
  };

  return (
    <div className={style.user}>
      <div className={style.container}>
        <div className={style.left_container}>
          <img src={profile || profile_img} alt="user_profile" />
          <div>
            <Link
              style={{ textDecoration: "none", fontSize: "1.2rem" }}
              to="/support"
            >
              <p>Help?</p>
            </Link>
          </div>
        </div>
        <div className={style.right_container}>
          <span>{user.username}</span>

          <label htmlFor="address">Address </label>
          <p name="address">{user.address}</p>
          <label htmlFor="email">Email </label>
          <p name="email">{user.email}</p>
          <label htmlFor="dob">Date Of Birth </label>
          <p name="dob">{user.dob}</p>
        </div>
      </div>
    </div>
  );
}

export default User;
