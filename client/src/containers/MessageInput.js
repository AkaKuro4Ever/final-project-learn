import React, {Component} from 'react';
import {connect} from 'react-redux';
import createMessage from '../actions/messages';
import {fetchChat} from '../actions/chat'
import '../Styling.css'

class MessageInput extends Component {
  state = {
    message: {
      content: '',
      user_id: null,
      chat_id: 1,
      user: null,
    }
  }

  onHandleChange = event => {
    let field = event.target.id;
    let state = this.state;
    state['message'][field] = event.target.value;
    console.log(state)
    this.setState(state);
  };


  onHandleSubmit = event => {
    event.preventDefault();
    let message = {...this.state.message}
    message.user_id = this.props.user.id
    message.user = this.props.user
    this.props.createMessage(message)
    this.setState({
      message: {
        content: '',
        user_id: null,
        chat_id: 1,
        user: null,
      }
    })
  };



  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return(
      <div className="message-form-body">
        <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
          <input id="content" name="content" value={this.state.message.content} placeholder="Write a message..." onChange={this.onHandleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addMessage: message => dispatch({ type: "ADD_MESSAGE", message})
// })

export default connect(null, {fetchChat, createMessage})(MessageInput)

/*
onHandleSubmit = event => {
  event.preventDefault();
  this.state.user = this.props.user
  let message = {...this.state, id: cuid()}
  this.props.addMessage(message)
  this.setState({
    content: '',
    user: this.props.user
  })
};
*/


/*
this.props.addMessage(message)

  fetch('https://api.github.com/gists', {
    method: 'post',
    body: JSON.stringify(opts)
  }).then(function(response) {
    return response.json();
  }).then(function(data) {
    ChromeSamples.log('Created Gist:', data.html_url);
  });
  }

  handleSubmit = (event) => {
    const { history } = this.props
    fetch("http://localhost:3001/api/movies", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    }).then(res => history.push('/movies'))
*/
