import React, { Component } from "react";

class Classcounter extends Component {
  state = {
    count: 0,
  };

  handleOnIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleOnDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <div className="classCounter">
        <h1 className="heading">This is Class Counter</h1>
        <h1 className="counter">{this.state.count}</h1>
        <button className="sub" onClick={this.handleOnDecrement}>
          -
        </button>
        <button className="add" onClick={this.handleOnIncrement}>
          +
        </button>
      </div>
    );
  }
}

export default Classcounter;
