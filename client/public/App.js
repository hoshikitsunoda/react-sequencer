import React, { Component } from 'react'
import Pads from './Pads'
import Indicator from './Indicator'

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

class App extends Component {
  constructor(props) {
    super(props)
    this.clicked = this.clicked.bind(this)
  }

  clicked() {
    const audio = document.querySelectorAll('.notes')
    for(let i = 0; i < audio.length; i++) {
      audio[i].addEventListener('click', (event) => {
      })
    }
  }

  render() {
    return (
      <div>
        <Pads />
        <Indicator onClick={this.clicked}/>
      </div>)
  }
}

export default App
