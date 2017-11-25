import React from 'react'

const Pads = ({ renderRows }) => {
  return (
    <div className="pads">
      {renderRows()}
    </div>
  )
}

export default Pads
