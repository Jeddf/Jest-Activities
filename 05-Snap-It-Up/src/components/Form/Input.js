import React from "react";
import { randomColour } from "../../utils";


export const Input = (props) => (
  <div className="form-group">
    <label htmlFor={props.name} className="col-sm-2 control-label">
      {props.displayName}
    </label>
    <div className="col-sm-10">
      <input
        style={{backgroundColor: randomColour()}}
        className="form-control"
        placeholder={props.displayName}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  </div>
);
