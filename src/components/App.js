import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleDarkModeClick = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleCategoryChange = () => {
    setSelectedCategory(selectedCategory)
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Header onDarkModeClick={handleDarkModeClick}/>
      <Filter onCategoryChange={handleCategoryChange}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
