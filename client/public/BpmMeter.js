import React, { Component } from 'react'

class BpmMeter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bpm: 250
    }
  }

  render() {
    return (
      <div id="bpmmeter">
        <form>
          <input type="text" value="120.00"/>
        </form>
      </div>
    )
  }
}

export default BpmMeter
