import React, {Component} from 'react';
import Message from './Message'

class MessageList extends Component {

  render() {
    let dbMessages = () => {
      return this.props.messages.map(message =>
        <Message key={message.id} content={message.content} author={message.user}/>
      )
    }

    let newMessages = () => {
      return this.props.newMessages.map(message =>
        <Message key={message.id} content={message.content} author={message.user}/>
      )
    }

    return (
      <div className="container">
        <div className="message">
          {dbMessages()}
          {newMessages()}
        </div>
      </div>
    )
  };
}

export default MessageList;
