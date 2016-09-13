"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.options.map( (option) => {
			return (
				<Option key={option.id} type={option.type} name={option.name} id={option.id} initialValue={option.value} placeholder={option.placeholder} />
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
