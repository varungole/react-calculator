import React, { useState } from 'react'
import Square from './Square'

const Board = () => {

  const [outputRes , setOutputRes] = useState('');
  
  const handleClick = (value) => {
        setOutputRes(value)
  }

  return (
    <>
    <div className='output-row'>
        <input type='number' className='output-result' value={outputRes}></input>
    </div>
    <div className='row'>
        <Square value="(" onClick={handleClick}/>
        <Square value=")" onClick={handleClick}/>
        <Square value="%" onClick={handleClick}/>
        <Square value="AC" onClick={handleClick}/>
    </div>

    <div className='row'>
        <Square value="7" onClick={handleClick}/>
        <Square value="8" onClick={handleClick}/>
        <Square value="9" onClick={handleClick}/>
        <Square value="/" onClick={handleClick}/>
    </div>

    <div className='row'>
        <Square value="4" onClick={handleClick}/>
        <Square value="5" onClick={handleClick}/>
        <Square value="6" onClick={handleClick}/>
        <Square value="X" onClick={handleClick}/>
    </div>

    <div className='row'>
        <Square value="1" onClick={handleClick}/>
        <Square value="2" onClick={handleClick}/>
        <Square value="3" onClick={handleClick}/>
        <Square value="-" onClick={handleClick}/>
    </div>

    <div className='row'>
        <Square value="0" onClick={handleClick}/>
        <Square value="." onClick={handleClick}/>
        <Square value="=" onClick={handleClick}/>
        <Square value="+" onClick={handleClick}/>
    </div>

    </>
  )
}

export default Board