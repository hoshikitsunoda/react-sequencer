import React, { Component } from 'react'
import Pads from './Pads'
import Indicator from './Indicator'

class App extends Component {
  constructor(props) {
    super(props)
    this.clicked = this.clicked.bind(this)
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
