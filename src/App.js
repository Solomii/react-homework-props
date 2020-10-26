import React from "react";
import Search from "./components/search/search";
import Title from "./components/title/title";
import Number from "./components/random/number";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search name="" />
      <Title title="Введіть число:" />
      <Number answer="" />
    </div>
  );
}

export default App;
