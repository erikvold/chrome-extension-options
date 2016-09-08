"use strict";

import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.options.map( (option) => {
			return (
				<Option type={option.type} name={option.name} id={option.id} />
			);
		});
		return (
			<div className="option-group">
				{options}
			</div>
		);
	}
});
