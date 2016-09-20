"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option--boolean">
				<label>{this.props.name}</label> <input id={this.props.id} onChange={this.handleChange} checked={this.props.value} type="checkbox" />
			</div>
		);
	},
	getDefaultProps: function() {
		return { value: true }
	},
	handleChange: function(e) {
		var val = e.target.checked;
		this.props.onChange(this.props.id, val);
	}

});
