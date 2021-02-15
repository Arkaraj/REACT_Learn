import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// STORE -> its a globalized state

// ACTION -> its gonna call on state change

const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'decrement'.toUpperCase()
  }
}

//REDUCER -> Based on action its gonna modify Store

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      break;
  }
}

let store = createStore(counter)

// store.subscribe(() => {
//   console.log(store.getState())
// })

//DISPATCH -> Execute the action, sends the action to reducer

store.dispatch(increment())

ReactDOM.render(
  <Provider store={store} increment={increment}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

