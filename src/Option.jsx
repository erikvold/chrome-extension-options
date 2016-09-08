"use strict";

import StringOption from './StringOption';
import chrome from './chrome.storage.js';

export default React.createClass({
	render: function() {
		var option;
		switch(this.props.type) {
			case 'string':
				option = (<StringOption onChange={this.handleValueChange} id={this.props.id} name={this.props.name} value={this.state.value} />);
				break;
		}
		return (
			<div className="option">
				{option}
			</div>
		);
	},
	getInitialState: function() {
		return {
			value: ""
		}
	},
	handleValueChange: function(e) {
		console.log('handleValueChange called', e);
		this.setState({
			value: e.target.value
		});
		var data = {};
		data[this.props.id] = {
			value: e.target.value
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