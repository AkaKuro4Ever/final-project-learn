import React from 'react';
import message from './Message'
import Chat from './Chat'
import MessageList from './MessageList'
import MessageInput from './containers/MessageInput'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const ChatList = props => {
  let allChats = () => {
    props.chats.map(chat =>

      <Router>
        <Route exact path={`/messages/:id`} render={props => <MessageList {...props} messages={props.messages} />}/>
        <Route exact path='/messages/:id' render={props => <MessageInput {...props} user={props.user} />}/>
        <MessageInput user={this.props.user}/>
      </Router>
      <Chat key={chat.id} users={chat.users}/>
    )
  }

  <Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>

  return (
    <div className="container">
    <div className="chat">

      {allChats()}
    </div>
  </div>
  )
};

export default ChatList;
