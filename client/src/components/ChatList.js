import React from 'react';
import message from './Message'
import Chat from './Chat'

const ChatList = props => {
  let allChats = () => {
    return props.chats.map(chat =>
      <Chat key={chat.id} users={chat.users} id={chat.id}/>
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
