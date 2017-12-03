import React, { Component } from 'react'
import Pads from './Pads'
import Indicator from './Indicator'

class App extends Component {
  constructor(props) {
    super(props)
  }

  clicked() {
    console.log('click')
  }

  render() {
    return (
      <div>
        <Pads />
        <Indicator />
      </div>)
  }
}

export default App
