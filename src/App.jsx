import React, { useState } from 'react';
import './styles.css';



export default function App() {

//contador
const [valor, setValor]= useState(0);

//parando
const [pare, setPare] = useState(null);

function start () {
  if (!pare){
  let time = setInterval (() => {
    setValor((prevValor) =>prevValor + 1);
  }, 1000);
  
  setPare(time);
}
}

function pause(){
  clearInterval(pare);
  setPare(null);
}

function reset(){
  clearInterval(pare);
  setPare(null);
  setValor(0);
  //setValor((valor) => valor +1)
}

return (
  <div className='container'>
    <h2 className='title'>tempo: {valor} </h2>
    <div className='buttons'>
    <button className='start' onClick={start}>start</button>
    <button className='pause' onClick={pause}>pause</button>
    <button className='reset' onClick={reset}>reset</button>
    </div>
  </div>
);
}

