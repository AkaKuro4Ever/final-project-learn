import React, {Component} from 'react';
import {connect} from 'react-redux';
import cuid from 'cuid';
import {addMessage} from '../actions/messages';

class MessageInput extends Component {
  state = {
    content: '',
    user: null,
  }

  onHandleChange = event => {
    let field = event.target.id;
    let state = this.state;
    console.log(this.props, this.state)
    state[field] = event.target.value;
    this.setState(state);
  };

  onHandleSubmit = event => {
    event.preventDefault();
    this.state.user = this.props.user
    console.log(this.state)
    let message = {...this.state, id: cuid()}
    this.props.addMessage(message)
    this.setState({
      content: '',
      user: this.props.user
    })
  };

  render() {
    return(
      <div className="message-form-body">
        <form onSubmit={this.onHandleSubmit}>
          <textarea id="content" name="content" value={this.state.content} onChange={this.onHandleChange}></textarea>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addMessage: message => dispatch({ type: "ADD_MESSAGE", message})
// })

export default connect(null, {addMessage})(MessageInput)
