function currentUser() {
  return (dispatch) => {
    dispatch({type: 'FIND_CURRENT_USER'});
    return fetch('/currentuser')
    .then(response => {return response.json()})
    .then(user => dispatch({type: "FETCH_USER", user: user})
  )}
}

// function findUser(user) {
//   return (dispatch) => {
//     dispatch({type: 'FIND_CURRENT_USER'});
//     return fetch('/login', {
//       method: 'get',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       }, body: JSON.stringify(user)
//     })
//     .then(response => {return response.json()})
//     .then(user => dispatch({type: "FETCH_USER", user: user})
//   }
// }

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
