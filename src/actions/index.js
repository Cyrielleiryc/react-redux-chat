import messages from '../data/messages.js'

// ACTION TYPES
export const SET_MESSAGES = 'SET_MESSAGES'

export function setMessages() {
  return {
    type: SET_MESSAGES,
    payload: messages
  }
}
