import React from "react";
import store from "../store";
import Header from "../components/header";
import Chats from "../components/chats";
import _ from "lodash";
import './chatWindow.css';
import MessageInput from '../containers/messageInput';


const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMsgs = state.messages[activeUserId];
  const { typing } = state;

  return (
      <div className="ChatWindow">
        <Header user={activeUser} />
        <Chats messages={_.values(activeMsgs)}/>
        <MessageInput value={typing} />
      </div>
    );
};

export default ChatWindow;
