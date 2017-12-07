import React, { Component } from 'react'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

class SequenceIndicator extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ul>
        {list.map((id, index) => {
          return <li key={index} className="sequence-indicator" id={id + 'th'}></li>
        })}
      </ul>
    )
  }
}

export default SequenceIndicator
