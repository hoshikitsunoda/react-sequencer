import React from 'react'

const Indicator = () => {
  const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'KD', 'SD', 'HH', 'CL', 'SH']
  return(
    <div>
      {notes.map((id, index) => <a className="notes" key={index}>{id}</a>)}
    </div>
  )
}

export default Indicator
