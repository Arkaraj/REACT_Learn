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

  return (
    <div className="App" className="App-header">
      <Nav />
      {/* <img src={logo} className="App-logo" alt="logo" />
      <h1>H</h1>
      <p>
        Edit <code>src/App.js</code> and save to reload. <br />
          Random number: {Math.random() * 10} <br />
          My name is {state.name}, I am {state.age}
      </p> */}
      <Posts article={name} code={code} />
    </div>
  );
}

export default App;
