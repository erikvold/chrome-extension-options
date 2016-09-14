"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.data.options.map( (option, index) => {
			let key = "option-" + index;
			return (
				<Option key={key} data={option} />
			);
		});

		var description, title;

		if(this.props.data.title) {
			title = (<legend className="option-group__group-title">{this.props.data.title}</legend>)
		}

		if(this.props.data.description) {
			description = (<p className="option-group__description">{this.props.data.description}</p>)
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
