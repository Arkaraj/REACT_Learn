import React, { useState, useReducer } from 'react'
import './App.css';
import MovieList from './components/MovieList';

/*function reducer(todos, action) {

  switch (action.type) {
    case 'add-todo':
      return [...todos, newTodo(action.payload.name)]
    case 'toggle-todo':
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case 'delete-todo':
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }

}

function newTodo(name) {
  return { id: Date.now(), name, complete: false }
}*/


function App() {

  /*const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  // const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "add-todo", payload: { name } })

    setName('')
  }*/

  return (
    <div className="App-header">
      {/* <h1>Todo:</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })} */}
      <MovieList />


    </div>
  );
}

export default App;
