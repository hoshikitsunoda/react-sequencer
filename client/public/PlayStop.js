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
        <button
          id="playbutton"
          className={this.state.class ? 'play' : 'stop'}
          onClick={this.togglePlay}>
        </button>
      </div>
    )
  }
}

export default PlayStop
