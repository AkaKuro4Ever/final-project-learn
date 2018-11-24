function allChats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CHATS'});
    return fetch('/chats')
    .then(response => {return response.json()})
    .then(chats => dispatch({type: "ALL_CHATS", chats: chats})
  )}
}

function fetchChat(id) {
  return (dispatch) => {
    dispatch({type: 'LOADING'});
    return fetch(`/chats/${id}`)
    .then(response => {return response.json()})
    .then(chat => dispatch({type: "FETCH_CHAT", chat: chat})
  )}
}

export {allChats, fetchChat}
