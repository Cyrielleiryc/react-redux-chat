import { FETCH_MESSAGES, CREATE_MESSAGE } from '../actions';

const messagesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case CREATE_MESSAGE: {
      const copiedState = state.slice(0)
      copiedState.push(action.payload)
      return copiedState
    }
    default:
      return state;
  }
}
export default messagesReducer
