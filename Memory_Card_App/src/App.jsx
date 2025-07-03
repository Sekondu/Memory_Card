import { useState,useEffect } from 'react'
import { Game } from './Game'
import './App.css'

export function App() {
  let [Score,setScore]=useState(0);
  let [HighScore,setHighScore]=useState(0);
  function updateScore(num)
  {
    setScore(num);
  }
  function updateHigh(num)
  {
    setHighScore(num);
  }
  return (
    <div className='container'>
     <Game Score={Score} setScore={updateScore} HighScore={HighScore} setHigh={updateHigh}/>
    </div>
  )
}


