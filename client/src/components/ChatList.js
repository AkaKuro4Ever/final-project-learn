import React from 'react';
import message from './Message'
import Chat from './Chat'

const ChatList = props => {
  let allChats = () => {
    props.chats.map(chat =>
      <Chat key={chat.id} users={chat.users}/>
    )
  }

  return (
    <div className="container">
    <div className="chat">

      {allChats()}
    </div>
  </div>
  )
};

export default ChatList;
