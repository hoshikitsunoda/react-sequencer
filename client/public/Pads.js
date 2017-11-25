import React from 'react'

const Pads = ({ list }) => {
  return (
    <div>
      {list.map((number, index) => <button key={index}></button>)}
    </div>
  )
}

export default Pads
