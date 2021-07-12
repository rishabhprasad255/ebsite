import React, { useEffect } from "react";
import style from "../css/sidebar.module.css";
import { useAppContext } from "./UsingContext";

function Sidebar() {
  const { isSidebarOpen } = useAppContext();

  useEffect(() => {
    isSidebarOpen
      ? (document.getElementById("sidebar").style.transform = " translateX(0%)")
      : (document.getElementById("sidebar").style.transform =
          " translateX(-150%)");
  }, [isSidebarOpen]);

  const setTransparent = () => {
    const lists = [
      document.getElementById("list1"),
      document.getElementById("list2"),
      document.getElementById("list3"),
      document.getElementById("list4"),
    ];
    lists.forEach((list) => {
      list.style.background = "transparent";
      list.style.color = "white";
    });
  };

  const { hideSideBar, listItems } = useAppContext();

  const highlight = (e) => {
    setTransparent();
    // hideSideBar();
    document.getElementById(e.target.id).style.background = "white";
    document.getElementById(e.target.id).style.color = "black";
  };

  return (
    <div id="sidebar" className={style.sidebar}>
      <ul>
        {listItems.map(({ id, name, onclick, i }) => (
          <li key={id} id={`list${id}`} onClick={highlight}>
            <i class={`fas fa-${i}`}></i>
            {name}
          </li>
        ))}
      </ul>
      <div className={style.shrinker} onClick={hideSideBar}>
        {"<"}
      </div>
    </div>
  );
}

export default Sidebar;