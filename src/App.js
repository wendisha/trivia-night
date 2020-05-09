import React from "react";
// import logo from "./logo.svg";
import logo from "./tn6.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p className="App-title">Version 1.0: LA TERTULIA</p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button className="Button">Empezar</button>
      </header>
    </div>
  );
}

export default App;
