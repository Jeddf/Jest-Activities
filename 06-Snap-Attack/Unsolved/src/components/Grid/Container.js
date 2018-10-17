import React, {Component} from "react";

export class Container extends Component {
  render () {
    return (
      <div className={`container${this.props.fluid ? "-fluid" : ""}`}>
        {this.props.children}
      </div>
    );
  }
}
