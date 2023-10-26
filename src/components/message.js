function Message({message}) {
  const time = new Date(message.created_at).toLocaleTimeString();

  return (
    <div className="message-container">
      <i className="author">
        <span>{message.author}</span>
        <small>{time}</small>
      </i>
      <p>{message.content}</p>
    </div>
  )
}

export default Message
