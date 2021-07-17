import React from "react";
import style from "../css/Modal.module.css";
import { useAppContext } from "../context/UsingContext";
import Accor from "./Accor";
import ChatBot from "./ChatBot";
const Modal = ({ whichComponent }) => {
  const { hideModal } = useAppContext();
  let content = null;
  switch (whichComponent) {
    case 1:
      content = <Accor />;
      break;
    case 2:
      content = <ChatBot />;
      break;

    default:
      content = "Ph: 100";
  }

  return (
    <div className={style.modal}>
      <div
        className={style.container}
        style={whichComponent === 2 ? { height: "70vh" } : null}
      >
        <span className={style.cross} onClick={hideModal}>
          X
        </span>
        <span className={style.content}>{content}</span>
      </div>
    </div>
  );
};

export default Modal;
