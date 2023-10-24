const selectedChannelReducer = (state = null, action) => {
  if (state === undefined) {
    return 'general'
  }

  switch (action.type) {
    default:
      return state;
  }
}
export default selectedChannelReducer
