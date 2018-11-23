function currentUser() {
  return (dispatch) => {
    dispatch({type: 'FIND_CURRENT_USER'});
    debugger
    return fetch('/currentuser')
    .then(response => {return response.json()})
    .then(user => dispatch({type: "FETCH_USER", user: {username: user.username, id: user.id}})
  )}
}

export {currentUser}
// export default function addUser() {
// }
//
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
