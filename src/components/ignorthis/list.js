import React from "react";
import "./list.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "What I want to do?",
      list: ["drink coffee", "whach my hands", "give some food to the dog"],
      flag: false,
      advancedList: [
        {
          name: "Yura",
          age: 55,
          hobby: ["football", "ski", "hiking"],
          type: "Admin",
        },
        {
          name: "Yulian",
          age: 28,
          hobby: ["films", "games", "hiking"],
          type: "user",
        },
        {
          name: "Taras",
          age: 38,
          hobby: ["hunting", "TV", "javascript"],
          type: "user",
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFlagChange = this.handleFlagChange.bind(this);
    this.handleList = this.handleList.bind(this);
    this.addItemToTheList = this.addItemToTheList.bind(this);
    this.handleAdvencedList = this.handleAdvencedList.bind(this);
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
        <li className="li" key={item}>
          {item}
        </li>
      );
    });
  }

  handleAdvencedList() {
    return this.state.advancedList.map((item) => (
      <div key={item.id}>
        <div>{item.name}</div>
        <div>{item.age}</div>
        <div>{item.type}</div>
        <h4>User hobbyies:</h4>
        {item.hobby.map((i) => (
          <span>{i}</span>
        ))}
      </div>
    ));
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
    console.log(this.state.list);
    return (
      <div className="list">
        {this.state.name}
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <button onClick={this.addItemToTheList}>add</button>
        <div>
          <button onClick={this.handleFlagChange}>Show/hide list</button>
          <br />
          {this.state.flag && <ul>{this.handleList()}</ul>}
          {this.handleAdvencedList()}
        </div>
      </div>
    );
  }
}

export default List;
