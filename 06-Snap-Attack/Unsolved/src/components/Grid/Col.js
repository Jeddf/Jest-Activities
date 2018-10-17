import React, {Component} from "react";

export class Col extends Component {
  render () {
    return (
      <div className={this.props.size.map(size => "col-" + size).join(" ")}>
        {this.props.children}
      </div>
    );
  }
}
