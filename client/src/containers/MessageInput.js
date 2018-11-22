import React, {Component} from 'react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {fetchMessages} from '../actions/messages';

  state = {
    content: '',
    user: '',
    id: null
  }

  onHandleChange = event => {
    let field = event.target.id;
    let state = this.state;
    state[field] = event.target.value;
    this.setState(state);
  }

  onHandleSubmit = event => {
    event.preventDefault();
    this.state
  }

class MessageInput extends Component {
  render() {
    return(
      <input id="content" name="content" value={this.state.content}></input>
    )
  }
}

export default connect(mapStateToProps, {fetchMessages})(MessageInput)
