import React from 'react'

const Indicator = ({ onClick }) => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'KD', 'SD', 'HH', 'CL', 'SH']
  return(
    <div id="indicator">
      {notes.map((id, index) => <a onClick={onClick} className="notes" key={index} id={id + '-note'} >{id}</a>)}
    </div>
  )
}

export default Indicator
