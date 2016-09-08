"use strict";

import StringOption from './StringOption';

export default React.createClass({
	render: function() {
		var option;
		switch(this.props.type) {
			case 'string':
				option = (<StringOption id={this.props.id} name={this.props.name} />);
				break;
		}
		return (
			<div className="option">
				{option}
			</div>
		);
	}
});