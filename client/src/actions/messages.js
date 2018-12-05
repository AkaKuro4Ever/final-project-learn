// const fetchMessages = (dispatch) => {
//   return dispatch({type: 'LOADING_MESSAGES'});
//   return fetch('messages')
// }
// Need to search through a specific chat conversation
// currently, we have 'author' and 'message' APIs
//
// function fetchCats() {
//   return (dispatch) => {
//     dispatch({type: 'LOADING_CATS'});
//     return fetch('http://localhost:4000/db')
//       .then(response => { return response.json()})
//       .then(cats => dispatch({ type:'FETCH_CATS', payload: cats.images
//     })
//   )}
// }
//
// export {fetchCats}

function createMessage(message) {
  return (dispatch) => {
    dispatch({type: 'ADDING_MESSAGE'});
    return fetch('/messages', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify(message)
    })
    .then(response =>  response.json())
    .then(message => dispatch({type: "ADD_MESSAGE", message: message})
  )}
}

export default createMessage
//
// export const addMessage = message => {
//   return {
//     type: 'ADD_MESSAGE', message
//   }
