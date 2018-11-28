import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import ChatList from './components/ChatList'
import {currentUser} from './actions/user'
import {fetchChat} from './actions/chat'
import MessageInput from './containers/MessageInput'
import MessageList from './components/MessageList'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
//This version is working, but has a lot of unecessary components that are in different/wrong places
class App extends Component {
  componentDidMount() {
    this.props.fetchChat();
    // this.props.currentUser();
    //Still need to get sessions in place here
  }

  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </React.Fragment>
      </Router>
        <MessageList messages={this.props.chat.messages} newMessages={this.props.messages}/>
        <MessageInput user={this.props.user}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    messages: state.messages,
    chat: state.chats.chat
  }
}

export default connect(mapStateToProps, {currentUser, fetchChat})(App);

/*/>

<Route exact path="/logout" component={Logout}/>
*/
