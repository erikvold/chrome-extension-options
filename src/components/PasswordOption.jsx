"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option--password">
				<label>{this.props.name}</label> <input id={this.props.id} onChange={this.handleChange} value={this.props.value} type="password" />
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
