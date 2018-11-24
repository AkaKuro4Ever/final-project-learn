import React, {Component} from 'react';
import Message from './Message'
import {connect} from 'react-redux';
import {fetchChat} from '../actions/chat'
import MessageList from './MessageList'

class Chat extends Component {

  render() {

    return (
      <div className="container">
        <div className="message-list">
        "Hello"

        </div>
      </div>
    )
  };
}


export default connect(null, {fetchChat})(Chat);

// class Chat extends Component {
//   componentDidMount() {
//     this.props.fetchChat(this.props.match.params.id);
// }
//
//   render() {
//
//     return (
//       <div className="container">
//         <div className="message-list">
//         "Hello"
//         <MessageList messages={this.props.chat.messages}/>
//         </div>
//       </div>
//     )
//   };
// }
//
// const mapStateToProps = state => {
//   return {
//     chat: state.chat
//   }
// }
//
// export default connect(mapStateToProps, {fetchChat})(Chat);
//
