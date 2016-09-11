"use strict";

import React from 'react';
import OptionGroup from './OptionGroup';

export default React.createClass({
	render: function() {

		var optionGroups = this.props.options.options.groups.map( (group) => {
			const key = group.title.replace(/\s/g, "-").toLowerCase();
			return (<OptionGroup key={group.title} title={group.title} options={group.options} />)
		});
		return (
			<div className="options">
				{optionGroups}
			</div>
		);
	}
});