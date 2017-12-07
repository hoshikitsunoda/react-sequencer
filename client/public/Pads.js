import React, { Component } from 'react'
import Pad from './Pad'

class Pads extends Component {
  constructor(props) {
    super(props)
    this.handleBgColorChange = this.handleBgColorChange.bind(this)
    this.state = {
      activePads: {}
    }
  }

  handleBgColorChange(id) {
    let currentPads = this.state.activePads
    currentPads[id] === 'selected'
      ? currentPads[id] = null
      : currentPads[id] = 'selected'
    this.setState({ activePads: currentPads })
  }

  render() {
    const row = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'kd', 'sd', 'hh', 'cl', 'sh']
    return (
      <div id="table">
        {row.map((rowNum, index) => {
          return (<div className="rows" key={rowNum} id={rowNum + '-row'}>
            <Pad
              row={rowNum}
              activePads={this.state.activePads}
              click={this.handleBgColorChange} />
          </div>)
        })}
      </div>
    )
  }
}

export default Pads
