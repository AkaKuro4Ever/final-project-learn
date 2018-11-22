import React from 'react'

const Chat = {users} => {
  return (
    <div>
        <p className="chat-members">{users[0]} & {users[1]}</p>
    </div>
  )
}

export default Message
//When clicked, it should open the chat window on the right - Use React Router!
