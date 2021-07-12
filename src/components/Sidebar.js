import React from "react";
import style from "../css/sidebar.module.css";
function Sidebar() {
 

  const setTransparent = () => {
    const lists = [
      document.getElementById("list1"),
      document.getElementById("list2"),
      document.getElementById("list3"),
      document.getElementById("list4"),
    ];
    lists.forEach((list) => {
      list.style.background = "transparent";
      list.style.color="white";
    });
  };
  const highlight = (e) => {
    setTransparent();
    document.getElementById(e.target.id).style.background = "rgb(221, 219, 219)";
    document.getElementById(e.target.id).style.color = "black";
  };

  return (
    <div className={style.sidebar}>
      <ul>
        <li id="list1" onClick={highlight}>Home</li>
        <li id="list2" onClick={highlight}>Orders</li>
        <li id="list3" onClick={highlight}>Cart</li>
        <li id="list4" onClick={highlight}>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
