"use strict";

var chrome = require('./chrome.storage.js');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			value: ""
		}
	},
	handleValueChange: function(e) {
		this.setState({
			value: e.target.value
		});
		var data = {};
		data[this.props.id] = {
			value: this.state.value
		}
		chrome.storage.sync.set(data);
	},
	componentWillMount: function() {
		var key = this.props.id;
		chrome.storage.sync.get(key, (item) => {
			this.setState({ value: item[key].value});
		});
	},
	render: function() {
		return (
			<div className="option">
				<label>{this.props.name}</label> <input onChange={this.handleValueChange} defaultValue={this.state.value} type="text" />
			</div>
		);
	}
});