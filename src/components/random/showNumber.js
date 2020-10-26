import React from "react";
class ShowNumber extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={(event) => this.props.func(Math.random())}>
          Click me!
        </button>
      </div>
    );
  }
}
export default ShowNumber;
