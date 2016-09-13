"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.options.map( (option, index) => {
			let key = "option-" + index;
			return (
				<Option key={key} data={option} />
			);
		});

		var description, title;

		if(this.props.title) {
			title = (<legend className="option-group__group-title">{this.props.title}</legend>)
		}

		if(this.props.description) {
			description = (<p className="option-group__description">{this.props.description}</p>)
		}

		return (
			<fieldset className="option-group">
				{title}
				{description}
				{options}
			</fieldset>
		);
	}
});
