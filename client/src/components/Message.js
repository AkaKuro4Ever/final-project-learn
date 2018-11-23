import React from 'react'

const Message = ({date, content, author}) => {
  return(
    <div>
        <p className="message-author">{author}</p>: <span className="message-content">{content}</span>
        <i className="message-date">{date}</i>
    </div>
  )
}

export default Message
