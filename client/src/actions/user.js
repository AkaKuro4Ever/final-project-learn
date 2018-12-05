// function currentUser() {
//   return (dispatch) => {
//     dispatch({type: 'FIND_CURRENT_USER'});
//     return fetch('/currentuser')
//     .then(response => {return response.json()})
//     .then(user => dispatch({type: "FETCH_USER", user: user})
//   )}
// }

function findUser(user) {
  return (dispatch) => {
    dispatch({type: 'FIND_CURRENT_USER'});
    return fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }, body: JSON.stringify(user)
    })
    .then(response => {return response.json()})
    .then(user => dispatch({type: "FETCH_USER", user: user})
  )}
}

export {findUser}
