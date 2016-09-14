"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {

		let optionComponents;

		const options = this.props.data.options;

		if(options.length && options.length > 0) {
			optionComponents = options.map( (option, index) => {
				const key = "option-" + index;
				return (<Option key={key} data={option} />)
			});
		}

		var title;

		if(this.props.data.title) {
			title = <h1 className="title">{this.props.data.title}</h1>;
		}

		return (
			<div className="options">
				{title}
				{optionComponents}
			</div>
		);
	}
});
