import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './containers/MessageList'
import MessageInput from './containers/MessageInput'
import {connect} from 'react-redux'

class App extends Component {
//TASK ONE: How do you assign the correct/current user to a message when it's being created?
  componentDidMount() {
    const currentUser = fetchUser
  }

  render() {
    return (
      <div className="App">
        <ChatList chats={this.state.chats} />
        <MessageList messages={this.props.messages} />
        <MessageInput />
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {
    messages: this.state.messages,
    chats: this.state.chats,
    authors: this.state.authors
  }
}
export default App;
