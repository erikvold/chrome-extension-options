"use strict";

import React from 'react';
import OptionGroup from './OptionGroup';

export default React.createClass({
	render: function() {

		var optionGroups = this.props.options.options.groups.map( (group, index) => {
			const key = "option-group-" + index;
			return (<OptionGroup key={key} title={group.title} options={group.options} description={group.description} />)
		});
		return (
			<div className="options">
				{optionGroups}
			</div>
		);
	}
});