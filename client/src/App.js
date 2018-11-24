import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
import ChatList from './components/ChatList'
import {currentUser} from './actions/user'
import {allChats} from './actions/chat'
import MessageInput from './containers/MessageInput'
// import Navbar from './components/Navbar'
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
    const About = () => <h1>This is my about component!</h1>;

    const Navbar = props => {
      let allChats = () => {
        return props.chats.map(({id, users}) =>
          <div key={id}><NavLink to={`/chat/${id}`} className="chat-members">{users[0].username} & {users[1].username}</NavLink></div>
        )
      }
      return (
        <div>
            {allChats()}
          </div>
      )
    }

    return (
      <div className="App">
      <Router>
        <React.Fragment>
          <Navbar chats={this.props.chats}/>
            <Switch>
              <Route exact path="/chat/1" component={Chat} />
            </Switch>
            <Route exact path="/chat/1" render={props => <MessageInput user={props.user}/>}/>
        </React.Fragment>
      </Router>
"Hi!"

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
