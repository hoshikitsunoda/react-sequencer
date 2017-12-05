import React from 'react'

const Pad = () => {
  const list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  return (
    <div>
      {list.map((id, index) => <button onClick={onClick} key={index}></button>)}
    </div>
  )
}

export default Pad
