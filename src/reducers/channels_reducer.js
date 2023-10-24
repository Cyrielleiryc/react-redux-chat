const channelsReducer = (state = null, action) => {
  if (state === undefined) {
    return [ 'general', 'react', 'paris' ]
  }

  switch (action.type) {
    default:
      return state;
  }
}
export default channelsReducer
