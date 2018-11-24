import React from 'react'
import { BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';
// import {fetchChat} from '../actions/chat'
// import {connect} from 'react-redux';

const Navbar = props => {
  let allChats = () => {
    return props.chats.map(chat =>
      <div><Link key={chat.id} to={`/chats/${chat.id}`} className="chat-members">{chat.users[0].username} & {chat.users[1].username}</Link></div>
    )
  }

  return (
    <div>
    <Router>
      <React.Fragment>
        
      </React.Fragment>
    </Router>
    </div>
  )
}

export default Navbar
