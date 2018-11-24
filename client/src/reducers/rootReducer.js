import {combineReducers} from "redux";
import cuid from 'cuid';

const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  chats: chatsReducer
});

//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()

export default rootReducer;


function messagesReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, action.message]
    default:
      return state
  }
}

function usersReducer(state = {loading: false, user: null}, action) {
  switch (action.type) {
    case 'FIND_CURRENT_USER':
      return {loading: true, user: null}
    case 'FETCH_USER':
      return {loading: false, user: action.user}
    default:
      return state
  }
}

function chatsReducer(state = {loading: false, chat: {messages: []}}, action) {
  switch (action.type) {
    case 'LOADING_CHAT':
      return {loading: true, chat: {messages: []}}
    case 'FETCH_CHAT':
      return {loading: false, chat: action.chat}
    default:
      return state
  }
}
