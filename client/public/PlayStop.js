import React, { Component } from 'react'
import SequenceIndicator from './SequenceIndicator'

const stable = require('stable-timer')
let steps
let location

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
    this.stop = this.stop.bind(this)
  }

  start() {
    this.setState({ started: true })
    steps = stable.setInterval(() => this.stepper(), 250)

    const currentState = this.state.class
    this.setState({ class: !currentState })
  }

  stop() {
    const currentState = this.state.class
    this.setState({
      position: 0,
      class: !currentState,
      started: false
    })
    stable.clearInterval(steps)
  }

  stepper() {
    const currentPosition = this.state.position
    currentPosition <= 15
      ? this.setState({ status: true, position: currentPosition + 1 })
      : this.setState({ position: 1 })
    if(this.state.started === true) {
      const indicator = document.querySelectorAll('.sequence-indicator')
      for(let i = 0; i < indicator.length; i++) {
        if(currentPosition.toString() === indicator[i].id) {
          indicator[i].classList.add('lit')
          location = stable.setInterval(() => indicator[i].classList.remove('lit'), 260, false)
        }
      }
    }

    const rows = document.querySelectorAll('.plays')
  }

  render() {
    return (
      <div>
        <SequenceIndicator
          position={this.state.position}
          status={this.state.status}
          click={this.start}
        />
        <button onClick={this.state.started === false ? this.start : this.stop} id="playbutton">
          <i className={this.state.class ? 'fa fa-play' : 'fa fa-stop'}></i>
        </button>
      </div>
    )
  }
}

export default PlayStop
