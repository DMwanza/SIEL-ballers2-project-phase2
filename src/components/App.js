import React, { useState } from "react";
import Header from "./Header";
// import ItemForm from "./ItemForm";
// import Item from "./Item";
import GameList from "./GameList";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [page, setPage] = useState("/");
  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Searchgame" element={<GameList />} />
      </Routes>
    </div>
  );
}
export default App;
