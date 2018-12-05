import React from 'react'
import Button from './Button'

const Message = ({id, content, author}) => {
  return(
    <div>
        <i className="message-author">{author.username}:</i> <span className="message-content">{content}</span>
        <Button />
    </div>
  )
}

export default Message
