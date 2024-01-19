// import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./Components/AllPlayers.jsx";
import NavBar from "./Components/NavBar.jsx";
import NewPlayerForm from "./Components/NewPlayerForm.jsx";
import SinglePlayer from "./Components/SinglePlayer.jsx"
import Search from './Components/Search.jsx';

function App() {

  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer/>} />
        <Route path='/addplayerform' element={<NewPlayerForm/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
