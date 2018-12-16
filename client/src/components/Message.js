import React from 'react'

const Message = ({id, content, author}) => {
  return(
    <div>
        <i className="message-author">{author.username}:</i> <span className="message-content">{content}</span>
    </div>
  )
}

/*
  <Button />
*/
export default Message
