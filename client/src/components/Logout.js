import React from 'react'

const Logout = () => {
  let handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      this.onHandleSubmit(event)
    }
  }

  return (
    <div>
      <div className="logout-form-body">
        <form onSubmit={this.onHandleSubmit} onKeyPress={this.handleKeyPress}>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Logout
