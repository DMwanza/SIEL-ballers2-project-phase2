import React, { useState, useEffect } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function GameList() {
  const [team, setTeam] = useState("");
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/DMwanza/SIEL-ballers2-project-phase2B/games").then((res) =>
      res.json().then((games) => setGames(games))
    );
  }, []);
  function handleUpdateItem(updatedItem) {
    const updatedItems = games.map((game) => {
      if (game.id === updatedItem.id) {
        return updatedItem;
      } else {
        return game;
      }
    });
    setGames(updatedItems);
  }
  function handleDeleteItem(deletedItem) {
    if (Array.isArray(games)) {
      const updatedItems = games.filter((game) => game.id !== deletedItem.id);
      setGames(updatedItems);
    } else {
      // Handle the case when games is not an array
      console.error('games is not an array');
    }
  }
  
  function handleAddItem(newGame) {
    setGames([...games, newGame]);
  }
  function handleCategoryChange(team) {
    setTeam(team);
  }

  const itemsToDisplay = games.filter((game) => {
    return game.home === team || game.away === team;
  });

  return (
    <div className="GameList">
      <Filter
        games={games}
        team={team}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((game) => (
          <Item
            key={game.id}
            game={game}
            onUpdateItem={handleUpdateItem}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </ul>
      <ItemForm onAddItem={handleAddItem} games={games} />
    </div>
  );
}

export default GameList;
