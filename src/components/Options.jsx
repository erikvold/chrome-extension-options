"use strict";

import React from 'react';
import OptionGroup from './OptionGroup';

export default React.createClass({
	render: function() {

		var optionGroups = this.props.data.options.groups.map( (group, index) => {
			const key = "option-group-" + index;
			return (<OptionGroup key={key} title={group.title} options={group.options} description={group.description} />)
		});
		return (
			<div className="options">
				<h1>{this.props.data.title}</h1>
				{optionGroups}
			</div>
		);
	}
});