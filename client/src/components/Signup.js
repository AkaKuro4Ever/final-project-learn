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
      document.getElementById("response").innerHTML = "Signed in!"
    }

  handleKeyPress = (event) => {
    if (event.key == 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  render() {
    return (
      <div>
        <div className="signup-form-body">
          <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
            <input id="username" name="username" placeholder="username" value={this.state.user.username} onChange={this.onHandleChange} />
            <button>Submit</button>
          </form>
        </div>
        <div id="response">
        </div>
      </div>
    )
  }
}
export default Signup
