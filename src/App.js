import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Posts from './components/Posts'

function App() {
  // Write any JavaScript here
  // States
  // let state = {
  //   name: 'Arkaraj',
  //   age: 18
  // }
  // For class this.state.name

  const name = 'Code1234'
  const code = '$ npm install'

  // States and be passed down as props as well
  let [counter, setCounter] = useState(0)
  let [toggle, setToggle] = useState(false)


  const increment = () => {
    // counter += 1;
    setCounter(prev => prev + 1) //setCounter(counter + 1) also works
    // console.log(counter)
  }

  const visible = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className="App" className="App-header">
      {/* <Nav /> */}
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1>H</h1>
      <p>
        Edit <code>src/App.js</code> and save to reload. <br />
          Random number: {Math.random() * 10} <br />
          My name is {state.name}, I am {state.age}
      </p> */}
      {/* <Posts article={name} code={code} /> */}
      <h1 className={toggle ? "hide" : ""}>React</h1> <br />
      <h1>Couter: {counter}</h1> <br />
      <button onClick={increment}>Increment</button>
      <button onClick={visible}>Toggle</button>
    </div>
  );
}

export default App;
