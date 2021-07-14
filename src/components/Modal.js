import React from "react";
import style from "../css/Modal.module.css";
import { useAppContext } from "../context/UsingContext";
import Accor from "./Accor";

const Modal = ({ whichComponent }) => {
  const { hideModal } = useAppContext();
  let content = null;
  switch (whichComponent) {
    case 1:
      // content=(
      //   //
      // )
      // content = <Accor />;

      break;
    case 2:
      content = "Ph: 738416816";

      break;
    case 3:
      // content=(

      // )
      content = "Ph: bro";
      break;
  }

  return (
    <div className={style.modal}>
      <div className={style.container}>
        <span className={style.cross} onClick={hideModal}>
          X
        </span>
        <span className={style.content}>{<Accor />}</span>
      </div>
    </div>
  );
};

export default Modal;
