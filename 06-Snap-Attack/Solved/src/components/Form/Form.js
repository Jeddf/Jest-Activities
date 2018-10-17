import React, {Component} from "react";

export class Form extends Component {
	render () {
		return (
			<form className="form-horizontal">
				{this.props.children}
			</form>
		);
	}
};
