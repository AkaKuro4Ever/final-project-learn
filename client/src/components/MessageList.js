import React from 'react';
import message from './Message'

const MessageList = props => {
  let allMessages = () => {
    return props.messages.map(message =>
      <Message key={message.id} content={message.content} author={message.user} date={message.created_at}/>
    )
  }
  return (
    <div className="container">
    <div className="message">
      {allMessages()}
    </div>
  </div>
  )
};

export default MessageList;
