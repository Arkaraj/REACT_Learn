import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'

// STORE -> its a globalized state

// ACTION -> its gonna call on state change

//REDUCER -> Based on action its gonna modify Store

//DISPATCH -> Execute the action, sends the action to reducer

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

