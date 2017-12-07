import React, { Component } from 'react'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

class Pad extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
  }

  handleBgColorChange(name, event) {
    let currentState = this.state.active
    currentState = {}
    currentState[name] = this.state.active[name] == 'selected' ? null : 'selected'
    this.setState({ active: currentState })
    event.preventDefault()
  }

  render() {
    return (
      <div className="buttonwrapper">
        {list.map((id, index) => <button
          onClick={this.handleBgColorChange.bind(this, `${id}`)}
          className={this.state.active[`${id}`]} key={index}>
        </button>)}
      </div>
    )
  }
}

export default Pad
