import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const couter = useSelector(state => state)

  const dispatch = useDispatch()

  return (
    <div>
      <h1>Counter {couter}</h1>
      {/* dispatch(increment) => increment is imported from another file */}
      <button onClick={() => dispatch()}>+</button>
      <button>-</button>
    </div>
  )
}

export default App;
