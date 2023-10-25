const BASE_URL = 'https://wagon-chat.herokuapp.com';

// ACTION TYPES
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function fetchMessages(channel) {
  const url = `${BASE_URL}/${channel}/messages`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise // Will be resolved by redux-promise
  };
}

export function  createMessage(channel, author, content) {
  const body = { author: author, content: content }
  const url = `${BASE_URL}/${channel}/messages`
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json())

  return {
    type: CREATE_MESSAGE,
    payload: promise
  }
}
