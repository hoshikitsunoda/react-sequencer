import React, { Component } from 'react'
import SequenceIndicator from './SequenceIndicator'

var steps

class PlayStop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: 'stop',
      id: 'null',
      started: false
    }
    this.togglePlay = this.togglePlay.bind(this)
    this.start = this.start.bind(this)
  }

  togglePlay() {
    const currentState = this.state.class
    this.setState({ class: !currentState })
  }

  start() {
    if(this.state.started === false) {
      steps = setInterval(() => this.stepper(), 500)
      this.setState({ id: 'null', started: true })
    }
    else {
      clearInterval(steps)
      this.setState({ id: 'null', started: false })
    }
  }

  stepper() {
    const litUp = (this.state.id === 'lit') ? 'null' : 'lit'
    this.setState({ id: litUp })
  }

  render() {
    console.log(this.state.started);
    return (
      <div>
        <SequenceIndicator
          started={this.state.id}
        />
        <button onClick={this.start} id="playbutton">
          <i className={this.state.class ? 'fa fa-play' : 'fa fa-stop'}></i>
        </button>
      </div>
    )
  }
}

export default PlayStop
