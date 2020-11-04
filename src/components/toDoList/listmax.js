import React from "react";
import "./listmax.css";

class Listmax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {id:0, title: "Wake up", checked: false },
        {id:1, title: "Eat breakfast", checked: false },
        {id:2, title: "Go to work", checked: false },
      ],
      editing: [],
      flag: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFlagChange = this.handleFlagChange.bind(this);
    this.handleList = this.handleList.bind(this);
    this.handlNewToDo = this.handlNewToDo(this);
    this.handleDelete = this.handleDelete(this);
    this.addItemToTheList = this.addItemToTheList.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleFlagChange() {
    this.setState({ flag: !this.state.flag });
  }

  handlNewToDo (todo) {
    this.setState((state, props) => ({todos: [...state.lists, todo]}));
  }

  handleDelete = (id, ind) => {
    this.setState((state, props) => ({todos: state.todos.filter(t => t.id !== id)}))
  }

  handleMarkEdit = (id) => {
    this.setState((state, props) => ({editing: [...state.editing, id]}))
  }
  handleEdit = (todo) => {
    this.setState((state, props) => ({
      todos: state.todos.map(t => t.id === todo.id ? {...t, ...todo} : t),
      editing: state.editing.filter(id => todo.id !== id)
    }));
  }

  handleList() {
    return this.state.lists.map(function (item) {
      return (
        <li className="listmax-li" key={item.title}>
          {item.title}
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
      <div className="listmax">
        <div className="listmax-wrapper">
          <h2 className="listmax-title">To do:</h2>
          <div>
            <ul className="listmax-ul">{this.handleList()}</ul>
          </div>
          <div className="listmax-title-text">
            <h5>Task</h5>
            <input
              className="listmax-input"
              type="text"
              placeholder="What do you need to do?"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="listmax-btn-b">
            <button className="listmax-btn" onClick={this.addItemToTheList}>
              Save item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Listmax;
