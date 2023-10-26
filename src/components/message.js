import { emojify } from "react-emojione";

const stringToColour = (str) => {
  let hash = 0;
  str.split('').forEach(char => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash)
  })
  let colour = '#'
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff
    colour += value.toString(16).padStart(2, '0')
  }
  return colour
}

function Message({message}) {
  const time = new Date(message.created_at).toLocaleTimeString();

  return (
    <div className="message-container">
      <i className="author">
        <span style={{color: stringToColour(message.author)}}>{message.author}</span>
        <small>{time}</small>
      </i>
      <p>{emojify(message.content)}</p>
    </div>
  )
}

export default Message
