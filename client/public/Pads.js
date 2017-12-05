import React from 'react'
import Pad from './Pad'

const Pads = () => {
  const row = ['c', 'd', 'e', 'f', 'g', 'a', 'b', 'kd', 'sd', 'hh', 'cl', 'sh']
  return (
    <div id="table">
      {row.map((id, index) => {
        return (<div className="rows" key={index} id={id + '-row'}>
          <Pad key={index} id={id} />
        </div>)
      })}
    </div>
  )
}

export default Pads
