import React, { Component } from 'react'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

class Pad extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.handleBgColorChange = this.handleBgColorChange.bind(this)
  }

  handleBgColorChange() {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render() {
    return (
      <div>
        {list.map((id, index) => <button key={index}></button>)}
      </div>
    )
  }
}

export default Pad
