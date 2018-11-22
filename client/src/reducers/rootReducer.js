import {combineReducers} from "redux";
import cuid from 'cuid';

const rootReducer = combineReducers({
  authors: authorsReducer,
  messages: messagesReducer
});

//Through combineReducer, we're telling Redux to produce a reducer which will return a state that has both a key of books with a value equal to the return value of the booksReducer() and a key of authors with a value equal to the return value of the authorsReducer()

export default rootReducer;


function messagesReducer(state = [], action) {
  switch action.type {
    case 
  }
}
