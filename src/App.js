import React from "react";
import Search from "./components/search/search";
import Title from "./components/title/title";
import Number from "./components/random/number";
// import List from "./components/list/list";
// import Listmax from "./components/listmax/listmax";
import Listmin from "./components/toDoList/listmin.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search name="" />
      <Title title="Введіть число:" />
      <Number answer="" />
      {/* <List /> */}
      {/* <Listmax /> */}
      <Listmin />
    </div>
  );
}

export default App;
