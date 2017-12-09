import React, { Component } from 'react'
import SequenceIndicator from './SequenceIndicator'

const stable = require('stable-timer')
let steps
let location

var sound1 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/C.mp3')
var sound2 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/D.mp3')
var sound3 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/E.mp3')
var sound4 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/F.mp3')
var sound5 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/G.mp3')
var sound6 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/A.mp3')
var sound7 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/B.mp3')
var sound8 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/KD.mp3')
var sound9 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/SD.mp3')
var sound10 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/HH.mp3')
var sound11 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/CL.mp3')
var sound12 = new Audio('/Users/hoshikitsunoda/react-drum-machine/server/public/sounds/synth/SH.mp3')

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
