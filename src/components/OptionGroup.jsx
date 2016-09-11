"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.options.map( (option) => {
			return (
				<Option key={option.id} type={option.type} name={option.name} id={option.id} initialValue={option.value} />
			);
		});
		return (
			<fieldset className="option-group">
				<legend>{this.props.title}</legend>
				{options}
			</fieldset>
		);
	}
});
