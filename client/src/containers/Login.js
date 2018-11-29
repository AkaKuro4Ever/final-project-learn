import React, {Component} from 'react'
import {findUser} from '../actions/user'
import {connect} from 'react-redux';
import '../Styling.css'

class Login extends Component {

  state = {
    user: {
      username: '',
      chat_id: 1
    }
  }

  onHandleChange = event => {
    let field = event.target.id;
    let state = this.state;
    state['user'][field] = event.target.value;
    console.log(state)
    this.setState(state);
  };

  onHandleSubmit = event => {
    event.preventDefault();
    let user = this.state
    this.props.findUser(user)
    this.setState({
      user: {
        username: '',
        chat_id: 1
      }
    })
    document.getElementById("login-response").innerHTML =
    `You're logged in, ${user.user.username}!`
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
      <h1>Login</h1>
        <div className="login-form-body">
        <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
          <input id="username" name="username" placeholder="Username" value={this.state.user.username} onChange={this.onHandleChange} />
          <button>Submit</button>
        </form>
        </div>
        <div id="login-response">
        </div>
      </div>
    )
  }
}

export default connect(null, {findUser})(Login)
