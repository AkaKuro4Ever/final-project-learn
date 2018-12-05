import React, {Component} from 'react';
import Message from './Message'
import '../Styling.css'

class MessageList extends Component {

  render() {
    let dbMessages = () => {
      return this.props.messages.map(message =>
        <Message key={message.id} content={message.content} author={message.user} id={message.id}/>
      )
    }

    let newMessages = () => {
      return this.props.newMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.user} id={message.id}/>
      )
    }

    return (
      <div className="messages-container">
        <div className="message-container">
          {dbMessages()}
          {newMessages()}
        </div>
      </div>
    )
  };
}

export default MessageList;
