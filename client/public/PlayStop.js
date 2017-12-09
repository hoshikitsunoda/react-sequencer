import React, { Component } from 'react'
import SequenceIndicator from './SequenceIndicator'

const stable = require('stable-timer')
let steps
let location
let currentCol = 0

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

    var $row1 = rows[currentCol]
    var $row2 = rows[currentCol + 16]
    var $row3 = rows[currentCol + 32]
    var $row4 = rows[currentCol + 48]
    var $row5 = rows[currentCol + 64]
    var $row6 = rows[currentCol + 80]
    var $row7 = rows[currentCol + 96]
    var $row8 = rows[currentCol + 112]
    var $row9 = rows[currentCol + 128]
    var $row10 = rows[currentCol + 144]
    var $row11 = rows[currentCol + 160]
    var $row12 = rows[currentCol + 176]

    if ($row1 !== undefined && $row1.classList.contains('selected')) {
      sound1.play()
    }
    if ($row2 !== undefined && $row2.classList.contains('selected')) {
      sound2.play()
    }
    if ($row3 !== undefined && $row3.classList.contains('selected')) {
      sound3.play()
    }
    if ($row4 !== undefined && $row4.classList.contains('selected')) {
      sound4.play()
    }
    if ($row5 !== undefined && $row5.classList.contains('selected')) {
      sound5.play()
    }
    if ($row6 !== undefined && $row6.classList.contains('selected')) {
      sound6.play()
    }
    if ($row7 !== undefined && $row7.classList.contains('selected')) {
      sound7.play()
    }
    if ($row8 !== undefined && $row8.classList.contains('selected')) {
      sound8.play()
    }
    if ($row9 !== undefined && $row9.classList.contains('selected')) {
      sound9.play()
    }
    if ($row10 !== undefined && $row10.classList.contains('selected')) {
      sound10.play()
    }
    if ($row11 !== undefined && $row11.classList.contains('selected')) {
      sound11.play()
    }
    if ($row12 !== undefined && $row12.classList.contains('selected')) {
      sound12.play()
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
        <button onClick={this.state.started === false ? this.start : this.stop} id="playbutton">
          <i className={this.state.class ? 'fa fa-play' : 'fa fa-stop'}></i>
        </button>
      </div>
    )
  }
}

export default PlayStop
