import React from "react";
import ShowNumber from "../random/showNumber";
class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
    };
    this.showRandomNumber = this.showRandomNumber.bind(this);
  }

  numberChange(a) {
    this.setState({ number: a.target.value });
  }

  showRandomNumber() {
    this.setState({ number: this.state.number * 1000 });
  }
  render() {
    return (
      <div>
        <input
          type="number"
          onChange={(a) => this.numberChange(a)}
          value={this.state.number}
        />
        <br />
        <br />
        <ShowNumber func={this.showRandomNumber} />
        <br />
      </div>
    );
  }
}

export default Number;
