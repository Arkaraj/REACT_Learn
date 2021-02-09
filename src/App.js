import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
// import MovieList from './components/MovieList';
// import { MovieProvider } from './components/MovieContext'
// import AddMovie from './components/AddMovie'

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

  /*
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')
  // const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({ type: "add-todo", payload: { name } })

    setName('')
  }*/
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  // useEffect is used when we need things to render onload
  useEffect(() => {

    const getTask = async () => {
      const tasksFromServer = await fetchTask()
      setTasks(tasksFromServer)
    }

    getTask()
  }, [])

  const fetchTask = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Add task
  const addTask = async (task) => {
    const newTask = {
      id: tasks.length + 1, // or it can be random
      title: task.text,
      ...task
    }

    // Add task to the server
    const res = await fetch('http://localhost:5000/tasks', {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newTask) // to json
    })

    const data = await res.json()

    // For UI change
    setTasks([...tasks, data])

  }

  const onDelete = async (id) => {
    console.log('delete', id)

    // For Server (dynamic)
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    })

    // For UI change
    setTasks(tasks.filter(task => task.id !== id))

  }

  const getTask = async (tid) => {

    const res = await fetch(`http://localhost:5000/tasks/${tid}`)
    const data = res.json()

    return data
  }

  const toggleReminder = async (id) => {

    // For server
    const taskReminder = await getTask(id)
    const updateTask = {
      ...taskReminder,
      reminder: !taskReminder.reminder
    }


    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    console.log(data)

    // For UI change
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title={'Task Tracker'} show={showAddTask ? 'Close' : 'Add'} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask ? <AddTask add={addTask} /> : ''}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} />) : (<p>There is no tasks left</p>)}
    </div >


  );
}

export default App;
