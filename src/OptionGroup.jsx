"use strict";

import Option from './Option';

export default React.createClass({
	render: function() {
		var options = this.props.options.map( (option) => {
			return (
				<Option key={option.id} type={option.type} name={option.name} id={option.id} value={option.value} />
			);
		});
		return (
			<fieldset className="option-group">
				{options}
			</fieldset>
		);
	}
});
