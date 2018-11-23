import React from 'react'

const Chat = ({users}) => {
  return (
    <div>
        <p className="chat-members">{users[0].username} & {users[1].username}</p>
    </div>
  )
}

export default Chat
//When clicked, it should open the chat window on the right - Use React Router!
