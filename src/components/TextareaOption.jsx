"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option--textarea">
				<label>{this.props.name}</label> <textarea id={this.props.id} onChange={this.handleChange} value={this.props.value} type="text" />
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
