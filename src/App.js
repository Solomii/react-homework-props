import React from "react";
import Search from "./components/search/search";
import Title from "./components/title/title";
import Number from "./components/random/number";
// import List from "./components/list/list";
// import Listmax from "./components/toDoList/listmax.js";
import Listmin from "./components/toDoList/listmin.js";
// import Login from "./components/login/login";
import LoginFormik from "./components/loginFormik/loginFormik";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search name="" />
      <Title title="Введіть число:" />
      <Number answer="" />
      {/* <List /> */}
      {/* <Listmax Все що закоментовано не Дивися!! Це доробляю!!!!!!/> */}
      <Listmin />
      {/* <Login Це доробляю!!!!! /> */}
      <LoginFormik />
    </div>
  );
}

export default App;
