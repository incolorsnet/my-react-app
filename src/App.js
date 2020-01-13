import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const text = "test_text";
  return (
    <div className="App">
      <div className="p-default-section">
        <button className="p-default-section__button">CLICK</button>
      </div>
      <header className="App-header">
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
