import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import ChatList from './components/ChatList'
import {currentUser} from './actions/user'
import {allChats} from './actions/chat'
import MessageInput from './containers/MessageInput'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import Chat from './components/Chat'

class App extends Component {
//TASK ONE: How do you assign the correct/current user to a message when it's being created?
  componentDidMount() {
    const user = this.props.currentUser();
    const chats = this.props.allChats();
    //Still need to get sessions in place here
  }

  render() {
    return (
      <div className="App">
        <Navbar chats={this.props.chats}/>
        <Router>
          <Switch>
            <Route path='/chats/:id' component={Chat}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    messages: state.messages,
    chats: state.chats.chats
  }
}

export default connect(mapStateToProps, {currentUser, allChats})(App);

/*/>

*/
