import React from 'react'
import MessageList from './MessageList'
import MessageInput from '../containers/MessageInput'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Chat = ({id, users}) => {
  return (
    <div>
    <Router>
        <NavLink to={`/chat/${id}`} className="chat-members">{users[0].username} & {users[1].username}</NavLink>

    </Router>
    </div>
  )
}


// function Topics () {
//   return (
//     <div>
//       <h1>Topics</h1>
//       <ul>
//         {topics.map(({ name, id }) => (
//           <li key={id}>
//             <Link to={`/topics/${id}`}>{name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
export default Chat
//When clicked, it should open the chat window on the right - Use React Router!
// <Route
// path='/dashboard'
// render={(props) => <Dashboard {...props} isAuthed={true} />}
// />
/*
<Router>
<Route exact path={`/chat/:id`} render={props => <MessageList {...props} messages={props.messages} />}/>
<Route exact path='/chat/:id' render={props => <MessageInput {...props} user={props.user} />}/>
</Router>
*/
/////////////////////////////////////////////////////////////////////



/*
class Chat extends Component {
  componentDidMount() {
    this.props.fetchChat(this.props.match.params.id);


  render() {

    return (
      <div className="container">
        <div className="message-list">
        "Hello"
        </div>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return {
    chat: state.chat
  }
}

export default connect(null, {fetchChat})(Chat);
{allMessages()}
let allMessages = () => {
  return this.props.chat.messages.map(message =>
    <Message key={message.id} content={message.content} author={message.user} date={message.created_at}/>
  )
}
*/
