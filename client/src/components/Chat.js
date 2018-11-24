import React, {Component} from 'react';
import Message from './Message'
import {connect} from 'react-redux';
import {fetchChat} from '../actions/chat'

class Chat extends Component {
  componentDidMount() {
    this.props.fetchChat(this.props.match.params.id);
  }

  render() {

    return (
      <div className="container">
        <div className="message-list">
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    chat: state.chat
  }
}

export default connect(mapStateToProps, {fetchChat})(Chat);
/*{allMessages()}
let allMessages = () => {
  return this.props.chat.messages.map(message =>
    <Message key={message.id} content={message.content} author={message.user} date={message.created_at}/>
  )
}*/
