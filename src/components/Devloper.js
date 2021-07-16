import React, { useEffect, useState } from "react";
import style from "../css/Devloper.module.css";
import { developerDataGautam, developerDataRishabh } from "../utils/data";
import avatarRishabh from "../assets/rishabh_prasad.jpeg";

export default function Developer() {
  useEffect(() => {
    const tags1 = [];
    const tags2 = [];
    const popups1 = [];
    const popups2 = [];
    developerDataGautam.forEach((e, index) => {
      tags1.push(document.getElementById(`tag${index}`));
      tags2.push(document.getElementById(`tag${index}`));
      popups1.push(document.getElementById(`pop${index}`));
      popups2.push(document.getElementById(`pop${index}`));
    });

    tags1.forEach((e, index) => {
      e.addEventListener(
        "mouseover",
        () => (popups1[index].style.display = "block")
      );
      e.addEventListener(
        "mouseleave",
        () => (popups1[index].style.display = "none")
      );
    });
    tags2.forEach((e, index) => {
      e.addEventListener(
        "mouseover",
        () => (popups2[index].style.display = "block")
      );
      e.addEventListener(
        "mouseleave",
        () => (popups2[index].style.display = "none")
      );
    });
  }, []);

  return (
    <>
      <div className={style.card}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGc7MwtoCV1Ww/profile-displayphoto-shrink_200_200/0/1615207417141?e=1631750400&v=beta&t=I1WeO1AvVDtdILmnZ9LODV0ZJuuTp9sUlO3MOeYf4xE"
          alt="developer_avatar"
          className={style.avatar}
        />
        <span style={{ marginTop: "10px" }}>Gautam Chandra Saha</span>

        <div className={style.container}>
          {developerDataGautam.map(({ id, src, link, name }, index) => (
            <div key={id}>
              <img
                id={`tag${index}`}
                src={src}
                className={style.tags}
                alt={name}
                onClick={() => window.open(link)}
              />

              <div className={style.popup_container}>
                <div id={`pop${index}`} className={style.popup}>
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.card}>
        <img
          src={avatarRishabh}
          alt="developer_avatar"
          className={style.avatar}
        />
        <span style={{ marginTop: "10px" }}>Rishabh Prasad</span>

        <div className={style.container}>
          {developerDataRishabh.map(({ id, src, link, name }, index) => (
            <div key={id}>
              <img
                id={`tag${index}`}
                src={src}
                className={style.tags}
                alt={name}
                onClick={() => window.open(link)}
              />

              <div className={style.popup_container}>
                <div id={`pop${index}`} className={style.popup}>
                  {name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
