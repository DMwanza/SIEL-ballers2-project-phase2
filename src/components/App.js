import React, { useState } from "react";
import Header from "./Header";
import ItemForm from "./ItemForm";
import Item from "./Item";
import GameList from "./GameList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const[page,setPage]=useState("/")
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <GameList />
    </div>
  );
}
export default App;
