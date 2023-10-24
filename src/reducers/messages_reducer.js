const messagesReducer = (state = null, action) => {
  if (state === undefined) {
    return []
  }

  switch (action.type) {
    default:
      return state;
  }
}
export default messagesReducer
