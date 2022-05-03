import './App.css';
import React, { useEffect, useState } from "react";

function App() {

  useEffect(()=> {
    fetch("http://localhost:3000/toys")
    .then(r=> r.json())
    .then(data => {
      console.log(data)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
          Learn React
      </header>
    </div>
  );
}

export default App;
