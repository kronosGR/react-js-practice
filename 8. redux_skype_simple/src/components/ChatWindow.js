import React from "react";
import _ from "lodash";

import store from "../store";
import Header from "./Header";
import Chats from "./Chats";

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeMsgs = state.messages[activeUserId];
  const activeUser = state.contacts[activeUserId];
  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  );
};
export default ChatWindow;
