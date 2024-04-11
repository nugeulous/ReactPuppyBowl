import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// export function Details({ id }) {
//     const [selectedPlayer, setSelectedPlayer] = useState([]);
//     // const player = playerId;
//     // setSelectedPlayer(player);
//     // console.log(player)
//     // console.log(selectedPlayer);
//     console.log(id)

//     useEffect(() => {
//         Details();
//     }, []);
    
//     console.log(this.selectedPlayer);
// }

export default function NewPlayer({players, isLoading}) {
    if (isLoading || players.length === 0){
        return (<div>
            Waiting for Player To Load
          </div>)
    }
    const { id } = useParams();
    console.log(id);
    console.log(players);
    const player = players.find((elem) => id === elem.id.toString());
    console.log(player);
    return (
        <div className="newPlayer">
            <h1>{player.name}</h1>
            <h1>{player.breed}</h1>
            <h1>{player.status}</h1>
            <div>
                <img src={player.imageUrl} alt="Girl in a jacket" width="500" height="600"/>

                </div>
            
        </div>
    );
}