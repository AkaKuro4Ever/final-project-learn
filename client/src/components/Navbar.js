import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Navbar = props => {
  let allChats = () => {
    return props.chats.map(chat =>
    <Router>
      <NavLink key={chat.id} to={`/chats/${chat.id}`} className="chat-members">{chat.users[0].username} & {chat.users[1].username}</NavLink>
    </Router>
    )
  }

  return (
    <div>
    {allChats()}
    </div>
  )
}

export default Navbar
