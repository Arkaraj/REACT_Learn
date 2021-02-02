import React, { useState, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav'
import Posts from './components/Posts'
import SomeClass from './components/SomeClass'

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
  // Changing states will re-render the components
  let [counter, setCounter] = useState(0)
  let [toggle, setToggle] = useState(false)
  let [text, setText] = useState("posts")
  // useState can take in a funciton as well: useState(() => {console.log("jflsk") return 0})
  // useState Objects
  let [state, setState] = useState({ id: 10, phrase: "Hi" })

  let [windowHeight, setWindowHeight] = useState(window.innerHeight)

  const { id, phrase } = state

  // Life Cycle methods of Class
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then(response => response.json())
      .then(json => console.log(json))

  }, [text])

  const handleResize = () => {
    setWindowHeight(window.innerHeight)
  }

  // Call onMount
  useEffect(() => {
    window.addEventListener('resize', handleResize)

    // To clean up the useEffect kindda like after disMounting
    // This is run first in the useEffect
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowHeight])

  const increment = () => {
    // counter += 1;
    setCounter(prev => prev + 1) //setCounter(counter + 1) also works
    // console.log(counter)
  }

  const visible = () => {
    setToggle(prev => !prev)
  }

  const changePhrase = () => {
    setState(prevState => {
      // ... spread operator all the old values remain unmodified

      return { ...prevState, phrase: prevState.phrase = "Modified" }
    })
  }

  const changeText = (text) => {
    setText(prev => {
      prev = text;
      return prev
    })
  }



  // Event Handlers
  /*
    onClick, onSubmit, onChange ... all with Js events with camelCasing
  */
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
      {/* <h1 className={toggle ? "hide" : ""}>React</h1> <br />
      <h1>Couter: {counter}</h1> <br />
      <button onClick={increment}>Increment</button>
      <button onClick={visible}>Toggle</button> */}
      {/* <h2>ID: {id} says "{phrase}"</h2>
      <button onClick={changePhrase}>Change Phrase</button> */}
      {/* <SomeClass name={"Bob"} code={"javascript"} /> */}
      {/* <button onClick={() => changeText('posts')}>Posts</button>
      <button onClick={() => changeText('users')}>Users</button>
      <button onClick={() => changeText('comments')}>Comments</button>
      <h3>{text}</h3> */}
      <div on>
        {windowHeight}
      </div>


    </div>
  );
}

export default App;
