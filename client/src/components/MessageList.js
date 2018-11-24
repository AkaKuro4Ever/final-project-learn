import React, {Component} from 'react';
import Message from './Message'

class MessageList extends Component {

  render() {
    let allMessages = () => {
      return this.props.messages.map(message =>
        <Message key={message.id} content={message.content} author={message.user}/>
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
}

export default MessageList;
