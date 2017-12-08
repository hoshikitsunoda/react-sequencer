import React, { Component } from 'react'
import SequenceIndicator from './SequenceIndicator'

const stable = require('stable-timer')

let steps

class PlayStop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      class: 'stop',
      status: {},
      started: false,
      position: 0
    }
    this.start = this.start.bind(this)
  }

  start() {
    const currentState = this.state.class
    this.setState({ class: !currentState })

    if(this.state.started === false) {
      steps = setInterval(() => this.stepper(), 500)
      this.setState({ started: true })
    }
    else {
      clearInterval(steps)
      this.setState({ position: 1, started: false })
    }
  }

  stepper() {
    const currentPosition = this.state.position
    currentPosition !== 16
      ? this.setState({ status: this.state.status, position: currentPosition + 1 })
      : this.setState({ status: this.state.status, position: 1 })
    const indicator = document.querySelectorAll('.sequence-indicator')
    for(let i = 0; i < currentPosition; i++) {
      indicator[i].classList.add('lit')
      setInterval(() => indicator[i].classList.remove('lit'), 500, false)
    }
  }

  render() {
    return (
      <div>
        <SequenceIndicator
          position={this.state.position}
          status={this.state.status}
          click={this.start}
        />
        <button onClick={this.start} id="playbutton">
          <i className={this.state.class ? 'fa fa-play' : 'fa fa-stop'}></i>
        </button>
      </div>
    )
  }
}

export default PlayStop
