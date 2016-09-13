"use strict";

import React from 'react';
import StringOption from './StringOption';
import TextareaOption from './TextareaOption';
import PasswordOption from './PasswordOption';
import BooleanOption from './BooleanOption';
import chrome from '../chrome.storage.js';

export default React.createClass({
	render: function() {
		
		var optionTypes = {
			string: StringOption,
			password: PasswordOption,
			boolean: BooleanOption,
			textarea: TextareaOption
		}
		
		var Component = optionTypes[this.props.type];
		
		return (
			<Component onChange={this.handleValueChange} id={this.props.id} name={this.props.name} value={this.state.value} placeholder={this.props.placeholder} />
		);
	},
	getInitialState: function() {
		return {
			value: this.props.initialValue
		}
	},
	handleValueChange: function(val) {
		
		this.setState({
			value: val
		});
		var data = {};
		data[this.props.id] = {
			value: val
		}
		chrome.storage.sync.set(data);
	},
	componentWillMount: function() {
		var key = this.props.id;
		chrome.storage.sync.get(key, (item) => {
			if(item !== undefined) {
				this.setState({ value: item[key].value});
			}
		});
	}
});