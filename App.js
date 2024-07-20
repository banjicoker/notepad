import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './heading'; // Ensure this matches the exact casing of the file

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading /> {/* Correctly use the Heading component */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
