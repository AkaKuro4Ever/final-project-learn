import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageList from './components/MessageList'
import MessageInput from './containers/MessageInput'
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ChatList from './components/ChatList'
import {currentUser} from './actions/user'

class App extends Component {
//TASK ONE: How do you assign the correct/current user to a message when it's being created?
  componentDidMount() {
    // fetch('/users/1')
    // .then(response => {return response.json()})
    // .then(answer => console.log(answer))
    const user = this.props.currentUser();
    console.log(user)
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

const mapStateToProps = () => {
  return {

    user: currentUser
  }
}
export default connect(mapStateToProps, {currentUser})(App);

/*<ChatList chats={this.state.chats} />
<MessageList messages={this.props.messages}/>
<MessageInput user={this.props.user}/>
messages: this.state.messages,
chats: this.state.chats,
*/
