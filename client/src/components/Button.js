import React, {Component} from 'react'

export default class Button extends Component {

  state = {
    likes: 0
  }

  onHandleClick = () => {
    let likes = this.state.likes +1
    this.setState({
      likes: likes
    })
  }

  render() {
    return (
      <>
        <p>Like!</p>
        <button id="likes" onClick={this.onHandleClick}>{this.state.likes}</button>
      </>
    )
  }
}
