import './App.css';

function App() {
  // States
  let state = {
    name: 'Arkaraj',
    age: 18
  }
  // For class this.state.name
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Heading</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload. <br />
          Random number: {Math.random() * 10} <br />
          My name is {state.name}, I am {state.age}
        </p>

      </header>
    </div>
  );
}

export default App;
