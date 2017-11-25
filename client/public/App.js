import React, { Component } from 'react'
import Pads from './Pads'

class App extends Component {
  constructor(props) {
    super(props)
    this.list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    this.row = [1,2,3,4,5,6,7,8,9,10,11,12]
    this.renderRows = this.renderRows.bind(this)
  }

  renderRows() {
    return (
      <div className="paddies">
        {this.list.map((number, index) => <button key={index}></button>)}
      </div>
    )
  }

  render() {
    return (
      <div id="table">
        <Pads renderRows={this.renderRows} />
        {/*this.row.map((num, index) => <Pads key={index} renderRows={this.renderRows} />)*/}
      </div>
    )
  }
}

export default App
