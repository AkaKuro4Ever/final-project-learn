import React from 'react'

const Message = ({content, author}) => {
  return(
    <div>
        <i className="message-author">{author.username}</i>: <span className="message-content">{content}</span>
    </div>
  )
}

export default Message
