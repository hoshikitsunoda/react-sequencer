import React from 'react'

const Pad = () => {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div className="rows">
      {list.map((number, index) => <button key={index}></button>)}
    </div>
  )
}

export default Pad
