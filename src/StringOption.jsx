"use strict";

import chrome from './chrome.storage.js';

export default React.createClass({
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
	},
	render: function() {
		return (
			<div className="option--string">
				<label>{this.props.name}</label> <input onChange={this.handleValueChange} defaultValue={this.state.value} type="text" />
			</div>
		);
	}
});
