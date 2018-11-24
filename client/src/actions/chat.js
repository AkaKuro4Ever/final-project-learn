function fetchChat() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CHAT'});
    return fetch('/chats/1')
    .then(response => {return response.json()})
    .then(chat => dispatch({type: "FETCH_CHAT", chat: chat})
  )}
}

export {fetchChat}
