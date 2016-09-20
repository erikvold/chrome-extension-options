"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option--password">
				<label>{this.props.name}</label> <input onChange={this.handleChange} value={this.props.value} type="password" />
			</div>
		);
	},
	handleChange: function(e) {
		var val = e.target.value;
		this.props.onChange(val);
	}

});
