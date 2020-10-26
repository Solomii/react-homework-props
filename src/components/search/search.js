import React from "react";
import Title from "../title/title";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  myChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <div>
        <p>Введіть в слово:</p>
        <input
          type="text"
          onChange={(e) => this.myChange(e)}
          value={this.state.name}
        />
        <br />
        <Title title={this.state.name} />
        <br />
      </div>
    );
  }
}
export default Search;
