import React, { Component } from 'react'
import Pads from './Pads'

class App extends Component {
  constructor(props) {
    super(props)
    this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  }

  render() {
    return (
      <div>
        <Pads list={this.list}/>
      </div>
    )
  }
}

export default App
