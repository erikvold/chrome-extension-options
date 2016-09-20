"use strict";

import React from 'react';
import StringOption from './StringOption';
import TextareaOption from './TextareaOption';
import PasswordOption from './PasswordOption';
import BooleanOption from './BooleanOption';

export default React.createClass({
	render: function() {

		var optionTypes = {
			string: StringOption,
			password: PasswordOption,
			boolean: BooleanOption,
			textarea: TextareaOption
		}

		var Component = optionTypes[this.props.data.type];

		return (
			<Component onChange={this.props.handleChange} id={this.props.data.id} name={this.props.data.name} value={this.props.value} placeholder={this.props.data.placeholder} />
		);
	}
});
