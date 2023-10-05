import React, { Component } from "react";

export default class Note extends Component {
  removeBoxHandler(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <div
        className="card shadow-sm rounded"
        style={{ backgroundColor: this.props.color }}
        onClick={this.removeBoxHandler.bind(this, this.props.id)}
      >
        <p className="card-text p-3">{this.props.title} </p>
      </div>
    );
  }
}
