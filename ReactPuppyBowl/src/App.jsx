import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import AllPlayers from "./Components/AllPlayers.jsx";
import NavBar from "./Components/NavBar.jsx";
import NewPlayerForm from "./Components/NewPlayerForm.jsx";
import SinglePlayer from "./Components/SinglePlayer.jsx";
import Search from './Components/Search.jsx';
import PlayersArray from './API/index.js'

function App() {
  const [ players, setPlayers ] = useState([]); 
  const [isLoading, setIsLoading] = useState(false);
  const handlePlayers = async () => {
        setIsLoading(true);
        try {
        const players = await PlayersArray();
        setPlayers(players);
        } catch (error) {
            console.error(error);
        } finally {
        setIsLoading(false);
        }
    };

    useEffect(() => {
        handlePlayers();
    }, []);
    
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<AllPlayers players={players} setPlayers={setPlayers} isLoading={isLoading} />} />
        <Route path='/players/:id' element={<SinglePlayer players={players} isLoading={isLoading}/>} />
        <Route path='/addplayerform' element={<NewPlayerForm/>} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </div>
  )
}

export default App
