import React, { Component } from 'react'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

class Pad extends Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
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
