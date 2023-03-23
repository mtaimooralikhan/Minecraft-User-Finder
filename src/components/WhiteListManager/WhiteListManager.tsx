import React, { useState } from "react";
import PlayerList from "../PlayerList/PlayerList";

function WhiteListManager() {
  const [playerName, setPlayerName] = useState<string>("");
  const [players, setPlayers] = useState<any[]>([]);

  const handleInputChange = (event: any) => {
    setPlayerName(event.target.value);
  };

  const handleAddPlayer = async (event: any) => {
    event.preventDefault();

    const response = await fetch(
      `https://api.ashcon.app/mojang/v2/user/${playerName}`
    );
    if (response.status !== 200) {
      alert("Invalid player name!");
      return;
    }
    const res = await response.json();
    // const playerUUID = (await response.json()).id;

    setPlayers([...players, res]);
    setPlayerName("");
  };

  const handleDeletePlayer = (id: number) => {
    setPlayers((prevPlayerList) =>
      prevPlayerList.filter((player) => player.id !== id)
    );
  };

  const handlePromotePlayer = (id: number) => {
    setPlayers((prevPlayerList) =>
      prevPlayerList.map((player) => {
        if (player.id === id) {
          return { ...player, isAdmin: true };
        }
        return player;
      })
    );
  };

  return (
    <div>
      <form onSubmit={handleAddPlayer}>
        <label>
          Player name:
          <input type="text" value={playerName} onChange={handleInputChange} />
        </label>
        <button type="submit">Add player</button>
      </form>
      {players.length > 0 &&
        players.map((player) => {
          console.log("player:", player);
          return (
            <PlayerList
              players={player}
              onDelete={handleDeletePlayer}
              onPromote={handlePromotePlayer}
            />
          );
        })}
    </div>
  );
}

export default WhiteListManager;
