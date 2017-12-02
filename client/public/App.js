import React, { Component } from 'react'
import Pads from './Pads'

class App extends Component {
  constructor(props) {
    super(props)
    this.row = [1,2,3,4,5,6,7,8,9,10,11,12]
  }

  render() {
    return <Pads />
  }
}

export default App
