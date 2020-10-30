import React from "react";
import "./listmin.css";
class Listmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      list: [
        "Sit at the bottom of apple tree",
        "Avoid getting hit by falling apple",
        "???",
        "Explain gravity",
      ],
      flag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFlagChange = this.handleFlagChange.bind(this);
    this.handleList = this.handleList.bind(this);
    this.addItemToTheList = this.addItemToTheList.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleFlagChange() {
    this.setState({ flag: !this.state.flag });
  }

  handleList() {
    return this.state.list.map(function (item) {
      return (
        <li className="listmin-li" key={item}>
          {item}
        </li>
      );
    });
  }

  addItemToTheList() {
    this.setState((state) => {
      const list = [...state.list, state.name];

      return {
        list,
        name: "",
      };
    });
  }

  render() {
    return (
      <div className="listmin">
        <div className="wrapper">
          <input
            className="input-add"
            type="text"
            placeholder="enter task"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <button className="add-button" onClick={this.addItemToTheList}>
            add
          </button>
          <div className="listmin-ul">
            <ul>{this.handleList()}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Listmin;
