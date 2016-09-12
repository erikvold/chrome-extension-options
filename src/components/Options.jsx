"use strict";

import React from 'react';
import OptionGroup from './OptionGroup';

export default React.createClass({
	render: function() {

		var optionGroups = this.props.data.options.groups.map( (group, index) => {
			const key = "option-group-" + index;
			return (<OptionGroup key={key} title={group.title} options={group.options} description={group.description} />)
		});

		var title;

		if(this.props.data.title) {
			title = <h1 className="title">{this.props.data.title}</h1>;
		}

		return (
			<div className="options">
				{title}
				{optionGroups}
			</div>
		);
	}
});