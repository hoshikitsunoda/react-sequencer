import React, { Component } from 'react'

const Pad = ({ onClick }) => {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'KD', 'SD', 'HH', 'CL', 'SH']
  return (
    <div>
      {list.map((id, index) => <button onClick={onClick} key={index}></button>)}
    </div>
  )
}

export default Pad
