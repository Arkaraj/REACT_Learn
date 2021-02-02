import React, { useState, useEffect, useRef } from 'react'
import './App.css';

function App() {

  const [name, setName] = useState('');

  const prevName = useRef('')

  // const Focus = () => {
  //   // Like query Selector
  //   inputRef.current.focus()
  //   inputRef.current.value = 'PREre'

  // }

  useEffect(() => {

    prevName.current = name

  }, [name])

  return (
    <div className="App" className="App-header">
      <input value={name} onChange={e => setName(e.target.value)} />
      <p>My name is: {name}. It used to be {prevName.current}</p>
    </div>
  );
}

export default App;
