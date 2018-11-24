import React from 'react'
import MessageList from './MessageList'
import MessageInput from './containers/MessageInput'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Chat = ({users}) => {
  return (
    <Router>
      <Route exact path={`/messages/:id`} render={props => <MessageList {...props} messages={props.messages} />}/>
      <Route exact path='/messages/:id' render={props => <MessageInput {...props} user={props.user} />}/>
      <MessageInput user={this.props.user}/>
    </Router>
    <div>
        <p className="chat-members">{users[0].username} & {users[1].username}</p>
    </div>
  )
}

export default Chat
//When clicked, it should open the chat window on the right - Use React Router!
<Route
path='/dashboard'
render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
