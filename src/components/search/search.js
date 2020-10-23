// 1. Створити класовий компонент в якому з допомогою стану компоненту
// всі дані з інпута в який юзер буде вводити тест - будуть в режимі
// реального часу відображатись в функціональному компоненті в h1 тегу.
import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  myChange(e) {
    console.log(e);
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <p>Введіть в кнопці слово</p>
        <input
          type="text"
          onChange={(e) => this.myChange(e)}
          value={this.state.name}
        />
        <br />
        <h1> {this.state.name}</h1>
      </div>
    );
  }
}
export default Search;
// 2. Створити 3 компонента крізь які будемо передавати функцію з рандомним
// числом та повертати в головний компонент  де отримане значення з компонента
// С будемо множити на 1000 та записувати в стейт. (А -> B -> C > B > A)
