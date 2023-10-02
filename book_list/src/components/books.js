import React, { Component } from "react";

export default class books extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.title}</th>
        <th>{this.props.author}</th>
        <th>{this.props.year}</th>
      </tr>
    );
  }
}
