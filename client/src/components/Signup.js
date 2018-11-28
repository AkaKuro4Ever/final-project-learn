import React, {Component} from 'react';
class Signup extends Component {
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
      fetch('/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }, body: JSON.stringify(user)
      })
    this.setState({
      user: {
        username: '',
        chat_id: 1
      }
    })
      document.getElementById("sign-up-response").innerHTML = `Signed up, ${user.user.username}!`
    }

  handleKeyPress = (event) => {
    if (event.key === 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <div className="signup-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
            <input id="username" name="username" placeholder="Username" value={this.state.user.username} onChange={this.onHandleChange} />
            <button>Submit</button>
          </form>
        </div>
        <div id="sign-up-response">
        </div>
      </div>
    )
  }
}
export default Signup
