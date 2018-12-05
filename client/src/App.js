import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchChat} from './actions/chat'
import MessageInput from './containers/MessageInput'
import MessageList from './components/MessageList'
import Signup from './containers/Signup'
import Login from './containers/Login'
import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.fetchChat();
  }

  render() {
    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Welcome} />
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

export default connect(mapStateToProps, {fetchChat})(App);
