function Message({message}) {
  return (
    <div className="message-container">
      <i className="author">
        <span>{message.author}</span>
        <small>{message.created_at}</small>
      </i>
      <p>{message.content}</p>
    </div>
  )
}

export default Message
