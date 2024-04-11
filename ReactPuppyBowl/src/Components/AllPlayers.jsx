import PlayersArray from '../API/index';
import { useState, useEffect } from 'react';
import Delete from './Delete.jsx'
import Details from './SinglePlayer.jsx'
import { useNavigate } from 'react-router-dom';
import SinglePlayer from './SinglePlayer.jsx'

function AllPlayers({ players, setPlayers, isLoading }) {
    const navigate = useNavigate();

    if (isLoading) {
        return (<div>
          Waiting for Player Updates
        </div>)
      }

    const handleClick = (id) => {
        console.log(id);
        navigate(`/players/${id}`)
    }
        const allPlayers = players.map(({ id, name, breed }) => (
            <div className="SinglePlayer" key={id}>
                {[ name, " ", breed]}
                <button onClick={() => handleClick(id)}>Details</button>
                <button onClick={Delete}>Delete</button>        
            </div>
        ));
        return allPlayers;

}
export default AllPlayers;
