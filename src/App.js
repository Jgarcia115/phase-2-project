import './App.css';
import React, { useEffect, useState } from "react";
import CardList from './CardList';
import NavBar from './NavBar';
import Header from './Header';
import Mission from './Mission';
import { Router, Routes, Route } from "react-router-dom";
import AddCard from './AddCard';


function App() {

  const [toys, setToys] = useState([]) 

  function addToy(newToy) {
    const updatedToys = [...toys, newToy]
    setToys(updatedToys)
  }

  useEffect(()=> {
    fetch("http://localhost:3000/toys")
    .then(r=> r.json())
    .then(data => {
      setToys(data)
    })
  }, [])

  return (
    <div className="App">
      <Header/>
      <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Mission />}/>
            <Route path="/known" element={<CardList toys={toys} />}/>
            <Route path="/add" element={<AddCard onAddToy={addToy}/>}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
