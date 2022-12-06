import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const Add = (num1, num2) => {
    console.log(num1, num2)
    let var1 = parseInt(num1)
    let var2 = parseInt(num2)
    let count = var1 + var2;
    return count;
  }

  return (
    <div className='container'>
      <input className='first'></input>
      <input className='second' onChange={(num2) => this.setState({ bla2 : num2.target.value })} ></input>
      <div className='answer' onChange={Add}></div>
    </div>
  )
}

export default App;
// 2 input uusgeed  ( int + int)
// output the sum