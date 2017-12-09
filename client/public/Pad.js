import React, { Component } from 'react'

const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const Pad = ({ activePads, click, row }) => {
  return (
    <div className="buttonwrapper">
      {list.map((col, index) => <button
        onClick={() => click(`${row}-${col}`)}
        className={'plays ' + activePads[`${row}-${col}`]}
        id={row + '-row'}
        key={`${row}-${col}`}>
      </button>)}
    </div>
  )
}

export default Pad
