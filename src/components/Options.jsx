"use strict";

import React from 'react';
import Option from './Option';

export default React.createClass({
	render: function() {

		let optionComponents;

		const options = this.props.options;

		if(options.length && options.length > 0) {
			optionComponents = options.map( (option, index) => {
				const key = "option-" + index;
				return (<Option key={key} data={option} value={this.state[option.id]} handleChange={this.handleChange} />)
			});
		}

		var title;

		if(this.props.title) {
			title = <h1 className="title">{this.props.title}</h1>;
		}

		return (
			<div className="wrapper">
				{title}
				<div className="options">
				{optionComponents}
				</div>
				<button className="button button--save" onClick={ this.saveChanges }>Save changes</button>
			</div>
		);
	},

	componentDidMount: function() {
		this.getChromeStorageState();
	},

	getInitialState: function() {

		var state = {  };
		this.props.options.forEach( (option) => {
			if(option.defaultValue) {
				state[option.id] = option.defaultValue;
			}
		});

		return state;
	},

	handleChange: function(id, val) {
		let state = {  };
		state[id] = val;
		this.setState(state);
	},

	saveChanges: function() {
		var data = {};
		for(var key in this.state) {
			data[key] = {
				value: this.state[key]
			}
		}
		chrome.storage.sync.set({
			options: data
		});
	},
	getChromeStorageState: function() {
		chrome.storage.sync.get('options', (storage) => {
			if(storage.options) {
				var state = {};
				for(var key in storage.options) {
					if(storage.options[key].value !== null) {
						state[key] = storage.options[key].value;
					}
				}
				this.setState(state);
			}
		});
	}
});
