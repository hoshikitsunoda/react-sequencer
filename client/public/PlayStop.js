import React, { Component } from 'react'

class PlayStop extends Component {
  constructor(props) {
    super(props)
    this.state = { class: 'stop' }
    this.togglePlay = this.togglePlay.bind(this)
  }

  togglePlay() {
    const currentState = this.state.class
    this.setState({ class: !currentState })
  }

  render() {
    return (
      <div>
        <button onClick={this.togglePlay} id="playbutton">
          <i className={this.state.class ? 'fa fa-play-circle' : 'fa fa-stop-circle'}></i>
        </button>
      </div>
    )
  }
}

export default PlayStop
