const fetchMessages = (dispatch) => {
  return dispatch({type: 'LOADING_MESSAGES'});
  return fetch('messages')
}
Need to search through a specific chat conversation
currently, we have 'author' and 'message' APIs

function fetchCats() {
  return (dispatch) => {
    dispatch({type: 'LOADING_CATS'});
    return fetch('http://localhost:4000/db')
      .then(response => { return response.json()})
      .then(cats => dispatch({ type:'FETCH_CATS', payload: cats.images
    })
  )}
}

export {fetchCats}
