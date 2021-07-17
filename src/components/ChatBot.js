import React, { useState, useEffect } from "react";
import style from "../css/ChatBot.module.css";

let chats = [];
function ChatBot() {
  const [msg, setMsg] = useState([]);
  const [userMsg, setUserMsg] = useState("");
  const [prevMsg, setPrevMsg] = useState("");
  const [botMsg, setBotMsg] = useState("");
  const [isMsgVisible, setIsMsgVisible] = useState(false);

  const order =
    `Q1: How to see my order?` +
    "A1: Go to orders from the menu to see orders." +
    "Q2: Why is my order not coming?" +
    "A2: To track your order go to orders page.";

  const returns =
    `Q1: How to return my order?` +
    "A1: Go to orders and select the order to return." +
    "Q2: Why is my refund not initiated?" +
    "A2: Will be refunded as soon as product is received by the seller.";

  const replacements =
    `Q1: how to replace my order?` +
    "A1: Go to orders and select the order to replace." +
    "Q2: Why can't I replace my order?" +
    "A2: Your order migth not be eligible for replacement.";

  const messages = {
    order: order,
    return: returns,
    replacement: replacements,
    default: "Did not get your question? Contact: 100 for further details",
  };

  useEffect(() => {
    chats = [];
    setTimeout(() => {
      chats = [
        ...chats,
        { msg: "Hi there!", tag: "bot" },
        { msg: "how may I help you?", tag: "bot" },
      ];
      setMsg(chats);
    }, 1000);
    setTimeout(() => {
      setIsMsgVisible(true);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userMsg) {
      chats = [...chats, { msg: userMsg, tag: "user" }];
      setMsg(chats);
      setIsMsgVisible(false);
    }

    setTimeout(() => {
      if (botMsg) {
        chats = [...chats, { msg: botMsg, tag: "bot" }];
        setMsg(chats);
      }
    }, 1000);

    setTimeout(() => {
      setIsMsgVisible(true);
    }, 2000);

    setUserMsg("");
    setBotMsg("");
  };

  useEffect(() => {
    const scroll = () => {
      var elem = document.getElementById("data");
      if (elem.scrollHeight > elem.offsetHeight) {
        elem.scrollTop = elem.scrollHeight;
      }
    };
    scroll();
    // eslint-disable-next-line
  }, [isMsgVisible, chats]);

  useEffect(() => {
    let ans = null;

    const message = prevMsg.split(" ");
    if (message.includes("return") || message.includes("returns")) {
      ans = messages.returns;
    } else if (
      message.includes("replacement") ||
      message.includes("replacement")
    ) {
      ans = messages.replacement;
    } else if (message.includes("orders") || message.includes("order")) {
      ans = messages.order;
    } else {
      ans = messages.default;
    }

    setBotMsg(ans);
    // eslint-disable-next-line
  }, [userMsg]);

  return (
    <div className={style.chatbot}>
      <section className={style.chatbot_messasges} id="data">
        {msg.map((message, index) =>
          message.tag === "user" ? (
            <div key={index} className={style.chatbot_user_msg}>
              <small className={style.chatbot_username}>User</small>
              {message.msg}
            </div>
          ) : (
            <div key={index} className={style.chatbot_bot_msg}>
              <small className={style.chatbot_botname}>Bot</small>

              {!isMsgVisible && index === msg.length - 1 ? (
                <div className={style.chatbot_ticontainer}>
                  <div className={style.chatbot_tiblock}>
                    <div className={style.chatbot_tidot} />
                    <div className={style.chatbot_tidot} />
                    <div className={style.chatbot_tidot} />
                  </div>
                </div>
              ) : (
                message.msg
              )}
            </div>
          )
        )}
      </section>
      <form onSubmit={handleSubmit} className={style.chatbot_input}>
        <input
          autoFocus
          type="text"
          className={style.chatbot_msg}
          placeholder="Type message ..."
          value={userMsg}
          onChange={(e) => {
            setUserMsg(e.target.value);
            setPrevMsg(e.target.value);
          }}
          onSubmit={handleSubmit}
        />
        <button
          type="submit"
          className={style.chatbot_send}
          onClick={handleSubmit}
          disabled={userMsg ? false : true}
        >
          send
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
