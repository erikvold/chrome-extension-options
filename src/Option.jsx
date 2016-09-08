"use strict";

import StringOption from './StringOption';
import PasswordOption from './PasswordOption';
import BooleanOption from './BooleanOption';
import chrome from './chrome.storage.js';

export default React.createClass({
	render: function() {
		var option;
		switch(this.props.type) {
			case 'string':
				option = (<StringOption onChange={this.handleValueChange} id={this.props.id} name={this.props.name} value={this.state.value} />);
				break;				
			case 'password':
				option = (<PasswordOption onChange={this.handleValueChange} id={this.props.id} name={this.props.name} value={this.state.value} />);
				break;			
			case 'boolean':
				option = (<BooleanOption onChange={this.handleValueChange} id={this.props.id} name={this.props.name} value={this.state.value} />);
				break;
		}
		return (
			<div className="option-group__option-container">
				{option}
			</div>
		);
	},
	getInitialState: function() {
		return {
			value: undefined
		}
	},
	handleValueChange: function(val) {
		console.log('handleValueChange called', val, typeof val);
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