export default function currentUser() {
  return (dispatch) => {dispatch({type: 'FIND_CURRENT_USER'});
    return fetch('/currentuser')
    .then(response => {response.json()})
    .then(user => dispatch({type: "FETCH_USER", user: {username: user.username, id: user.id})
  )}
}

// export default function addUser() {
// }
