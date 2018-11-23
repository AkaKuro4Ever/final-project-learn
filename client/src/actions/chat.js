function allChats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CHATS'});
    return fetch('/chats')
    .then(response => {return response.json()})
    .then(chats => dispatch({type: "ALL_CHATS", chats: chats})
  )}
}

export {allChats}
