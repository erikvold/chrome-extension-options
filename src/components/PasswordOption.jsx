"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option option--password" id={"option--" + this.props.id}>
				<label className="option__label" htmlFor={this.props.id}>{this.props.name}</label> <input className="option__input" id={this.props.id} onChange={this.handleChange} value={this.props.value} type="password" />
			</div>
		);
	},
	getDefaultProps: function() {
		return { value: "" }
	},
	handleChange: function(e) {
		var val = e.target.value;
		this.props.onChange(this.props.id, val);
	}

});
