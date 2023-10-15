import React from 'react'

function Square({value , onClick}) {
  return (
    <button className='square' onClick={() => onClick(value)}>{value}</button>
  )
}

export default Square