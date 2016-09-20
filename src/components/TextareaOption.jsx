"use strict";

import React from 'react';
export default React.createClass({
	render: function() {
		return (
			<div className="option--textarea">
				<label>{this.props.name}</label> <textarea onChange={this.handleChange} value={this.props.value} type="text" />
			</div>
		);
	},
	handleChange: function(e) {
		var val = e.target.value;
		this.props.onChange(val);
	}

});
