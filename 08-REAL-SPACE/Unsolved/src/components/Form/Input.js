import React, { Component } from "react";
import { randomColour } from "../../utils";


export class Input extends Component {
  render () {
    return (
      <div className="form-group">
        <label htmlFor={this.props.name} className="col-sm-2 control-label">
          {this.props.displayName}
        </label>
        <div className="col-sm-10">
          <input
            style={{backgroundColor: randomColour()}}
            className="form-control"
            placeholder={this.props.displayName}
            type="text"
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
};
