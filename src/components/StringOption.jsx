"use strict";

export default React.createClass({
	render: function() {
		return (
			<div className="option--string">
				<label>{this.props.name}</label> <input onChange={this.handleChange} defaultValue={this.props.value} type="text" />
			</div>
		);
	},
	handleChange: function(e) {
		var val = e.target.value;
		this.props.onChange(val);
	}
	
});