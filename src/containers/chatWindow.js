import React from "react";
import store from "../store";
import Header from "../components/header";
import Chats from "../components/chats";
import _ from "lodash";
import './chatWindow.css'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];

  return (
      <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats messages={_.values(activeMsgs)}/>
      </div>
    );
};

export default ChatWindow;
